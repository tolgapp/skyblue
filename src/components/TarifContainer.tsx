import type { TarifContainerProps } from '../types';

const TarifContainer: React.FC<TarifContainerProps> = ({
  tariff,
  consumption,
  pricePerKwh,
  fixCosts,
  location,
}) => {
  
  const price = tariff
    .calculatePrice(Number(consumption), pricePerKwh, fixCosts)
    .toFixed(2);

  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 flex flex-col justify-between h-full min-w-80 mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        {tariff.name}
      </h2>
      <div className="flex flex-col gap-5 mt-4">
        <p className="text-lg text-gray-700">
          {tariff.duration} {tariff.duration <= 1 ? 'Month' : 'Months'}
        </p>
        <div className="flex items-baseline space-x-2">
          <h4 className="text-xl text-gray-900">Price:</h4>
          <span className="text-3xl font-semibold text-blue-600">
            {price} €
          </span>
        </div>
        <p className="text-sm text-gray-600">/ per month</p>

        <button className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 mt-4 transition duration-300 ease-in-out transform hover:scale-105">
          Check details
        </button>
      </div>
    </div>
  );
};
export default TarifContainer;
