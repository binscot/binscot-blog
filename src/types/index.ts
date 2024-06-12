import { SVGProps } from 'react';

export type FuncDropdownMenu = (key: string) => void;
export type ToggleMenuFn = (setType?: boolean | undefined) => void;
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type UserState = {
  isSignIn: boolean;
  joinType: string;
  username: string;
  uid: string;
  isAdmin: boolean;
  createdAt: string;
  gender: string;
};

export const UserInitialState = {
  isSignIn: false,
  joinType: '',
  username: '',
  uid: '',
  isAdmin: false,
  createdAt: '',
  gender: ''
} as UserState;
