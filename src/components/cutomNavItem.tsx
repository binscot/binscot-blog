'use client';

import { IconUserStar, IconUserX, IconUser } from '@tabler/icons-react';

export default function CustomNavItem() {
  return (
    <div>
      <IconUserX size={24} />
      <IconUser size={24} />
      <IconUserStar size={24} />
    </div>
  );
}
