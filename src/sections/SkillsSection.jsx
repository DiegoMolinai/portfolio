import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Stack,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { skills } from "../data/skills";
import FadeInSection from "../components/FadeInSection";

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
  const [expandedIndex, setExpandedIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

        {isMobile ? (
          <Stack spacing={2}>
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              const isActive = expandedIndex === index;
              const textColor = contrastTextColor[skill.color] || "#000";

              return (
                <FadeInSection key={index} type="fadeScale" delay={index * 0.1}>
                  <Accordion
                    expanded={expandedIndex === index}
                    onChange={() =>
                      setExpandedIndex(expandedIndex === index ? -1 : index)
                    }
                    sx={{
                      transition: "all 0.3s ease",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        backgroundColor: skill.color,
                        color: textColor,
                        borderRadius: 1,
                        "& .MuiAccordionSummary-content": {
                          alignItems: "center",
                          gap: 2,
                        },
                      }}
                    >
                      <IconComponent size={isActive ? 30 : 24} />
                      <Typography fontWeight={600}>{skill.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{
                        backgroundColor: "#1e1e1e",
                        color: "var(--color-text)",
                        borderRadius: 2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {skill.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{ mb: 2 }}
                      >
                        <Chip
                          label={`Nivel: ${skill.level}`}
                          color="success"
                          size="small"
                        />
                        <Chip
                          label={`Exp: ${skill.experience}`}
                          color="secondary"
                          size="small"
                        />
                        {skill.yearStarted && (
                          <Chip
                            label={`Desde: ${skill.yearStarted}`}
                            color="warning"
                            size="small"
                          />
                        )}
                        {skill.type && (
                          <Chip
                            label={`Tipo: ${skill.type}`}
                            color="info"
                            size="small"
                          />
                        )}
                      </Stack>
                      {skill.tools?.length > 0 && (
                        <>
                          <Typography
                            variant="subtitle2"
                            fontWeight={600}
                            sx={{ mb: 1 }}
                          >
                            Herramientas
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            flexWrap="wrap"
                            useFlexGap
                          >
                            {skill.tools.map((tool, i) => (
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
                    </AccordionDetails>
                  </Accordion>
                </FadeInSection>
              );
            })}
          </Stack>
        ) : (
          <Grid container spacing={4}>
            <Grid
              item
              size={{ xs: 12, md: 4 }}
              sx={{
                maxHeight: "600px",
                overflowY: "auto",
                px: { md: 1 },
              }}
            >
              <Stack spacing={2} m={2}>
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  const isActive = selectedSkill.name === skill.name;

                  return (
                    <FadeInSection
                      key={index}
                      type="fadeScale"
                      delay={index * 0.1}
                    >
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

            <Grid item size={{ xs: 12, md: 8 }} sx={{maxHeight: "600px",}}>
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

                  <Divider
                    sx={{ my: 2, backgroundColor: "var(--color-accent)" }}
                  />

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {selectedSkill.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 3 }}
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
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
                        Herramientas que uso con {selectedSkill.name}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                        sx={{ mb: 3 }}
                      >
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

                  {/* 💡 Por qué me gusta */}
                  {selectedSkill.whyILikeIt && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
                        💡 ¿Por qué me gusta esta tecnología?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedSkill.whyILikeIt}
                      </Typography>
                    </Box>
                  )}

                  {/* 🧪 Casos de uso */}
                  {selectedSkill.commonUseCases && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
                        🧪 Casos de uso típicos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedSkill.commonUseCases}
                      </Typography>
                    </Box>
                  )}

                  {/* 📚 Recursos */}
                  {selectedSkill.resources?.length > 0 && (
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
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
                              "&:hover": {
                                textDecoration: "underline",
                              },
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
        )}
      </Container>
    </Box>
  );
};

export default SkillsSection;
