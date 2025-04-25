import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import config from "../../config";

// Iconos sociales (ajusta según tus redes disponibles)
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const iconMap = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  twitter: <TwitterIcon />,
  email: <EmailIcon />,
  portfolio: <AccountCircleIcon />,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 10,
        pt: 6,
        pb: 4,
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
        borderTop: "2px solid var(--color-accent)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Nombre + mensaje final */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            textAlign={{ xs: "center", md: "left" }}
          >
            <Typography variant="subtitle1" fontWeight={600}>
              {config.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Todos los derechos reservados.
            </Typography>
          </Grid>

          {/* Íconos de redes sociales */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            md="auto"
            textAlign={{ xs: "center", md: "right" }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={600}
              textAlign={{ xs: "center", md: "center" }}
            >
              Redes
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              {Object.entries(config.socialLinks).map(([key, url]) => (
                <IconButton
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "var(--color-text)",
                    transition: "color 0.3s",
                    "&:hover": {
                      color: "var(--color-accent-hover)",
                    },
                  }}
                >
                  {iconMap[key.toLowerCase()] || <Link>{key}</Link>}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Línea decorativa */}
        <Divider
          sx={{
            width: "60px",
            height: "3px",
            mx: "auto",
            mt: 4,
            borderRadius: 2,
            backgroundColor: "var(--color-accent)",
          }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
