"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import NumberCounter from "@/components/numberCounter";
import { Button, Card, Divider, Drawer, DrawerBody, DrawerContent, DrawerHeader, Link, Progress, useDisclosure } from "@heroui/react";
import { Image } from "@heroui/react";
import { Chip } from "@heroui/chip";
import { backendSkills, frontendSkills, otherSkills } from "../common/data/skills-data";
import { skills_icons } from "../common/data/skills-icons";
import { workExperience } from "../common/data/work-experience";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TextAnimate } from "@/components/magicui/text-animate";
import { IoDocumentText } from "react-icons/io5";
import { FaGraduationCap, FaSoundcloud } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";

export default function AboutPage() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
  return (
    <div >
      <h1 className="text-4xl mb-8 lg:text-6xl text-center font-bold dark:text-amber-50">
          <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
            About Me
          </TextAnimate>
        </h1>
      <Card className="flex flex-col md:flex-row items-center gap-6 p-8">
        <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />

        {/* LEFT SIDE - Image, Name, and Chips */}
        <div className="flex flex-col items-center md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/images/pinkMeSmile.JPG"
            alt="Stan Rainier D. Salazar"
            width={200}
            height={200}
            className="rounded-full mb-4 border-4 border-gray-300"
          />
          <h1 className="text-lg font-bold text-center mb-4 lg:text-3xl ">
            Stan Rainier D. Salazar
          </h1>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Chip>Web Developer</Chip>
            <Chip>Full Stack Developer</Chip>
            <Chip>Freelancer</Chip>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Chip>Software Developer</Chip>
            <Chip>Tech Enthusiast</Chip>
          </div>
          <Button
            className="mt-4"
            variant="light"
            onPress={onOpen}
            startContent={<IoDocumentText />}
          >
            View or Download My CV
          </Button>
          
          <Divider className="my-4" />
          <div className="flex flex-col text-center justify-center items-center gap-2 mb-4 p-4 border border-gray-300 rounded-lg shadow-md">
            <FaGraduationCap size={30} />
            <span className="text-md font-semibold">University of Negros Occidental - Recoletos</span>
            <span className="text-sm font-semibold">Bachelor of Science in Information Technology</span>
            <span className="text-xs">2020 - 2024</span>
          </div>



        </div>

        {/* RIGHT SIDE - Description */}
        <div className="flex flex-col justify-start flex-1 md:w-1/2">
          <div className="mb-6">
            <span className="text-lg font-semibold text-purple-700 mb-2">Bio</span>
            <p className="text-sm text-justify md:text-md lg:text-md">
              I&apos;m a results-driven Full Stack Developer based in the Philippines, currently working at Prominent Outsource. 
              Skilled in Angular and Laravel, and currently exploring React, I build and maintain responsive web applications, collaborate with clients to deliver tailored solutions, and contribute to internal tool development. 
              Alongside my full-time role, I also take on freelance web projects and remain committed to continuous learning and evolving as a developer.
            </p>
          </div>

          <div className="mb-6">
            <span className="text-lg font-semibold text-purple-700 mb-2">Interests</span>
            <p className="text-sm text-justify lg:text-md">
              I have a keen interest in web development, particularly in creating user-friendly interfaces and optimizing backend performance. 
              I also enjoy exploring new technologies and frameworks to enhance my skill set. 
              In my free time, I love watching tech related videos and catch up with recent happenings in the industry, building passion projects, and engaging with the developer community.
            </p>
          </div>

          <div className="mb-6">
            <span className="text-lg font-semibold text-purple-700 mb-2">Hobbies</span>
            <p className="text-sm text-justify lg:text-md">
              Outside of coding, I enjoy playing video games, watching movies, and spending time with friends and family. 
              I also love to travel and explore new places, which often inspires my work and creativity. I have a passion for creating web applications since I was young, and I love to learn new things and improve my skills.
              I also enjoy reading books and articles about technology and software development, which helps me stay updated with the latest trends and best practices in the industry. I love to do post-production and video editing, and I have a keen interest in photography and videography. I also produce music in my free time, which allows me to express my creativity in different ways. 
              I believe that having a diverse range of interests helps me to be a more well-rounded developer and enhances my problem-solving skills.
            </p>
          </div>
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
                {item.description.map((desc:any, index:any) => (
                    <span key={index} className="block text-base mb-2">
                      {desc}
                    </span>
                  ))}                
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
      {skills
        .sort((a, b) => b.value - a.value) // Sort in descending order by 'value'
        .map((skill: any) => {
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
