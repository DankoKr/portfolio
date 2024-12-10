import PropTypes from 'prop-types';

export function ProjectCard({ project }) {
  const { title, imageSrc, description, link } = project;

  return (
    <div className='flex flex-col md:flex-row max-w-5xl mx-auto my-8 rounded-lg overflow-hidden shadow-lg'>
      <div className='md:w-6/12 p-4'>
        <div className='h-full bg-gray-100 rounded-lg overflow-hidden shadow-inner'>
          <img
            src={imageSrc}
            alt={`${title} Image`}
            className='w-full h-full object-cover'
            loading='lazy'
            onError={(e) => {
              e.target.src = '/images/default.jpg';
            }}
          />
        </div>
      </div>

      <div className='md:w-6/12 p-4 flex flex-col justify-between'>
        <div className='bg-gray-100 p-6 rounded-lg mb-4'>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>DESCRIPTION</h3>
          <p className='text-gray-600'>{description}</p>
        </div>

        <div className='bg-gray-100 p-4 rounded-lg shadow-inner'>
          <a
            href={link.href}
            className='flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors'
            target='_blank'
            rel='noopener noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
              />
            </svg>
            {link.text}
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
      text: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
