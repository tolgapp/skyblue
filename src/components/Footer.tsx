import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex w-full px-18 bg-blue-400 justify-between items-center p-4 mt-16">
      <Logo />
      <div className="flex flex-col">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
      </div>
    </footer>
  );
};
export default Footer;
