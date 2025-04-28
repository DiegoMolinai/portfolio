// src/components/skillsComponents/SkillsListDesktop.jsx
import { Grid, Stack, Typography, Paper, Divider, Chip, Box } from "@mui/material";
import FadeInSection from "../../components/FadeInSection";

const contrastTextColor = {
  "#61DAFB": "#000",
  "#6f53fb": "#fff",
  "#F7DF1E": "#000",
  "#E44D26": "#fff",
  "#1572B6": "#fff",
  "#3C873A": "#fff",
  "#F05032": "#000",
};

const SkillsListDesktop = ({ skills, selectedSkill, setSelectedSkill }) => {
  return (
    <Grid container spacing={4}>
      <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ maxHeight: "600px", overflowY: "auto", px: { md: 1 } }}>
        <Stack spacing={2} m={2}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            const isActive = selectedSkill.name === skill.name;

            return (
              <FadeInSection key={index} type="fadeScale" delay={index * 0.1}>
                <Paper
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
                    transform: isActive ? "scale(1.05)" : "scale(1)",
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
                  <IconComponent size={isActive ? 32 : 26} />
                  <Typography variant="subtitle1" fontWeight={600}>
                    {skill.name}
                  </Typography>
                </Paper>
              </FadeInSection>
            );
          })}
        </Stack>
      </Grid>

      <Grid item size={{ xs: 12, sm: 6, md: 8 }} sx={{ maxHeight: "600px" }}>
        <FadeInSection key={selectedSkill.name} type="fadeIn">
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: 3,
              border: "2px solid var(--color-accent)",
              backgroundColor: "#1e1e1e",
              m: 2,
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              {selectedSkill.name}
            </Typography>

            <Divider sx={{ my: 2, backgroundColor: "var(--color-accent)" }} />

            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {selectedSkill.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              <Chip label={`Nivel: ${selectedSkill.level}`} color="success" size="small" />
              <Chip label={`Exp: ${selectedSkill.experience}`} color="secondary" size="small" />
              {selectedSkill.yearStarted && <Chip label={`Desde: ${selectedSkill.yearStarted}`} color="warning" size="small" />}
              {selectedSkill.type && <Chip label={`Tipo: ${selectedSkill.type}`} color="info" size="small" />}
            </Stack>

            {selectedSkill.tools?.length > 0 && (
              <>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  Herramientas que uso con {selectedSkill.name}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
                  {selectedSkill.tools.map((tool, i) => (
                    <Chip
                      key={i}
                      label={tool}
                      size="small"
                      variant="outlined"
                      sx={{ borderColor: "var(--color-accent)", color: "var(--color-text)" }}
                    />
                  ))}
                </Stack>
              </>
            )}

            {/* Otros campos extra */}
            {selectedSkill.whyILikeIt && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  💡 ¿Por qué me gusta esta tecnología?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedSkill.whyILikeIt}
                </Typography>
              </Box>
            )}

            {selectedSkill.commonUseCases && (
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  🧪 Casos de uso típicos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedSkill.commonUseCases}
                </Typography>
              </Box>
            )}

            {selectedSkill.resources?.length > 0 && (
              <Box>
                <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                  📚 Recursos recomendados
                </Typography>
                <Stack spacing={0.5}>
                  {selectedSkill.resources.map((resource, i) => (
                    <Typography
                      key={i}
                      component="a"
                      href={resource}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="body2"
                      color="var(--color-accent)"
                      sx={{
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {resource}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            )}
          </Paper>
        </FadeInSection>
      </Grid>
    </Grid>
  );
};

export default SkillsListDesktop;
