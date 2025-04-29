import {
  Box,
  Container,
  Typography,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  Slide,
  Button,
  useMediaQuery,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useTheme } from "@mui/material/styles";
import { useState, forwardRef } from "react";
import FadeInSection from "../components/FadeInSection";
import projects from "../data/projects";
import ProjectListMobile from "../components/projectsComponents/ProjectListMobile";
import ProjectListDesktop from "../components/projectsComponents/ProjectListDesktop";
import ProjectDialogContent from "../components/projectsComponents/ProjectDialogContent";

// Transición del diálogo
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
        // backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection type="fadeIn">
          <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
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

        {isMobile ? (
          <ProjectListMobile projects={projects} />
        ) : (
          <ProjectListDesktop
            projects={projects}
            handleOpenDialog={handleOpenDialog}
          />
        )}

        {/* Diálogo solo para escritorio */}
        {!isMobile && selectedProject && (
          <Dialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            keepMounted
            fullWidth
            maxWidth="md"
            TransitionComponent={Transition}
            TransitionProps={{ onExited: handleExited }}
            PaperProps={{
              sx: {
                backgroundColor: "#1e1e1e",
                color: "var(--color-text)",
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 0 30px rgba(0,0,0,0.5)",
                border: "2px solid var(--color-accent)",
              },
            }}
          >
            <ProjectDialogContent project={selectedProject} />

            <DialogActions
              sx={{
                px: 4,
                py: 2,
                borderTop: "2px solid var(--color-accent)",
                backgroundColor: "#1a1a1a",
              }}
            >
              {/* {selectedProject.link && (
                <Button
                  href={selectedProject.link}
                  target="_blank"
                  variant="outlined"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-accent)",
                  }}
                >
                  Ver sitio
                </Button>
              )}
              {selectedProject.repo && (
                <Button
                  href={selectedProject.repo}
                  target="_blank"
                  variant="outlined"
                  endIcon={<OpenInNewIcon />}
                  sx={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-accent)",
                  }}
                >
                  Repositorio
                </Button>
              )} */}
              <Button onClick={handleCloseDialog} variant="contained" color="error">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Container>
    </Box>
  );
};

export default ProjectsSection;
