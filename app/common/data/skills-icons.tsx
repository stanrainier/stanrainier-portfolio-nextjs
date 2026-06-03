import {
  SiAmazon,
  SiDjango,
  SiExpo,
  SiFirebase,
  SiGooglecloud,
  SiJirasoftware,
  SiMysql,
  SiNestjs,
  SiPhp,
  SiPostman,
  SiShopify,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { IoLogoElectron, IoLogoJavascript } from "react-icons/io5";
import {
  FaBootstrap,
  FaCcStripe,
  FaCss3Alt,
  FaElementor,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaLaravel,
  FaPython,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa";
import {
  FaAngular,
  FaAppStoreIos,
  FaGooglePlay,
  FaNodeJs,
} from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const skills_icons: Record<string, React.ElementType> = {
  SiTypescript,
  IoLogoJavascript,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  RiNextjsFill,
  FaReact,
  RiTailwindCssFill,
  FaBootstrap,
  SiPhp,
  FaPython,
  FaLaravel,
  SiMysql,
  FaWordpressSimple,
  FaElementor,
  SiExpo,
  SiShopify,
  SiDjango,
  FaNodeJs,
  SiFirebase,
  FaGitAlt,
  SiVercel,
  SiJirasoftware,
  FaFigma,
  SiPostman,
  FaCcStripe,
  FaAppStoreIos,
  FaGooglePlay,
  SiGooglecloud,
  IoLogoElectron,
  SiNestjs,
  SiAmazon,
  SiAmazonaws: SiAmazon,
  SiMicrosoftazure: IoLogoElectron,
  SiGohighlevel: IoLogoElectron,
};

export function getSkillIcon(iconName: string): React.ElementType {
  return skills_icons[iconName] ?? IoLogoElectron;
}
