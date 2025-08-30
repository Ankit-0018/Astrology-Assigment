"use client";
import { useEffect } from "react";

export default function ThemeHandler() {
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

  }, []);

  return null;
}
