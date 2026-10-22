import { useEffect } from "react";

// Production address used for canonical and social-sharing URLs, so preview and www addresses all point to one canonical site.
export const SITE_URL = "https://rogadchambers.com";
export const DEFAULT_TITLE = "Rogad Chambers | Strategic Legal Solutions";

// During pre-rendering (scripts/prerender.js) effects don't run, so the hooks also record each page's head
// tags here while rendering; the build script writes them into that page's static HTML.
const isServer = typeof window === "undefined";
export const ssrHead = {};
export function resetSsrHead(pathname) {
  for (const k of Object.keys(ssrHead)) delete ssrHead[k];
  ssrHead.pathname = pathname;
}

export function usePageTitle(title) {
  const full = title ? `${title} | Rogad Chambers` : DEFAULT_TITLE;
  if (isServer) ssrHead.title = full;
  useEffect(() => {
    document.title = full;
  }, [full]);
}

// Sets the page's meta description, restoring the site default from index.html when the page unmounts.
export function usePageDescription(description) {
  if (isServer && description) ssrHead.description = description;
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (!meta || !description) return;
    const previous = meta.getAttribute("content");
    meta.setAttribute("content", description);
    return () => meta.setAttribute("content", previous);
  }, [description]);
}

// Canonical link and Open Graph tags for a page, as [tag, attributes] pairs.
// `fullTitle` replaces the "<title> | Rogad Chambers" pattern (used by the homepage).
export function metaTags({ title, fullTitle, description, image, type = "website" }, pathname) {
  const url = SITE_URL + pathname;
  return [
    ["link", { rel: "canonical", href: url }],
    ["meta", { property: "og:type", content: type }],
    ["meta", { property: "og:title", content: fullTitle ?? `${title} | Rogad Chambers` }],
    ["meta", { property: "og:url", content: url }],
    description && ["meta", { property: "og:description", content: description }],
    image && ["meta", { property: "og:image", content: new URL(image, SITE_URL).href }]
  ].filter(Boolean);
}

// Sets the canonical link and Open Graph tags for the current page, undoing the change on unmount.
export function usePageMeta(options = {}) {
  const { title, fullTitle, description, image, type } = options;
  const active = Boolean(title || fullTitle);
  if (isServer && active) ssrHead.meta = metaTags(options, ssrHead.pathname);
  useEffect(() => {
    if (!active) return;
    const tags = metaTags({ title, fullTitle, description, image, type }, window.location.pathname).map(([tag, attrs]) => {
      // Reuse a matching tag already in the page (site defaults or pre-rendered tags) and restore it afterwards; otherwise add one
      const [key, value] = attrs.rel ? ["rel", attrs.rel] : ["property", attrs.property];
      const existing = document.head.querySelector(`${tag}[${key}="${value}"]`);
      const field = tag === "link" ? "href" : "content";
      if (existing) {
        const previous = existing.getAttribute(field);
        existing.setAttribute(field, attrs[field]);
        return () => existing.setAttribute(field, previous);
      }
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
      return () => el.remove();
    });
    return () => tags.forEach((undo) => undo());
  }, [active, title, fullTitle, description, image, type]);
}

// Asks search engines not to index the current page (used for not-found pages).
export function useNoIndex(active = true) {
  if (isServer && active) ssrHead.noindex = true;
  useEffect(() => {
    if (!active) return;
    const el = document.createElement("meta");
    el.setAttribute("name", "robots");
    el.setAttribute("content", "noindex");
    document.head.appendChild(el);
    return () => el.remove();
  }, [active]);
}
