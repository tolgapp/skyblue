import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { UserInput, UserInputContextType } from '../types';

const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined
);

export const UserInputProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<UserInput>({
    consumption: '',
    location: '',
    energyType: '',
    formSubmitted: false,
  });

  return (
    <UserInputContext.Provider value={{ userInput, setUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
};

export const useUserInputs = () => {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error('useUserInputs must be used within a UserInputProvider');
  }
  return context;
};
