'use client';

import { setUser, signOut } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { IconUserStar, IconUser } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import NavbarSignIn from './navbarSignIn';

type UserState = {
  isSignIn: boolean;
  joinType: string;
  username: string;
  uid: string;
  admin: boolean;
  createdAt: string;
  gender: string;
};

export default function NavbarUserItem({ userInfo }: { userInfo: UserState }) {
  const dispatch = useAppDispatch();
  const storUserInfo = useAppSelector((state) => state.authSlice.value);
  if (userInfo !== null && !storUserInfo.isSignIn) {
    dispatch(setUser(userInfo));
  }
  const onSignout = (key: string) => {
    if (key === 'signOut') {
      dispatch(signOut());
    }
  };
  return (
    <>
      {(userInfo === null || userInfo?.username === '') && <NavbarSignIn />}
      {userInfo !== null && userInfo?.username !== '' && userInfo.admin && (
        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <IconUserStar size={24} />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" onAction={(key) => onSignout(key)} variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">{userInfo.username}</p>
                <p className="font-bold">{userInfo.created_at}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="signOut" color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      )}
      {userInfo !== null && userInfo?.username !== '' && !userInfo.admin && (
        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-start">
            <DropdownTrigger>
              <IconUser size={24} />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" onAction={(key) => onSignout(key)} variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">{userInfo.username}</p>
                <p className="font-bold">{userInfo.created_at}</p>
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
