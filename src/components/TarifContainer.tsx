
import { usePrices } from '../context/usePrice';
import { useTariff } from '../context/useTariff';
import { useUserInputs } from '../context/useUserInputs';
import type { TarifContainerProps } from '../types';

const TarifContainer: React.FC<TarifContainerProps> = ({ tariff }) => {
  const { setSelectedTariff } = useTariff();
  const { userInput } = useUserInputs();
  const { pricePerKwh, fixCosts, fixedFlexibleCosts } = usePrices();

  const price = tariff
    .calculatePrice(
      Number(userInput.consumption),
      pricePerKwh,
      tariff.duration >= 12 ? fixCosts : fixedFlexibleCosts
    )
    .toFixed(2);

  const hasBonus = tariff.duration >= 12;

  const handleSelect = () => {
    setSelectedTariff(tariff);
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6 flex flex-col justify-between h-full w-full max-w-sm mx-auto transition-all hover:shadow-xl">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">{tariff.name}</h2>
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-gray-600 text-sm">
          Contract duration:
          <span className="font-bold pl-2 underline underline-offset-4">
            {tariff.duration} {tariff.duration === 1 ? 'month' : 'months'}
          </span>
        </p>
        {hasBonus ? (
          <div className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-md w-fit font-medium">
            Save 10% on your annual energy costs
          </div>
        ) : (
          <div className="opacity-0 text-sm py-1 font-medium">Placeholder</div>
        )}
        <div className="flex items-baseline gap-2 mt-2">
          <span className="text-lg text-gray-700">Price:</span>
          <span className="text-3xl font-semibold text-blue-700">
            {price} €
          </span>
        </div>
        <p className="text-sm text-gray-500 -mt-2">per month</p>
        <button
          onClick={handleSelect}
          className="mt-4 px-5 py-2 bg-blue-800 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-200 cursor-pointer"
        >
          Check details
        </button>
      </div>
    </div>
  );
};

export default TarifContainer;
