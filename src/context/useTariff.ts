import { useContext } from 'react';
import TariffContext from './TariffProviderContext';

export const useTariff = () => {
  const context = useContext(TariffContext);
  if (!context) {
    throw new Error('useTariff must be used within a TariffProvider');
  }
  return context;
};
