import { create } from "zustand";


type Theme = 'light' | 'dark' | '';

interface ThemeStore  {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: '',
  setTheme: (newTheme) => set({ theme:newTheme }),
}));

  