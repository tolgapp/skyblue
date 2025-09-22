import { createSlice } from '@reduxjs/toolkit';
import type { TariffProps } from '../../types';

interface TariffState {
  all: TariffProps[];
  selected: TariffProps | null;
}

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('selectedTariff');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

const initialState: TariffState = {
  all: [
    {
      id: 'blue-basic',
      name: 'Blue basic',
      duration: 12,
      durationText: '12 months',
    },
    {
      id: 'blue-flex',
      name: 'Blue flex',
      duration: 1,
      durationText: '1 month',
    },
    {
      id: 'blue-chill',
      name: 'Blue chill',
      duration: 24,
      durationText: '24 months',
    },
  ],
  selected: loadFromLocalStorage() || null,
};

const tariffReducer = createSlice({
  name: 'tariff',
  initialState,
  reducers: {
    setSelectedTariff: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export default tariffReducer.reducer;
export const { setSelectedTariff } = tariffReducer.actions;
