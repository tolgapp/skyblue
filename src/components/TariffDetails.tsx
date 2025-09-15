import { Link, useSearchParams } from 'react-router-dom';
import type { ProductDetailsProps } from '../types';

const TariffDetails = ({ tariffs, id }: ProductDetailsProps) => {
  const tariff = tariffs.find((t) => t.duration === id);
  const [searchParams] = useSearchParams();
  const urlConsumption = searchParams.get('consumption') || '';

  if (!tariff) {
    return (
      <div className="bg-red-100 text-red-700 px-6 py-4 rounded-lg shadow-md mt-6">
        Tariff not found.
      </div>
    );
  }

  const pricePerKwh = 0.29;
  const fixCosts = 9.99;
  const fixedFlexibleCosts = 14.99;
  const calculatedPrice = tariff
    .calculatePrice(
      Number(urlConsumption),
      pricePerKwh,
      tariff.duration >= 12 ? fixCosts : fixedFlexibleCosts
    )
    .toFixed(2);

  const yearlyPrice = (Number(calculatedPrice) * 12).toFixed(2);

  return (
    <section className="w-full mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-6xl font-bold text-blue-900 mb-4">{tariff.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        <div>
          <p className="text-sm text-gray-500 mb-1">Contract Duration</p>
          <p className="text-lg font-semibold">
            {tariff.duration} {tariff.duration === 1 ? 'month' : 'months'}
          </p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-md text-gray-500 mb-1">
              Estimated monthly price
            </p>
            <p className="text-4xl font-semibold">{calculatedPrice} €</p>
          </div>
          <div>
            <p className="text-md text-gray-500 mb-1">Estimated yearly price</p>
            <p className="text-4xl font-semibold">{yearlyPrice} €</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Includes Bonus</p>
          <p className="text-lg font-semibold">
            {tariff.duration >= 12 ? '✔️ Yes – 10% discount' : '❌ No'}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500 mb-1">Calculation </p>
          <p className="text-md">
            For <strong>{urlConsumption} kWh/year</strong> at{' '}
            <strong>{pricePerKwh} €/kWh</strong> and{' '}
            <strong>
              {tariff.duration >= 12 ? fixCosts : fixedFlexibleCosts} €
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
          className="px-5 py-2 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition cursor-pointer"
        >
          This is my tariff →
        </Link>
      </div>
    </section>
  );
};

export default TariffDetails;
