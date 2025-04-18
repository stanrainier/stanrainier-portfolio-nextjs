import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
  GitlabIcon,
} from "@/components/icons";
import {Tooltip} from "@heroui/tooltip";


export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <p className="font-bold text-3xl antialiased font-extrabold text-transparent 
          bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text transition-all duration-[1500ms]
          ease-in-out hover:from-cyan-400 hover:to-blue-500">
            {`STAN`}
          </p>
          </NextLink>
        </NavbarBrand>

      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex sm:basis-full"
        justify="end"
      >
         <ul className="flex gap-8 items-center">
      {siteConfig.navItems.map((item) => (
        <li key={item.href} className="relative group">
          <Tooltip
            content={item.label}
            placement="bottom"
            className="text-lg font-semibold "
            showArrow
            >
            <NextLink href={item.href} className="flex items-center gap-2 transition-all">
              <item.icon className="text-blue-800 text-xl transition-opacity duration-300 ease-in-out group-hover:text-violet-800" />
            </NextLink>
          </Tooltip>
        </li>
      ))}
    </ul>

        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.buymecoffe}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Buy Stan a Coffee
          </Button>
        </NavbarItem>
        <ThemeSwitch />

      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  "primary"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
