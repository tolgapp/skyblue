import { useContext } from 'react';
import UserInputContext from './userInputContext'

export const useUserInputs = () => {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error('useUserInputs must be used within a UserInputProvider');
  }
  return context;
};
