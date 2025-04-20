'use client'

import { Alert, Spacer } from "@heroui/react";
import Contact from "@/components/contact";
import About from "@/components/about";
import Hero from "@/components/hero";
import ProjectsDisplay from "@/components/projects_bento";


export default function Home() {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <Spacer x={56} />
        <About />
        <Spacer x={56} />
      </section>
      <section id="projects">
        <Spacer x={56} />
          <div className="mt-[1000px] mb-64 lg:mt-56">
            <ProjectsDisplay />
          </div>
        <Spacer x={56} />
      </section>
      <section id="contact" >
        <Spacer x={56} />
        <Contact />
      </section>
      </div>
  );
}
