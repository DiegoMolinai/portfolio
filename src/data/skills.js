import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
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
  },
  {
    name: "Apollo Client",
    icon: SiApollographql,
    color: "#6f53fb",
    description:
      "Integración de aplicaciones React con Apollo Client para consumo de APIs GraphQL, manejo de caché, estado local y lógica de red. Uso de fragments, mutations, subscriptions y loading policies.",
    experience: "+2 años",
    level: "Intermedio",
    tools: ["GraphQL", "Apollo Cache", "Fragments", "Reactive Vars", "Type Policies"],
    type: "Frontend/Data",
    yearStarted: 2022,
    projectsUsedIn: ["Dashboard de Analítica"],
  },
  {
    name: "JavaScript",
    icon: FaJsSquare,
    color: "#F7DF1E",
    description:
      "JavaScript moderno (ES6+), promesas, async/await, funciones puras, manejo de arrays, programación funcional y eventos en el DOM.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["ES6+", "Fetch", "Promises", "Async/Await", "Array methods"],
    type: "Lenguaje",
    yearStarted: 2019,
    projectsUsedIn: ["Todos"],
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E44D26",
    description:
      "Estructuración semántica de contenido, etiquetas accesibles, formularios nativos, multimedia y validaciones HTML.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["Formularios", "Multimedia", "Web Semántica", "Validaciones"],
    type: "Frontend",
    yearStarted: 2019,
    projectsUsedIn: ["Landing Page para Startup", "Portafolio Personal"],
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
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#3C873A",
    description:
      "Creación de servidores con Express, desarrollo de APIs REST, middleware, rutas protegidas, validaciones y controladores.",
    experience: "+2 años",
    level: "Intermedio",
    tools: ["Express", "JWT", "Mongoose", "Controllers", "Routing"],
    type: "Backend",
    yearStarted: 2022,
    projectsUsedIn: ["API de Productos", "Gestor de Tareas"],
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    description:
      "Control de versiones diario con Git y GitHub, uso de ramas, pull requests, git flow, merge y resolución de conflictos.",
    experience: "+5 años",
    level: "Avanzado",
    tools: ["GitHub", "Branches", "Merge", "Git Flow", "PRs"],
    type: "DevOps",
    yearStarted: 2019,
    projectsUsedIn: ["Todos"],
  },
];
