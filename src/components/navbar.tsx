'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem
} from '@nextui-org/navbar';
import { dataFocusVisibleClasses, link as linkStyles } from '@nextui-org/theme';
import { Button } from '@nextui-org/button';
import { useState } from 'react';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { Input } from '@nextui-org/input';
import NextLink from 'next/link';
import clsx from 'clsx';
import { GithubIcon, SearchIcon, Logo, SearchLinearIcon } from '@/components/icons';
import { siteConfig } from '@/config/site';
// import { useFocusRing } from '@react-aria/focus';
import CustomNavItem from './cutomNavItem';
import { CustomSwitch } from './CustomSwitch';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [commandKey, setCommandKey] = useState<'ctrl' | 'command'>('command');
  const togleMenu = () => {
    setIsMenuOpen(false);
  };

  const searchButton = (
    <Button
      aria-label="Quick search"
      className="text-sm font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20"
      endContent={
        <Kbd className="hidden py-0.5 px-2 lg:inline-block" keys={commandKey}>
          K
        </Kbd>
      }
      startContent={<SearchLinearIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" size={18} strokeWidth={2} />}
      // onPress={}
    >
      Quick Search...
    </Button>
  );

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />}
      type="search"
    />
  );

  return (
    <NextUINavbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Binscot</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(linkStyles({ color: 'foreground' }), 'data-[active=true]:text-primary data-[active=true]:font-medium')}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <CustomNavItem />
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <CustomSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">{searchInput}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <CustomNavItem />
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <CustomSwitch />
        {/* <NavbarItem className="lg:flex">{searchButton}</NavbarItem> */}
        {/* <NavbarItem className="flex h-full items-center">
          
        </NavbarItem> */}
        {/* <button className="transition-opacity p-1 hover:opacity-80 rounded-full cursor-pointer outline-none">
          
        </button> */}
        <SearchLinearIcon className="mt-px text-default-600 dark:text-default-500" size={20} />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label + index}`}>
              <NextLink href={item.href} onClick={() => togleMenu()}>
                {item.label}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem />
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
}
