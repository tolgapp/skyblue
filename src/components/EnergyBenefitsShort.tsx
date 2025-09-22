import { FaBolt, FaLeaf, FaWifi } from 'react-icons/fa';
import type { EnergyBenefitsProps } from '../types';

const benefits = [
  {
    icon: <FaBolt className="text-4xl text-yellow-400" />,
    title: 'Fast Switching',
    description:
      'Switch your electricity provider in just a few minutes – completely online.',
    buttonText: 'Switch now',
  },
  {
    icon: <FaLeaf className="text-4xl text-green-500" />,
    title: '100% Green Energy',
    description:
      'Our plans use only sustainable energy from renewable sources.',
    buttonText: 'Learn more',
  },
  {
    icon: <FaWifi className="text-4xl text-purple-500" />,
    title: 'Smart Meter Integration',
    description:
      'Track your real-time energy usage with smart meter technology.',
    buttonText: 'Explore features',
  },
];

const EnergyBenefitsShort = ({ marginX, marginTop }: EnergyBenefitsProps) => {
  return (
    <div
      className={`grid grid-cols-1 mt-${marginTop} mx-${marginX} md:grid-cols-3 gap-6 p-4 sm:p-10 bg-blue-400 rounded-xl`}
    >
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
        >
          {benefit.icon}
          <h3 className="text-xl font-bold mt-4 text-blue-950">
            {benefit.title}
          </h3>
          <p className="text-gray-600 mt-2">{benefit.description}</p>
          <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            {benefit.buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EnergyBenefitsShort;
