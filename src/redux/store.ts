import { configureStore } from '@reduxjs/toolkit';
import countSlice from './Features/count-slice';

export const store = configureStore({
  reducer: {
    countSlice
  },
  devTools: process.env.NODE_ENV !== 'production'
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
