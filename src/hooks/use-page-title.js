import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Rogad Chambers` : "Rogad Chambers | Strategic Legal Solutions";
  }, [title]);
}
