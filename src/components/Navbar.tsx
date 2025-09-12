import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex items-center sm:h-25 justify-between w-full px-18">
      <Logo />
      <h2 className="font-bold border p-3 px-5 rounded-lg cursor-pointer">Menü</h2>
    </div>
  );
};
export default Navbar;
