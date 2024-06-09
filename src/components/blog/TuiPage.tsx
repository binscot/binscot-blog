'use client';

import { useRef } from 'react';

import dynamic from 'next/dynamic';

const NoSsrEditor = dynamic(() => import('./TuiEditor'), {
  ssr: false
});

export function TuiPage() {
  const ref = useRef(null);

  return <NoSsrEditor editorRef={ref} initialValue="go" />;
}
