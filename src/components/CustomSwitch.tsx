// import { MoonIcon, SunIcon } from '@/components/icons';
// import { useIsSSR } from '@react-aria/ssr';

// interface CustomThumbIconProps {
//   isSelected: boolean;
//   className?: string; // className can be optional if it's not always provided
// }
// export function CustomThumbIcon({ isSelected, className }: CustomThumbIconProps) {
//   console.log(isSelected);
//   console.log(className);
//   const isSSR = useIsSSR();
//   return !isSelected || isSSR ? <SunIcon className={className} /> : <MoonIcon className={className} />;
// }
import { MoonIcon, SunIcon } from '@/components/icons';

import { Switch } from '@nextui-org/switch';
import { useIsSSR } from '@react-aria/ssr';
import { useTheme } from 'next-themes';

interface CustomThumbIconProps {
  isSelected: boolean;
  className?: string; // className can be optional if it's not always provided
}

function CustomThumbIcon({ isSelected, className }: CustomThumbIconProps) {
  console.log(isSelected);
  console.log(className);
  const isSSR = useIsSSR();
  return !isSelected || isSSR ? <SunIcon className={className} /> : <MoonIcon className={className} />;
}

// interface CustomSwitchProps {
//   theme?: string; // className can be optional if it's not always provided
// }
export function CustomSwitch() {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();
  return (
    <Switch
      isSelected={theme === 'light' || isSSR}
      onChange={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      thumbIcon={CustomThumbIcon}
    />
  );
}
