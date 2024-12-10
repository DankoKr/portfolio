import PropTypes from 'prop-types';
import UrlImage from '../assets/images/url.png';

export function ProjectCard({ project }) {
  const { title, imageSrc, description, link, tech } = project;

  return (
    <div className='flex flex-col md:flex-row max-w-5xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg'>
      <div className='md:w-6/12 p-2 md:p-4'>
        <div className='h-full bg-gray-900/60 rounded-lg overflow-hidden shadow-inner'>
          <img
            src={imageSrc}
            alt={`${title} Image`}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='md:w-6/12 p-2 md:p-4 flex flex-col justify-between'>
        <div className='bg-gray-900/60 p-4 md:p-6 rounded-lg mb-2 md:mb-4 shadow-md'>
          <h3 className='text-2xl font-bold text-white mb-2'>{title}</h3>
          <p className='text-gray-300 mb-4'>{description}</p>

          <div className='flex flex-wrap gap-2'>
            {tech.map((technology, index) => (
              <span
                key={index}
                className='bg-[#1a3a4a] text-white text-xs font-semibold px-2 py-1 rounded-full'
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className='bg-[#1a3a4a] p-2 md:p-4 rounded-lg shadow-inner'>
          <a
            href={link.href}
            className='flex items-center justify-center text-white hover:bg-opacity-80 transition-colors w-full py-2 rounded-md text-sm text-center'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={UrlImage}
              alt='URL Icon'
              className='h-8 w-8 hover:scale-150'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.shape({
      href: PropTypes.string.isRequired,
    }).isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
