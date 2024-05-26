"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ThemeProviderProps } from "next-themes/dist/types";
import AuthProvider from "./auth-provider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <Provider store={store}>
          <AuthProvider>{children}</AuthProvider>
        </Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
