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
    <Grid container spacing={2} justifyContent="space-around">
      {projects.map((project, index) => {
        const hasImage = project.image && project.image !== "";

        return (
          <Grid
            item
            key={index}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex" }}
          >
            <FadeInSection type="fadeScale" delay={index * 0.15}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "2px solid var(--color-accent)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 0 15px var(--color-accent)",
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
                        sx={{ fontSize: 60, color: "var(--color-accent)" }}
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
                      minHeight: "4.5em",
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
                    borderTop: "2px solid var(--color-accent)",
                    justifyContent: "space-around",
                  }}
                >
                  {project.link && (
                    <Button
                      size="small"
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      endIcon={<OpenInNewIcon />}
                      sx={{ border: "2px solid var(--color-accent)" }}
                    >
                      Ver sitio
                    </Button>
                  )}
                  {project.repo && (
                    <Button
                      size="small"
                      variant="contained"
                      href={project.repo}
                      target="_blank"
                      endIcon={<OpenInNewIcon />}
                      sx={{ border: "2px solid var(--color-accent)" }}
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
