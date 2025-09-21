export const calculatePrice = (
  consumption: number,
  pricePerKwh: number,
  fixCosts: number
): number => {
  const costs = Number(consumption) * pricePerKwh + 12 * fixCosts;
  return costs / 12;
};

