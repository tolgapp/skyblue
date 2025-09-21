export const calculatePrice = (
  consumption: number,
  pricePerKwh: number,
  fixCosts: number
): number => {
  const costs = Number(consumption) * pricePerKwh + 12 * fixCosts;
  return costs;
};

  export const pricePerKwh = 0.29;
  export const fixCosts = 9.99;
  export const fixedFlexibleCosts = 14.99;