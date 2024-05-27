export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Binscot',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'Project',
      href: '/project'
    }
  ],
  navMenuItems: [
    {
      label: 'Blog',
      href: '/blog'
    },
    {
      label: 'Project',
      href: '/project'
    }
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    docs: 'https://nextui.org'
  }
};
