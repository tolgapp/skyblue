import { useEffect, useState } from 'react';
import Back from '../components/Back';
import TarifContainer from '../components/TariffContainer';
import { useSearchParams } from 'react-router-dom';
import EnergyBenefitsShorts from '../components/EnergyBenefitsShort';
import TariffDetails from '../components/TariffDetails';
import { useSelector } from 'react-redux';

const ShowTariffs = () => {
 const tariffs = useSelector((state) => state.tariff);
 const userInput = useSelector((state) => state.userInput)

  const [isEditingPostalCode, setIsEditingPostalCode] = useState(false);
  const [isEditingConsumption, setIsEditingConsumption] = useState(false);
  const [localPostalCode, setLocalPostalCode] = useState(location);
  const [localConsumption, setLocalConsumption] = useState(
    userInput.consumption
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const urlLocation = searchParams.get('location') || '';
  const urlConsumption = searchParams.get('consumption') || '';
  const urlEnergyType = searchParams.get('energyType') || '';

  useEffect(() => {
    setLocalPostalCode(userInput.location);
    setLocalConsumption(userInput.consumption);
  }, [userInput.location, userInput.consumption]);

  useEffect(() => {
    if (!userInput.formSubmitted && urlLocation && urlConsumption) {
      setUserInput({
        location: urlLocation,
        consumption: urlConsumption,
        energyType: urlEnergyType,
        formSubmitted: true,
      });
    }
  }, [urlLocation, urlConsumption, userInput, setUserInput, urlEnergyType]);

  const changeLocation = () => {
    setUserInput((prev) => ({ ...prev, location: localPostalCode }));
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('location', localPostalCode);
    setSearchParams(updatedParams);
    setIsEditingPostalCode(false);
  };

  const changeConsumption = () => {
    setUserInput((prev) => ({ ...prev, consumption: localConsumption }));
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('consumption', localConsumption);
    setSearchParams(updatedParams);
    setIsEditingConsumption(false);
  };

  return (
    <main className="mx-4 sm:mx-18 flex flex-col gap-8 mt-5">
      <Back />
      <div className="bg-white text-black rounded-lg p-6 flex flex-col lg:flex-row gap-4 justify-start lg:items-center gap-x-12 shadow-lg w-full mx-auto lg:justify-center">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-sm sm:text-lg font-semibold whitespace-nowrap">
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
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <h3 className="text-sm sm:text-lg font-semibold whitespace-nowrap">
            Your yearly consumption:
          </h3>
          {isEditingConsumption ? (
            <>
              <input
                type="number"
                name="consumption"
                value={localConsumption}
                onChange={(e) => setLocalConsumption(e.target.value)}
                className="text-base border-b-2 border-gray-400 focus:outline-none focus:border-black px-2 py-1 w-20 sm:w-32"
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
                <strong>{localConsumption}</strong> kWh
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
      {selectedTariff.duration > 0 && <TariffDetails tariff={selectedTariff} />}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-10 rounded-lg bg-blue-400 h-fit">
        {tariffs.map((tariff) => (
          <TarifContainer key={tariff.duration} tariff={tariff} />
        ))}
      </div>
      <EnergyBenefitsShorts marginX={0} marginTop={1} />
    </main>
  );
};

export default ShowTariffs;
