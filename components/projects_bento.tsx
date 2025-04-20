"use client";

import React, { useState } from "react";
import {
  Card,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
  ModalFooter,
  Image,
  Modal,
} from "@heroui/react";
import { Link as LucideLink, Code } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { ShineBorder } from "./magicui/shine-border";
import { projects } from "@/app/common/data/project-data";
import { TextAnimate } from "./magicui/text-animate";
import AnimatedSection from "./animatedSection";

const ProjectsDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<null | (typeof projects)[number]>(null);

  const handleOpen = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    
    <div className="p-8" >
        <AnimatedSection>
        <h1 className="lg:text-6xl text-center font-bold  dark:text-amber-50 mb-24 ">
        <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
            Projects
        </TextAnimate>
        </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] lg: auto-rows-[300px]">
        {[...projects].map((project, idx) => (
            <Card
            key={project.id}
            isPressable
            onPress={() => handleOpen(project)}
            className={`relative p-4 hover:bg-gray-700 transition cursor-pointer rounded-xl flex flex-col justify-between overflow-hidden group ${
            idx % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            style={{
            backgroundImage: `url(${project.image_hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
        >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 lg:opacity-0 lg:group-hover:opacity-60 transition-opacity"></div>

        {/* Centered Information - Only visible on hover */}
        <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
          <div className="text-white p-4">
            <h2 className="text-3xl font-semibold mb-2 text-shadow-lg">{project.title}</h2>
            <p className="text-sm text-left line-clamp-2">{project.short_description}</p>
            <span className="text-sm uppercase font-bold">{project.category} - {project.year[0]}</span>
          </div>
        </div>


            {/* Footer with category and arrow */}
            <div className="flex justify-end items-center mt-auto">
        
            <FaArrowRight className="text-xl group-hover:translate-x-1 transition" />
            </div>
        </Card>
        ))}
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
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    {selectedProject.url}
                  </a>
                </div>
              </ModalHeader>

              <ModalBody>
                <Image
                  src={selectedProject.image_hero}
                  alt="Hero"
                  className="rounded-lg mb-4 justify-center w-full  object-cover"
                />
                <p className="text-justify text-md p-4 rounded">
                  {selectedProject.description}
                </p>

                <Divider className="my-4" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selectedProject.tags.map((tag, i) => (
                        <div
                        key={i}
                        className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-full "
                        >
                        {React.createElement(tag.icon, { size: 18 })}
                        <span className="text-sm">{tag.name}</span>
                        </div>
                    ))}
                    </div>

              </ModalBody>

              <ModalFooter>
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit project ↗
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsDisplay;
