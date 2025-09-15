import Calculator from '../components/Calculator';
import EnergyBenefits from '../components/EnergyBenefits';
import ImageWithTitle from '../components/ImageWithTitle';
import type { HomeProps } from '../types';

const Home: React.FC<HomeProps> = ({ formData, setFormData }) => {
  return (
    <main className="bg-blue-900 flex flex-col gap-8">
      <ImageWithTitle />
      <Calculator formData={formData} setFormData={setFormData} />
      <EnergyBenefits marginTop={10} marginX={18}/>
    </main>
  );
};
export default Home;
