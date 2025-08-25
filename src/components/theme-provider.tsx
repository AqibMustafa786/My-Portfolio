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

// The new design is dark-only, so this provider is simplified.
// It still respects the theme switching logic in case you want to re-enable it.
export function ThemeProvider({ 
  children, 
  storageKey = 'aquafolio-theme',
  defaultTheme = 'dark' // Forcing dark theme for the new design
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // We always want the dark theme for this new design.
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add('dark');
  }, []);
  
  const handleSetTheme = useCallback((newTheme: Theme) => {
    // The functionality is kept, but the UI toggle is removed.
    // For now, it will always be dark.
    const newForcedTheme = 'dark';
    try {
      localStorage.setItem(storageKey, newForcedTheme);
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newForcedTheme);
      setTheme(newForcedTheme);
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
