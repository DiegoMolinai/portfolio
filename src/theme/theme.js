// src/theme/theme.js

import { createTheme } from '@mui/material/styles';

// ✅ Definimos los colores aquí con sus valores HEX
const COLORS = {
  bg: '#0f0f0f',
  text: '#ffffff',
  accent: '#80dc7d',
  secondary: '#404145',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLORS.bg,
      paper: '#1e1e1e',
    },
    text: {
      primary: COLORS.text,
      secondary: '#aaaaaa',
    },
    primary: {
      main: COLORS.accent,
    },
    success: {
      main: COLORS.accent,
    },
  },
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
