'use client';

import { Switch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';
import { MoonFilledIcon, SunIcon } from '../icons';

interface NavbarThumbIconProps {
  isSelected: boolean;
  className?: string;
}

function NavbarThumbIcon({ isSelected, className }: NavbarThumbIconProps) {
  const isSSR = useIsSSR();
  return isSelected || isSSR ? <MoonFilledIcon className={className} size={14} /> : <SunIcon className={className} />;
}

export default function NavbarSwitch() {
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
}
