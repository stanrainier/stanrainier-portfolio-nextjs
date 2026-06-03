"use client";
import {
  Button,
  Card,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Progress,
  useDisclosure,
} from "@heroui/react";
import { Image } from "@heroui/react";
import { Chip } from "@heroui/chip";
import { IoDocumentText } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";

import {
  backendSkills,
  frontendSkills,
  otherSkills,
} from "../common/data/skills-data";
import { getSkillIcon } from "../common/data/skills-icons";
import { workExperience } from "../common/data/work-experience";

import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import NumberCounter from "@/components/numberCounter";

export default function AboutPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-14 px-5 py-8 sm:px-8 lg:space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          <TextAnimate
            animation="slideUp"
            by="character"
            delay={0.1}
            duration={0.5}
          >
            About Me
          </TextAnimate>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-default-500 sm:text-base">
          Full stack developer focused on useful products, clean architecture,
          and practical user experience.
        </p>
      </section>

      <Card className="relative overflow-hidden rounded-[2rem] border border-divider bg-content1/85 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
        <ShineBorder shineColor={["#0ea5e9", "#155eef", "#0ea5e9"]} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
          <div className="space-y-5 rounded-3xl border border-divider bg-content2/60 p-6 text-center lg:text-left">
            <div className="mx-auto w-fit rounded-full border border-divider p-1.5">
              <Image
                alt="Stan Rainier D. Salazar"
                className="h-36 w-36 rounded-full object-cover sm:h-44 sm:w-44"
                height={176}
                src="/images/pinkMeSmile.JPG"
                width={176}
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Stan Rainier D. Salazar
              </h2>
              <p className="mt-1 text-sm text-default-500">
                Full Stack Developer • Philippines
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Chip className="border border-divider bg-default-100 text-foreground">
                Web Developer
              </Chip>
              <Chip className="border border-divider bg-default-100 text-foreground">
                Full Stack Developer
              </Chip>
              <Chip className="border border-divider bg-default-100 text-foreground">
                Freelancer
              </Chip>
              <Chip className="border border-divider bg-default-100 text-foreground">
                Tech Enthusiast
              </Chip>
            </div>

            <Button
              className="mt-2 w-full rounded-full border border-cyan-400/35 bg-cyan-400/10 font-semibold text-cyan-200 hover:bg-cyan-300/15"
              startContent={<IoDocumentText />}
              variant="light"
              onPress={onOpen}
            >
              View or Download CV
            </Button>

            <div className="rounded-2xl border border-divider bg-content1 p-4">
              <div className="mb-2 flex items-center justify-center gap-2 text-foreground lg:justify-start">
                <FaGraduationCap size={20} />
                <span className="text-sm font-semibold">Education</span>
              </div>
              <p className="text-sm font-semibold text-foreground">
                University of Negros Occidental - Recoletos
              </p>
              <p className="mt-1 text-sm text-default-600">
                Bachelor of Science in Information Technology
              </p>
              <p className="mt-1 text-xs text-default-500">2020 - 2024</p>
            </div>
          </div>

          <div className="space-y-4">
            <AboutBlock
              body="I&apos;m a results-driven Full Stack Developer based in the Philippines, currently working at Prominent Outsource. Skilled in Angular and Laravel, and currently exploring React, I build and maintain responsive web applications, collaborate with clients to deliver tailored solutions, and contribute to internal tool development. Alongside my full-time role, I also take on freelance web projects and remain committed to continuous learning and evolving as a developer."
              title="Bio"
            />
            <AboutBlock
              body="I have a keen interest in web development, particularly in creating user-friendly interfaces and optimizing backend performance. I also enjoy exploring new technologies and frameworks to enhance my skill set. In my free time, I love watching tech related videos and catch up with recent happenings in the industry, building passion projects, and engaging with the developer community."
              title="Interests"
            />
            <AboutBlock
              body="Outside of coding, I enjoy playing video games, watching movies, and spending time with friends and family. I also love to travel and explore new places, which often inspires my work and creativity. I have a passion for creating web applications since I was young, and I love to learn new things and improve my skills. I also enjoy reading books and articles about technology and software development, which helps me stay updated with the latest trends and best practices in the industry. I love to do post-production and video editing, and I have a keen interest in photography and videography. I also produce music in my free time, which allows me to express my creativity in different ways. I believe that having a diverse range of interests helps me to be a more well-rounded developer and enhances my problem-solving skills."
              title="Hobbies"
            />
          </div>
        </div>
      </Card>

      <section className="space-y-6">
        <SectionHeading subtitle="Career milestones and shipping experience" title="Work Experience" />
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
          {workExperience.map((item: (typeof workExperience)[number]) => (
            <Card
              key={item.title}
              className="rounded-3xl border border-divider bg-content1/85 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.16)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Image
                  alt={item.company}
                  className="h-16 w-16 rounded-2xl object-cover ring-1 ring-divider"
                  height={64}
                  src={item.image}
                  width={64}
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-default-600">{item.company}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-default-500">
                    {item.date}
                  </p>
                </div>
              </div>

              <Divider className="my-5 bg-divider" />

              <ul className="space-y-2.5">
                {item.description.map((desc: string, index: number) => (
                  <li key={index} className="text-sm leading-6 text-default-700">
                    {desc}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="pt-6">
          <NumberCounter />
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeading subtitle="Main technologies used in production" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillSection skills={frontendSkills} title="Frontend Skills" />
          <SkillSection skills={backendSkills} title="Backend Skills" />
          <SkillSection skills={otherSkills} title="Other Skills" />
        </div>
      </section>

      <Drawer
        backdrop="blur"
        isDismissable={true}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        size="5xl"
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {() => (
            <>
              <DrawerHeader className="flex flex-col gap-1 border-b border-white/10 text-center">
                <TextAnimate
                  animation="slideUp"
                  by="character"
                  delay={0.1}
                  duration={0.5}
                >
                  Resume
                </TextAnimate>
              </DrawerHeader>
              <DrawerBody className="p-0">
                <iframe
                  className="w-full h-full"
                  frameBorder="0"
                  height="100%"
                  src="/files/CV_StanRainierSalazar.pdf"
                  title="Resume"
                  width="100%"
                />
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <p className="text-sm text-default-500 sm:text-base">{subtitle}</p>
    </div>
  );
}

function AboutBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-divider bg-content2/60 p-5 sm:p-6">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
        {title}
      </p>
      <p className="text-sm leading-7 text-default-700 sm:text-[15px]">{body}</p>
    </div>
  );
}

function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: typeof frontendSkills;
}) {
  return (
    <Card className="rounded-3xl border border-divider bg-content1/85 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.16)] sm:p-6">
      <ShineBorder shineColor={["#0ea5e9", "#155eef", "#0ea5e9"]} />

      <h3 className="mb-4 text-xl font-semibold text-foreground">{title}</h3>
      <div className="space-y-3">
        {[...skills]
          .sort((a, b) => b.value - a.value)
          .map((skill: any) => {
            const Icon = getSkillIcon(skill.icon);

            return (
              <div
                key={skill.name}
                className="rounded-2xl border border-divider bg-content2/65 p-3"
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-default-100 text-foreground ring-1 ring-divider">
                    <Icon size={18} />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                  <span className="ml-auto text-xs font-semibold text-default-500">
                    {skill.value}%
                  </span>
                </div>
                <Progress aria-label={skill.name} className="max-w-none" value={skill.value} />
              </div>
            );
          })}
      </div>
    </Card>
  );
}
