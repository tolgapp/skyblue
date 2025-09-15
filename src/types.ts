export type TarifContainerProps = {
  id: number;
  tariff: TariffProps;
  consumption: string;
  pricePerKwh: number;
  fixCosts: number;
  fixedFlexibleCosts: number;
  location: string;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTariffId: (id: number) => void;
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

export type TariffProps = {
  name: string;
  duration: number;
  durationText: string;
  calculatePrice: (
    consumption: number,
    pricePerKwh: number,
    fixCosts: number
  ) => number;
};

export type ProductDetailsProps = {
  tariffs: TariffProps[];
  id: number;
  buttonAllowed: string;
};

export type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};