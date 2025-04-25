import {
    Box,
    Stack,
    Typography,
    Chip,
    Button
  } from "@mui/material";
  import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
  import OpenInNewIcon from "@mui/icons-material/OpenInNew";
  
  const ProjectListMobile = ({ projects }) => {
    return (
      <Stack spacing={6}>
        {projects.map((project, index) => {
          const hasImage = project.image && project.image !== "";
          return (
            <Box
              key={index}
              sx={{
                backgroundColor: "#1e1e1e",
                borderRadius: 4,
                overflow: "hidden",
                border: "2px solid var(--color-accent)",
                boxShadow: 3,
              }}
            >
              {hasImage ? (
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderBottom: "2px solid var(--color-accent)",
                  }}
                />
              ) : (
                <Box
                  sx={{
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#2b2b2b",
                    borderBottom: "2px solid var(--color-accent)",
                  }}
                >
                  <WorkOutlineIcon sx={{ fontSize: 60, color: "var(--color-accent)" }} />
                </Box>
              )}
  
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {project.title}
                </Typography>
  
                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mb: 2 }}>
                  {project.year && <Chip label={`Año: ${project.year}`} size="small" color="primary" />}
                  {project.status && <Chip label={`Estado: ${project.status}`} size="small" color="warning" />}
                  {project.type && <Chip label={`Tipo: ${project.type}`} size="small" color="secondary" />}
                </Stack>
  
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: "justify" }}
                >
                  {project.description}
                </Typography>
  
                {project.technologies?.length > 0 && (
                  <Box sx={{ overflowX: "auto", whiteSpace: "nowrap", mb: 2 }}>
                    <Stack direction="row" spacing={1}>
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
                            whiteSpace: "nowrap",
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}
  
                <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                  {project.link && (
                    <Button
                      size="small"
                      href={project.link}
                      target="_blank"
                      fullWidth
                      variant="outlined"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        color: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                      }}
                    >
                      Ver sitio
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      size="small"
                      href={project.repo}
                      target="_blank"
                      fullWidth
                      variant="outlined"
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        color: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                      }}
                    >
                      Repositorio
                    </Button>
                  )}
                </Stack>
              </Box>
            </Box>
          );
        })}
      </Stack>
    );
  };
  
  export default ProjectListMobile;
  