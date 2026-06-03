"use client";

import React, { useState } from "react";
import {
  Card,
  ModalContent,
  ModalHeader,
  ModalBody,
  Divider,
  Image,
  Modal,
} from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";

import { TextAnimate } from "./magicui/text-animate";
import AnimatedSection from "./animatedSection";

import { projects } from "@/app/common/data/project-data";

const ProjectsDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[number]
  >(null);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const handleOpen = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  return (
    <div className="p-8">
      <AnimatedSection>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold dark:text-amber-50 mb-24">
          <TextAnimate
            animation="slideUp"
            by="character"
            delay={0.1}
            duration={0.5}
          >
            Projects
          </TextAnimate>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] lg: auto-rows-[300px]">
          {sortedProjects.map((project, idx) => (
            <Card
              key={project.id}
              isPressable
              className={`relative p-4 hover:bg-gray-700 transition cursor-pointer rounded-xl flex flex-col justify-between overflow-hidden group ${
                idx === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{
                backgroundImage: `url(${project.image_hero})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onPress={() => handleOpen(project)}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 lg:opacity-0 lg:group-hover:opacity-60 transition-opacity" />

              {/* Centered Information - Only visible on hover */}
              <div className="absolute inset-0 flex items-center justify-center text-center opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <div className="text-white p-4">
                  <h2 className="text-3xl font-semibold mb-2 text-shadow-lg">
                    {project.title}
                  </h2>
                  <p className="text-sm text-left line-clamp-2">
                    {project.short_description}
                  </p>
                  <span className="text-sm uppercase font-bold">
                    {project.category} - {project.year[0]}
                  </span>
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
        <Modal isOpen={isOpen} size="5xl" onClose={handleClose}>
          <ModalContent className="mx-3 max-h-[min(92vh,860px)] w-[min(96vw,1280px)] overflow-hidden rounded-[2rem] border border-divider bg-content1/95 text-foreground shadow-[0_32px_120px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_120px_rgba(0,0,0,0.45)] backdrop-blur">
            {selectedProject && (
              <>
                <ModalHeader className="flex flex-col gap-4 border-b border-divider px-6 py-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-content2/70 ring-1 ring-divider">
                      <Image
                        alt="Project Logo"
                        className="h-10 w-10 object-contain"
                        height={40}
                        src={selectedProject.image}
                        width={40}
                      />
                    </div>
                    <div className="min-w-0">
                      <h2 className="truncate text-lg font-semibold sm:text-2xl">
                        {selectedProject.title}
                      </h2>
                      <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-default-500 sm:text-xs">
                        <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-default-700 dark:text-zinc-200">
                          {selectedProject.category}
                        </span>
                        <span className="rounded-full border border-divider bg-content2 px-3 py-1 text-default-700 dark:text-zinc-200">
                          {selectedProject.year[0]}
                        </span>
                      </div>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/50 bg-cyan-100/70 px-4 py-2 text-sm font-medium text-cyan-800 transition hover:border-cyan-400/70 hover:bg-cyan-100 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:border-cyan-300/60 dark:hover:bg-cyan-300/15 dark:hover:text-cyan-100"
                    href={selectedProject.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Open project ↗
                  </a>
                </ModalHeader>

                <ModalBody className="min-h-0 overflow-hidden p-0">
                  <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
                    <div className="flex min-h-[320px] items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.24),_transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.9),rgba(244,244,245,0.85))] dark:bg-none dark:bg-zinc-950/80 p-5 sm:p-6 lg:min-h-0 lg:p-8">
                      <a
                        className="group relative flex h-full max-h-[520px] w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-divider bg-content2/70 dark:bg-black/20 p-4 shadow-inner transition hover:border-cyan-300/40 sm:p-6"
                        href={selectedProject.image_hero}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Image
                          alt="Hero"
                          className="h-full max-h-[460px] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                          src={selectedProject.image_hero}
                        />
                        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-divider bg-content1/90 px-3 py-1.5 text-xs font-medium tracking-[0.2em] text-foreground backdrop-blur">
                          Expand image
                        </span>
                      </a>
                    </div>

                    <div className="flex min-h-0 flex-col border-t border-divider lg:border-l lg:border-t-0">
                      <div className="min-h-0 space-y-6 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6 lg:px-7">
                        <div className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-default-500">
                            Overview
                          </p>
                          <p className="text-sm leading-7 text-default-700 dark:text-zinc-300 sm:text-[15px]">
                            {selectedProject.description}
                          </p>
                        </div>

                        <Divider className="bg-divider" />

                        <div className="space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-default-500">
                            Stack
                          </p>
                          <div className="grid grid-cols-1 gap-2 2xl:grid-cols-2">
                            {selectedProject.tags.map((tag, i) => (
                              <div
                                key={i}
                                className="flex min-w-0 items-center gap-3 rounded-2xl border border-divider bg-content2/70 px-4 py-3"
                              >
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-default-100 text-foreground">
                                  {React.createElement(tag.icon, { size: 18 })}
                                </span>
                                <span className="min-w-0 text-sm leading-5 text-default-700 dark:text-zinc-200 break-words">
                                  {tag.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsDisplay;
