import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  return (
    <button
      className="w-12 px-2 h-10 bg-white text-black rounded-lg font-medium cursor-pointer"
      onClick={() => navigate(-1)}
    >
      ←
    </button>
  );
};
export default Back;
