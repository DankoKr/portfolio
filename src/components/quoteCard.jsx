import QuoteImage from '../assets/images/git.png';

export function QuoteCard() {
  return (
    <div className='rounded-xl bg-[#1a3a4a] overflow-hidden'>
      <div className='h-32 relative'>
        <img src={QuoteImage} alt='Night sky' />
      </div>
      <div className='p-6 flex items-center justify-center text-center'>
        <p className='text-lg font-medium'>
          &quot;The only way to do great work is to love what you do.&quot;
        </p>
      </div>
    </div>
  );
}
