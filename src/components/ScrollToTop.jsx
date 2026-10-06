import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const getHashId = (hash) => {
  const rawId = hash.slice(1);
  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
};

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    // The first load is a "POP" too; still honour its hash (pasted link or refresh on /contact#…),
    // because the browser tried to jump there before React had rendered the section.
    const firstLoad = isFirstLoad.current;
    isFirstLoad.current = false;
    if (navigationType === "POP" && !(firstLoad && hash)) return;

    if (hash) {
      const id = getHashId(hash);
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}
