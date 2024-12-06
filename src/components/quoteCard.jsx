import QuoteImage from '../assets/images/forest.jpeg';

export function QuoteCard() {
  return (
    <div className='rounded-xl bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-md h-60 md:h-80'>
      <div className='relative h-2/3'>
        <img
          src={QuoteImage}
          alt='Quote background'
          className='object-cover w-full h-full'
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
