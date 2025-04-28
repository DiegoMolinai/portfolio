// src/components/skillsComponents/SkillsListMobile.jsx
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FadeInSection from "../../components/FadeInSection";

// Opcional: Podrías mover este mapa de colores a otro archivo común
const contrastTextColor = {
  "#61DAFB": "#000",
  "#6f53fb": "#fff",
  "#F7DF1E": "#000",
  "#E44D26": "#fff",
  "#1572B6": "#fff",
  "#3C873A": "#fff",
  "#F05032": "#000",
};

const SkillsListMobile = ({ skills, expandedIndex, setExpandedIndex }) => {
  return (
    <Stack spacing={2}>
      {skills.map((skill, index) => {
        const IconComponent = skill.icon;
        const isActive = expandedIndex === index;
        const textColor = contrastTextColor[skill.color] || "#000";

        return (
          <FadeInSection key={index} type="fadeScale" delay={index * 0.1}>
            <Accordion
              expanded={isActive}
              onChange={() => setExpandedIndex(isActive ? -1 : index)}
              sx={{
                border: "2px solid var(--color-accent)",
                transition: "all 0.3s ease",
                transform: isActive ? "scale(1.02)" : "scale(1)", // Pequeño zoom
                boxShadow: isActive
                  ? "0 0 15px var(--color-accent)" // Backlight verde 💚
                  : "0px 2px 8px rgba(0,0,0,0.2)", // Sombra default
                borderRadius: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: skill.color,
                  color: textColor,
                  borderRadius: 1,
                  border: "2px solid var(--color-bg)",
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
  );
};

export default SkillsListMobile;
