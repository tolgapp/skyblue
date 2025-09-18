import { useState } from 'react';
import type { ReactNode } from 'react';
import type { TariffProps } from '../types';
import TariffContext from './TariffProviderContext';

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


export default TariffProvider;
