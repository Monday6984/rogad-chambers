// Runs after `vite build`: renders every public route to static HTML so search engines and link previews
// (WhatsApp, LinkedIn, X) see each page's real content, title and description without running JavaScript.
// Output: dist/<route>/index.html for each route, plus dist/spa.html, the empty shell vercel.json serves for any other URL.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");
const { render, routes } = await import(pathToFileURL(join(ssrDir, "entry-server.js")).href);

const template = readFileSync(join(dist, "index.html"), "utf8");
writeFileSync(join(dist, "spa.html"), template);

const escape = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const setContent = (html, selector, value) => html.replace(new RegExp(`(<meta ${selector} content=")[^"]*(")`), `$1${escape(value)}$2`);

let count = 0;
for (const url of routes) {
  const { html, head } = render(url);
  let page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (head.title) page = page.replace(/<title>[^<]*<\/title>/, `<title>${escape(head.title)}</title>`);
  if (head.description) page = setContent(page, 'name="description"', head.description);
  const extra = [];
  for (const [tag, attrs] of head.meta ?? []) {
    if (tag === "link") { extra.push(`<link rel="canonical" href="${escape(attrs.href)}" />`); continue; }
    // Replace the site-wide default when index.html already has this tag; otherwise add it
    const sel = `property="${attrs.property}"`;
    if (page.includes(`<meta ${sel}`)) page = setContent(page, sel, attrs.content);
    else extra.push(`<meta ${sel} content="${escape(attrs.content)}" />`);
  }
  if (head.noindex) extra.push('<meta name="robots" content="noindex" />');
  if (extra.length) page = page.replace("</head>", `    ${extra.join("\n    ")}\n  </head>`);

  const file = url === "/" ? join(dist, "index.html") : join(dist, url, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page);
  count++;
}

rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${count} pages.`);
