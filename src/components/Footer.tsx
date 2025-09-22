import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex w-full px-4 sm:px-18 bg-blue-400 justify-between sm:items-start p-8 mt-16 sm:h-60 text-white">
      <div className="flex flex-col rounded-lg gap-8">
        <Logo />
        <div className="flex items-center gap-3">
          <h3>A project by </h3>
          <Link to="https://www.tolgapp.de">
            <img
              src="/images/tolgapp-logo-light.png"
              alt="tolgapp logo light"
              className="w-14 h-auto border p-1 rounded-lg cursor-pointer hover:scale-105"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-x-16 gap-3 sm:gap-0">
        <div className="flex flex-col space-y-2">
          <Link to="#" className="hover:underline">
            About Us
          </Link>
          <Link to="#" className="hover:underline">
            Careers
          </Link>
          <Link to="#" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link to="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="#" className="hover:underline">
            Help Center
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="#" className="hover:underline">
            Sustainability
          </Link>
          <Link to="#" className="hover:underline">
            Investor Relations
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
