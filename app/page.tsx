'use client'

import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { siteConfig } from "@/config/site";
import { GithubIcon, GitlabIcon } from "@/components/icons";
import { Alert, Spacer } from "@heroui/react";
import { motion } from "motion/react"
import Contact from "@/components/contact";
import About from "@/components/about";
import Projects from "@/components/projects";
import Image from "next/image";
import Hero from "@/components/hero";


export default function Home() {
  return (
    <div>
      <Alert description="This website is still under construction" title="Under Construction" color="secondary" variant="bordered" />
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
      <section id="hero">
        <Hero />
      </section>
      </motion.div>
      <section id="about">
        <Spacer x={56} />
        <About />
        <Spacer x={56} />
      </section>
      <section id="projects">
        <Spacer x={56} />
        <Projects />
        <Spacer x={56} />
      </section>
      <section id="contact">
        <Spacer x={56} />
        <Contact />
      </section>
      
    </div>
    
  );
}
