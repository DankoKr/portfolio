import GitHubImage from '../assets/images/dogo.jpg';

export function GithubProfile() {
  return (
    <div className='flex flex-col items-center text-center'>
      <a
        href='https://github.com/DankoKr'
        target='_blank'
        rel='noopener noreferrer'
        className='w-36 h-36 rounded-full overflow-hidden bg-gray-800 border-2 border-[#4a9aba] mb-3'
      >
        <img
          src={GitHubImage}
          alt='Profile picture'
          width={144}
          height={144}
          className='w-full h-full object-cover'
        />
      </a>
      <h2 className='text-lg font-medium text-[#4a9aba]'>DankoKr</h2>
    </div>
  );
}
