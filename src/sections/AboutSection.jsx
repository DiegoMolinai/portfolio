import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Stack,
  Chip,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import config from "../config";
import FadeInSection from "../components/FadeInSection";

const AboutSection = () => {
  const imageSrc = "./assets/about-image.png";
  const hasImage = imageSrc !== "" && imageSrc !== null;

  return (
    <Box
      id="sobremí"
      component="section"
      sx={{
        padding: { xs: "4rem 1rem", md: "6rem 2rem" },
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection type="fadeIn">
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            textAlign="center"
          >
            Sobre mí
          </Typography>
          <Divider
            sx={{
              backgroundColor: "var(--color-accent)",
              width: "60px",
              margin: "0 auto 2rem auto",
              height: "3px",
              borderRadius: "6px",
            }}
          />
        </FadeInSection>

        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: { md: "60vh" } }} // le da altura mínima para que se vea más equilibrado
        >
          {/* Imagen o ícono */}
          <Grid item xs={12} md={5}>
            <FadeInSection type="fadeScale" delay={0.2}>
              {hasImage ? (
                <Box
                  component="img"
                  src={imageSrc}
                  alt="Sobre mí"
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    mx: "auto",
                    border:"4px solid var(--color-accent)",
                    borderRadius: 4,
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
                    display: "block",
                  }}
                />
              ) : (
                <PersonOutlineIcon
                  sx={{ fontSize: 120, color: "var(--color-accent)" }}
                />
              )}
            </FadeInSection>
          </Grid>

          {/* Contenido textual */}
          <Grid item xs={12} md={7}>
            <FadeInSection type="slideLeft" delay={0.3}>
              <Box sx={{ maxWidth: "600px", margin: "0 auto" }}>
                <Stack spacing={3}>
                  <Typography
                    variant="body1"
                    textAlign="justify"
                    sx={{ lineHeight: 1.9 }}
                  >
                    Hola, soy <strong>{config.name}</strong>, desarrollador
                    full-stack con experiencia construyendo interfaces modernas,
                    accesibles y responsivas. Disfruto transformar ideas en
                    soluciones digitales con foco en usabilidad y performance.
                  </Typography>

                  <Typography
                    variant="body1"
                    textAlign="justify"
                    sx={{ lineHeight: 1.9 }}
                  >
                    He trabajado en proyectos utilizando <strong>React</strong>{" "}
                    y su ecosistema (hooks, router, context), con herramientas
                    modernas como
                    <strong> Vite</strong> y <strong>Material-UI</strong>. Me
                    interesa la arquitectura limpia, la experiencia del usuario
                    y el diseño escalable de componentes.
                  </Typography>

                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      gutterBottom
                    >
                      Tecnologías que uso frecuentemente:
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {[
                        "React",
                        "Vite",
                        "Material-UI",
                        "Apollo Client",
                        "GraphQL",
                        "JavaScript (ES6+)",
                        "Node.js",
                        "Git",
                      ].map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          variant="outlined"
                          sx={{
                            backgroundColor: "#2e2e2e",
                            color: "var(--color-text)",
                            borderColor: "var(--color-accent)",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
