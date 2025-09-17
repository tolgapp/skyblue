import { useState } from 'react';
import Back from './Back';
import InputField from './InputField';
import Placeholder from './Placeholder';
import SelectedTariff from './SelectedTariff';
import { useTariff } from '../context/TariffProvider';
import { useUserInputs } from '../context/UserInputsProvider';
import { usePrices } from '../context/PriceProvider';
import { useNavigate } from 'react-router-dom';

const UserTariffSignUp = () => {
  const { selectedTariff } = useTariff();
  const { userInput, clearUserInputs } = useUserInputs();
  const { pricePerKwh, fixCosts, fixedFlexibleCosts } = usePrices();

  const monthlyPrice = selectedTariff?.calculatePrice(
    Number(userInput.consumption),
    pricePerKwh,
    selectedTariff.duration >= 12 ? fixCosts : fixedFlexibleCosts
  );

  const yearlyPrice = (monthlyPrice ?? 0) * 12;

  const [userData, setUserData] = useState({
    street: '',
    streetNumber: '',
    postalcode: userInput.location,
    city: '',
    name: '',
    surname: '',
    birthdate: '',
    iban: '',
    bic: '',
    energyType: userInput.energyType,
    tariff: selectedTariff?.name,
    fixCosts,
    fixedFlexibleCosts,
    pricePerKwh,
    monthlyPrice: (monthlyPrice ?? 0).toFixed(2),
    yearlyPrice: yearlyPrice.toFixed(2),
    duration: selectedTariff?.duration,
    consumption: userInput.consumption,
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setUserData({
      street: '',
      streetNumber: '',
      postalcode: '',
      city: '',
      name: '',
      surname: '',
      birthdate: '',
      iban: '',
      bic: '',
      energyType: '',
      tariff: '',
      fixCosts: fixCosts,
      fixedFlexibleCosts: fixedFlexibleCosts,
      pricePerKwh: pricePerKwh,
      monthlyPrice: '',
      yearlyPrice: '',
      duration: selectedTariff?.duration,
      consumption: '',
    });

    clearUserInputs(); 

    navigate('/');
  };

  return (
    <div className="flex flex-col mx-18 gap-8 mt-5">
      <Back />
      <SelectedTariff />
      <div className="border flex flex-col items-center rounded-lg h-fit py-18">
        {currentStep === 1 && (
          <div className="flex flex-col justify-start w-full px-18 gap-8">
            <h2 className="text-4xl font-[OpenSansVar] font-medium">
              Where goes the positive energy tariff?
            </h2>
            <form className="grid grid-rows-2 grid-cols-2 gap-8">
              {/* Address fields */}
              <InputField
                label="Streetname"
                name="street"
                value={userData.street}
                onChange={handleChange}
              />
              <InputField
                label="Streetnumber"
                name="streetNumber"
                value={userData.streetNumber}
                onChange={handleChange}
              />
              <InputField
                label="Postalcode"
                name="postalcode"
                value={userData.postalcode}
                onChange={handleChange}
              />
              <InputField
                label="City"
                name="city"
                value={userData.city}
                onChange={handleChange}
              />

              <div className="opacity-0">Placeholder</div>
              <FormNavigation onNext={nextStep} />
            </form>
          </div>
        )}
        {currentStep === 2 && (
          <div className="flex flex-col justify-start w-full px-18 gap-8">
            <h2 className="text-4xl font-[OpenSansVar] font-medium">
              Who will be the contract holder?
            </h2>
            <form className="grid grid-rows-2 grid-cols-2 gap-8">
              <InputField
                label="First Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="surname"
                value={userData.surname}
                onChange={handleChange}
              />
              <InputField
                label="Birthdate"
                name="birthdate"
                value={userData.birthdate}
                onChange={handleChange}
                type="date"
              />
              <div className="opacity-0">Placeholder</div>

              <div className="opacity-0">Placeholder</div>
              <FormNavigation onPrev={prevStep} onNext={nextStep} />
            </form>
          </div>
        )}
        {currentStep === 3 && (
          <div className="flex flex-col justify-start w-full px-18 gap-8">
            <h2 className="text-4xl font-[OpenSansVar] font-medium">
              Where do we debit the energy cost from?
            </h2>
            <form className="grid grid-rows-2 grid-cols-2 gap-8">
              <InputField
                label="IBAN"
                name="iban"
                value={userData.iban}
                onChange={handleChange}
              />
              <InputField
                label="BIC"
                name="bic"
                value={userData.bic}
                onChange={handleChange}
              />
              <div className="opacity-0">Placeholder</div>
              <FormNavigation onPrev={prevStep} onNext={nextStep} />
            </form>
          </div>
        )}
        {currentStep === 4 && (
          <div className="flex flex-col justify-start w-full px-18 gap-8">
            <h2 className="text-4xl font-medium">Confirm your information</h2>
            <div className="text-xl leading-loose bg-black rounded-lg p-6 space-y-3">
              {Object.entries(userData).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b pb-5">
                  <span className="capitalize">{key}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-6 pt-6">
              <button
                type="button"
                className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-60 text-center hover:bg-blue-400"
                onClick={prevStep}
              >
                Back
              </button>
              <button
                type="submit"
                className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-60 text-center hover:bg-blue-400"
                onClick={() => handleSubmit()}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
      <Placeholder height={2} />
    </div>
  );
};

export default UserTariffSignUp;

const FormNavigation = ({
  onNext,
  onPrev,
}: {
  onNext?: () => void;
  onPrev?: () => void;
}) => (
  <div className="flex gap-6 col-span-2">
    {onPrev && (
      <button
        type="button"
        className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-55 text-center hover:bg-blue-400"
        onClick={onPrev}
      >
        Back
      </button>
    )}
    {onNext && (
      <button
        type="button"
        className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-55 text-center hover:bg-blue-400"
        onClick={onNext}
      >
        Next
      </button>
    )}
  </div>
);
