import { useContext } from 'react';
import PriceContext from './PriceProviderContext';

export const usePrices = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error('usePrices must be used within a PriceProvider');
  }
  return context;
};
