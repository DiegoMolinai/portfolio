// src/components/ThemeToggleButton.jsx
import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggleButton = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={mode === "dark" ? "Modo claro": "Modo oscuro"} arrow>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggleButton;
