'use client';

import { Navbar as NextUINavbar, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from '@nextui-org/navbar';
import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clickLogo } from '@/redux/features/navSlice';

export default function NavbarMenuToggleItem() {
  const dispatch = useAppDispatch();
  const isLogoClick = useAppSelector((state) => state.navSlice.isLogoClick);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const togleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    if (isLogoClick) {
      setIsMenuOpen(false);
      dispatch(
        clickLogo({
          isLogoClick: false
        })
      );
    }
  }, [dispatch, isLogoClick]);

  return (
    <>
      <NavbarMenuToggle onClick={() => togleMenu()} />
      <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="hidden next-ui-navbar relative w-min p-0 sm:hidden">
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label + index}`}>
                <NextLink href={item.href} onClick={() => togleMenu()}>
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </NextUINavbar>
    </>
  );
}
