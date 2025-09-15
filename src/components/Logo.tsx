import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}>
      <h1 className="font-[OpenSansVar] font-bold text-4xl z-10 text-white tracking-wider">
        SKY
        <span className="z-30 font-mono font-bold text-4xl text-amber-50">
          ⚡︎
        </span>
        BLUE
      </h1>
    </Link>
  );
};
export default Logo;
