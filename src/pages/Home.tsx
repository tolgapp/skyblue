import Calculator from '../components/Calculator';
import EnergyBenefits from '../components/EnergyBenefits';
import ImageWithTitle from '../components/ImageWithTitle';
import type { HomeProps } from '../types';

const Home: React.FC<HomeProps> = ({ formData, setFormData }) => {
  return (
    <div className="bg-blue-900 flex flex-col">
      <ImageWithTitle />
      <Calculator formData={formData} setFormData={setFormData} />
      <EnergyBenefits />
    </div>
  );
};
export default Home;
