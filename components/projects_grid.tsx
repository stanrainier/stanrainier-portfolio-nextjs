"use client";

import {
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Image,
  Divider,
} from "@heroui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

import { projects } from "@/app/common/data/project-data";

export default function ProjectListByCategory() {
  const [selectedProject, setSelectedProject] = useState<
    null | (typeof projects)[number]
  >(null);
  const [isOpen, setIsOpen] = useState(false);

  const sortedProjects = [...projects].sort((a, b) => b.id - a.id);

  const handleOpen = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const groupedProjects: Record<string, typeof projects> = {};

  sortedProjects.forEach((project) => {
    if (!groupedProjects[project.category]) {
      groupedProjects[project.category] = [];
    }
    groupedProjects[project.category].push(project);
  });

  return (
    <div className="space-y-12 px-5 py-6 sm:px-8">
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10">
        {/* Render Fullstack First */}
        {["fullstack", "sitebuilder"].map((category) => {
          const categoryProjects = groupedProjects[category];

          if (!categoryProjects) return null;

          return (
            <section
              key={category}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-950/45 shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
            >
              <div className="border-b border-white/10 bg-[linear-gradient(130deg,rgba(34,211,238,0.14),rgba(56,189,248,0.06)_45%,transparent)] px-6 py-5">
                <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  {category}
                </h2>
                <p className="mt-2 text-2xl font-semibold text-zinc-100 sm:text-3xl">
                  {category === "fullstack" ? "Web Development" : "Site Builder"}
                </p>
              </div>

              <div className="space-y-3 p-4 sm:p-5">
                {categoryProjects.map((project) => (
                  <Card
                    key={project.id}
                    isPressable
                    className="group w-full rounded-2xl border border-white/10 bg-zinc-900/65 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-zinc-900"
                    onPress={() => handleOpen(project)}
                  >
                    <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[72px_minmax(0,1fr)_auto] sm:gap-5">
                      <div className="flex justify-center sm:justify-start">
                        <Image
                          alt={project.title}
                          className="h-16 w-16 rounded-xl object-contain ring-1 ring-white/10 sm:h-[56px] sm:w-[56px]"
                          height={64}
                          src={project.image}
                          width={64}
                        />
                      </div>

                      <div className="min-w-0 text-center sm:text-left">
                        <div className="mb-2 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                            {project.year[0]}
                          </span>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                            {project.status}
                          </span>
                        </div>
                        <h3 className="truncate text-lg font-semibold text-zinc-100">
                          {project.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-zinc-300">
                          {project.short_description}
                        </p>
                      </div>

                      <div className="hidden items-center justify-end sm:flex">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition group-hover:border-cyan-300/40 group-hover:text-cyan-200">
                          <FaArrowRight className="text-sm transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}
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
                                {<tag.icon size={18} />}
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
    </div>
  );
}
