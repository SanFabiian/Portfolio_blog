"use client";

import { useEffect } from "react";

export function ScrollRestorer() {
  useEffect(() => {
    const y = sessionStorage.getItem("scroll-restore");
    if (!y) return;
    sessionStorage.removeItem("scroll-restore");
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number(y), behavior: "instant" });
    });
  }, []);

  return null;
}
