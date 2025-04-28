import { Box, Container, Typography, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { skills } from "../data/skills";
import FadeInSection from "../components/FadeInSection";
import SkillsListMobile from "../components/skillsComponents/SkillsListMobile";
import SkillsListDesktop from "../components/skillsComponents/SkillsListDesktop";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const [expandedIndex, setExpandedIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box id="habilidades" component="section" sx={{
      minHeight: "100vh",
      padding: { xs: "4rem 1rem", md: "6rem 2rem" },
      color: "var(--color-text)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Container maxWidth="lg">
        <FadeInSection type="fadeIn">
          <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
            Habilidades
          </Typography>
          <Divider sx={{
            backgroundColor: "var(--color-accent)",
            width: "60px",
            margin: "0 auto 2rem auto",
            height: "3px",
            borderRadius: "6px",
          }} />
        </FadeInSection>

        {isMobile ? (
          <SkillsListMobile
            skills={skills}
            expandedIndex={expandedIndex}
            setExpandedIndex={setExpandedIndex}
          />
        ) : (
          <SkillsListDesktop
            skills={skills}
            selectedSkill={selectedSkill}
            setSelectedSkill={setSelectedSkill}
          />
        )}
      </Container>
    </Box>
  );
};

export default SkillsSection;
