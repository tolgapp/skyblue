import { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <header className="relative flex items-center sm:h-25 justify-between w-full px-18">
      <Logo />
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-3 font-bold border p-3 px-5 rounded-lg cursor-pointer"
      >
        <div className="font-semibold">{isClicked ? 'Back' : 'Menu'}</div>
        <span className="flex flex-col gap-1">
          <span className="h-0.5 w-5 bg-white"></span>
          <span className="h-0.5 w-5 bg-white"></span>
          <span className="h-0.5 w-5 bg-white"></span>
        </span>
      </button>
      {isClicked && <Menu setIsClicked={setIsClicked} />}
    </header>
  );
};

export default Navbar;
