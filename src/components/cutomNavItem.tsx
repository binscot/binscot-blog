'use client';
import { IconUserStar, IconUserX, IconUser } from '@tabler/icons-react';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';

interface AuthState {
  isAuth: boolean;
  username: string;
  uid: string;
  joinType: string;
  admin: boolean;
  createdAt: string;
}

export default function CustomNavItem() {
  const [authData, setData] = useState<AuthState | null>(null);
  const user = useAppSelector((state) => state.authReducer.value);

  useEffect(() => {
    setData(user);
  }, [user]);
  const a = 'aa';
  return (
    <div>
      {!authData?.isAuth && <IconUserX size={24} />}
      {authData?.isAuth && !user.admin && <IconUser size={24} />}
      {authData?.isAuth && user.admin && <IconUserStar size={24} />}
    </div>
  );
}
