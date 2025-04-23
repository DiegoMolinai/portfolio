import { Box, Container, Typography, Button, Grid } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import config from "../config";
import FadeInSection from "../components/FadeInSection";

const HeroSection = () => {
  const imageSrc = "./assets/profile_1.png";
  const hasImage = imageSrc !== "" && imageSrc !== null;

  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-bg)",
        padding: { xs: "4rem 1rem", md: "6rem 2rem" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <FadeInSection type="slideRight">
              <Typography
                variant="h3"
                fontWeight={700}
                gutterBottom
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  lineHeight: 1.2,
                  color: "var(--color-text)",
                }}
              >
                Hola, soy{" "}
                <span style={{ color: "#80dc7d" }}>{config.name}</span>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 3, fontSize: { xs: "1.1rem", md: "1.5rem" } }}
              >
                {config.role}
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                Construyo interfaces modernas, limpias y accesibles. Bienvenido
                a mi portfolio.
              </Typography>
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{ width: { xs: "100%", sm: "auto" } }}
                onClick={() => {
                  const section = document.getElementById("contacto");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ¡Contáctame!
              </Button>
            </FadeInSection>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            order={{ xs: 1, md: 2 }}
            sx={{ textAlign: "center" }}
          >
            <FadeInSection type="fadeScale" delay={0.2}>
              {hasImage ? (
                <Box
                  component="img"
                  src={imageSrc}
                  alt="Ilustración de presentación"
                  sx={{
                    width: "100%",
                    maxWidth: 500,
                    mx: "auto",
                    borderRadius: 3,
                    border: "4px solid var(--color-accent)",
                  }}
                />
              ) : (
                <InsertEmoticonIcon
                  sx={{ fontSize: 120, color: "var(--color-accent)" }}
                />
              )}
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
