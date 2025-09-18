import { createContext } from 'react';
import type { TariffContextType } from '../types';

const TariffContext = createContext<TariffContextType | undefined>(undefined);

export default TariffContext;
