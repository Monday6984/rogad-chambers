import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/index.css";

// Pre-rendered pages already contain the page's HTML, so React attaches to it; the plain shell (spa.html,
// used for any URL that wasn't pre-rendered) starts empty and renders from scratch.
const root = document.getElementById("root");
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, <App />);
else ReactDOM.createRoot(root).render(<App />);
