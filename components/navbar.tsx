"use client";
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
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { Tooltip } from "@heroui/tooltip";
import { Image } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    // MAIN NAVBAR
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className=" sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="Stan"
              className="sm:hidden"
              src="/images/favicon.PNG"
              width={30}
            />
            <Image
              alt="Stan"
              className="hidden sm:block"
              height={40}
              src="/images/favicon.PNG"
              width={40}
            />
            <p
              className="font-bold  ml-2 antialiased font-extrabold text-transparent 
          bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text transition-all duration-[1500ms]
          ease-in-out hover:from-cyan-400 hover:to-blue-500 lg:text-2xl text-xl"
            >
              {`< STAN >`}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* MOBILE NAVBAR */}
      <NavbarContent className="hidden sm:flex sm:basis-full" justify="end">
        <ul className="flex gap-8 items-center">
          {siteConfig.navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Tooltip
                showArrow
                className="text-lg font-semibold "
                content={item.label}
                placement="bottom"
              >
                <NextLink
                  className="flex items-center gap-2 transition-all"
                  href={item.href}
                >
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
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={"primary"} href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
