// Build-time renderer used by scripts/prerender.js: turns each public route into static HTML plus its head tags.
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "@/App";
import { ssrHead, resetSsrHead } from "@/hooks/use-page-title";
import { practices, practicePath } from "@/data/practices";
import { lawyers, lawyerPath } from "@/data/lawyers";
import { allInsights, insightPath } from "@/data/insights";

// Every public page, from the same data the site renders (hidden placeholder lawyers are already excluded).
export const routes = [
  "/", "/about", "/practice-areas", "/people", "/insights", "/contact", "/privacy",
  ...practices.map(practicePath),
  ...lawyers.map(lawyerPath),
  ...allInsights.map(insightPath)
];

export function render(url) {
  resetSsrHead(url);
  const html = renderToString(<StaticRouter location={url}><AppRoutes /></StaticRouter>);
  return { html, head: { ...ssrHead } };
}
