'use client';
import { NavbarItem } from '@nextui-org/navbar';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';

const NavbarHorizontalItem = ({ isAdmin }: { isAdmin: boolean }) => {
  return (
    <ul className="hidden sm:flex gap-4 justify-start ml-2">
      {siteConfig.navItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink color="foreground" href={item.href}>
            {item.label}
          </NextLink>
        </NavbarItem>
      ))}
    </ul>
  );
};

export default NavbarHorizontalItem;
