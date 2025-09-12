import { useNavigate } from 'react-router-dom';

const Back = () => {
  const navigate = useNavigate();

  return (
    <button
      className="w-fit px-2 h-10 bg-white text-black rounded-lg font-medium cursor-pointer"
      onClick={() => navigate(-1)}
    >
      BACK
    </button>
  );
};
export default Back;
