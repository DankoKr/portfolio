import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../constants/navLinks';

export function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 p-4 bg-transparent'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex justify-center'>
          <div className='inline-flex items-center justify-center rounded-full bg-gray-900/60 backdrop-blur-md shadow-md'>
            {navLinks.map(({ label, to }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white underline decoration-2 decoration-[#1a3a4a]'
                      : 'text-gray-200 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
