'use client';
import { NavbarItem } from '@nextui-org/navbar';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';

const NavbarHorizontalItem = ({ isAdmin }: { isAdmin: boolean }) => {
  const sites = siteConfig.navItems.filter((x) => (isAdmin ? x : isAdmin === x.isAdmin));
  return (
    <ul className="hidden sm:flex gap-4 justify-start ml-2">
      {sites.map((item) => (
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
