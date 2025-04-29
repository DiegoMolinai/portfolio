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
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FadeInSection from "../components/FadeInSection";
import config from "../config";
import ContactImage from "../assets/contactSection/ContactImage.jpg";

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
        // backgroundColor: "var(--color-bg)",
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

        <Grid container spacing={4} alignItems="stretch">
          {/* 📝 Formulario */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <FadeInSection type="fadeIn">
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: { xs: 3, md: 5 },
                  backgroundColor: "#1e1e1e",
                  color: "var(--color-text)",
                  borderRadius: 3,
                  border: "2px solid var(--color-accent)",
                  gap: 2,
                }}
              >
                <Typography variant="h5" fontWeight={700}>
                  ¿Te gustaría trabajar conmigo?
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Estoy disponible para nuevos proyectos freelance. ¡Te
                  responderé en menos de 24 horas!
                </Typography>

                <form onSubmit={handleSubmit}>
                  <Stack spacing={2} sx={{ mt: 2 }}>
                    <TextField
                      label="Nombre"
                      name="name"
                      fullWidth
                      variant="outlined"
                      color="success"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                    />
                    <TextField
                      label="Correo electrónico"
                      name="email"
                      fullWidth
                      variant="outlined"
                      color="success"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                    <TextField
                      label="Mensaje"
                      name="message"
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                      color="success"
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                    />

                    {/* Alertas */}
                    {successMessage && (
                      <Alert severity="success">{successMessage}</Alert>
                    )}
                    {errorMessage && (
                      <Alert severity="error">{errorMessage}</Alert>
                    )}

                    {/* Botón */}
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="success"
                      sx={{ fontWeight: "bold", textTransform: "none" }}
                      disabled={loading}
                    >
                      {loading ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        "Enviar mensaje"
                      )}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </FadeInSection>
          </Grid>

          {/* 🖼️ Imagen + Texto */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <FadeInSection type="fadeIn">
              <Paper
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  overflow: "hidden",
                  backgroundColor: "#1e1e1e",
                  border: "2px solid var(--color-accent)",
                }}
              >
                {/* Imagen */}
                <Box
                  sx={{
                    flex: 1,
                    backgroundImage: `url(${ContactImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Pie de contacto */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: "#151515",
                    color: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="h6" fontWeight={700}>
                    ¡Conectemos!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Siempre abierto a nuevos desafíos y colaboraciones.
                    ¡Hablemos!
                  </Typography>
                  <Stack direction="row" spacing={2} mt={2}>
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
              </Paper>
            </FadeInSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
