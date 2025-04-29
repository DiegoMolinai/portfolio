import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FadeInSection from "../FadeInSection";

const ProjectListDesktop = ({ projects, handleOpenDialog }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {projects.map((project, index) => {
        const hasImage = project.image && project.image !== "";

        return (
          <Grid
            item
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex" }}
          >
            <FadeInSection type="fadeScale" delay={index * 0.1}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "var(--color-text)",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "2px solid var(--color-accent)",
                  transition: "all 0.4s ease",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: `0 0 20px var(--color-accent)`,
                    borderColor: "var(--color-accent-hover)",
                  },
                }}
              >
                <Box
                  onClick={() => handleOpenDialog(project)}
                  sx={{
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {hasImage ? (
                    <CardMedia
                      component="img"
                      height="180"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: "cover",
                        filter: "brightness(0.9)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          filter: "brightness(1)",
                        },
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        height: 180,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#2b2b2b",
                      }}
                    >
                      <WorkOutlineIcon
                        sx={{ fontSize: 60, color: "var(--color-accent)" }}
                      />
                    </Box>
                  )}
                </Box>

                <CardContent
                  onClick={() => handleOpenDialog(project)}
                  sx={{
                    flexGrow: 1,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    "& .project-title": {
                      transition: "all 0.3s ease",
                    },
                    "&:hover .project-title": {
                      color: "var(--color-accent)",
                      textShadow: "0 0 6px var(--color-accent-hover)",
                    },
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      gutterBottom
                      className="project-title"
                      sx={{
                        color: "var(--color-text)", // normal (sin glow)
                      }}
                    >
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
                        minHeight: "4.5em",
                        mb: 2,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {project.technologies?.length > 0 && (
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{ mt: 1 }}
                      >
                        {project.technologies.map((tech, i) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: "var(--color-accent)",
                              color: "var(--color-text)",
                              fontSize: "0.75rem",
                              backgroundColor: "#2e2e2e",
                              "&:hover": {
                                backgroundColor: "var(--color-accent-hover)",
                                color: "#000",
                                fontWeight: 600,
                              },
                            }}
                          />
                        ))}
                      </Stack>
                    )}
                  </Box>
                </CardContent>

                <CardActions
                  sx={{
                    p: 2,
                    borderTop: "2px solid var(--color-accent)",
                    backgroundColor: "#151515",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  {project.link && (
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.link}
                      target="_blank"
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
                      size="small"
                      variant="outlined"
                      href={project.repo}
                      target="_blank"
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
                </CardActions>
              </Card>
            </FadeInSection>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ProjectListDesktop;
