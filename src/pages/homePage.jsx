import { NavBar } from '../components/navBar';
import { IntroSection } from '../components/introSection';
import { RoleCard } from '../components/roleCard';
import { TechStack } from '../components/techStack';
import { Education } from '../components/education';
import { QuoteCard } from '../components/quoteCard';
import { GithubProfile } from '../components/githubProfile';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <NavBar />
      <main className='container mx-auto px-4 pt-20'>
        <div className='grid grid-cols-3 grid-rows-[auto_auto_auto] gap-x-6 gap-y-2 max-w-6xl mx-auto'>
          <div className='col-span-3 md:col-span-2'>
            <IntroSection />
          </div>
          <div className='col-span-3 md:col-span-1 row-span-2 flex items-center justify-center'>
            <QuoteCard />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <RoleCard />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <GithubProfile />
          </div>
          <div className='col-span-3 md:col-span-1'>
            <TechStack />
          </div>
          <div className='col-span-3 md:col-span-2'>
            <Education />
          </div>
        </div>
      </main>
    </div>
  );
}
