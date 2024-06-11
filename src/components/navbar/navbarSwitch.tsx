'use client';

import { Switch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import { MoonFilledIcon, SunIcon } from '@/components/icons';

interface NavbarThumbIconProps {
  isSelected: boolean;
  className?: string;
}

const NavbarThumbIcon = ({ isSelected, className }: NavbarThumbIconProps) => {
  const isSSR = useIsSSR();
  return isSelected || isSSR ? <MoonFilledIcon className={className} size={14} /> : <SunIcon className={className} />;
};

const NavbarSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  return (
    <Switch
      className="!mr-0"
      isSelected={theme === 'dark' || isSSR}
      onChange={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      thumbIcon={NavbarThumbIcon}
    />
  );
};
export default NavbarSwitch;
