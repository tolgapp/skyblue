import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type UserInput = {
  consumption: string;
  location: string;
  energyType: string;
  formSubmitted: boolean;
};

type UserInputContextType = {
  userInput: UserInput;
  setUserInput: React.Dispatch<React.SetStateAction<UserInput>>;
};

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

  console.log(userInput)

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
