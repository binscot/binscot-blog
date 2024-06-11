'use client';

import { signOut } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { IconUserStar, IconUser } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FuncDropdownMenu, UserState } from '@/types';
import { signOutUser } from '@/actions/auth-action';
import NavbarSignIn from '@/components/navbar/navbarSignIn';

const NavbarAuthAdminItem = ({ userInfo, onHandleDropdownMenu }: { userInfo: UserState; onHandleDropdownMenu: FuncDropdownMenu }) => {
  return (
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
  );
};

const NavbarAuthDefaultItem = ({ userInfo, onHandleDropdownMenu }: { userInfo: UserState; onHandleDropdownMenu: FuncDropdownMenu }) => {
  return (
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
  );
};

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
