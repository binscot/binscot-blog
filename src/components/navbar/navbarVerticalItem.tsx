'use client';
import { NavbarMenuItem } from '@nextui-org/navbar';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';
import React from 'react';

type ToggleMenuFn = (setType?: boolean | undefined) => void;

const NavbarVerticalItem = ({ toggleMenu, isAdmin }: { toggleMenu: ToggleMenuFn; isAdmin: boolean }) => {
  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {siteConfig.navMenuItems.map((item, index) => (
        <NavbarMenuItem key={`${item.label + index}`}>
          <NextLink href={item.href} onClick={() => toggleMenu()}>
            {item.label}
          </NextLink>
        </NavbarMenuItem>
      ))}
    </div>
  );
};

export default NavbarVerticalItem;
