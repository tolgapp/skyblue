import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { TariffContextType, TariffProps } from '../types';

const TariffContext = createContext<TariffContextType | undefined>(undefined);

export const TariffProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTariff, setSelectedTariff] = useState<TariffProps | null>(
    null
  );

  return (
    <TariffContext.Provider value={{ selectedTariff, setSelectedTariff }}>
      {children}
    </TariffContext.Provider>
  );
};

export const useTariff = () => {
  const context = useContext(TariffContext);
  if (!context) {
    throw new Error('useTariff must be used within a TariffProvider');
  }
  return context;
};

export default TariffProvider;
