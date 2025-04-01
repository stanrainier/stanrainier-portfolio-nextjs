import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react";
import { projects } from "@/app/common/data/project-data";
import { skills_icons } from "@/app/common/data/skills-icons";




export default function Projects() {
    return (
      <div>
        <h1 className="text-8xl font-bold text-default-500">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (

            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  }

  function ProjectCard({ project }: any) {
    return (
      <div className="flex flex-col items-center justify-center">   
        <Card>
          <CardHeader>
            <Image
              alt="heroui logo"
              height={40}
              radius="sm"
              src={project.image}
              width={40}
              />
            <div className="flex flex-col">
              <p className="text-md">{project.title}</p>
              <p className="text-small text-def  sault-500">{project.url}</p>  
              <p className="text-small text-default-500">{project.tags.join(", ")}</p>
            </div>
          </CardHeader>
          <CardBody>
            <Divider />
            <p className="text-small text-default-500">{project.description}</p>
            <Divider />
          </CardBody>
          <CardFooter>
              <Link href={project.url} className="btn btn-primary">Visit</Link>
          </CardFooter>
        </Card>

      </div>
    );
  }