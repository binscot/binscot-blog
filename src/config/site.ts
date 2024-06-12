export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Binscot',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Blog',
      href: '/blog',
      isAdmin: false
    },
    {
      label: 'Project',
      href: '/project',
      isAdmin: false
    },
    {
      label: 'Icon...',
      href: '/icons',
      isAdmin: false
    },
    {
      label: 'WriteBlog',
      href: '/blog/write',
      isAdmin: true
    }
  ],
  navMenuItems: [
    {
      label: 'Blog',
      href: '/blog',
      isAdmin: false
    },
    {
      label: 'Project',
      href: '/project',
      isAdmin: false
    },
    {
      label: 'Icon...',
      href: '/icons',
      isAdmin: false
    },
    {
      label: 'WriteBlog',
      href: '/blog/write',
      isAdmin: true
    }
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    docs: 'https://nextui.org'
  }
};
