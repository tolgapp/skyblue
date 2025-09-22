import { useState } from 'react';
import Back from '../components/Back';
import TarifContainer from '../components/TariffContainer';
import EnergyBenefitsShorts from '../components/EnergyBenefitsShort';
import TariffDetails from '../components/TariffDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInput } from '../store/reducers/userInputsReducer';
import type { TariffProps } from '../types';
import type { RootState } from '../store/store';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const ShowTariffs = () => {
  const notify = (message: string, type: 'error' | 'info' | 'success') =>
    toast[type](message);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { consumption, location } = useSelector(
    (state: RootState) => state.userInput
  );
  const userInput = useSelector((state: RootState) => state.userInput);
  const selectedTariff = useSelector(
    (state: RootState) => state.tariff.selected
  );
  const tariffs = useSelector((state: RootState) => state.tariff.all);

  const [isEditingPostalCode, setIsEditingPostalCode] = useState(false);
  const [isEditingConsumption, setIsEditingConsumption] = useState(false);

  const [localPostalCode, setLocalPostalCode] = useState(location);
  const [localConsumption, setLocalConsumption] = useState(consumption);

  const changeLocation = () => {

     if (!/^\d{5}$/.test(localPostalCode)) {
       notify('Location must be exactly 5 digits', 'error');
       return;
     }

    const newUserInput = {
      ...userInput,
      location: localPostalCode,
    };

    // Update Redux
    dispatch(setUserInput(newUserInput));

    // Update URL params
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('location', String(localPostalCode));
    setSearchParams(updatedParams);

    // Update localStorage
    localStorage.setItem('userInput', JSON.stringify(newUserInput));

    setIsEditingPostalCode(false);
  };

  const changeConsumption = () => {
    if (localConsumption <= 100) {
      notify('Consumption should be greater than 100 kWh!', 'error');
      return;
    }

    const newUserInput = {
      ...userInput,
      consumption: localConsumption,
    };

    // Update Redux
    dispatch(setUserInput(newUserInput));

    // Update URL params
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('consumption', String(localConsumption));
    setSearchParams(updatedParams);

    // Update localStorage
    localStorage.setItem('userInput', JSON.stringify(newUserInput));

    setIsEditingConsumption(false);
  };

  return (
    <main className="mx-4 sm:mx-18 flex flex-col gap-8 mt-5">
      <Back />
      <div className="bg-white text-black rounded-lg p-6 flex flex-col lg:flex-row gap-4 justify-start lg:items-center gap-x-12 shadow-md w-full mx-auto lg:justify-center">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-sm sm:text-lg font-semibold whitespace-nowrap">
            Your postal code:
          </h3>
          {isEditingPostalCode ? (
            <>
              <input
                type="number"
                name="location"
                value={localPostalCode}
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
                onChange={(e) => setLocalConsumption(Number(e.target.value))}
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
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5 p-4 sm:p-10 rounded-lg bg-blue-400 h-fit">
        {tariffs.map((tariff: TariffProps) => (
          <TarifContainer key={tariff.id} tariff={tariff} />
        ))}
      </div>
      {selectedTariff && <TariffDetails />}
      <EnergyBenefitsShorts marginX={0} marginTop={1} />
      <ToastContainer
        position="bottom-right"
        autoClose={3200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
};

export default ShowTariffs;
