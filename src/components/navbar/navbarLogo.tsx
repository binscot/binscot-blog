'use client';

import { clickLogo } from '@/redux/features/navSlice';
import NextLink from 'next/link';
import { useAppDispatch } from '@/redux/hooks';
import { BugIcon } from '../icons';

export default function NavbarLogo() {
  const dispatch = useAppDispatch();
  const onLogoClick = () => {
    dispatch(
      clickLogo({
        isLogoClick: true
      })
    );
  };
  return (
    <NextLink className="flex justify-start items-center gap-1" href="/" onClick={() => onLogoClick()}>
      <BugIcon />
      <p className="font-bold text-inherit">Binscot</p>
    </NextLink>
  );
}
