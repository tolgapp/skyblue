import Calculator from '../components/Calculator';
import EnergyBenefits from '../components/EnergyBenefits';
import ImageWithTitle from '../components/ImageWithTitle';

const Home = () => {
  return (
    <main className="bg-blue-900 flex flex-col gap-8">
      <ImageWithTitle />
      <Calculator  />
      <EnergyBenefits marginTop={10} marginX={18} />
    </main>
  );
};
export default Home;
