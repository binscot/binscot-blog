import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  isLogoClick: boolean;
};

const initialState = {
  isLogoClick: false
} as InitialState;

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    clickLogo: (state, action: PayloadAction<any>) => {
      state.isLogoClick = action.payload.isLogoClick;
    }
  }
});

export const { clickLogo } = navSlice.actions;

export default navSlice.reducer;
