export type TarifContainerProps = {
  tariff: TariffProps;
};

export type TariffProps = {
  id: string;
  name: string;
  duration: number;
  durationText: string;
};

export type ProductDetailsProps = {
  tariff: TariffProps;
};

export type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

export type PriceContextType = {
  pricePerKwh: number;
  fixCosts: number;
  fixedFlexibleCosts: number;
};

export type TariffContextType = {
  selectedTariff: TariffProps | null;
  setSelectedTariff: (tariff: TariffProps) => void;
};

export type EnergyBenefitsProps = {
  marginX: number;
  marginTop: number;
};

export type UserInput = {
  consumption: string;
  location: string;
  energyType: string;
  formSubmitted: boolean;
};

export type UserInputContextType = {
  userInput: UserInput;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>;
  clearUserInputs: () => void;
};
