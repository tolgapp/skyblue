import type { ReactNode } from 'react';
import type { PriceContextType } from '../types';
import PriceContext from './PriceProviderContext';


export const PriceProvider = ({ children }: { children: ReactNode }) => {
const prices: PriceContextType = {
  pricePerKwh: 0.29,
  fixCosts: 9.99,
  fixedFlexibleCosts: 14.99,
};

  return (
    <PriceContext.Provider value={prices}>{children}</PriceContext.Provider>
  );
};

