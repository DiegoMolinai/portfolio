import {
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectDialogContent = ({ project }) => {
  if (!project) return null;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "stretch",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* Imagen */}
      <Box
        sx={{
          flex: { md: 1 },
          minHeight: 200,
          borderRadius: 2,
          overflow: "hidden",
          border: "2px solid var(--color-accent)",
          backgroundColor: "#2b2b2b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {project.image ? (
          <CardMedia
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        ) : (
          <Typography variant="h6" color="var(--color-accent)">
            Sin imagen
          </Typography>
        )}
      </Box>

      {/* Contenido */}
      <Box
        sx={{
          flex: { md: 2 },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {/* Título */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            color: "var(--color-accent)",
          }}
        >
          {project.title}
        </Typography>

        <Divider sx={{ backgroundColor: "var(--color-accent)", mb: 2 }} />

        {/* Contenido de Texto */}
        <Grid container spacing={2}>
          {/* 📝 Descripción */}
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              📝 Descripción
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: "justify" }}>
              {project.description}
            </Typography>
          </Grid>

          {/* 🧩 Extra info */}
          {project.extra && (
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                🧩 Extra
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.extra}
              </Typography>
            </Grid>
          )}

          {/* 🛠️ Tecnologías usadas */}
          {project.technologies?.length > 0 && (
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                🛠️ Tecnologías usadas
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {project.technologies.map((tech, i) => (
                  <Chip
                    key={i}
                    label={tech}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "var(--color-accent)",
                      color: "var(--color-text)",
                      backgroundColor: "#2e2e2e",
                      fontSize: "0.75rem",
                      "&:hover": {
                        backgroundColor: "var(--color-accent-hover)",
                        color: "#000",
                        fontWeight: 600,
                      },
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          )}

          {/* 🏷️ Etiquetas */}
          {project.tags?.length > 0 && (
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                🏷️ Etiquetas
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {project.tags.map((tag, i) => (
                  <Chip
                    key={i}
                    label={tag}
                    size="small"
                    sx={{
                      backgroundColor: "#2b2b2b",
                      color: "var(--color-text)",
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          )}

          {/* 📁 Información */}
          {(project.type || project.status || project.year) && (
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                📁 Información del proyecto
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
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
          )}
        </Grid>

        {/* Botones finales */}
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          {project.link && (
            <Button
              href={project.link}
              target="_blank"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              sx={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "var(--color-accent-hover)",
                  color: "#000",
                  borderColor: "var(--color-accent-hover)",
                },
              }}
            >
              Ver sitio
            </Button>
          )}
          {project.repo && (
            <Button
              href={project.repo}
              target="_blank"
              variant="outlined"
              endIcon={<OpenInNewIcon />}
              sx={{
                borderColor: "var(--color-accent)",
                color: "var(--color-accent)",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "var(--color-accent-hover)",
                  color: "#000",
                  borderColor: "var(--color-accent-hover)",
                },
              }}
            >
              Repositorio
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default ProjectDialogContent;
