import React from 'react';
import { useTheme } from '../hooks/useTheme';
import type { Theme } from '../hooks/useTheme';
import './ThemeSwitcher.scss';

interface ThemeSwitcherProps {
  showLabel?: boolean;
  variant?: 'dropdown' | 'buttons' | 'toggle';
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  showLabel = true, 
  variant = 'dropdown' 
}) => {
  const { theme, switchTheme, toggleDarkMode, isDarkMode, availableThemes, themeLabels } = useTheme();

  if (variant === 'toggle') {
    return (
      <button 
        className="theme-toggle"
        onClick={toggleDarkMode}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      >
        {isDarkMode ? '☀️' : '🌙'}
        {showLabel && <span className="theme-toggle-label">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </span>}
      </button>
    );
  }

  if (variant === 'buttons') {
    return (
      <div className="theme-buttons">
        {showLabel && <span className="theme-label">Theme:</span>}
        <div className="theme-button-group">
          {Object.entries(availableThemes).map(([key, themeValue]) => (
            <button
              key={key}
              className={`theme-button ${theme === themeValue ? 'active' : ''}`}
              onClick={() => switchTheme(themeValue)}
            >
              {themeLabels[themeValue]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Default dropdown variant
  return (
    <div className="theme-switcher">
      {showLabel && <label htmlFor="theme-select" className="theme-label">Theme:</label>}
      <select
        id="theme-select"
        className="theme-select"
        value={theme}
        onChange={(e) => switchTheme(e.target.value as Theme)}
      >
        {Object.entries(availableThemes).map(([key, themeValue]) => (
          <option key={key} value={themeValue}>
            {themeLabels[themeValue]}
          </option>
        ))}
      </select>
    </div>
  );
};
