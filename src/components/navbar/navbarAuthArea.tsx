'use client';

import { signOut } from '@/store/features/authSlice';
import { UserState } from '@/types';
import { signOutUser } from '@/actions/auth-action';
import { useAppDispatch } from '@/store/hooks';
import NavbarSignIn from '@/components/navbar/navbarSignIn';
import NavbarAuthAdminItem from './navbarAuthAdminItem';
import NavbarAuthDefaultItem from './navbarAuthDefaultItem';

const NavbarAuthArea = ({ userInfo }: { userInfo: UserState }) => {
  const dispatch = useAppDispatch();
  const onHandleDropdownMenu = (key: string) => {
    if (key === 'signOut') {
      signOutUser();
      dispatch(signOut());
    }
  };
  return !userInfo.isSignIn ? (
    <NavbarSignIn />
  ) : userInfo.isAdmin ? (
    <NavbarAuthAdminItem userInfo={userInfo} onHandleDropdownMenu={onHandleDropdownMenu} />
  ) : (
    <NavbarAuthDefaultItem userInfo={userInfo} onHandleDropdownMenu={onHandleDropdownMenu} />
  );
};
export default NavbarAuthArea;
