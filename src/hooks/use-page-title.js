import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Rogad Chambers` : "Rogad Chambers | Strategic Legal Solutions";
  }, [title]);
}

// Sets the page's meta description, restoring the site default from index.html when the page unmounts.
export function usePageDescription(description) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    if (!meta || !description) return;
    const previous = meta.getAttribute("content");
    meta.setAttribute("content", description);
    return () => meta.setAttribute("content", previous);
  }, [description]);
}

// Adds a canonical link and Open Graph tags for the current page, removing them again on unmount.
// Social crawlers that don't run JavaScript only see index.html, so this mainly helps search engines that render pages.
export function usePageMeta({ title, description, image, type = "website" } = {}) {
  useEffect(() => {
    if (!title) return;
    const { origin, pathname } = window.location;
    const tags = [
      ["link", { rel: "canonical", href: origin + pathname }],
      ["meta", { property: "og:type", content: type }],
      ["meta", { property: "og:title", content: `${title} | Rogad Chambers` }],
      ["meta", { property: "og:url", content: origin + pathname }],
      description && ["meta", { property: "og:description", content: description }],
      image && ["meta", { property: "og:image", content: new URL(image, origin).href }]
    ].filter(Boolean).map(([tag, attrs]) => {
      const el = document.createElement(tag);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return document.head.appendChild(el);
    });
    return () => tags.forEach((el) => el.remove());
  }, [title, description, image, type]);
}
