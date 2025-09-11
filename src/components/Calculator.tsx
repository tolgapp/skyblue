import { useState } from 'react';

type FormDataProps = {
  location: string;
  energyType: string;
};

const energyOptions = ['Electricity', 'Gas', 'Kombi'];

const Calculator = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    location: '',
    energyType: '',
  });

  const getUserInputs = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.location !== 'number') return;

    const userInput = {
      location: formData.location,
      type: formData.energyType,
    };

    console.log(userInput);
  };

  return (
    <div className="flex flex-col justify-center mx-18 bg-blue-400 h-40 rounded-xl px-10">
      <form onSubmit={getUserInputs}>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="location1" className="font-bold">
              Location
            </label>
            <input
              type="number"
              id="location1"
              name="location1"
              placeholder="Your postalcode"
              className="border rounded-lg p-4"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="location2" className="font-bold">
              Type of energy
            </label>
            <div className="flex border rounded-lg gap-5 w-fit">
              {energyOptions.map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={(e) => setFormData({...formData, energyType: e.target.value})}
                  className={`cursor-pointer h-14 px-6 bg-white text-blue-400 rounded-lg ${
                    type === formData.energyType ? 'bg-blue-900' : ''
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label className="opacity-0">Placeholder</label>
            <button
              type="submit"
              className="cursor-pointer border rounded-lg p-3 bg-blue-400 h-14 px-16"
            >
              Find your tariff →
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Calculator;
