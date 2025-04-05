import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Code, Tabs, Tab } from "@heroui/react";
import { projects } from "@/app/common/data/project-data";
import { FaCode, FaRegFolderOpen } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold  dark:text-amber-50 mb-8">Projects</h1>
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
    <Card>
      <CardHeader>
        <Image alt="Project Logo" height={40} radius="sm" src={project.image} width={40} />
        <div className="flex flex-col">
          <p className="text-md font-bold">{project.title}</p>
          <p className="text-small text-default-500">{project.url}</p>
        </div>
      </CardHeader>
      <CardBody>
      <Image 
          src={project.image_hero}
          alt="Stan Rainier D. Salazar"
          >
        </Image>
        <Divider />
        <p className="my-4 text-md  text-default-500">{project.description}</p>
        <Divider />
        <div className="grid grid-cols-4 gap-2 mt-2">
          {project.tags.map((tag: any) => (
            <Code key={tag} color="default">{tag}</Code>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Link href={project.url} className="btn btn-primary">Visit</Link>
      </CardFooter>
    </Card>
  );
}
