"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import {
  FaGithub,
  FaGitlab,
  FaHeart,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { button as buttonStyles } from "@heroui/theme";
import { Button, Divider, Image, NavbarBrand } from "@heroui/react";
import { HeartFilledIcon } from "./icons";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-20 py-10 bg-background border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-10 text-sm">
        {/* Column 1: Site Info */}
        <div className="flex flex-col gap-3">
        <div className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image src="/images/favicon.PNG" alt="Stan" width={40} height={40} className="" />
          <p className="font-bold text-2xl ml-2 antialiased font-extrabold text-transparent 
          bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text transition-all duration-[1500ms]
          ease-in-out hover:from-cyan-400 hover:to-blue-500">
            {`< STAN >`}
          </p>
          </NextLink>
        </div>
          <p className="text-default-500">
            A developer portfolio built and designed by Stan Rainier D. Salazar.
          </p>
          <div className="flex gap-4 mt-2">
            <Link
              isExternal
              href={siteConfig.links.github}
              className={buttonStyles({ variant: "flat", radius: "full" })}
            >
              <FaGithub size={18} />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.gitlab}
              className={buttonStyles({ variant: "flat", radius: "full" })}
            >
              <FaGitlab size={18} />
            </Link>
            <Link
              isExternal
              href={siteConfig.links.linkedIn}
              className={buttonStyles({ variant: "flat", radius: "full" })}
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Quick Links</h2>
          {siteConfig.navItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className="hover:underline text-default-500"
            >
              {item.label}
            </NextLink>
          ))}
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Contact</h2>
          <div className="flex items-center gap-2 text-default-500">
            <MdEmail />
            <span>dev.stanrainiersalazar@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-default-500">
            <FaLocationDot />
            <span>Philippines</span>
          </div>
          <Button
            isExternal
            as={Link}
            href={siteConfig.links.buymecoffe}
            startContent={<HeartFilledIcon className="text-danger" />}
            className="text-sm font-normal text-default-600 bg-default-100 mt-2 w-fit"
            variant="flat"
          >
            Buy Stan a Coffee
          </Button>
        </div>
      </div>

      <Divider className="my-4" />
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-default-400">
        <span>© {new Date().getFullYear()} Stan Rainier D. Salazar. All rights reserved.</span>
        <div className="flex gap-1 items-center">
          <span>Built & Designed with</span>
          <FaHeart size={13} className="text-red-500" />
          <span>by Stan Rainier D. Salazar</span>
        </div>
      </div>
    </footer>
  );
}
