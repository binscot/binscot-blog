'use server';

import { cookies } from 'next/headers';
import { UserInitialState } from '@/types';
import { getCurrentUser } from '@/actions/auth-action';
import NavbarUserItem from './navbarUserItem';

export default async function NavbarUser() {
  const accessToken = cookies().get('access_token');
  const userInfo = accessToken ? await getCurrentUser(accessToken.value) : UserInitialState;
  return <NavbarUserItem userInfo={userInfo} />;
}
