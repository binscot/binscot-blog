"use client";

import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

interface AuthState {
  isAuth: boolean;
  username: string;
  uid: string;
  joinType: string;
  isModerator: boolean;
}

export default function CustomNavItem() {
  const [authData, setData] = useState<AuthState | null>(null);
  const auth = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    setData(auth);
  }, [auth]);
  return (
    <div>
      <p>{authData?.username}</p>
    </div>
  );
}
