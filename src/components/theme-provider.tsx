"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from "react"

type Theme = "dark" | "light"

interface ThemeProviderProps {
  children: React.ReactNode;
  storageKey?: string;
  defaultTheme?: Theme;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ 
  children, 
  storageKey = 'aquafolio-theme',
  defaultTheme = 'dark'
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = storedTheme || defaultTheme;
    setTheme(initialTheme);
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(initialTheme);
  }, [storageKey, defaultTheme]);
  
  const handleSetTheme = useCallback((newTheme: Theme) => {
    try {
      localStorage.setItem(storageKey, newTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      setTheme(newTheme);
    } catch (e) {
      console.error("Could not access localStorage: ", e);
    }
  }, [storageKey]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
