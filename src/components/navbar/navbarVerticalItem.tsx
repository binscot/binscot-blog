'use client';

import React from 'react';
import NextLink from 'next/link';
import { NavbarMenuItem } from '@nextui-org/navbar';
import { siteConfig } from '@/config/site';
import { ToggleMenuFn } from '@/types';

const NavbarVerticalItem = ({ toggleMenu, isAdmin }: { toggleMenu: ToggleMenuFn; isAdmin: boolean }) => {
  const sites = siteConfig.navMenuItems.filter((x) => (isAdmin ? x : isAdmin === x.isAdmin));
  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {sites.map((item, index) => (
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
