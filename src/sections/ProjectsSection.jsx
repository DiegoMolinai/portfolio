import {
  Box,
  Container,
  Typography,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Stack,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import projects from "../data/projects";
import { useState, forwardRef } from "react";
import FadeInSection from "../components/FadeInSection";

// Transición para el diálogo
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleExited = () => {
    setSelectedProject(null);
  };

  return (
    <Box
      id="proyectos"
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
            Proyectos
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

        {/* Grid de tarjetas */}
        <Grid container spacing={4} justifyContent={"space-around"}>
          {projects.map((project, index) => {
            const hasImage = project.image && project.image !== "";
            return (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <FadeInSection type="fadeScale" delay={index * 0.15}>
                  <Card
                    sx={{
                      backgroundColor: "#1e1e1e",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "2px solid var(--color-accent)",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Box
                      onClick={() => handleOpenDialog(project)}
                      sx={{ cursor: "pointer" }}
                    >
                      {hasImage ? (
                        <CardMedia
                          component="img"
                          height="180"
                          image={project.image}
                          alt={project.title}
                          sx={{ borderBottom: "2px solid var(--color-accent)" }}
                        />
                      ) : (
                        <Box
                          sx={{
                            height: 180,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#2b2b2b",
                            borderBottom: "2px solid var(--color-accent)",
                          }}
                        >
                          <WorkOutlineIcon
                            sx={{
                              fontSize: 60,
                              color: "var(--color-accent)",
                            }}
                          />
                        </Box>
                      )}
                    </Box>

                    <CardContent
                      onClick={() => handleOpenDialog(project)}
                      sx={{ minHeight: 180, cursor: "pointer" }}
                    >
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          minHeight: "4.5em", // Aproximadamente 3 líneas de texto
                          lineHeight: "1.5em",
                        }}
                      >
                        {project.description}
                      </Typography>

                      {project.technologies?.length > 0 && (
                        <Stack
                          direction="row"
                          spacing={1}
                          mt={2}
                          flexWrap="wrap"
                          useFlexGap
                        >
                          {project.technologies.map((tech, i) => (
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
                      )}
                    </CardContent>

                    <CardActions
                      sx={{
                        mt: "auto",
                        px: 2,
                        pb: 2,
                        borderTop: "2px solid var(--color-accent)",
                      }}
                    >
                      {project.link && (
                        <Button
                          size="small"
                          href={project.link}
                          target="_blank"
                          endIcon={<OpenInNewIcon />}
                          sx={{ color: "var(--color-accent)" }}
                        >
                          Ver sitio
                        </Button>
                      )}
                      {project.repo && (
                        <Button
                          size="small"
                          href={project.repo}
                          target="_blank"
                          endIcon={<OpenInNewIcon />}
                          sx={{ color: "var(--color-accent)" }}
                        >
                          Repositorio
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Diálogo con contenido extendido */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        keepMounted
        fullWidth
        maxWidth="sm"
        slots={{ transition: Transition }}
        slotProps={{
          transition: {
            onExited: handleExited,
          },
          paper: {
            sx: {
              backgroundColor: "#1e1e1e",
              color: "var(--color-text)",
              borderRadius: 3,
              p: 1,
            },
          },
        }}
      >
        {selectedProject && (
          <>
            {/* Título */}
            <DialogTitle
              sx={{
                fontWeight: 700,
                fontSize: "1.5rem",
                pb: 1,
              }}
            >
              {selectedProject?.title}
            </DialogTitle>

            <DialogContent
              dividers
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {/* Imagen del proyecto */}
              {selectedProject?.image && (
                <Box
                  component="img"
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  sx={{
                    width: "100%",
                    borderRadius: 2,
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
              )}

              {/* Descripción */}
              <Box>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Descripción
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedProject?.description}
                </Typography>
              </Box>

              {/* Tecnologías usadas */}
              {selectedProject?.technologies?.length > 0 && (
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Tecnologías usadas
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {selectedProject?.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Etiquetas adicionales */}
              {selectedProject?.tags?.length > 0 && (
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Etiquetas
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {selectedProject?.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        variant="filled"
                        sx={{
                          backgroundColor: "#2b2b2b",
                          color: "var(--color-text)",
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Información adicional */}
              {selectedProject?.extra && (
                <Box>
                  <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                    Información adicional
                  </Typography>
                  <Typography variant="body2">
                    {selectedProject?.extra}
                  </Typography>
                </Box>
              )}

              {/* Metadata del proyecto */}
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {selectedProject?.type && (
                  <Chip
                    label={`Tipo: ${selectedProject?.type}`}
                    color="secondary"
                    size="small"
                  />
                )}
                {selectedProject?.status && (
                  <Chip
                    label={`Estado: ${selectedProject?.status}`}
                    color="warning"
                    size="small"
                  />
                )}
                {selectedProject?.year && (
                  <Chip
                    label={`Año: ${selectedProject?.year}`}
                    color="primary"
                    size="small"
                  />
                )}
              </Stack>
            </DialogContent>

            {/* Acciones */}
            <DialogActions sx={{ px: 3, pb: 2 }}>
              {selectedProject?.link && (
                <Button
                  href={selectedProject?.link}
                  target="_blank"
                  endIcon={<OpenInNewIcon />}
                  sx={{ color: "var(--color-accent)" }}
                >
                  Ver sitio
                </Button>
              )}
              {selectedProject?.repo && (
                <Button
                  href={selectedProject?.repo}
                  target="_blank"
                  endIcon={<OpenInNewIcon />}
                  sx={{ color: "var(--color-accent)" }}
                >
                  Repositorio
                </Button>
              )}
              <Button onClick={handleCloseDialog} color="success" autoFocus>
                Cerrar
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProjectsSection;
