import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaFolderOpen } from "react-icons/fa";
import { MdOutlineArticle } from "react-icons/md";
import { RiUserStarLine } from "react-icons/ri";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Dev Stan | Portfolio",
  description: "A creative portfolio developed by Stan Rainier D. Salazar",

  navItems: [
    { label: "Home", href: "/", icon: AiOutlineHome },
    { label: "About", href: "/about", icon: CgProfile },
    { label: "Projects", href: "/projects", icon: FaFolderOpen },
    { label: "Blog", href: "/blog", icon: MdOutlineArticle },
    { label: "Contact", href: "/contact", icon: RiUserStarLine },
  ],
  
  navMenuItems: [
    { label: "Home", href: "/", icon: AiOutlineHome },
    { label: "About", href: "/about", icon: CgProfile },
    { label: "Projects", href: "/projects", icon: FaFolderOpen },
    { label: "Blog", href: "/blog", icon: MdOutlineArticle },
    { label: "Contact", href: "/contact", icon: RiUserStarLine },
  ],
  links: {
    github: "https://github.com/stanrainier",
    gitlab: "https://gitlab.com/stanrainier",
    buymecoffe: "https://buymeacoffee.com/stanrainiersalazar",
    linkedIn: "https://www.linkedin.com/in/stan-rainier-salazar-70365a2bb/",
  },
};
