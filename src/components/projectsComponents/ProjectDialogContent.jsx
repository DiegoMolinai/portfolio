import {
    Box,
    Typography,
    Stack,
    Chip,
    Grid,
  } from "@mui/material";
  
  const ProjectDialogContent = ({ project }) => {
    if (!project) return null;
  
    return (
      <>
        {/* Encabezado con imagen y overlay */}
        {project.image && (
          <Box sx={{ position: "relative" }}>
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: "100%",
                height: 240,
                objectFit: "cover",
                filter: "brightness(0.65)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                px: 4,
                pb: 3,
              }}
            >
              <Typography variant="h5" fontWeight={700}>
                {project.title}
              </Typography>
            </Box>
          </Box>
        )}
  
        {/* Contenido del diálogo */}
        <Box sx={{ px: 4, py: 3 }}>
          <Grid container spacing={3}>
            {/* Descripción */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                📝 Descripción
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "justify" }}
              >
                {project.description}
              </Typography>
            </Grid>
  
            {/* Extra info */}
            {project.extra && (
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  🧩 Extra
                </Typography>
                <Typography variant="body2">{project.extra}</Typography>
              </Grid>
            )}
  
            {/* Tecnologías */}
            {project.technologies?.length > 0 && (
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  🛠️ Tecnologías usadas
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
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
              </Grid>
            )}
  
            {/* Etiquetas */}
            {project.tags?.length > 0 && (
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  🏷️ Etiquetas
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  flexWrap="wrap"
                >
                  {project.tags.map((tag, i) => (
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
              </Grid>
            )}
  
            {/* Metadata */}
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                gutterBottom
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                📁 Información del proyecto
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                flexWrap="wrap"
              >
                {project.type && (
                  <Chip
                    label={`Tipo: ${project.type}`}
                    color="secondary"
                    size="small"
                  />
                )}
                {project.status && (
                  <Chip
                    label={`Estado: ${project.status}`}
                    color="warning"
                    size="small"
                  />
                )}
                {project.year && (
                  <Chip
                    label={`Año: ${project.year}`}
                    color="primary"
                    size="small"
                  />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  };
  
  export default ProjectDialogContent;
  