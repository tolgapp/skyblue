import { useNavigate } from 'react-router-dom';
import { useUserInputs } from '../context/useUserInputs';

const energyOptions = ['Electricity', 'Gas', 'Kombi'];

const Calculator = () => {
  const navigate = useNavigate();
  const { userInput, setUserInput } = useUserInputs();

  const getUserInputs = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      location: userInput.location,
      consumption: userInput.consumption,
      energyType: userInput.energyType,
    });

    setUserInput({ ...userInput, formSubmitted: true });

    if (userInput.energyType === 'Electricity') {
      navigate(`/findtariff?${queryParams.toString()}`);
    } else {
      console.log('Currently only Electricity available');
    }
  };

  const submitted =
    userInput.location.length === 5 &&
    userInput.energyType.length > 0 &&
    userInput.consumption > '100';

  return (
    <div className="flex flex-col justify-center bg-blue-400 h-fit pt-5 pb-8 rounded-xl mx-4 sm:mx-18 px-5">
      <form
        className="grid gap-y-4 sm:gap-5 grid-cols-1 md:grid-cols-4 auto-rows-auto w-full"
        onSubmit={getUserInputs}
      >
        {/* Location Input */}
        <div className="col-span-1 flex flex-col gap-2 sm:gap-4 justify-around">
          <label htmlFor="location1" className="font-bold text-base sm:text-lg">
            Location
          </label>
          <input
            type="text"
            id="location1"
            name="location1"
            placeholder="Your postalcode"
            className="border rounded-lg p-3 sm:p-4 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            maxLength={5}
            value={userInput.location}
            onChange={(e) => {
              setUserInput({ ...userInput, location: e.target.value });
            }}
          />
        </div>
        {/* Energy Type */}
        <div className="col-span-2 flex flex-col gap-2 sm:gap-4 justify-around">
          <label className="font-bold text-base sm:text-lg">
            Type of energy
          </label>
          <div className="flex flex-col sm:flex-row border rounded-lg gap-2 p-1 w-full bg-white/10">
            {energyOptions.map((type) => (
              <button
                type="button"
                key={type}
                onClick={(e) =>
                  setUserInput({
                    ...userInput,
                    energyType: (e.target as HTMLButtonElement).innerText,
                  })
                }
                className={`cursor-pointer px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full transition font-semibold shadow-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  type === userInput.energyType
                    ? 'bg-blue-900 text-white'
                    : 'bg-white text-blue-400 hover:bg-blue-100'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {/* Consumption */}
        <div className="flex flex-col gap-2 sm:gap-4 justify-around">
          <label htmlFor="kwh" className="font-bold text-base sm:text-lg">
            Yearly consumption
          </label>
          <input
            type="number"
            id="kwh"
            name="kwh"
            placeholder="Your yearly consumption"
            className="border rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 transition w-full"
            value={userInput.consumption}
            onChange={(e) =>
              setUserInput({ ...userInput, consumption: e.target.value })
            }
          />
        </div>
        {/* Submit Button */}
        {submitted && (
          <div className="col-span-2 md:col-span-4 mt-2">
            <button
              type="submit"
              className="w-full cursor-pointer border rounded-lg p-3 sm:p-4 bg-blue-900 text-white h-12 sm:h-14 text-base sm:text-lg font-bold shadow-md hover:bg-blue-800 transition"
            >
              Find your tariff →
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default Calculator;
