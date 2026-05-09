"use client";

import {
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Image,
  Code,
  Link,
  Divider,
} from "@heroui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { ShineBorder } from "./magicui/shine-border";

import { projects } from "@/app/common/data/project-data";

export default function ProjectListByCategory() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

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

  sortedProjects.forEach((project) => {
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
                    className="p-4 hover:bg-gray-500 transition cursor-pointer w-full "
                    onPress={() => handleOpen(project)}
                  >
                    <ShineBorder
                      shineColor={["#1703fc", "#fc03f0", "#fc03f0"]}
                    />

                    <div className="flex flex-row lg:gap-4 grid grid-cols-1 lg:grid-cols-6 items-center gap-4">
                      {/* Left: Image */}
                      <div className="col-span-1 flex justify-center">
                        <Image
                          alt={project.title}
                          className="sm:hidden"
                          height={80}
                          src={project.image}
                          width={80}
                        />
                        <Image
                          alt={project.title}
                          className="hidden sm:block"
                          height={40}
                          src={project.image}
                          width={40}
                        />
                      </div>

                      {/* Middle: Title & Description */}
                      <div className="col-span-1 lg:col-span-4 text-center lg:text-left">
                        <h2 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h2>
                        <p className="text-sm line-clamp-2">
                          {project.short_description}
                        </p>
                      </div>

                      {/* Right: Arrow Icon */}
                      <div className="col-span-1 flex justify-center lg:justify-end items-center">
                        <FaArrowRight className="hidden sm:block text-xl" />
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
      <Modal isOpen={isOpen} size="4xl" onClose={handleClose}>
        <ModalContent
          className="max-h-[80vh] sm:max-h-[90vh] md:max-h-[95vh] overflow-y-auto 
               rounded-t-2xl sm:rounded-2xl mt-auto sm:mt-0"
        >
          {selectedProject && (
            <>
              <ModalHeader className="flex items-center gap-4">
                {/* Logo: responsive size */}
                <Image
                  alt="Project Logo"
                  className="sm:hidden lg:block"
                  height={40}
                  src={selectedProject.image}
                  width={40}
                />
                <Image
                  alt="Project Logo"
                  className="hidden sm:block"
                  src={selectedProject.image}
                  width={20}
                />
                <div>
                  <h2 className="text-lg font-bold">{selectedProject.title}</h2>
                  <Link
                    className="text-sm text-blue-600 hover:underline"
                    href={selectedProject.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {selectedProject.url}
                  </Link>
                </div>
              </ModalHeader>

              <ModalBody>
                <Image
                  alt="Hero"
                  className="rounded-lg mb-4 w-full object-cover"
                  src={selectedProject.image_hero}
                />

                <p className="text-justify text-md p-4 rounded">
                  {selectedProject.description}
                </p>

                <Divider className="my-4" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {selectedProject.tags.map(
                    (
                      tag: { name: string; icon: React.ElementType },
                      i: number,
                    ) => (
                      <Code
                        key={i}
                        className="flex items-center gap-1"
                        color="primary"
                      >
                        <tag.icon size={18} />
                        <span>{tag.name}</span>
                      </Code>
                    ),
                  )}
                </div>
              </ModalBody>

              <ModalFooter>
                <Link
                  className="text-blue-600 hover:underline"
                  href={selectedProject.url}
                  rel="noopener noreferrer"
                  target="_blank"
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
