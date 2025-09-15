import { useState } from 'react';
// import TariffDetails from './TariffDetails';

const UserTariffSignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="border flex flex-col mx-18 items-center rounded-lg h-fit py-18">
      {/* <TariffDetails /> */}
      {currentStep === 1 && (
        <div className="flex flex-col justify-start w-full px-18 gap-8">
          <h2 className="text-4xl font-[OpenSansVar] font-medium">
            Where goes the positive energy tariff?
          </h2>
          <form className="grid grid-rows-2 grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="street">
                Streetname
              </label>
              <input
                type="text"
                placeholder="eg. Munichstreet"
                className="p-5 text-xl px-4 border rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="street">
                Streetnumber
              </label>
              <input
                type="text"
                placeholder="eg. 33a"
                className="p-5 text-xl px-4 border rounded-lg "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="street">
                Postalcode
              </label>
              <input
                type="text"
                placeholder="eg. 80xxx"
                className="p-5 text-xl px-4 border rounded-lg "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl" htmlFor="street">
                City
              </label>
              <input
                type="text"
                placeholder="eg. Munich"
                className="p-5 text-xl px-4 border rounded-lg "
              />
            </div>
            <div className="opacity-0">Placeholder</div>
            <div className="flex gap-6">
              <button
                className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-80 text-center hover:bg-blue-400"
                onClick={() => prevStep()}
              >
                Before
              </button>
              <button
                className="cursor-pointer text-2xl bg-white text-blue-900 rounded-lg py-4 w-80 text-center hover:bg-blue-400"
                onClick={() => nextStep()}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default UserTariffSignUp;
