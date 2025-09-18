import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex w-full px-4 sm:px-18 bg-blue-400 justify-between sm:items-start p-8 mt-16 sm:h-60 text-white">
      <Logo />
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
