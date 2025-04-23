// src/components/LoadingFallback.jsx

import { Box, CircularProgress, Typography } from '@mui/material';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const LoadingFallback = () => {
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: 2,
        color: 'var(--color-text)',
      }}
    >
      <HourglassTopIcon sx={{ fontSize: 48, color: 'var(--color-accent)' }} />
      <Typography variant="h6" fontWeight={600}>
        Cargando contenido...
      </Typography>
      <CircularProgress sx={{ color: 'var(--color-accent)' }} />
    </Box>
  );
};

export default LoadingFallback;
