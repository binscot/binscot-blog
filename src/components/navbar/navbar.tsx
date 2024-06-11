'use client';

import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarBrand, NavbarMenuToggle } from '@nextui-org/navbar';
import { GithubIcon, BugIcon } from '@/components/icons';
import NavbarSwitch from '@/components/navbar/navbarSwitch';
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import { siteConfig } from '@/config/site';
import { setUser } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import NavbarAuthArea from './navbarAuthArea';
import { UserInitialState } from '@/types';
import { getCurrentUser } from '@/actions/auth-action';
import NavbarVerticalItem from '@/components/navbar/navbarVerticalItem';
import NavbarHorizontalItem from '@/components/navbar/navbarHorizontalItem';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = (setType?: boolean | undefined) => {
    setIsMenuOpen(typeof setType === 'boolean' ? setType : !isMenuOpen);
  };
  const dispatch = useAppDispatch();
  const storeUserInfo = useAppSelector((state) => state.authSlice.value);
  const [userInfo, setUserInfo] = useState(UserInitialState);

  const setCurrentUser = async () => {
    const currentUserInfo = await getCurrentUser();
    if (currentUserInfo.isSignIn) {
      dispatch(setUser(currentUserInfo));
      setUserInfo(currentUserInfo);
    }
  };
  useEffect(() => {
    if (!userInfo.isSignIn && !storeUserInfo.isSignIn) {
      setCurrentUser();
    }
    if (userInfo.isSignIn !== storeUserInfo.isSignIn) {
      setUserInfo(storeUserInfo);
    }
  }, [storeUserInfo]);

  return (
    <NextUINavbar isMenuOpen={isMenuOpen} className="dark:bg-gray-800" maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/" onClick={() => toggleMenu(false)}>
            <BugIcon />
            <p className="font-bold text-inherit">Binscot</p>
          </NextLink>
        </NavbarBrand>
        <NavbarHorizontalItem isAdmin={userInfo.isAdmin} />
      </NavbarContent>
      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarAuthArea userInfo={userInfo} />
        <NextLink aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </NextLink>
        <NavbarSwitch />
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" onClick={() => toggleMenu()} />
      <NavbarMenu className="sm:hidden">
        <NavbarVerticalItem toggleMenu={toggleMenu} isAdmin={userInfo.isAdmin} />
      </NavbarMenu>
    </NextUINavbar>
  );
};
export default Navbar;
