import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiApollographql } from "react-icons/si";

export const skills = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    description:
      "Uso React con enfoque en hooks, componentes reutilizables, optimización de performance, rutas dinámicas con React Router y manejo de estado con Context API.",
    experience: "+3 años",
    level: "Avanzado",
    tools: ["Hooks", "React Router", "Context API", "MUI", "Framer Motion"],
    type: "Frontend",
    yearStarted: 2021,
    projectsUsedIn: ["Portafolio Personal", "Dashboard de Analítica"],
    whyILikeIt:
      "Permite crear interfaces modernas con gran control del flujo de datos y una comunidad vibrante.",
    commonUseCases:
      "Single Page Applications, Dashboards dinámicos, sitios responsivos con hooks personalizados.",
    resources: [
      "https://react.dev/",
      "https://beta.reactjs.org/",
      "https://www.youtube.com/c/Midudev",
    ],
  },
  {
    name: "Apollo Client",
    icon: SiApollographql,
    color: "#6f53fb",
    description:
      "Integración de aplicaciones React con Apollo Client para consumo de APIs GraphQL, manejo de caché, estado local y lógica de red.",
    experience: "+2 años",
    level: "Intermedio",
    tools: ["GraphQL", "Apollo Cache", "Fragments", "Reactive Vars", "Type Policies"],
    type: "Frontend/Data",
    yearStarted: 2022,
    projectsUsedIn: ["Dashboard de Analítica"],
    whyILikeIt:
      "Facilita el manejo de datos complejos desde GraphQL, con gran control sobre el caché y estado.",
    commonUseCases:
      "Dashboards, consumo eficiente de APIs, sincronización de estado remoto/local.",
    resources: [
      "https://www.apollographql.com/docs/react/",
      "https://graphql.org/learn/",
    ],
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    description:
      "JavaScript moderno (ES6+), promesas, async/await, funciones puras, manejo de arrays y eventos en el DOM.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["ES6+", "Fetch", "Promises", "Async/Await", "Array methods"],
    type: "Lenguaje",
    yearStarted: 2019,
    projectsUsedIn: ["Todos"],
    whyILikeIt:
      "Es la base del desarrollo web moderno. Me permite crear desde scripts hasta interfaces interactivas completas.",
    commonUseCases:
      "Manipulación del DOM, validación de formularios, consumo de APIs REST.",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "https://javascript.info/",
    ],
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E44D26",
    description:
      "Estructuración semántica de contenido, etiquetas accesibles, formularios nativos, multimedia y validaciones.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["Formularios", "Multimedia", "Web Semántica", "Validaciones"],
    type: "Frontend",
    yearStarted: 2019,
    projectsUsedIn: ["Landing Page para Startup", "Portafolio Personal"],
    whyILikeIt:
      "Una base sólida es clave para accesibilidad, SEO y estructura clara del sitio.",
    commonUseCases:
      "Estructura de contenido, formularios accesibles, integración multimedia.",
    resources: [
      "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "https://htmlreference.io/",
    ],
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    description:
      "Estilos responsivos con media queries, Flexbox, Grid, animaciones y personalización visual con variables CSS.",
    experience: "+4 años",
    level: "Intermedio",
    tools: ["Flexbox", "Grid", "Keyframes", "Variables", "Responsive"],
    type: "Frontend",
    yearStarted: 2020,
    projectsUsedIn: ["Landing Page para Startup", "Portafolio Personal"],
    whyILikeIt:
      "Me permite dar vida a las interfaces, desde layouts responsivos hasta animaciones suaves.",
    commonUseCases:
      "Diseños responsivos, animaciones, tematización visual, componentes escalables.",
    resources: [
      "https://css-tricks.com/",
      "https://developer.mozilla.org/en-US/docs/Web/CSS",
    ],
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#3C873A",
    description:
      "Creación de servidores con Express, desarrollo de APIs REST, middleware, rutas protegidas y validaciones.",
    experience: "+2 años",
    level: "Intermedio",
    tools: ["Express", "JWT", "Mongoose", "Controllers", "Routing"],
    type: "Backend",
    yearStarted: 2022,
    projectsUsedIn: ["API de Productos", "Gestor de Tareas"],
    whyILikeIt:
      "Me da el poder de construir desde cero la lógica backend de aplicaciones completas usando solo JS.",
    commonUseCases:
      "APIs REST, autenticación con JWT, integración con bases de datos MongoDB.",
    resources: [
      "https://nodejs.org/en/docs",
      "https://expressjs.com/",
      "https://www.freecodecamp.org/news/tag/node-js/",
    ],
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    description:
      "Control de versiones con Git y GitHub, uso de ramas, PRs, git flow y resolución de conflictos.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["GitHub", "Branches", "Merge", "Git Flow", "PRs"],
    type: "DevOps",
    yearStarted: 2019,
    projectsUsedIn: ["Todos"],
    whyILikeIt:
      "Esencial para trabajo en equipo, control de versiones y colaboración sin errores.",
    commonUseCases:
      "Gestión de versiones, colaboración en equipo, revisión de código, automatización de despliegue.",
    resources: [
      "https://git-scm.com/doc",
      "https://www.atlassian.com/git/tutorials",
    ],
  },
];
