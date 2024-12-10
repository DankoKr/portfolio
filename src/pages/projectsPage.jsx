import { motion } from 'framer-motion';
import { NavBar } from '../components/navBar';
import { ProjectCard } from '../components/projectCard';
import { projects } from '../constants/projects';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProjectsPage() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <NavBar />
      <main className='container mx-auto px-4 pt-20 pb-12'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='grid grid-cols-1 gap-6 max-w-6xl mx-auto'
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={projectVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
}
