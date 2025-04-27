import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FadeInSection from "../FadeInSection"; // tu efecto fadeIn

const ProjectListMobile = ({ projects }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  return (
    <Stack spacing={3}>
      {projects.map((project, index) => {
        const hasImage = project.image && project.image !== "";
        const isActive = expandedIndex === index;

        return (
          <FadeInSection key={index} type="fadeScale" delay={index * 0.1}>
            <Accordion
              expanded={expandedIndex === index}
              onChange={() => setExpandedIndex(isActive ? -1 : index)}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#1e1e1e",
                border: "2px solid var(--color-accent)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Imagen o icono */}
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "var(--color-accent)",
                      fontSize: 30,
                      transition: "all 0.3s ease",
                    }}
                  />
                }
                sx={{
                  flexDirection: "column",
                  gap: 1,
                  paddingY: 2,
                  backgroundColor: "rgba(255, 255, 255, 0.05)", // leve fondo para diferenciar
                  "& .MuiAccordionSummary-content": {
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                  },
                  borderBottom: "2px solid var(--color-accent)", // separador más claro
                }}
              >
                {hasImage ? (
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: 160,
                      backgroundColor: "#2b2b2b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <WorkOutlineIcon
                      sx={{ fontSize: 60, color: "var(--color-accent)" }}
                    />
                  </Box>
                )}

                {/* Título */}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mt: 1, textAlign: "center" }}
                >
                  {project.title}
                </Typography>

                {/* Subtexto de ayuda, SIEMPRE visible */}
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ textAlign: "center", fontSize: "0.75rem" }}
                >
                  Toca para ver más detalles
                </Typography>
              </AccordionSummary>

              {/* Contenido al abrir */}
              <AccordionDetails sx={{ p: 2 }}>
                {/* Chips de información */}
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  {project.year && (
                    <Chip
                      label={`Año: ${project.year}`}
                      size="small"
                      color="success"
                    />
                  )}
                  {project.status && (
                    <Chip
                      label={`Estado: ${project.status}`}
                      size="small"
                      color="warning"
                    />
                  )}
                  {project.type && (
                    <Chip
                      label={`Tipo: ${project.type}`}
                      size="small"
                      color="secondary"
                    />
                  )}
                </Stack>

                {/* Descripción */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: "justify" }}
                >
                  {project.description}
                </Typography>

                {/* Tecnologías */}
                {project.technologies?.length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 2 }}
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
                          backgroundColor: "#2e2e2e",
                        }}
                      />
                    ))}
                  </Stack>
                )}

                {/* Botones */}
                <Stack spacing={1} mt={2}>
                  {project.link && (
                    <Button
                      href={project.link}
                      target="_blank"
                      variant="outlined"
                      fullWidth
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        color: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                        textTransform: "none",
                        fontWeight: 600,
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
                      fullWidth
                      endIcon={<OpenInNewIcon />}
                      sx={{
                        color: "var(--color-accent)",
                        borderColor: "var(--color-accent)",
                        textTransform: "none",
                        fontWeight: 600,
                      }}
                    >
                      Repositorio
                    </Button>
                  )}
                </Stack>
              </AccordionDetails>
            </Accordion>
          </FadeInSection>
        );
      })}
    </Stack>
  );
};

export default ProjectListMobile;
