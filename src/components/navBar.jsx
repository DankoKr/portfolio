import { Link } from 'react-router-dom';

export function NavBar() {
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 p-4'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-center'>
          <div className='inline-flex items-center justify-center rounded-full bg-gray-900/60 backdrop-blur-sm'>
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className='px-4 py-2 text-sm text-gray-200 hover:text-white transition-colors hover:underline hover:scale-105'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
