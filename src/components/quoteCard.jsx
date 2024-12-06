import QuoteImage from '../assets/images/learn.jpg';

export function QuoteCard() {
  return (
    <div className='rounded-xl bg-gray-900/60 backdrop-blur-sm overflow-hidden shadow-md h-full flex flex-col'>
      <div className='relative'>
        <img
          src={QuoteImage}
          alt='Quote background'
          className='object-cover w-full h-60'
        />
      </div>
      <div className='flex flex-grow items-center justify-center p-4'>
        <p className='text-lg font-medium text-gray-300 text-center'>
          &quot;Ask, and you will receive; seek, and you will find; knock, and
          the door will be opened to you&quot;
        </p>
      </div>
    </div>
  );
}
