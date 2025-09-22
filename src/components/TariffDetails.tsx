import { Link, useSearchParams } from 'react-router-dom';
import { calculatePrice, fixCosts, fixedFlexibleCosts, pricePerKwh } from '../utils/helper';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const TariffDetails = () => {
   const selectedTariff = useSelector((state: RootState) => state.tariff.selected);
   const {consumption} = useSelector((state: RootState) => state.userInput);
   
   if (!selectedTariff) {
     return (
       <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg shadow-md mt-6">
        selectedTariff not found.
      </div>
    );
  }
  
  const costs = selectedTariff.duration >= 12 ? fixCosts : fixedFlexibleCosts;
  const monthlyPrice = calculatePrice(Number(consumption), pricePerKwh, costs);


  const yearlyPrice = (monthlyPrice * 12).toFixed(2);
 
  return (
    <section className="w-full mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-8 border border-gray-200">
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
            <p className="text-3xl font-semibold">{monthlyPrice} €</p>
          </div>
          <div>
            <p className="text-md text-gray-500 mb-1">Estimated yearly price</p>
            <p className="text-3xl font-semibold">{yearlyPrice} €</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Includes Bonus</p>
          <p className="text-lg font-semibold">
            {selectedTariff.duration >= 12 ? '✔️ Yes – 10% discount' : '❌ No'}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Calculation </p>
          <p className="text-md">
            For <strong>{consumption} kWh/year</strong> at{' '}
            <strong>{pricePerKwh} €/kWh</strong> and{' '}
            <strong>
              {selectedTariff.duration >= 12 ? fixCosts : fixedFlexibleCosts} €
            </strong>{' '}
            fixed monthly costs.
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-5 py-2 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          Back to overview
        </button>
        <Link
          to={'/tariff-signup'}
          className="px-5 py-2 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer text-center"
        >
          This is my selectedTariff →
        </Link>
      </div>
    </section>
  );
};

export default TariffDetails;
