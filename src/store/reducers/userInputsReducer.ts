import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
