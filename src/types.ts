export type TarifContainerProps = {
  tariff: TariffProps;
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
  tariff: TariffProps;
};


export type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};
