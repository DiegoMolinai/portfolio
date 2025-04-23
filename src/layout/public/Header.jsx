import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Container,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';

import config from '../../config';

const iconMap = {
  inicio: <HomeIcon />,
  'sobre mí': <PersonIcon />,
  proyectos: <WorkIcon />,
  contacto: <MailIcon />,
};

const Header = () => {
  const sections = config.sections;
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const scrollToSection = (id) => {
    const sectionId = id.toLowerCase().replace(/\s/g, '');
    const element = document.getElementById(sectionId);

    setOpen(false);
    setTimeout(() => {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          width: '100%',
          backgroundColor: 'rgba(11, 15, 15, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '2px solid var(--color-accent)',
          boxShadow: '0px 2px 10px rgba(0,0,0,0.3)',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
            <Typography
              variant="h6"
              fontWeight={700}
              noWrap
              sx={{
                color: 'var(--color-accent)',
                letterSpacing: '0.5px',
                fontSize: '1.2rem',
              }}
            >
              {config.name}
            </Typography>

            {/* Desktop buttons */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  sx={{
                    color: 'var(--color-text)',
                    textTransform: 'none',
                    fontWeight: 500,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: 'var(--color-accent)',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                    '&:hover': {
                      color: 'var(--color-accent)',
                    },
                  }}
                >
                  {section}
                </Button>
              ))}
            </Box>

            {/* Mobile hamburger */}
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' } }}
              aria-label="Abrir menú"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'var(--color-bg)',
            borderLeft: '2px solid var(--color-accent)',
            width: 240,
            color: 'var(--color-text)',
            pt: 4,
          },
        }}
      >
        <Box role="presentation" sx={{ mt: 8 }}>
          <List>
            {sections.map((section) => {
              const key = section.toLowerCase();
              return (
                <ListItem key={section} disablePadding>
                  <ListItemButton
                    onClick={() => scrollToSection(section)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'var(--color-secondary)',
                      },
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    <ListItemIcon sx={{ color: 'var(--color-accent)', minWidth: 36 }}>
                      {iconMap[key] || <MenuIcon />}
                    </ListItemIcon>
                    <ListItemText primary={section} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
