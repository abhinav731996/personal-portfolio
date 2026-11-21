
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaGoogle,
} from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import {
  SiNextdotjs,
  SiFastapi,
  SiPostgresql,
  SiFirebase,
  SiSass,
  SiGooglecloud,
} from "react-icons/si";

export const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "SCSS", icon: SiSass },
    ],
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Developing APIs and backend application logic.",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs", icon: FiCode },
    ],
  },
  {
    id: 3,
    title: "Database & Storage",
    description: "Working with structured databases and cloud storage.",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    id: 4,
    title: "Cloud & Development Tools",
    description: "Application deployment and development workflows.",
    skills: [
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
    ],
  },
];
