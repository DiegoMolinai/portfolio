// src/components/ScrollToTopButton.jsx
import { useEffect, useState } from 'react';
import { Fab, Zoom, Tooltip } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        setVisible(scrollTop > 300);
        // console.log('ScrollY:', scrollTop); // Descomenta para debug
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Tooltip title="Volver arriba" arrow>
        <Fab
          color="success"
          size="medium"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1400,
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
            animation: 'pulse 1.6s infinite',
          }}
          aria-label="Volver arriba"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default ScrollToTopButton;
