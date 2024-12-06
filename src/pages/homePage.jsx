import { NavBar } from '../components/navBar';
import { IntroSection } from '../components/introSectionCard';
import { RoleCard } from '../components/roleCard';
import { TechStack } from '../components/techStackCard';
import { Education } from '../components/educationCard';
import { QuoteCard } from '../components/quoteCard';
import { GithubProfile } from '../components/githubProfileCard';
import { Experience } from '../components/experienceCard';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <NavBar />
      <main className='container mx-auto px-4 pt-20 mb-12'>
        <div className='grid grid-cols-3 grid-rows-[auto_auto_auto] gap-x-6 gap-y-2 max-w-6xl mx-auto'>
          <div className='col-span-3 md:col-span-2'>
            <IntroSection />
          </div>
          <div className='col-span-3 md:col-span-1 row-span-3 flex flex-col'>
            <div>
              <Experience />
            </div>
            <div className='flex-grow mt-2'>
              <QuoteCard />
            </div>
          </div>
          <div className='col-span-3 md:col-span-1 flex flex-col gap-2'>
            <RoleCard />
            <TechStack />
          </div>
          <div className='col-span-3 md:col-span-1 flex items-center justify-center'>
            <GithubProfile />
          </div>
          <div className='col-span-3 md:col-span-2'>
            <Education />
          </div>
        </div>
      </main>
    </div>
  );
}
