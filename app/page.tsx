'use client'

import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, GitlabIcon } from "@/components/icons";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Divider } from "@heroui/react";
import { motion } from "motion/react"

export default function Home() {
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
        >
          <span className={title({ color: "blue" })}>Stan Rainier D. Salazar</span>
        </motion.div>
          <br />
          <span className={title({color:"cyan"})}>
            Full-Stack Developer
          </span>
          <div className={subtitle({ class: "mt-4" })}>
          From Bacolod City, Philippines.
          </div>
        </div>
        <div className="flex gap-5">

          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GitlabIcon size={20} />
            GitLab
          </Link>
        </div>
        <Dropdown backdrop="blur">
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" variant="faded">
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="delete" className="text-danger" color="danger">
            Delete file
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Divider className="my-4" />

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              ifypablo<Code color="primary">Link</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </motion.div>
    
  );
}
