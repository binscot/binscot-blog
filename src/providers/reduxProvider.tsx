'use client';

import React from 'react';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

interface ReduxProviderProps {
  children: React.ReactNode;
}

function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
