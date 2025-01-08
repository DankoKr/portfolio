import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFigma,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export function TechStack() {
  const technologies = [
    { icon: SiJavascript, label: "JavaScript" },
    { icon: SiTypescript, label: "TypeScript" },
    { icon: SiReact, label: "React" },
    { icon: SiTailwindcss, label: "Tailwind CSS" },
    { icon: SiPython, label: "Python" },
    { icon: SiPostgresql, label: "PostgreSQL" },
    { icon: FaJava, label: "Java" },
    { icon: SiFigma, label: "Figma" },
  ];

  return (
    <div className="rounded-xl bg-gray-900/60 backdrop-blur-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center p-3
                       rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <tech.icon className="w-6 h-6" />

            <span
              className="absolute z-10 -top-7 left-1/2 transform -translate-x-1/2
                         px-2 py-1 rounded-md text-sm text-white bg-[#1a3a4a] 
                         opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity
                         pointer-events-none"
            >
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
