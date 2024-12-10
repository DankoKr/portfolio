import { motion } from 'framer-motion';
import { NavBar } from '../components/navBar';
import { IntroSection } from '../components/introSectionCard';
import { RoleCard } from '../components/roleCard';
import { TechStack } from '../components/techStackCard';
import { Education } from '../components/educationCard';
import { QuoteCard } from '../components/quoteCard';
import { GithubProfile } from '../components/githubProfileCard';
import { Experience } from '../components/experienceCard';

const directionVariants = {
  top: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  bottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  left: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  right: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
};

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <NavBar />
      <main className='container mx-auto px-4 pt-20 mb-12'>
        <motion.div
          initial='hidden'
          animate='visible'
          transition={{ staggerChildren: 0.2 }}
          className='grid grid-cols-3 grid-rows-[auto_auto_auto] gap-x-6 gap-y-2 max-w-6xl mx-auto'
        >
          <motion.div
            variants={directionVariants.left}
            className='col-span-3 md:col-span-2'
          >
            <IntroSection />
          </motion.div>
          <motion.div
            variants={directionVariants.top}
            className='col-span-3 md:col-span-1 row-span-3 flex flex-col'
          >
            <div>
              <Experience />
            </div>
            <motion.div
              variants={directionVariants.right}
              className='flex-grow mt-2'
            >
              <QuoteCard />
            </motion.div>
          </motion.div>
          <motion.div
            variants={directionVariants.right}
            className='col-span-3 md:col-span-1 flex flex-col gap-2'
          >
            <RoleCard />
            <TechStack />
          </motion.div>
          <motion.div
            variants={directionVariants.bottom}
            className='col-span-3 md:col-span-1 flex items-center justify-center'
          >
            <GithubProfile />
          </motion.div>
          <motion.div
            variants={directionVariants.top}
            className='col-span-3 md:col-span-2'
          >
            <Education />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
