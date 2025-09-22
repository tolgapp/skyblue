import { createSlice } from '@reduxjs/toolkit';

const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('userInput');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};

const initialState = loadFromLocalStorage() || {
  location: '',
  energyType: '',
  consumption: '',
  formSubmitted: false,
};

const userInputsReducer = createSlice({
  name: 'userInput',
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export default userInputsReducer.reducer;
export const { setUserInput } = userInputsReducer.actions;
