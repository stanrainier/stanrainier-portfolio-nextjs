"use client";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Code, Tabs, Tab, Tooltip } from "@heroui/react";
import { projects } from "@/app/common/data/project-data";
import { FaCode, FaRegFolderOpen } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import AnimatedSection from "./animatedSection";
import { skills_icons } from "@/app/common/data/skills-icons";
import { TextAnimate } from "./magicui/text-animate";
import { Safari } from "./magicui/safari";

export default function Projects() {
  return (
    <div className="mt-56 mb-64">
      <AnimatedSection>
      
      <h1 className="lg:text-6xl text-center font-bold  dark:text-amber-50 mt-24 ">
      <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
        Projects
      </TextAnimate>
      </h1>
    
   
      <div className="relative h-[700px]"> 
        <Tabs aria-label="Project Categories" variant="underlined">
          <Tab key="all" title={
            <div className="flex items-center space-x-2">
              <FaRegFolderOpen />
              <span>All</span>
              </div>
          }
          >
            <ProjectGrid projects={projects} />
          </Tab>
          <Tab key="fullstack" title={
            <div className="flex items-center space-x-2">
              <FaCode /> 
              <span>Full-stack</span>
              </div>
          }>
            <ProjectGrid projects={projects.filter((project) => project.category === "fullstack")} />
          </Tab>
          <Tab key="sitebuilder"  title={
            <div className="flex items-center space-x-2">
              <CgWebsite />
              <span>Site Builders</span>
              </div>
          }>
            <ProjectGrid projects={projects.filter((project) => project.category === "sitebuilder")} />
          </Tab>
        </Tabs>
      </div>
      </AnimatedSection>
    </div>
  );
}

function ProjectGrid({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ProjectCard({ project }: any) {
  return (
    <div className="relative group w-full rounded-lg overflow-visible">
      {/* Static Image */}
      <Card >
      <CardHeader className="flex items-center gap-4">
            <Image alt="Project Logo" height={40} radius="sm" src={project.image} width={40} />
            <div className="flex flex-col">
              <p className="text-md font-bold">{project.title}</p>
              <p className="text-small text-default-500">{project.url}</p>
            </div>
          </CardHeader>
        <CardBody>
          <Image
            alt="Project Hero"
            src={project.image_hero}
            className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </CardBody>

      </Card>
    

      {/* Hover Card */}
      <div className="absolute top-0 left-0 w-full min-h-[500px] z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Card className="w-full h-full text-white shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="flex items-center gap-4">
            <Image className="cursor-pointer" alt="Project Logo" height={40} radius="sm" src={project.image} width={40} onClick={() => window.open(project.url, "_blank")} />
            <div className="flex flex-col">
              <p className="text-md font-bold cursor-pointer hover:text-violet-600 transition ease-in-out duration-300" onClick={() => window.open(project.url, "_blank")}>{project.title}</p>
              <p className="text-small text-default-500 cursor-pointer hover:text-violet-600 transition ease-in-out duration-300" onClick={() => window.open(project.url, "_blank")}>{project.url}</p>
            </div>
          </CardHeader>
          <CardBody className="overflow-y-auto">
            <Image
            onClick={() => window.open(project.url, "_blank")}
              src={project.image_hero}
              alt={project.title}
              className="hover:transform hover:scale-105 cursor-pointer transition-transform duration-300 ease-in-out rounded-lg mb-6"
            />
            <Divider />
            <p className="my-4 p-4 text-md text-black-500 dark:text-white-500 text-justify">{project.description}</p>
            <Divider />
            <div className="grid grid-cols-4 gap-2 mt-2">
              {project.tags.map((tag: { name: string, icon: React.ElementType }, idx: number) => (
                <Code key={idx} className="flex items-center gap-1" color="primary">
                  <tag.icon size={20} />
                  <span>{tag.name}</span>
                </Code>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Link href={project.url} className="btn btn-primary">Visit</Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );

}

