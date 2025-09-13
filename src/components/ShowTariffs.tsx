import { useState } from 'react';
import type { ShowTariffsProps } from '../types';
import Back from './Back';
import TarifContainer from './TarifContainer';

const tariffs = [
  {
    name: 'Blue basic',
    duration: 12,
    durationText: '12 months',
    calculatePrice: (
      consumption: number,
      pricePerKwh: number,
      fixCosts: number
    ) => {
      const costs = Number(consumption) * pricePerKwh + 12 * fixCosts;
      return costs / 12;
    },
  },
  {
    name: 'Blue flex',
    duration: 1,
    durationText: '1 month',
    calculatePrice: (
      consumption: number,
      pricePerKwh: number,
      fixCosts: number
    ) => {
      const costs = Number(consumption) * pricePerKwh + 12 * fixCosts;
      return (costs / 12) * 1.45;
    },
  },
  {
    name: 'Blue chill',
    duration: 24,
    durationText: '24 months',
    calculatePrice: (
      consumption: number,
      pricePerKwh: number,
      fixCosts: number
    ) => {
      const costs = Number(consumption) * pricePerKwh + 12 * fixCosts;
      return (costs / 12) * 0.98;
    },
  },
];

const ShowTariffs = ({ formData, setFormData }: ShowTariffsProps) => {
  const { consumption, location } = formData;
  const pricePerKwh = 0.29;
  const fixCosts = 9.99;
  const shouldShowTariffs = formData.formSubmitted === true;
  const [isClicked, setIsClicked] = useState(false);
  const [localPostalCode, setLocalPostalCode] = useState(location);

  if (!shouldShowTariffs) return null;

  const changeLocation = () => {
    setFormData((prev) => ({ ...prev, location: localPostalCode }));
    setIsClicked(false);
  };

  return (
    <div className="mx-18 flex flex-col gap-4 mt-5">
      <Back />
      <h3 className="text-2xl font-semibold">
        Your postalcode:
        {isClicked ? (
          <>
            <input
              type="number"
              value={localPostalCode}
              onChange={(e) => setLocalPostalCode(e.target.value)}
            />
            <button onClick={changeLocation}>Save</button>
          </>
        ) : (
          <>
            <span className="text-2xl ml-2">{location}</span>
            <button
              className="border text-sm p-1 ml-4 rounded-lg cursor-pointer"
              onClick={() => setIsClicked(true)}
            >
              Change
            </button>
          </>
        )}
      </h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-10 rounded-lg bg-blue-400  mb-8 h-fit">
        {tariffs.map((tariff) => (
          <TarifContainer
            key={tariff.duration}
            tariff={tariff}
            consumption={consumption}
            location={location}
            pricePerKwh={pricePerKwh}
            fixCosts={fixCosts}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTariffs;
