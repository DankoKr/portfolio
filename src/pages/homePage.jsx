import { NavBar } from '../components/navBar';
import { IntroSection } from '../components/introSection';
import { RoleCard } from '../components/roleCard';
import { TechStack } from '../components/techStack';
import { Education } from '../components/education';
import { QuoteCard } from '../components/quoteCard';
import { GithubProfile } from '../components/githubProfile';

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-950 text-white'>
      <NavBar />
      <main className='container mx-auto px-4 pt-20'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 max-w-6xl mx-auto'>
          {/* Left Column */}
          <div className='space-y-6'>
            <IntroSection />
            <RoleCard />
            <TechStack />
          </div>

          {/* Center Column */}
          <div className='flex items-center justify-center px-12'>
            <GithubProfile />
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            <QuoteCard />
            <Education />
          </div>
        </div>
      </main>
    </div>
  );
}
