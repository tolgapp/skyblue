import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex w-full px-18 bg-blue-400 justify-between items-start p-8 mt-16 h-60 text-white">
      <Logo />

      <div className="flex space-x-16">
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Careers
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Help Center
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:underline">
            Sustainability
          </a>
          <a href="#" className="hover:underline">
            Investor Relations
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
