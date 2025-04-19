"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Image,
  Code,
  Link,
  Divider
} from "@heroui/react";
import { projects } from "@/app/common/data/project-data";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ShineBorder } from "./magicui/shine-border";

export default function ProjectListByCategory() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (project: any) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  // Group by category
  const groupedProjects: { [category: string]: typeof projects } = {};
  projects.forEach((project) => {
    if (!groupedProjects[project.category]) {
      groupedProjects[project.category] = [];
    }
    groupedProjects[project.category].push(project);
  });

  return (
    <div className="p-8 space-y-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Render Fullstack First */}
      {["fullstack", "sitebuilder"].map((category) => {
        const categoryProjects = groupedProjects[category];
        if (!categoryProjects) return null;

        return (
          <div key={category}>
            <h1 className="text-4xl font-bold mb-4 uppercase text-left bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
              {category}
            </h1>

            <div className="space-y-6">
              {categoryProjects.map((project) => (
                <Card
                  key={project.id}
                  isPressable
                  onPress={() => handleOpen(project)}
                  className="p-4 hover:bg-gray-500 transition cursor-pointer w-full"
                >
                  <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />

                  <div className="grid grid-cols-6 gap-4 items-center">
                    {/* Left: Image */}
                    <div className="col-span-1">
                      <Image
                        alt={project.title}
                        src={project.image}
                        width={80}
                        height={80}
                        className="rounded-md"
                      />
                    </div>

                    {/* Middle: Title & Description */}
                    <div className="col-span-4">
                      <h2 className="text-lg font-semibold text-left">
                        {project.title}
                      </h2>
                      <p className="text-sm text-left line-clamp-2">
                        {project.short_description}
                      </p>
                    </div>

                    {/* Right: Arrow Icon */}
                    <div className="col-span-1 flex justify-end items-center">
                      <FaArrowRight className="text-xl" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </div>

  {/* Modal */}
  <Modal isOpen={isOpen} onClose={handleClose} size="4xl">
    <ModalContent>
      {selectedProject && (
        <>
          <ModalHeader className="flex items-center gap-4">
            <Image
              src={selectedProject.image}
              alt="Project Logo"
              width={40}
              height={40}
            />
            <div>
              <h2 className="text-lg font-bold">{selectedProject.title}</h2>
              <Link
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                {selectedProject.url}
              </Link>
            </div>
          </ModalHeader>

          <ModalBody>
            <Image
              src={selectedProject.image_hero}
              alt="Hero"
              className="rounded-lg mb-4"
            />

            <p className="text-justify text-md p-4 rounded">
              {selectedProject.description}
            </p>

            <Divider className="my-4" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {selectedProject.tags.map(
                (
                  tag: { name: string; icon: React.ElementType },
                  i: number
                ) => (
                  <Code
                    key={i}
                    className="flex items-center gap-1"
                    color="primary"
                  >
                    <tag.icon size={18} />
                    <span>{tag.name}</span>
                  </Code>
                )
              )}
            </div>
          </ModalBody>

          <ModalFooter>
            <Link
              href={selectedProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit project ↗
            </Link>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
</div>

  );
}
