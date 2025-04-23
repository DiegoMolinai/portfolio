import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
  Stack,
  Divider,
  Slide,
} from "@mui/material";
import { useState, forwardRef } from "react";
import { skills } from "../data/skills";
import FadeInSection from "../components/FadeInSection";

// Transición deslizante para el diálogo
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (skill) => {
    setSelectedSkill(skill);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleExited = () => {
    setSelectedSkill(null);
  };

  return (
    <Box
      id="habilidades"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--color-bg)",
        padding: { xs: "4rem 1rem", md: "6rem 2rem" },
        color: "var(--color-text)",
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection type="fadeIn">
          <Typography
            variant="h4"
            fontWeight={700}
            textAlign="center"
            gutterBottom
          >
            Habilidades
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

        <Grid container justifyContent="center" spacing={5} mt={4}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;

            return (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <FadeInSection type="fadeScale" delay={index * 0.1}>
                  <Paper
                    elevation={3}
                    onClick={() => handleOpenDialog(skill)}
                    sx={{
                      p: 3,
                      minHeight: "150px",
                      borderRadius: 3,
                      border: "2px solid var(--color-accent)",
                      backgroundColor: "#1e1e1e",
                      alignContent: "center",
                      color: skill.color,
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "all 0.3s",
                      "&:hover": {
                        transform: "scale(1.10)",
                        backgroundColor: skill.color,
                        color: "#000",
                        // Apunta al Typography dentro con ID
                        "#skill-text": {
                          fontWeight: "bold",
                        },
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <IconComponent size={40} />
                    </Box>

                    <Typography
                      variant="subtitle1"
                      id="skill-text"
                      sx={{
                        mt: 1,
                        transition: "color 0.3s",
                      }}
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </FadeInSection>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Dialogo con transición suave */}
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
              px: { xs: 2, sm: 3 },
              py: 2,
            },
          },
        }}
      >
        {selectedSkill && (
          <>
            {/* Título con ícono grande */}
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 700,
                fontSize: "1.4rem",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <selectedSkill.icon size={24} />
              </Box>
              {selectedSkill.name}
            </DialogTitle>

            <DialogContent
              dividers
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              {/* Descripción */}
              <Box>
                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                  Descripción
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedSkill.description}
                </Typography>
              </Box>

              {/* Información general */}
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label={`Nivel: ${selectedSkill.level}`} color="success" />
                <Chip
                  label={`Experiencia: ${selectedSkill.experience}`}
                  color="secondary"
                />
                {selectedSkill.yearStarted && (
                  <Chip
                    label={`Desde: ${selectedSkill.yearStarted}`}
                    color="warning"
                  />
                )}
                {selectedSkill.type && (
                  <Chip label={`Tipo: ${selectedSkill.type}`} color="info" />
                )}
              </Stack>

              {/* Herramientas asociadas */}
              {selectedSkill.tools?.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Herramientas / Tecnologías asociadas
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {selectedSkill.tools.map((tool, i) => (
                      <Chip
                        key={i}
                        label={tool}
                        size="small"
                        variant="outlined"
                      />
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Proyectos en los que se usó */}
              {selectedSkill.projectsUsedIn?.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                    Usado en proyectos
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {selectedSkill.projectsUsedIn.map((project, i) => (
                      <Chip
                        key={i}
                        label={project}
                        size="small"
                        variant="filled"
                        sx={{
                          backgroundColor: "var(--color-accent)",
                          color: "#000",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              )}
            </DialogContent>

            <DialogActions>
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

export default SkillsSection;
