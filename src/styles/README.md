# Global Styles System

This portfolio project uses a comprehensive SCSS-based global styles system that makes it easy to maintain consistent theming and quickly change themes across the entire application.

## 📁 File Structure

```
src/styles/
├── _variables.scss    # All SCSS variables (colors, fonts, spacing, etc.)
├── _mixins.scss      # Reusable SCSS mixins and utility functions
├── _globals.scss     # Global styles, resets, and utility classes
├── _themes.scss      # Theme variations and examples
└── styles.scss       # Main entry point that imports everything
```

## 🎨 Quick Theme Changes

### Method 1: Using SCSS Variables
Edit `src/styles/_variables.scss` to change the primary colors:

```scss
// Change these variables to instantly update your theme
$primary-color: #2563eb;      // Blue
$primary-color: #7c3aed;      // Purple  
$primary-color: #dc2626;      // Red
```

### Method 2: Using the Theme System
Apply pre-built themes by adding a class to the body element:

```tsx
// In your React component
<body className="theme-dark">        // Dark theme
<body className="theme-professional">// Professional blue
<body className="theme-creative">    // Creative purple
<body className="theme-minimal">     // Minimal grayscale
```

### Method 3: Using the Theme Hook
Use the provided React hook for dynamic theme switching:

```tsx
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, switchTheme, toggleDarkMode } = useTheme();
  
  return (
    <div>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <button onClick={() => switchTheme('theme-creative')}>
        Switch to Creative Theme
      </button>
    </div>
  );
}
```

## 🛠️ Using the System in Components

### 1. Import Variables and Mixins
```scss
// At the top of your component's SCSS file
@import '../styles/variables';
@import '../styles/mixins';
```

### 2. Use Variables
```scss
.my-component {
  background-color: $background-primary;
  color: $text-primary;
  padding: $spacing-4;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
}
```

### 3. Use Mixins
```scss
.my-button {
  @include button-primary;
}

.my-card {
  @include card-interactive;
}

.responsive-grid {
  @include grid-auto-fit(300px, $spacing-6);
}
```

### 4. Use Utility Classes
```tsx
<div className="container section-padding">
  <h1 className="text-center mb-6">My Title</h1>
  <div className="flex-between">
    <p className="text-secondary">Left content</p>
    <button className="rounded-lg shadow-md">Right button</button>
  </div>
</div>
```

## 🎯 Available Variables

### Colors
- **Primary**: `$primary-color`, `$primary-light`, `$primary-dark`, `$primary-hover`
- **Secondary**: `$secondary-color`, `$secondary-light`, `$secondary-dark`
- **Neutrals**: `$white`, `$black`, `$gray-50` to `$gray-900`
- **Semantic**: `$success`, `$warning`, `$error`, `$info`
- **Theme**: `$background-primary`, `$text-primary`, `$border-primary`, etc.

### Typography
- **Fonts**: `$font-primary`, `$font-secondary`, `$font-mono`
- **Sizes**: `$font-xs` to `$font-6xl`
- **Weights**: `$font-light` to `$font-extrabold`
- **Line Heights**: `$leading-tight` to `$leading-loose`

### Spacing
- **Scale**: `$spacing-0` to `$spacing-32` (0px to 128px)
- **Container**: `$container-max-width`, `$container-padding`

### Breakpoints
- **Mobile**: `$breakpoint-xs` (475px)
- **Tablet**: `$breakpoint-sm` (640px), `$breakpoint-md` (768px)
- **Desktop**: `$breakpoint-lg` (1024px), `$breakpoint-xl` (1280px)

## 🔧 Useful Mixins

### Layout
- `@include flex-center` - Center content with flexbox
- `@include flex-between` - Space between with flexbox
- `@include grid-columns(3)` - Create a 3-column grid
- `@include container` - Apply container max-width and padding

### Responsive
- `@include mobile-only { ... }` - Styles for mobile only
- `@include tablet-up { ... }` - Styles for tablet and up
- `@include desktop-up { ... }` - Styles for desktop and up

### Components
- `@include button-primary` - Primary button styles
- `@include button-secondary` - Secondary button styles
- `@include card-interactive` - Interactive card with hover effects
- `@include input-base` - Base input field styles

### Typography
- `@include heading-1` - Large responsive heading
- `@include body-base` - Standard body text
- `@include truncate-text` - Truncate text with ellipsis

## 🎨 Creating Custom Themes

### 1. Create a New Theme Class
```scss
// In _themes.scss
.theme-sunset {
  --primary-color: #f97316;      // Orange
  --secondary-color: #dc2626;    // Red
  --background-primary: #fef7ed; // Light orange
}
```

### 2. Add to Theme Hook
```ts
// In useTheme.ts
export const THEMES = {
  // ... existing themes
  SUNSET: 'theme-sunset'
} as const;

export const THEME_LABELS = {
  // ... existing labels
  [THEMES.SUNSET]: 'Sunset'
};
```

### 3. Use the Theme
```tsx
<body className="theme-sunset">
  <!-- Your themed content -->
</body>
```

## 🚀 Theme Switcher Component

Use the pre-built ThemeSwitcher component:

```tsx
import { ThemeSwitcher } from './components/ThemeSwitcher';

// Dropdown variant (default)
<ThemeSwitcher />

// Toggle variant (dark/light only)
<ThemeSwitcher variant="toggle" />

// Buttons variant (all themes as buttons)
<ThemeSwitcher variant="buttons" showLabel={false} />
```

## 📱 Responsive Design

The system includes responsive utilities and mixins:

```scss
.my-component {
  padding: $spacing-4;
  
  @include mobile-only {
    padding: $spacing-2;
  }
  
  @include desktop-up {
    padding: $spacing-8;
  }
}
```

## 🌙 Dark Mode Support

Dark mode is built-in and can be toggled:

```tsx
const { toggleDarkMode, isDarkMode } = useTheme();

<button onClick={toggleDarkMode}>
  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
</button>
```

## 🎯 Best Practices

1. **Always import variables first**: `@import '../styles/variables';`
2. **Use semantic color names**: `$text-primary` instead of `$gray-900`
3. **Leverage mixins**: Don't repeat common patterns
4. **Use utility classes**: For simple styling like margins and text alignment
5. **Keep components clean**: Use the global system instead of hardcoded values
6. **Test themes**: Make sure your components work with all themes

## 🔄 Updating Themes

To update the entire site's theme:

1. **Quick color change**: Update variables in `_variables.scss`
2. **New theme**: Create a new theme class in `_themes.scss`
3. **Typography change**: Update font variables and import new fonts
4. **Spacing adjustments**: Modify the spacing scale in `_variables.scss`

The changes will automatically apply to all components using the system!
