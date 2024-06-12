'use client';

import { useEffect, useState } from 'react';
import { title } from './primitives';
import { useAppSelector } from '@/store/hooks';

export default function ReduxTestComponext() {
  const userInfo = useAppSelector((state) => state.authSlice.value);
  const [username, setUserName] = useState('');
  useEffect(() => {
    setUserName(userInfo.username);
  }, [userInfo]);
  return <h1 className={title({ color: 'green' })}>{username}</h1>;
}
