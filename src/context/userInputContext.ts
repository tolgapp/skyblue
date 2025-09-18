import { createContext } from 'react';
import type { UserInputContextType } from '../types';

const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined
);

export default UserInputContext;
