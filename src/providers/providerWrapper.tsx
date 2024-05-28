'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { useRouter } from 'next/navigation';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export interface ProvidersWrapperProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function ProvidersWrapper({ children, themeProps }: ProvidersWrapperProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <Provider store={store}>{children}</Provider>;
      </NextThemesProvider>
    </NextUIProvider>
  );
}
