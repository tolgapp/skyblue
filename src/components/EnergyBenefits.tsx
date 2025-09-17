import { FaBolt, FaLeaf, FaWifi } from 'react-icons/fa';
import type { EnergyBenefitsProps } from '../types';

const benefits = [
  {
    icon: <FaBolt className="text-5xl text-yellow-400" />,
    title: 'Fast Switching',
    description:
      'Switch your electricity provider in just a few minutes – completely online.',
    buttonText: 'Switch now',
    imageAlt: 'Fast switching mockup',
    image: '/images/switch.jpg',
  },
  {
    icon: <FaLeaf className="text-5xl text-green-500" />,
    title: '100% Green Energy',
    description:
      'Our plans use only sustainable energy from renewable sources.',
    buttonText: 'Learn more',
    imageAlt: 'Green energy mockup',
    image: '/images/eco.jpg',
  },
  {
    icon: <FaWifi className="text-5xl text-purple-500" />,
    title: 'Smart Meter Integration',
    description:
      'Track your real-time energy usage with smart meter technology.',
    buttonText: 'Explore features',
    imageAlt: 'Smart meter mockup',
    image: '/images/smart.png',
  },
];

const EnergyBenefits = ({ marginX, marginTop }: EnergyBenefitsProps) => {
  return (
    <div className={`space-y-12 mt-${marginTop} px-${marginX}`}>
      {benefits.map((benefit, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center rounded-xl bg-white shadow-md overflow-hidden ${
              isEven ? 'md:flex-row' : 'md:flex-row-reverse '
            }`}
          >
            {/* Mockup Image Placeholder */}
            <div className="w-full md:w-1/2 h-[35rem] flex justify-center items-center">
              <img
                className="w-full h-full object-cover "
                src={benefit.image}
                alt={benefit.imageAlt}
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start text-left p-6 space-y-4 px-[4.5rem]">
              <div>{benefit.icon}</div>
              <h3 className="text-4xl font-bold text-blue-900">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-2xl">{benefit.description}</p>
              <button className="mt-2 bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                {benefit.buttonText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnergyBenefits;
