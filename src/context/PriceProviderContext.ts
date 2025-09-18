import { createContext } from 'react';
import type { PriceContextType } from '../types';

const PriceContext = createContext<PriceContextType | undefined>(undefined);

export default PriceContext;
