import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import './ThemeDemo.scss';

export const ThemeDemo: React.FC = () => {
  return (
    <div className="theme-demo">
      <div className="container">
        <div className="demo-header">
          <h2>Theme System Demo</h2>
          <p>Try switching between different themes to see the changes in real-time!</p>
        </div>
        
        <div className="theme-controls">
          <ThemeSwitcher variant="buttons" />
        </div>
        
        <div className="demo-components">
          <div className="demo-card">
            <h3>Sample Card</h3>
            <p>This card demonstrates how components adapt to different themes using our global styles system.</p>
            <div className="demo-buttons">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
            </div>
          </div>
          
          <div className="demo-card">
            <h3>Color Palette</h3>
            <div className="color-swatches">
              <div className="swatch primary">Primary</div>
              <div className="swatch secondary">Secondary</div>
              <div className="swatch success">Success</div>
              <div className="swatch warning">Warning</div>
              <div className="swatch error">Error</div>
            </div>
          </div>
          
          <div className="demo-card">
            <h3>Typography</h3>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>
            <p className="text-secondary">Secondary text color</p>
            <p className="text-tertiary">Tertiary text color</p>
          </div>
        </div>
      </div>
    </div>
  );
};
