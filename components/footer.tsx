"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { FaGithub, FaGitlab, FaLinkedin, FaLocationDot } from "react-icons/fa6";
import { button as buttonStyles } from "@heroui/theme";
import { MdEmail } from "react-icons/md";
import { Button, Divider } from "@heroui/react";
import { RiNextjsFill } from "react-icons/ri";
import { HeartFilledIcon } from "./icons";

export default function Footer() {


    return(
        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Divider />
            <div className="flex flex-row items-center gap-2">
                <MdEmail />
                <span>dev.stanrainiersalazar@gmail.com</span>
            </div>
            <div className="flex flex-row items-center gap-2">
            <FaLocationDot />
                <span>Philippines</span>
            </div>
            <div className="flex gap-5">
                <Link
                    isExternal
                    className={buttonStyles({ variant: "flat", radius: "full" })}
                    href={siteConfig.links.github}
                >
                    <FaGithub size={20} />
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "flat", radius: "full" })}
                    href={siteConfig.links.gitlab}
                >
                    <FaGitlab size={20} />
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "flat", radius: "full" })}
                    href={siteConfig.links.linkedIn}
                >
                    <FaLinkedin size={20} />
                </Link>
           </div>
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
            <div className="flex gap-2 items-center">
                <span className="text-xs">Made with</span>
                <RiNextjsFill size={15}/>
                <span className="text-xs">by Stan Rainier D. Salazar</span>
            </div>
        </div>

    )
}