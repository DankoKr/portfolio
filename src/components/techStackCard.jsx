import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiFigma,
  SiPostgresql,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

export function TechStack() {
  const technologies = [
    { icon: SiJavascript, label: 'JS' },
    { icon: SiTypescript, label: 'TS' },
    { icon: SiReact, label: 'React' },
    { icon: SiTailwindcss, label: 'TW' },
    { icon: SiPython, label: 'Python' },
    { icon: SiPostgresql, label: 'PSQL' },
    { icon: FaJava, label: 'Java' },
    { icon: SiFigma, label: 'Figma' },
  ];

  return (
    <div className='rounded-xl bg-gray-900/60 backdrop-blur-sm p-6'>
      <h2 className='text-xl font-semibold mb-4'>Tech Stack</h2>
      <div className='grid grid-cols-4 gap-4'>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className='flex items-center justify-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors'
          >
            <tech.icon className='w-6 h-6' />
          </div>
        ))}
      </div>
    </div>
  );
}
