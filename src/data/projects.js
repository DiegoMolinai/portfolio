const projects = [
  {
    title: "Portafolio Personal",
    description:
      "Sitio web responsive desarrollado con React y Vite para presentar mis habilidades, proyectos y contacto profesional.",
    link: "https://miportafolio.dev",
    repo: "https://github.com/miusuario/portfolio",
    technologies: ["React", "Vite", "Material-UI", "Framer Motion"],
    year: 2024,
    status: "Completado",
    type: "Personal",
    tags: ["SPA", "Responsivo", "Animaciones"],
    extra:
      "Este proyecto incluyó la integración de animaciones suaves, modo claro/oscuro, y formularios con validación y envío de correos vía API.",
  },
  {
    title: "Gestor de Tareas",
    description:
      "Aplicación web full-stack para gestionar tareas personales, con autenticación, CRUD y filtros por estado.",
    link: "https://taskmanager.app",
    repo: "https://github.com/miusuario/task-manager",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    year: 2023,
    status: "En desarrollo",
    type: "Open Source",
    tags: ["Full Stack", "JWT", "Mongo"],
    extra:
      "Desarrollado como parte de una iniciativa para mejorar la productividad. Se utilizó JWT para autenticación segura y MongoDB Atlas para base de datos en la nube.",
  },
  {
    title: "Dashboard de Analítica",
    description:
      "Dashboard dinámico con gráficos y filtros para visualizar métricas clave de usuarios y rendimiento.",
    link: "https://analytics-dashboard.dev",
    repo: "https://github.com/miusuario/analytics-dashboard",
    technologies: ["React", "ECharts", "Apollo Client", "GraphQL"],
    year: 2023,
    status: "Completado",
    type: "Freelance",
    tags: ["DataViz", "Responsive", "GraphQL"],
    extra:
      "Se implementaron gráficos interactivos con ECharts y consultas optimizadas con Apollo Client y GraphQL.",
  },
  {
    title: "Landing Page para Startup",
    description:
      "Landing page moderna y rápida para promoción de servicios de una startup de tecnología.",
    link: "https://startuplanding.dev",
    repo: "https://github.com/miusuario/landing-startup",
    technologies: ["HTML5", "CSS3", "JavaScript", "ScrollReveal"],
    year: 2022,
    status: "Completado",
    type: "Freelance",
    tags: ["SEO", "Landing Page", "Scroll Animations"],
    extra:
      "Optimizada para performance y visibilidad en buscadores. Se utilizó ScrollReveal.js para animaciones suaves al hacer scroll.",
  },
  {
    title: "API de Productos",
    description:
      "REST API para gestión de productos, creada con Express y MongoDB, validaciones con Joi y documentación con Swagger.",
    link: "https://documentacion-api.dev",
    repo: "https://github.com/miusuario/product-api",
    technologies: ["Node.js", "Express", "MongoDB", "Swagger"],
    year: 2024,
    status: "Completado",
    type: "Personal",
    tags: ["API REST", "Backend", "Swagger"],
    extra:
      "Incluye middleware para validación con Joi, manejo de errores centralizado y documentación interactiva con Swagger UI.",
  },
  {
    title: "Blog Markdown",
    description:
      "Blog minimalista que consume archivos Markdown como posts, soporte para temas claro/oscuro y comentarios.",
    link: "https://blogmarkdown.dev",
    repo: "https://github.com/miusuario/blog-md",
    technologies: ["React", "Markdown", "Styled Components"],
    year: 2024,
    status: "Prototipo",
    type: "Académico",
    tags: ["Markdown", "Theming", "SSR"],
    extra:
      "Proyecto experimental para renderizar contenido estático desde archivos `.md`. Planea incorporar soporte SSR y SEO en el futuro.",
  },
];

export default projects;
