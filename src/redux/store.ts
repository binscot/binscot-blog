import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './features/api/apiSlice';

import navSlice from './features/navSlice';
import countSlice from './features/countSlice';
import authSlice from './features/authSlice';

export const store = configureStore({
  reducer: {
    countSlice,
    authSlice,
    navSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
