import {
  Box,
  Container,
  Typography,
  Divider,
  TextField,
  Button,
  Stack,
  Link,
  Alert,
  CircularProgress,
  Grid,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import config from "../config";
import FadeInSection from "../components/FadeInSection";
import { useState } from "react";
import ContactImage from "../../public/assets/ContactImage.jpg"; // ⚠️ Asegúrate que esta ruta sea válida

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) {
      newErrors.email = "El correo es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Correo inválido";
    }
    if (!formData.message.trim()) newErrors.message = "El mensaje es requerido";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xgvaqydn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.ok || result.success) {
        setSuccessMessage("¡Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(
          result.error || "Hubo un problema al enviar el mensaje."
        );
      }
    } catch (error) {
      setErrorMessage(error.message || "Error inesperado");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contacto"
      component="section"
      sx={{
        padding: { xs: "4rem 1rem", md: "6rem 2rem" },
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <Container maxWidth="lg">
        <FadeInSection type="fadeIn">
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            textAlign="center"
          >
            Contáctame
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

        <Grid
          container
          spacing={4}
          alignItems="stretch"
          sx={{ minHeight: "500px" }}
        >
          {/* 📝 Formulario */}
          <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <FadeInSection type="slideLeft" delay={0.2}>
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  padding: 4,
                  borderRadius: 3,
                  backgroundColor: "#1e1e1e",
                  border: "2px solid var(--color-accent)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body1" sx={{ mb: 3 }}>
                  ¿Tienes un proyecto en mente? ¡Cuéntamelo! 🚀
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      name="name"
                      variant="outlined"
                      color="success"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                    <TextField
                      fullWidth
                      label="Correo electrónico"
                      name="email"
                      variant="outlined"
                      color="success"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      color="success"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />

                    {loading ? (
                      <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        disabled
                      >
                        <CircularProgress size={24} color="inherit" />
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        color="success"
                        type="submit"
                      >
                        Enviar mensaje
                      </Button>
                    )}

                    {successMessage && (
                      <Alert severity="success">{successMessage}</Alert>
                    )}
                    {errorMessage && (
                      <Alert severity="error">{errorMessage}</Alert>
                    )}
                  </Stack>
                </form>
              </Paper>
            </FadeInSection>
          </Grid>

          {/* 🖼️ Imagen con info */}
          <Grid item size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <FadeInSection type="fadeScale" delay={0.4}>
              <Box
                sx={{
                  height: "100%", // Para igualar altura
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative",
                  backgroundImage: `url(${ContactImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  border: "4px solid var(--color-accent)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    p: 3,
                    color: "#fff",
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    ¡Conectemos!
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Estoy disponible para proyectos freelance, colaboraciones y
                    desafíos creativos.
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Link href={`mailto:${config.email}`} color="inherit">
                      <EmailIcon />
                    </Link>
                    <Link
                      href={config.socialLinks.github}
                      target="_blank"
                      color="inherit"
                    >
                      <GitHubIcon />
                    </Link>
                    <Link
                      href={config.socialLinks.linkedin}
                      target="_blank"
                      color="inherit"
                    >
                      <LinkedInIcon />
                    </Link>
                  </Stack>
                </Box>
              </Box>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
