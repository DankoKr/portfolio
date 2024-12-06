import QuoteImageMobile from '../assets/images/git.png';
import QuoteImageDesktop from '../assets/images/forest.jpeg';

export function QuoteCard() {
  return (
    <div className='rounded-xl bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-md h-full flex flex-col'>
      <div className='relative flex-grow'>
        <img
          src={QuoteImageDesktop}
          alt='Quote background'
          className='object-cover w-full h-full hidden md:block'
        />
        <img
          src={QuoteImageMobile}
          alt='Quote background'
          className='object-cover w-full h-full md:hidden'
        />
      </div>
      <div className='p-4 flex items-center justify-center text-center'>
        <p className='text-lg font-medium text-gray-300'>
          &quot;The only way to do great work is to love what you do.&quot;
        </p>
      </div>
    </div>
  );
}
