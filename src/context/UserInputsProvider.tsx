import { useState } from 'react';
import type { ReactNode } from 'react';
import type { UserInput } from '../types';
import UserInputContext from './userInputContext';

export const UserInputProvider = ({ children }: { children: ReactNode }) => {
  const [userInput, setUserInput] = useState<UserInput>({
    consumption: '',
    location: '',
    energyType: '',
    formSubmitted: false,
  });

  const clearUserInputs = () => {
    setUserInput({
      consumption: '',
      location: '',
      energyType: '',
      formSubmitted: false,
    });
  };

  return (
    <UserInputContext.Provider
      value={{ userInput, setUserInput, clearUserInputs }}
    >
      {children}
    </UserInputContext.Provider>
  );
};
