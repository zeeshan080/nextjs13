"use client";
import { useEffect } from "react";
import { useThemeStore } from "./store";

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const themeStore = useThemeStore();
  let newTheme = themeStore.theme;
  useEffect(() => {
    if (newTheme === "") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const newTheme = systemPrefersDark ? "dark" : "light";
      themeStore.setTheme(newTheme);
    }
  }, []);
  return <div className={`${themeStore.theme} w-full h-full`}>{children}</div>;
}


