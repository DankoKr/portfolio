import MovieJournalImage from "../assets/images/movie-journal.png";
import EcuPlatformImage from "../assets/images/ecuPlatform.png";
import SnakeGameImage from "../assets/images/snakeGame.png";
import TwoDGameImage from "../assets/images/2d-game.png";
import SnapFlirtImage from "../assets/images/snapflirt.png";
import BabysitaImage from "../assets/images/spring.png";

export const projects = [
    {
    id: 1,
    imageSrc: MovieJournalImage,
    title: "Movie Journal",
    description:
      "A web platform that lets you track the movies you want to watch, link them to YouTube trailers, and explore the movies your friends are watching",
    link: {
      href: "https://movie-journal-production.up.railway.app/",
      text: "View Project",
    },
    tech: ["Laravel", "Tailwind CSS", "PHP"],
  },
  {
    id: 2,
    imageSrc: SnakeGameImage,
    title: "Snake Game",
    description:
      "This is a classic Snake game built using TypeScript, featuring the D3 library for SVG rendering. It includes various food types, a points system, and engaging arcade-style audio effects.",
    link: {
      href: "https://snake-game-zeta-nine.vercel.app",
      text: "View Project",
    },
    tech: ["Vite", "CSS", "TS", "D3.js"],
  },
  {
    id: 3,
    imageSrc: EcuPlatformImage,
    title: "European Cheer Union platform",
    description:
      "A document management platform developed for the European Cheer Union, designed to facilitate member and document administration. Some aspects, such as roles for judges and committee members, are not included due to copyright restrictions.",
    link: {
      href: "https://github.com/DankoKr/ecu",
      text: "View Project",
    },
    tech: ["React", "Tailwind CSS", "Node.js", "ExpressJS", "PostgreSQL"],
  },
  {
    id: 4,
    imageSrc: TwoDGameImage,
    title: "2D game portfolio extension",
    description:
      "This is a 2D game created using Kaboom JS, designed as an extension of my portfolio to provide additional personal information for those who are interested.",
    link: {
      href: "https://2d-portfolio-extension.vercel.app/",
      text: "View Project",
    },
    tech: ["Vite", "CSS", "Kaboom.js"],
  },
  {
    id: 5,
    imageSrc: SnapFlirtImage,
    title: "SnapFlirt",
    description:
      "This document integrates the capabilities of the Google Cloud Vision API for image analysis with Llama 3.1 70B (hosted on Groq) to generate a playful or flirty line inspired by the image. Since the project operates on the free tier of Render, it may take up to 50 seconds to generate the first flirty line after inactivity, though subsequent responses are unaffected.",
    link: {
      href: "https://snap-flirt-web.vercel.app",
      text: "View Project",
    },
    tech: ["Llama 3.1 70B", "Google Cloud Vision API", "React"],
  },
  {
    id: 6,
    imageSrc: BabysitaImage,
    title: "Babysita API",
    description:
      "This API is a component of my Semester 3 project, serving as the backend for a babysitting website. The objective of this project was to develop a full-stack application utilizing a Gitlab pipeline and Docker.",
    link: {
      href: "https://github.com/DankoKr/babysita",
      text: "View Project",
    },
    tech: ["Java", "Spring Boot", "Gradle", "Docker", "CI/CD"],
  },
];
