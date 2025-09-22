import { configureStore } from '@reduxjs/toolkit';
import TariffReducer from './reducers/tariffsReducer';
import userInputReducer from './reducers/userInputsReducer';

export const store = configureStore({
  reducer: {
    tariff: TariffReducer,
    userInput: userInputReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
