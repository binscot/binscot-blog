import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { siteConfig } from '@/config/site';
import NextLink from 'next/link';
import { GithubIcon } from '@/components/icons';
import NavbarMenuToggleItem from '@/components/navbar/navbarMenuToggleItem';
import NavbarLogo from '@/components/navbar/navbarLogo';
import NavbarUser from '@/components/navbar/navbarUser';
import NavbarSwitch from '@/components/navbar/navbarSwitch';

export function Navbar() {
  return (
    <NextUINavbar className="dark:bg-gray-800" maxWidth="xl" position="sticky">
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
