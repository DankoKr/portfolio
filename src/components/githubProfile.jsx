import GitHubImage from '../assets/images/dogo.jpg';

export function GithubProfile() {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='w-24 h-24 rounded-full overflow-hidden bg-gray-800 border-2 border-[#4a9aba] mb-3'>
        <img
          src={GitHubImage}
          alt='Profile picture'
          width={96}
          height={96}
          className='w-full h-full object-cover'
        />
      </div>
      <h2 className='text-lg font-medium text-[#4a9aba]'>Tim Gatzke</h2>
    </div>
  );
}
