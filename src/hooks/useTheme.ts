import { useState, useEffect } from 'react';

// Available themes
export const THEMES = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark',
  PROFESSIONAL: 'theme-professional',
  CREATIVE: 'theme-creative',
  MINIMAL: 'theme-minimal',
  AUTUMN: 'theme-autumn',
  WINTER: 'theme-winter'
} as const;

export type Theme = typeof THEMES[keyof typeof THEMES];

// Theme labels for UI
export const THEME_LABELS: Record<Theme, string> = {
  [THEMES.LIGHT]: 'Light',
  [THEMES.DARK]: 'Dark',
  [THEMES.PROFESSIONAL]: 'Professional',
  [THEMES.CREATIVE]: 'Creative',
  [THEMES.MINIMAL]: 'Minimal',
  [THEMES.AUTUMN]: 'Autumn',
  [THEMES.WINTER]: 'Winter'
};

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get theme from localStorage or default to light
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    return savedTheme && Object.values(THEMES).includes(savedTheme) 
      ? savedTheme 
      : THEMES.LIGHT;
  });

  useEffect(() => {
    // Apply theme to document body
    document.body.className = theme;
    
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const switchTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const toggleDarkMode = () => {
    setTheme(currentTheme => 
      currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  const isDarkMode = theme === THEMES.DARK;

  return {
    theme,
    switchTheme,
    toggleDarkMode,
    isDarkMode,
    availableThemes: THEMES,
    themeLabels: THEME_LABELS
  };
};
