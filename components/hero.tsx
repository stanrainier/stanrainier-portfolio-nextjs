import { siteConfig } from "@/config/site";
import { Code } from "@heroui/code";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Divider } from "@heroui/react";
import { Snippet } from "@heroui/snippet";
import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";
import { FaLinkedin, FaGitlab, FaGithub  } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';

export default function Hero() {
    return(
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    <div className="inline-block max-w-xl text-center justify-center ">
      <div className="flex justify-center ">
      <Image 
        src="/images/mehero.png"
        alt="Stan Rainier D. Salazar"
        width={400}
        height={400}
        className="rounded-full mb-6  bg-blue-500 shadow-lg shadow-cyan-500/100"
        >
      </Image>
      </div>

    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.8 }}
    >
      <span className="text-4xl font-bold dark:text-amber-50"> Hi, I'm</span>
      <br />

      <span className={title({ color: "blue" })}>Stan Rainier D. Salazar</span>
    </motion.div>
      <br />

      <span className="text-2xl font-bold mb-4 dark:text-amber-50">
      <Typewriter
      options={{
        strings: ['Full-Stack Web Developer', 'Software Engineer', 'Tech Enthusiast'],
        autoStart: true,
        loop: true,
        delay: 75,
      }}
    />
      </span>
    </div>
    <div className="flex gap-5">

      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.github}
      >
        <FaGithub  size={20} />
        GitHub
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.github}
      >
        <FaGitlab size={20} />
        GitLab
      </Link>
      <Link
        isExternal
        className={buttonStyles({ variant: "bordered", radius: "full" })}
        href={siteConfig.links.linkedIn}
      >
        <FaLinkedin size={20}/>
        LinkedIn
      </Link>
    </div>
    {/* <Dropdown backdrop="blur">
    <DropdownTrigger>
      <Button variant="bordered">Other Creative Endeavors</Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Static Actions" variant="faded">
      <DropdownItem key="new">New file</DropdownItem>
      <DropdownItem key="copy">Copy link</DropdownItem>
      <DropdownItem key="edit">Edit file</DropdownItem>
      <DropdownItem key="delete" className="text-danger" color="danger">
        Delete file
      </DropdownItem>
    </DropdownMenu>
    </Dropdown> */}
  <Divider className="my-4" />

    {/* <div className="mt-8">
      <Snippet hideCopyButton hideSymbol variant="bordered">
        <span>
          ifypablo<Code color="primary">Link</Code>
        </span>
      </Snippet>
    </div> */}
  </section>
  )
}