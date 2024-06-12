import { configureStore } from '@reduxjs/toolkit';

import navSlice from '@/store/features/navSlice';
import countSlice from '@/store/features/countSlice';
import authSlice from '@/store/features/authSlice';
import { apiSlice } from './features/api/apiSlice';

// export const store = configureStore({
//   reducer: {
//     countSlice,
//     authSlice,
//     navSlice,
//     [apiSlice.reducerPath]: apiSlice.reducer
//   },
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export const store = () => {
  return configureStore({
    reducer: {
      countSlice,
      authSlice,
      navSlice,
      [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware)
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
