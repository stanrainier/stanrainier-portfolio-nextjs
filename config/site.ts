export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dev Stan | Portfolio",
  description: "A creative portfolio developed by Stan Rainier D. Salazar",
  navItems: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  navMenuItems: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },

  ],
  links: {
    github: "https://github.com/stanrainier",
    gitlab: "https://gitlab.com/stanrainier",
    buymecoffe: "https://buymeacoffee.com/stanrainiersalazar",
    linkedIn: "https://www.linkedin.com/in/stan-rainier-salazar-70365a2bb/",
  },
};
