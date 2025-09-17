import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { PriceContextType } from '../types';

const PriceContext = createContext<PriceContextType | undefined>(undefined);

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

export const usePrices = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrices must be used within a PriceProvider');
  }
  return context;
};
