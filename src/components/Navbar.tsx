import { useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  }

  return (
    <header className="relative flex items-center sm:h-25 justify-between w-full px-18">
      <Logo />
      <button onClick={handleClick} className="font-bold border p-3 px-5 rounded-lg cursor-pointer">Menu</button>
      {isClicked && <Menu />}
    </header>
  );
};
export default Navbar;
