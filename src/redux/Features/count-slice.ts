import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  count: number;
};

const initialState = {
  count: 0
} as InitialState;

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<any>) => {
      state.count += action.payload.amount;
    },
    decrement: (state, action: PayloadAction<any>) => {
      state.count -= action.payload.amount;
    }
  }
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
