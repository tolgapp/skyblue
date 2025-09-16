import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = ({ setIsClicked }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const linkClasses =
    'cursor-pointer rounded-lg border border-transparent hover:border-blue-300 px-8 py-5 text-4xl font-semibold';

  return (
    <div className="absolute flex flex-col justify-start items-end pt-18 pr-18 gap-6 w-full top-24 h-screen left-0 z-50 bg-blue-400/95 text-white">
      <Link className={linkClasses} to="/" onClick={() => setIsClicked(false)}>
        HOME
      </Link>
      <Link className={linkClasses} to="/" onClick={() => setIsClicked(false)}>
        Tariffs
      </Link>
      <Link className={linkClasses} to="/" onClick={() => setIsClicked(false)}>
        Our company
      </Link>
      <Link className={linkClasses} to="/" onClick={() => setIsClicked(false)}>
        FAQ
      </Link>
      <Link className={linkClasses} to="/" onClick={() => setIsClicked(false)}>
        Contact
      </Link>
    </div>
  );
};

export default Menu;
