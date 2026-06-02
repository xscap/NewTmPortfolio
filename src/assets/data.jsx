//These are mainly data sections works as a json
import heroImg from "./heroimg.jpg";
import {
  FaUser,
  FaCode,
  FaRocket,
  FaHeart,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { SiJira,SiJupyter } from "react-icons/si";
export const heroData = [
  {
    title: "Arnab Paul",
    role: "Frontend Developer",
    description:
      "I build responsive, user-friendly and interactive web applications using ReactJS and JavaScript. I enjoy turning ideas into real products and solving problems through code.",
    image: heroImg,
    location: "Kolkata, India",
  },
];

export const cardData = [
  {
    id: 1,
    icon: FaUser,
    title: "Who I Am",
    description:
      "A junior frontend developer who loves building clean, responsive and accessible web experiences.",
  },
  {
    id: 2,
    icon: FaCode,
    title: "What I Do",
    description:
      "I build web applications using ReactJS, JavaScript and modern frontend tools and libraries.",
  },
  {
    id: 3,
    icon: FaRocket,
    title: "My Goal",
    description:
      "To grow as a developer, build impactful products and keep learning every day.",
  },
  {
    id: 4,
    icon: FaHeart,
    title: "Why Work With Me",
    description:
      "I'm dedicated, curious and consistent. I deliver quality work and love collaborating in teams.",
  },
];

export const TechStackData = [
  { id: 1, logo: FaHtml5, iconname: "HTML", color: "#ff6b35" },
  {
    id: 2,
    logo: FaCss3Alt,
    iconname: "CSS",
    color: "#7c5cff",
  },
  { id: 3, logo: FaJs, iconname: "JavaScript", color: "#ffd60a" },
  {
    id: 4,
    logo: RiReactjsFill,
    iconname: "ReactJS",
    color: "#00d4ff",
  },
  {
    id: 5,
    logo: IoLogoFirebase,
    iconname: "Firebase",
    color: "#ff9800",
  },
  {
    id: 6,
    logo: FaGithub,
    iconname: "GitHub",
    color: "#333333",
  },
  {
    id: 7,
    logo: FaFigma,
    iconname: "Figma",
    color: "#a259ff",
  },
  {
    id: 8,
    logo: GrMysql,
    iconname: "MySQL",
    color: "#00758f",
  },
  { id: 9, 
    logo: SiJira, 
    iconname: "Jira",
    color: "#0052cc"
  },
  { 
    id: 10, 
  logo: SiJupyter, 
  iconname: "Jupyter Notebook",
  color: "#f37626"
  },
  {
    id: 11,
    logo: FaPython,
    iconname: "Python",
    color: "#306998",
  }

];

export const currentlyLearning = [
  {
    id: 1,
    title: 'Advanced React Patterns',
  },
  { id: 2, title: 'API Architecture' },
  { id: 3, title: 'Performance Optimization' },
  { id: 4, title: 'Shopify Custom Development' },
  { id: 5, title: 'Modern Frontend Workflows' },
]

export const workProjects = [
  {
    id: 1,
    title: 'Curozy — Medicine Reminder App',
    description:
      'A medicine reminder prototype that tracks medicine timing and reminder intervals with future plans for notification APIs and enhanced UI personalization.',
    tags: ['ReactJS', 'Firebase', 'CSS'],
    image: null,
  },
  {
    id: 2,
    title: 'Shopify Store Customization & Filtering',
    description:
      'Worked on product filtering, collection customization and UI enhancements to improve user experience and store performance.',
    tags: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    image: null,
  },
  {
    id: 3,
    title: 'News App',
    description:
      'A news application that fetches real-time news using news API with category filtering and search functionality.',
    tags: ['ReactJS', 'REST API', 'CSS'],
    image: null,
  },
]

export const experienceTimeline = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Current Company',
    period: '2023 - Present',
    details: 'Working on frontend applications using ReactJS, API integrations, UI development and Shopify customization.',
  },
  {
    id: 2,
    role: 'Junior Developer',
    company: 'Early Projects & Learning',
    period: '2021 - 2023',
    details: 'Built multiple projects, explored APIs and improved skills in frontend development.',
  },
]

export const beyondCode = [
  { id: 1, title: 'Long Rides', desc: 'I love long solo rides that help me think and reset.' },
  { id: 2, title: 'Music', desc: 'Music keeps me focused and motivated.' },
  { id: 3, title: 'UI & Animations', desc: 'I enjoy creating smooth animations and interactive UI.' },
  { id: 4, title: 'Always Learning', desc: 'I believe in learning every day and staying consistent.' },
]
