import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import { GithubIcon } from '../icons';
import NavbarMenuToggleItem from './navbarMenuToggleItem';
import NavbarLogo from './navbarLogo';
import NavbarUser from './navbarUser';
import NavbarSwitch from './navbarSwitch';

export function Navbar() {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NavbarLogo />
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink color="foreground" href={item.href}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>
      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarUser />
        <NextLink aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </NextLink>
        <NavbarSwitch />
      </NavbarContent>
      <NavbarMenuToggleItem />
    </NextUINavbar>
  );
}