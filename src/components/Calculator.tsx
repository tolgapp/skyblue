import { useNavigate } from 'react-router-dom';

export type FormDataProps = {
  location: string;
  energyType: string;
  consumption: string;
  formSubmitted: boolean;
};

type CalculatorProps = {
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
};

const energyOptions = ['Electricity', 'Gas', 'Kombi'];

const Calculator = ({ formData, setFormData }: CalculatorProps) => {
  const navigate = useNavigate();

  const getUserInputs = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      ...formData,
      formSubmitted: true,
    });
   
    navigate('/findtariff');
  };

  const submitted =
    formData.location.length === 5 &&
    formData.energyType.length > 0 &&
    formData.consumption > '100';

  return (
    <div className="flex flex-col justify-center mx-18 bg-blue-400 h-fit pt-8 pb-8 px-10 rounded-xl ">
      <form onSubmit={getUserInputs}>
        <div className="grid grid-cols-3 gap-5 grid-rows-1">
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
              maxLength={5}
              minLength={5}
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
            <div className="flex border rounded-lg gap-4 w-fit p-1">
              {energyOptions.map((type) => (
                <button
                  type="button"
                  key={type}
                  value={formData.energyType}
                  onClick={(e) =>
                    setFormData({
                      ...formData,
                      energyType: (e.target as HTMLButtonElement).innerText,
                    })
                  }
                  className={`cursor-pointer h-13 px-6 rounded-lg ${
                    type === formData.energyType
                      ? 'bg-blue-900 text-white'
                      : 'bg-white  text-blue-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="kwh" className="font-bold">
              Yearly consumption
            </label>
            <input
              type="number"
              id="kwh"
              name="kwh"
              placeholder="Your yearly consumption"
              className="border rounded-lg p-4"
              value={formData.consumption}
              onChange={(e) =>
                setFormData({ ...formData, consumption: e.target.value })
              }
            />
          </div>
          {submitted && (
            <div className="col-span-3">
              <button
                type="submit"
                className="w-full cursor-pointer border rounded-lg p-3 bg-blue-900 text-white h-14"
              >
                Find your tariff →
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
export default Calculator;
