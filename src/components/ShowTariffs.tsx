import { useEffect, useState } from 'react';
import type { ShowTariffsProps } from '../types';
import Back from './Back';
import TarifContainer from './TarifContainer';
import { useSearchParams } from 'react-router-dom';
import EnergyBenefits from './EnergyBenefits';
import TariffDetails from './TariffDetails';

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
  const fixedFlexibleCosts = 14.99;

  const [isEditingPostalCode, setIsEditingPostalCode] = useState(false);
  const [isEditingConsumption, setIsEditingConsumption] = useState(false);
  const [localPostalCode, setLocalPostalCode] = useState(location);
  const [localConsumption, setLocalConsumption] = useState(consumption);
  const [selectedTariffId, setSelectedTariffId] = useState<number | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const urlLocation = searchParams.get('location') || '';
  const urlConsumption = searchParams.get('consumption') || '';
  const urlEnergyType = searchParams.get('energyType') || '';
  const [isClicked, setIsClicked] = useState(false);
  const buttonAllowed = 'YES';

  useEffect(() => {
    setLocalPostalCode(formData.location);
    setLocalConsumption(formData.consumption);
  }, [formData.location, formData.consumption]);

  useEffect(() => {
    if (!formData.formSubmitted && urlLocation && urlConsumption) {
      setFormData({
        location: urlLocation,
        consumption: urlConsumption,
        energyType: urlEnergyType,
        formSubmitted: true,
      });
    }
  }, [urlLocation, urlConsumption, formData, setFormData]);

  const changeLocation = () => {
    setFormData((prev) => ({ ...prev, location: localPostalCode }));
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('location', localPostalCode);
    setSearchParams(updatedParams);
    setIsEditingPostalCode(false);
  };

  const changeConsumption = () => {
    setFormData((prev) => ({ ...prev, consumption: localConsumption }));
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('consumption', localConsumption);
    setSearchParams(updatedParams);
    setIsEditingConsumption(false);
  };

  return (
    <main className="mx-18 flex flex-col gap-8 mt-5">
      <Back />
      <div className="bg-white text-black rounded-lg p-6 flex items-center gap-x-12 shadow-md w-full mx-auto justify-center">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold whitespace-nowrap">
            Your postal code:
          </h3>
          {isEditingPostalCode ? (
            <>
              <input
                type="number"
                name="location"
                value={localPostalCode || urlLocation}
                onChange={(e) => setLocalPostalCode(e.target.value)}
                className="text-base border-b-2 border-gray-400 focus:outline-none focus:border-black px-2 py-1 w-28"
              />
              <button
                onClick={changeLocation}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg border"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="text-base font-medium">
                <strong>{localPostalCode}</strong>
              </span>
              <button
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg border"
                onClick={() => setIsEditingPostalCode(true)}
              >
                Change
              </button>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold whitespace-nowrap">
            Your yearly consumption:
          </h3>
          {isEditingConsumption ? (
            <>
              <input
                type="number"
                name="consumption"
                value={localConsumption}
                onChange={(e) => setLocalConsumption(e.target.value)}
                className="text-base border-b-2 border-gray-400 focus:outline-none focus:border-black px-2 py-1 w-32"
              />
              <button
                onClick={changeConsumption}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg border"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className="text-base font-medium">
                <strong>{localConsumption}</strong> kwh
              </span>
              <button
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-lg border"
                onClick={() => setIsEditingConsumption(true)}
              >
                Change
              </button>
            </>
          )}
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-10 rounded-lg bg-blue-400 h-fit">
        {tariffs.map((tariff) => (
          <TarifContainer
            id={tariff.duration}
            key={tariff.duration}
            tariff={tariff}
            consumption={consumption}
            location={location}
            pricePerKwh={pricePerKwh}
            fixCosts={fixCosts}
            fixedFlexibleCosts={fixedFlexibleCosts}
            setIsClicked={setIsClicked}
            setSelectedTariffId={setSelectedTariffId}
          />
        ))}
      </div>
      {isClicked && selectedTariffId !== null && (
        <TariffDetails
          tariffs={tariffs}
          id={selectedTariffId}
          buttonAllowed={buttonAllowed}
        />
      )}
      <EnergyBenefits marginX={0} marginTop={1} />
    </main>
  );
};

export default ShowTariffs;
