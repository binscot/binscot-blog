'use client';

import { setUser, signOut } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IconUserStar, IconUser } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';

import { UserState } from '@/types';
import { signOutUser } from '@/actions/auth-action';
import NavbarSignIn from '@/components/navbar/navbarSignIn';

export default function NavbarUserItem({ userInfo }: { userInfo: UserState }) {
  const dispatch = useAppDispatch();
  const storUserInfo = useAppSelector((state) => state.authSlice.value);
  if (userInfo.isSignIn && !storUserInfo.isSignIn) {
    dispatch(setUser(userInfo));
  }
  const onHandleDropdownMenu = (key: string) => {
    if (key === 'signOut') {
      signOutUser();
      dispatch(signOut());
    }
  };
  return (
    <>
      {!userInfo.isSignIn && <NavbarSignIn />}
      {userInfo.isSignIn && userInfo.isAdmin && (
        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <IconUserStar size={24} />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" onAction={(key) => onHandleDropdownMenu(key.toString())} variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">{userInfo.username}</p>
                <p className="font-bold">{userInfo.createdAt}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="signOut" color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      {userInfo.isSignIn && !userInfo.isAdmin && (
        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <IconUser size={24} />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" onAction={(key) => onHandleDropdownMenu(key.toString())} variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">{userInfo.username}</p>
                <p className="font-bold">{userInfo.createdAt}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="signOut" color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
    </>
  );
}
