import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserInput } from '../store/reducers/userInputsReducer';
import { useState } from 'react';

const energyOptions = ['Electricity', 'Gas', 'Kombi'];

const Calculator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    location: '',
    energyType: '',
    consumption: '',
    formSubmitted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    dispatch(setUserInput({ [name]: value }));
  };

  const getUserInputs = (e: React.FormEvent) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({
      location: formData.location,
      consumption: formData.consumption,
      energyType: formData.energyType
    })

     dispatch(
       setUserInput({
         location: formData.location,
         consumption: formData.consumption,
         energyType: formData.energyType,
         formSubmitted: true, 
       })
     );

    navigate(`/findtariff?${queryParams.toString()}`);
  };

  const submitted =
    formData.location.length === 5 &&
    formData.energyType.length > 0 &&
    formData.consumption > '100';

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
            name="location"
            placeholder="Your postalcode"
            className="border rounded-lg p-3 sm:p-4 w-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            maxLength={5}
            value={formData.location}
            onChange={handleChange}
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
                name="energyType"
                onClick={() =>
                  handleChange({
                    target: { name: 'energyType', value: type },
                  } as any)
                }
                className={`cursor-pointer px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base w-full transition font-semibold shadow-sm border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  type === formData.energyType
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
            name="consumption"
            placeholder="Your yearly consumption"
            className="border rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 transition w-full"
            value={formData.consumption}
            onChange={handleChange}
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
