import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import { useState } from "react";
import { skills } from "../data/skills";

// Colores de contraste por color de fondo
const contrastTextColor = {
  "#61DAFB": "#000",
  "#6f53fb": "#fff",
  "#F7DF1E": "#000",
  "#E44D26": "#fff",
  "#1572B6": "#fff",
  "#3C873A": "#fff",
  "#F05032": "#000",
};

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);

  return (
    <Box
      id="habilidades"
      component="section"
      sx={{
        minHeight: "100vh",
        backgroundColor: "var(--color-bg)",
        padding: { xs: "4rem 1rem", md: "6rem 2rem" },
        color: "var(--color-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
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

        <Grid container spacing={4}>
          {/* Columna izquierda scrollable */}
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            sx={{
              maxHeight: { xs: "none", md: "600px" },
              overflowY: { xs: "visible", md: "auto" },
              px: { md: 1 },
            }}
          >
            <Stack spacing={2}>
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                const isActive = selectedSkill.name === skill.name;

                return (
                  <Paper
                    key={index}
                    elevation={isActive ? 6 : 3}
                    onClick={() => setSelectedSkill(skill)}
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      borderRadius: 2,
                      cursor: "pointer",
                      backgroundColor: isActive ? skill.color : "#1e1e1e",
                      color: isActive
                        ? contrastTextColor[skill.color] || "#000"
                        : "var(--color-text)",
                      border: `2px solid var(--color-accent)`,
                      transition: "all 0.3s ease",
                      boxShadow: isActive
                        ? `0 0 15px ${skill.color}55`
                        : "0px 2px 10px rgba(0,0,0,0.2)",
                      "&:hover": {
                        backgroundColor: skill.color,
                        color: contrastTextColor[skill.color] || "#000",
                        boxShadow: `0 0 20px ${skill.color}88`,
                      },
                    }}
                  >
                    <IconComponent size={30} />
                    <Typography variant="subtitle1" fontWeight={600}>
                      {skill.name}
                    </Typography>
                  </Paper>
                );
              })}
            </Stack>
          </Grid>

          {/* Columna derecha: Detalle */}
          <Grid item size={{ xs: 12, md: 8 }}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, sm: 4 },
                borderRadius: 3,
                border: "2px solid var(--color-accent)",
                backgroundColor: "#1e1e1e",
              }}
            >
              <Typography variant="h5" fontWeight={700}>
                {selectedSkill.name}
              </Typography>

              <Divider sx={{ my: 2, backgroundColor: "var(--color-accent)" }} />

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {selectedSkill.description}
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                useFlexGap
                sx={{ mb: 2 }}
              >
                <Chip
                  label={`Nivel: ${selectedSkill.level}`}
                  color="success"
                  size="small"
                />
                <Chip
                  label={`Exp: ${selectedSkill.experience}`}
                  color="secondary"
                  size="small"
                />
                {selectedSkill.yearStarted && (
                  <Chip
                    label={`Desde: ${selectedSkill.yearStarted}`}
                    color="warning"
                    size="small"
                  />
                )}
                {selectedSkill.type && (
                  <Chip
                    label={`Tipo: ${selectedSkill.type}`}
                    color="info"
                    size="small"
                  />
                )}
              </Stack>

              {selectedSkill.tools?.length > 0 && (
                <>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    sx={{ mb: 1, color: "var(--color-text)" }}
                  >
                    Herramientas
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {selectedSkill.tools.map((tool, i) => (
                      <Chip
                        key={i}
                        label={tool}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "var(--color-accent)",
                          color: "var(--color-text)",
                        }}
                      />
                    ))}
                  </Stack>
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillsSection;
