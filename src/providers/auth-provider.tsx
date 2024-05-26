"use client";
import { createContext, useEffect, useState } from "react";
import { getCurrentUser, isSignInUser } from "@/actions/actions";
import { init } from "@/redux/slices/auth-slice";
import { useAppDispatch } from "@/redux/hooks";
import { store } from "@/redux/store";

export const AuthContext = createContext({});
export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const getRequest = async () => {
    const isSignIn = await isSignInUser();
    if (isSignIn) {
      const user = await getCurrentUser();
      dispatch(init(user.data));
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <AuthContext.Provider value={{ ...store }}>{children}</AuthContext.Provider>
  );
}
