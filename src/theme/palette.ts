import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#377dff',
    light: '#467de3',
    dark: '#2f6ad9',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ffb74d',
    main: '#f9b934',
    dark: '#FF9800',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#f7faff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#C7FA51',
    light: '#2196f3',
    dark: '#acd05a',
    contrastText: '#1B1F3B',
  },
  secondary: {
    light: '#C7FA51',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#F5F5F5',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#1B1F3B',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
