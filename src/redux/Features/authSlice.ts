import { UserInitialState, UserState } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: UserState;
};

const initialState = {
  value: UserInitialState
} as InitialState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    signOut: (state) => {
      state.value = initialState.value;
    }
  }
});

export const { setUser, signOut } = authSlice.actions;

export default authSlice.reducer;
