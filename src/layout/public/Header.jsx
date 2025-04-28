import { useState } from "react";
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
  useTheme,
  Container,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import MailIcon from "@mui/icons-material/Mail";
import config from "../../config";

const iconMap = {
  inicio: <HomeIcon />,
  "sobre mí": <PersonIcon />,
  proyectos: <WorkIcon />,
  contacto: <MailIcon />,
};

const Header = () => {
  const sections = config.sections;
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const scrollToSection = (id) => {
    const sectionId = id.toLowerCase().replace(/\s/g, "");
    const element = document.getElementById(sectionId);
    setOpen(false);
    setTimeout(() => {
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <>
      {/* 🌐 APP BAR */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(11, 15, 15, 0.85)",
          backdropFilter: "blur(8px)",
          borderBottom: "2px solid var(--color-accent)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          zIndex: 1100,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: "64px",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* 🔹 Logo / Nombre */}
          <Typography
            variant="h6"
            fontWeight={700}
            noWrap
            sx={{
              color: "var(--color-accent)",
              letterSpacing: "0.8px",
              fontSize: "1.3rem",
            }}
          >
            {config.name}
          </Typography>

          {/* 🔹 Web Nav */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: "var(--color-text)",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "1rem",
                  position: "relative",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "var(--color-accent)",
                    transition: "width 0.3s",
                  },
                  "&:hover::before": {
                    width: "100%",
                  },
                  "&:hover": {
                    color: "var(--color-accent)",
                    backgroundColor: "rgba(255,255,255,0.04)",
                  },
                }}
              >
                {section}
              </Button>
            ))}
          </Box>

          {/* 🔹 Mobile menu */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", md: "none" } }}
            aria-label="Abrir menú"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 📱 DRAWER MOBILE */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "var(--color-bg)",
            borderLeft: "2px solid var(--color-accent)",
            width: 260,
            color: "var(--color-text)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            pt: 2,
          },
        }}
      >
        <Box role="presentation" sx={{ px: 2 }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ textAlign: "center", mb: 2, color: "var(--color-accent)" }}
          >
            Navegación
          </Typography>
          <Divider sx={{ mb: 2, backgroundColor: "var(--color-accent)" }} />
          <List>
            {sections.map((section) => {
              const key = section.toLowerCase();
              return (
                <ListItem key={section} disablePadding>
                  <ListItemButton
                    onClick={() => scrollToSection(section)}
                    sx={{
                      borderRadius: 2,
                      px: 2,
                      py: 1.5,
                      transition: "all 0.2s ease",
                      "&:hover": {
                        backgroundColor: "var(--color-secondary)",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "var(--color-accent)" }}>
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
