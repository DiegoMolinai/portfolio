import { Box, Container, Typography, Link, Stack, Divider } from '@mui/material';
import config from '../../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        pt: 4,
        pb: 3,
        borderTop: '1px solid var(--color-secondary)',
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      <Container maxWidth="lg">
        {/* Nombre y año */}
        <Typography
          variant="body2"
          align="center"
          sx={{ fontWeight: 500, mb: 1, color: 'text.secondary' }}
        >
          © {currentYear} {config.name}. Todos los derechos reservados.
        </Typography>

        {/* Divider decorativo */}
        <Divider
          sx={{
            width: 80,
            height: '3px',
            mx: 'auto',
            my: 2,
            borderRadius: 2,
            backgroundColor: 'var(--color-accent)',
          }}
        />

        {/* Enlaces a redes sociales */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          sx={{ mt: 1 }}
        >
          {Object.entries(config.socialLinks).map(([key, url]) => (
            <Link
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: 'var(--color-text)',
                fontWeight: 500,
                transition: 'color 0.3s',
                '&:hover': {
                  color: 'var(--color-accent-hover)',
                },
              }}
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
