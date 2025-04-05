import { siteConfig } from "@/config/site";
import { Link } from "@heroui/link";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import { button as buttonStyles } from "@heroui/theme";
import { MdEmail } from "react-icons/md";
import { Divider } from "@heroui/react";

export default function Footer() {


    return(

        <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <Divider />
            <div className="flex flex-row items-center gap-2">
                <MdEmail />
                <span>dev.stanrainiersalazar@gmail.com</span>
            </div>
            <div className="flex gap-5">
                <Link
                    isExternal
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={siteConfig.links.github}
                >
                    <FaGithub size={20} />
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={siteConfig.links.gitlab}
                >
                    <FaGitlab size={20} />
                </Link>
                <Link
                    isExternal
                    className={buttonStyles({ variant: "bordered", radius: "full" })}
                    href={siteConfig.links.linkedIn}
                >
                    <FaLinkedin size={20} />
                </Link>
           </div>
           <span className="text-xs">Copyright © 2025 Stan Rainier D. Salazar</span>

        </div>

    )
}