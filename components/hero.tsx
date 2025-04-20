import { siteConfig } from "@/config/site";
import { Code } from "@heroui/code";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/dropdown";
import { Divider, Spacer } from "@heroui/react";
import { Snippet } from "@heroui/snippet";
import { motion } from "framer-motion";
import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";
import { FaLinkedin, FaGitlab, FaGithub  } from "react-icons/fa6";
import Typewriter from 'typewriter-effect';
import AnimatedSection from "./animatedSection";
import { Particles } from "./magicui/particles";
import { FaFolder } from "react-icons/fa";
import { RiUserStarLine } from "react-icons/ri";
import {Image} from "@heroui/react";

export default function Hero() {
  return (
    <AnimatedSection>
      <section className="flex flex-col md:flex-row items-center gap-10 py-8 md:py-10">
        {/* Background Particles */}
        <div className="absolute inset-0 z-[-1] ">
          <Particles />
        </div>
        {/* Left Section - Image */}
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <Image
            isZoomed
            src="/images/mehero.png"
            alt="Stan Rainier D. Salazar"
            width={200}
            height={200}
            className="sm:hidden bg-blue-500 shadow-lg"
          />

          {/* Medium and up: 600x600 image */}
          <Image
            isZoomed
            src="/images/mehero.png"
            alt="Stan Rainier D. Salazar"
            width={600}
            height={600}
            className="hidden sm:block bg-blue-500 shadow-lg"
          />
        </div>

        {/* Right Section - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.8 }}
            className="mb-4"
          >
            <span className="text-lg font-bold dark:text-amber-50 md:text-4xl">
              Hi, I&apos;m
            </span>
            <br />
            <span className={title({ color: "blue" })}>Stan Rainier D. Salazar</span>
          </motion.div>

          <span className="text-lg font-bold mb-4 dark:text-amber-50 md:text-4xl">
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Web Developer',
                  'Software Engineer',
                  'Tech Enthusiast',
                  'Frontend Developer',
                  'Backend Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>


          {/* Social Links */}
          <div className="flex justify-center md:justify-start mt-6 gap-5 sm:flex-row flex-col">
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <FaGithub size={20} />
              GitHub
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.gitlab}
            >
              <FaGitlab size={20} />
              GitLab
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.linkedIn}
            >
              <FaLinkedin size={20} />
              LinkedIn
            </Link>
          </div>
        </div>
        
        <Spacer x={16} />
      </section>
    </AnimatedSection>
  );
}
