import { usePrices } from '../context/PriceProvider';
import { useTariff } from '../context/TariffProvider';
import { useUserInputs } from '../context/UserInputsProvider';

const SelectedTariff = () => {
  const { selectedTariff } = useTariff();
  const {userInput} = useUserInputs()
  const { pricePerKwh, fixCosts, fixedFlexibleCosts } = usePrices();

  if (!selectedTariff) return null; 

  const monthlyPrice = selectedTariff.calculatePrice(
    Number(userInput.consumption),
    pricePerKwh,
    selectedTariff.duration >= 12 ? fixCosts : fixedFlexibleCosts
  );

  const yearlyPrice = monthlyPrice * 12;

  return (
    <section className="w-full mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-6xl font-bold text-blue-900 mb-4">
        {selectedTariff.name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        <div>
          <p className="text-sm text-gray-500 mb-1">Contract Duration</p>
          <p className="text-lg font-semibold">
            {selectedTariff.duration}{' '}
            {selectedTariff.duration === 1 ? 'month' : 'months'}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-md text-gray-500 mb-1">
              Estimated monthly price
            </p>
            <p className="text-4xl font-semibold">
              {monthlyPrice.toFixed(2)} €
            </p>
          </div>
          <div>
            <p className="text-md text-gray-500 mb-1">Estimated yearly price</p>
            <p className="text-4xl font-semibold">{yearlyPrice.toFixed(2)} €</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Includes Bonus</p>
          <p className="text-lg font-semibold">
            {selectedTariff.duration >= 12 ? '✔️ Yes – 10% discount' : '❌ No'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelectedTariff;
