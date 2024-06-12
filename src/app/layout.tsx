import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/config/fonts';

import { GithubIcon } from '@/components/icons';
import { ProvidersWrapper } from '@/providers/providerWrapper';
import NavbarWrapper from '@/components/navbarWrapper';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log('RootLayout');
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={clsx('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ProvidersWrapper themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <NavbarWrapper />
            <main className="container dark:bg-gray-900 mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
            <footer className="w-full flex items-center justify-center py-3">
              <div className="flex flex-col items-center gap-3  py-10 text-center text-sm text-slate-500">
                <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                  <GithubIcon className="text-default-500" />
                </Link>
                <span className="text-default-400">© 2024 binscot. All Rights Reserved.</span>
              </div>
            </footer>
          </div>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
