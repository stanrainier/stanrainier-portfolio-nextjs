"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import NumberCounter from "@/components/numberCounter";
import { Button, Card, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, Progress, useDisclosure } from "@heroui/react";
import { Image } from "@heroui/react";
import { Chip } from "@heroui/chip";
import { aboutItems } from "../common/data/about-data";
import { backendSkills, frontendSkills, otherSkills } from "../common/data/skills-data";
import { skills_icons } from "../common/data/skills-icons";
import { workExperience } from "../common/data/work-experience";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import { IoDocumentText } from "react-icons/io5";

export default function AboutPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div >
    <h1 className="text-3xl font-bold mb-6">About Me</h1>
    <Card className="flex flex-row items-start gap-6 p-8">
    <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />

        {/* LEFT SIDE - Image, Name, and Chips */}
        <div className="flex flex-col items-center min-w-[250px]">
            <Image
            src="/images/mehero.png"
            alt="Stan Rainier D. Salazar"
            width={200}
            height={200}
            className="rounded-full mb-4"
            />
            <h1 className="text-2xl font-bold text-center dark:text-amber-50 mb-4">
            Stan Rainier D. Salazar
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
            <Chip>Web Developer</Chip>
            <Chip>Full Stack Developer</Chip>
            <Chip>Freelancer</Chip>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
                <Chip>Software Developer</Chip>
                <Chip>Tech Enthusiast</Chip>
            </div>
            <Divider className="my-4" />
            <Button className="mt-4" variant="light" onPress={onOpen}  startContent={<IoDocumentText  />}>View or Download My CV</Button>

        </div>
        {/* RIGHT SIDE - Description */}
        <div className="flex flex-col justify-start flex-1 min-w-[250px]">
            <span className="text-lg font-semibold mb-2">Bio</span>
            <span className="text-md text-justify mb-4">
                I'm a results-driven Full Stack Developer based in the Philippines, currently working at Prominent Outsource. Skilled in Angular and Laravel, and currently exploring React, I build and maintain responsive web applications, collaborate with clients to deliver tailored solutions, and contribute to internal tool development. Alongside my full-time role, I also take on freelance web projects and remain committed to continuous learning and evolving as a developer.
            </span>
            <Divider className="my-4" />
            <span className="text-lg font-semibold mb-2">Interests</span>
            <span className="text-md text-justify mb-4">
                I have a keen interest in web development, particularly in creating user-friendly interfaces and optimizing backend performance. I also enjoy exploring new technologies and frameworks to enhance my skill set. In my free time, I love reading tech blogs, contributing to open-source projects, and engaging with the developer community.
            </span>
            <Divider className="my-4" />
            <span className="text-lg font-semibold mb-2">Hobbies</span>
            <span className="text-md text-justify mb-4">
                Outside of coding, I enjoy playing video games, watching movies, and spending time with friends and family. I also love to travel and explore new places, which often inspires my work and creativity.
            </span>

        </div>
        <BorderBeam duration={8} size={100} />

    </Card>

      <Divider className="my-12" />

      {/* Work Experience and Skills Section */}
      <div>
        <h2 className="text-3xl font-bold my-12 text-center">Work Experience</h2>
        <div className=" flex flex-row flex-wrap justify-center items-start gap-6">
            {workExperience.map((item: any) => (
                <Card key={item.title} className="w-[500px] h-full p-6">
                <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />

                <Image
                    src={item.image}
                    alt={item.company}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                <h2 className="text-md font-semibold mb-1">{item.company}</h2>
                <h2 className="text-sm font-medium mb-2 text-default-500">{item.date}</h2>
                <Divider className="mb-4" />
                <span className="text-base">{item.description}</span>
                </Card>
            ))}
        </div>
        <div className="flex flex-col justify-center items-center w-full h-full mt-12">
        <NumberCounter />
      </div>
      </div>

        <Divider className="my-12" />
      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillSection title="Frontend Skills" skills={frontendSkills} />
          <SkillSection title="Backend Skills" skills={backendSkills} />
          <SkillSection title="Other Skills" skills={otherSkills} />
        </div>
      </div>

      <Drawer
          isDismissable={true}
          isKeyboardDismissDisabled={true}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          backdrop="blur" size="5xl"
        >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 text-center">
              <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
                Resume
              </TextAnimate>
              </DrawerHeader>
              <DrawerBody className="p-0">
                <iframe
                  src="/files/StanRanierSalazarCV.pdf"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Resume"
                  className="w-full h-full"
                ></iframe>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>

    
  );
}

function SkillSection({ title, skills }: { title: string; skills: typeof frontendSkills }) {
  return (
    <Card className="p-6">
        <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />

      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill:any) => {
          const Icon = skills_icons[skill.icon];
          return (
            <div key={skill.name} className="flex items-center space-x-4">
              <Icon size={30} />
              <span className="font-semibold">{skill.name}</span>
              <Progress aria-label="Loading..." className="max-w-md" value={skill.value} />
              <span className="ml-auto">{skill.value}%</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
