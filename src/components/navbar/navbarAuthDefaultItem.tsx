'use client';
import { IconUser } from '@tabler/icons-react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { FuncDropdownMenu, UserState } from '@/types';

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

export default NavbarAuthDefaultItem;
