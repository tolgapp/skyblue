export type TarifContainerProps = {
  tariff: {
    name: string;
    duration: number;
    durationText: string;
    calculatePrice: (
      consumption: number,
      pricePerKwh: number,
      fixCosts: number
    ) => number;
  };
  consumption: string;
  pricePerKwh: number;
  fixCosts: number;
  location: string;
};

export type HomeProps = {
  formData: FormDataProps;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps>>;
};
export type ShowTariffsProps = HomeProps;

export type FormDataProps = {
  location: string;
  energyType: string;
  consumption: string;
  formSubmitted: boolean;
};
