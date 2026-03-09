import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  worthy,
  toptal,
  clients,
  rulings,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Builder",
    icon: mobile,
  },
  {
    title: "Platform Architect",
    icon: backend,
  },
  {
    title: "Founder & Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: mobile,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Toptal Solutions",
    icon: toptal,
    iconBg: "#0A2E28",
    date: "2020 - 2021",
    points: [
      "Built and shipped production React applications for enterprise clients through Toptal's elite talent network.",
      "Implemented complex state management patterns, responsive layouts, and cross-browser compatibility.",
      "Collaborated with distributed teams spanning designers, PMs, and senior engineers on tight deadlines.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Clients Sky Digital",
    icon: clients,
    iconBg: "#134E4A",
    date: "2021 - 2022",
    points: [
      "Developed cross-platform mobile applications using React Native, delivering iOS and Android from a single codebase.",
      "Integrated native device APIs, push notifications, and real-time data syncing for client applications.",
      "Led mobile architecture decisions and established coding standards for the development team.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Rulings.law",
    icon: rulings,
    iconBg: "#0A2E28",
    date: "2022 - 2023",
    points: [
      "Reimagined the entire backend infrastructure for a legal web scraping platform running 33 concurrent bots.",
      "Converted the full codebase to TypeScript, dramatically reducing runtime errors and improving maintainability.",
      "Built robust data pipelines and automated monitoring systems that eliminated chronic system crashes.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Worthy Cause",
    icon: worthy,
    iconBg: "#134E4A",
    date: "2023 - 2024",
    points: [
      "Architected and developed full-stack features for a social impact platform using React, Node.js, and PostgreSQL.",
      "Implemented payment processing, user authentication, and real-time collaboration features.",
      "Optimized application performance, resulting in measurable improvements to page load times and user engagement.",
    ],
  },
  {
    title: "Founder & Builder",
    company_name: "EcoGym / The Animator Shift",
    icon: web,
    iconBg: "#0D3B35",
    date: "2024 - Present",
    points: [
      "Founded EcoGym — a mindfulness & movement platform with 200+ audio tracks, live at ecogym.space.",
      "Created The Animator Shift — a consciousness framework with a published book on Amazon, landing page, Substack, and Daily Anchor PWA.",
      "Built DressedAs — an AI wardrobe intelligence app using GPT-4o vision, consolidating web + mobile in a monorepo.",
      "Designed and shipped FitnessVoiceFlow — a voice-over production studio powered by ElevenLabs API with custom cloned voices.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "There was always something crashing in one of the 33 bots running on my legal scraping platform — until Yonathan reimagined the entire backend and converted everything to TypeScript in record time.",
    name: "William Appleby",
    designation: "CEO",
    company: "Rulings.law",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yonathan proved me wrong. His attention to both design and performance is rare.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "After Yonathan optimized our platform, our traffic increased by 50%. The combination of technical skill and creative vision is what sets him apart.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EcoGym Platform",
    description:
      "A full-scale mindfulness and movement platform with 200+ guided audio tracks, a React PWA, native mobile app (Expo/React Native), Stripe payments, and Firebase auth. Live and serving users.",
    tags: [
      {
        name: "react",
        color: "teal-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "gold-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://ecogym.space",
    live_link: "https://ecogym.space",
  },
  {
    name: "The Animator Shift",
    description:
      "A consciousness framework turned published book (Amazon), landing page, Substack newsletter, and Daily Anchor PWA. Built the full digital presence — domain, SEO, Railway deployment, conversion-first design.",
    tags: [
      {
        name: "express",
        color: "teal-text-gradient",
      },
      {
        name: "railway",
        color: "green-text-gradient",
      },
      {
        name: "pwa",
        color: "gold-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Yonathan-Admasu728/animator-shift-landing",
    live_link: "https://theanimatorshift.com",
  },
  {
    name: "DressedAs",
    description:
      "AI wardrobe intelligence app — GPT-4o vision for outfit analysis, style DNA profiling, smart purchase checking, and gap analysis. Consolidated React web + Expo React Native monorepo with dual auth.",
    tags: [
      {
        name: "gpt-4o",
        color: "teal-text-gradient",
      },
      {
        name: "react-native",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "gold-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://dressedas.com",
    live_link: "https://dressedas.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
