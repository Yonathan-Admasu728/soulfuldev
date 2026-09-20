import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  python,
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
  clients,
  rulings,
  ecogymShot,
  shiftShot,
  dressedasShot,
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
    title: "Full-Stack Engineer",
    icon: web,
  },
  {
    title: "Automation & Web Scraping",
    icon: backend,
  },
  {
    title: "Mobile App Builder",
    icon: mobile,
  },
  {
    title: "AI Systems Evaluation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
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
    title: "Web Developer & Digital Consultant",
    company_name: "Clients Sky Digital",
    icon: clients,
    iconBg: "#134E4A",
    date: "2019 - Present",
    points: [
      "Build and maintain websites for small-business clients across a range of industries, owning the work end to end from build through launch and ongoing maintenance.",
      "Implement lead-generation systems and search-engine optimization, translating client business goals into measurable technical requirements.",
      "Serve as the sole technical contact for each engagement - scoping, delivery, troubleshooting, and long-term client support.",
    ],
  },
  {
    title: "UI / Frontend Engineer",
    company_name: "Scribble Stadium",
    icon: web,
    iconBg: "#0A2E28",
    date: "Aug 2021 - Dec 2021",
    points: [
      "Implemented a new menu design across multiple pages in partnership with the frontend team.",
      "Built modular React components serving as the primary user interaction surface.",
      "Identified and resolved defects across the application using ESLint, systematic debugging, and troubleshooting.",
    ],
  },
  {
    title: "Backend & Automation Engineer",
    company_name: "Rulings.law",
    icon: rulings,
    iconBg: "#0A2E28",
    date: "2022 - Present",
    points: [
      "Build and maintain the production data-ingestion system behind a subscription legal-research platform - web scraping bots (Puppeteer, Cheerio) collecting court rulings, hearing dates, and judge and courthouse records.",
      "Designed the MongoDB domain model - rulings, courthouses, departments, judge profiles, subscriptions, and scraper logs - backing search and subscriber features.",
      "Implemented a PDF extraction pipeline converting court-issued ruling documents into structured, queryable records.",
      "Led the TypeScript migration and a hosting-platform migration, each with documented optimization and verification passes.",
    ],
  },
  {
    title: "Founder & Lead Engineer",
    company_name: "EcoGym",
    icon: creator,
    iconBg: "#0D3B35",
    date: "2023 - Present",
    points: [
      "Designed and shipped EcoGym, a cross-platform React Native (Expo) fitness and wellness application, through full release to the Apple App Store and Google Play.",
      "Built the companion Next.js web platform with Firebase backend, authentication flows, and Sentry-based error monitoring.",
      "Operate agentic coding workflows in daily development - multi-agent task delegation, Model Context Protocol tool integrations, and structured evaluation loops that rank model-generated solutions before merge.",
      "Maintain release histories exceeding 200 commits with reproducible build and QA gates.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "There was always something crashing in one of the 33 bots running on my legal scraping platform - until Yonathan reimagined the entire backend and converted everything to TypeScript in record time.",
    name: "William Appleby",
    designation: "CEO",
    company: "Rulings.law",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUwIiBmaWxsPSIjMEQzQjM1Ii8+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNDOUEyMjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIj5XQTwvdGV4dD48L3N2Zz4=",
  },
  {
    testimonial:
    "Yonathan built Blush Estates from the ground up - the brand, the site, and the systems running behind it. He set up my home search and consultation booking so inquiries arrive organized instead of scattered across my inbox. He understood I needed something that looked like my brand and ran without me having to think about it. I send clients there now with complete confidence.",
    name: "Mia Kennedy",
    designation: "REALTOR®",
    company: "Blush Estates",
    image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjUwIiBmaWxsPSIjMEQzQjM1Ii8+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMzYiIGZvbnQtd2VpZ2h0PSI3MDAiIGZpbGw9IiNDOUEyMjciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJjZW50cmFsIj5NSzwvdGV4dD48L3N2Zz4=",
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
    image: ecogymShot,
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
    image: shiftShot,
    source_code_link: "https://theanimatorshift.com",
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
    image: dressedasShot,
    source_code_link: "https://dressedas.com",
    live_link: "https://dressedas.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
