import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/portfolio">
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
