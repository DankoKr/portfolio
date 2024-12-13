import EcuPlatformImage from '../assets/images/ecuPlatform.png';
import SnakeGameImage from '../assets/images/snakeGame.png';
import BabysitaImage from '../assets/images/spring.png';

export const projects = [
  {
    id: 1,
    imageSrc: SnakeGameImage,
    title: 'Snake Game',
    description:
      'This is a classic Snake game built using TypeScript, featuring the D3 library for SVG rendering. It includes various food types, a points system, and engaging arcade-style audio effects.',
    link: {
      href: 'https://github.com/DankoKr/snakeGame',
      text: 'View Project',
    },
    tech: ['Vite', 'CSS', 'TS', 'D3.js'],
  },
  {
    id: 2,
    imageSrc: EcuPlatformImage,
    title: 'European Cheer Union platform',
    description:
      'A document management platform developed for the European Cheer Union, designed to facilitate member and document administration. Some aspects, such as roles for judges and committee members, are not included due to copyright restrictions.',
    link: {
      href: 'https://github.com/DankoKr/ecu',
      text: 'View Project',
    },
    tech: ['React', 'Tailwind CSS', 'Node.js', 'ExpressJS', 'PostgreSQL'],
  },
  {
    id: 3,
    imageSrc: BabysitaImage,
    title: 'Babysita API',
    description:
      'This API is a component of my Semester 3 project, serving as the backend for a babysitting website. The objective of this project was to develop a full-stack application utilizing a Gitlab pipeline and Docker.',
    link: {
      href: 'https://github.com/DankoKr/babysita',
      text: 'View Project',
    },
    tech: ['Java', 'Spring Boot', 'Gradle', 'Docker', 'CI/CD'],
  },
];
