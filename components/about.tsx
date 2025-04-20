import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Alert, Avatar, Button, Card, CardBody, CardHeader, Divider, Drawer, DrawerContent,DrawerHeader, DrawerBody,DrawerFooter, Progress, Tab, Tabs, Tooltip, useDisclosure } from "@heroui/react";
import { frontendSkills, backendSkills, otherSkills } from "@/app/common/data/skills-data";
import { skills_icons } from "@/app/common/data/skills-icons";
import { motion } from "framer-motion";
import { CiCircleCheck } from "react-icons/ci";
import Marquee from "./marquee";
import AnimatedSection from "./animatedSection";
import ParallaxDiv from "./parallaxDiv";
import { workExperience } from "@/app/common/data/work-experience";
import { BoxReveal } from "./magicui/box-reveal";
import { TextAnimate } from "./magicui/text-animate";
import { IoDocumentText } from "react-icons/io5";
import NumberCounter from "@/components/numberCounter";
import { Skill, SkillSection } from "./skillSection";

export default function About() {
 

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div>
      <AnimatedSection>
        {/* About Me Title */}
        <h1 className="text-4xl my-24 lg:text-6xl text-center font-bold dark:text-amber-50">
          <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
            About Me
          </TextAnimate>
        </h1>

        {/* Section Container */}
        <div className="flex justify-center items-center w-full">
          <div className="w-full p-4">
            {/* Work Experience */}
            <div className="flex flex-row gap-4 items-center">
              <span className={title({ color: "blue" })}>Work Experience</span>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {workExperience.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative m-2 w-full"
                  initial={{ opacity: 1 }}
                  whileHover={{
                    y: -20,
                    opacity: 1,
                    scale: 1.05,
                    zIndex: 10,
                    position: "relative",
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <Card className="p-2 mt-4 hover:shadow-2xl transition-shadow duration-300 lg:h-full">
                    <CardHeader className="flex flex-col lg:flex-row gap-4 items-center lg:items-center justify-start">
                      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <Avatar
                          src={experience.image}
                          alt={experience.company}
                          className="w-24 h-24"
                          size="lg"
                        />
                      </BoxReveal>
                      <div className="flex flex-col">
                        <span className="text-lg lg:text-2xl font-semibold">{experience.company}</span>
                        <span className="text-sm lg:text-xl font-bold">{experience.title}</span>
                        <span className="text-sm">{experience.date}</span>
                      </div>
                    </CardHeader>
                    <Divider className="my-2" />
                    <CardBody>
                      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <ul className="mt-2 text-sm">
                          {experience.description.map((desc, idx) => (
                            <li key={idx} className="list-disc pl-5 text-base mb-2">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </BoxReveal>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Number Counter */}
            <div className="p-4 mt-8">
              <NumberCounter />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Marquee Section */}
      <div className="mt-4">
        <Marquee />
      </div>
      {/* Skills Section */}
      <ParallaxDiv>
        <h1 className="text-left lg:text-4xl mb-4 font-bold">
          <span className={title({ color: "blue" })}>Skills</span>
        </h1>
        <Card className="p-2 h-full hidden lg:block ">
          <div className="flex flex-col gap-4 justify-center mt-8">
            <Tabs aria-label="Options" variant="light">
              <Tab key="frontend" title="Frontend">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {frontendSkills
                    .sort((a, b) => b.value - a.value)
                    .map((skill: any) => {
                      const IconComponent = skills_icons[skill.icon as keyof typeof skills_icons];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Card key={skill.name} className="p-2">
                            <CardBody>
                              <div className="flex flex-row mb-4 gap-5 align-center">
                                <IconComponent size={30} />
                                <span>{skill.name}</span>
                              </div>
                              <Progress aria-label={skill.name} className="max-w-md" value={skill.value} />
                            </CardBody>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </Tab>
              <Tab key="backend" title="Backend">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <Card className="w-full mb-4">
                    <CardBody className="flex flex-row align-center gap-3 justify-items-center">
                      <CiCircleCheck
                        size={32}
                        className="text-lg text-blue-700 dark:text-sky-400"
                      />
                      <span className="text-lg text-blue-700 dark:text-sky-400">I have built web applications with Laravel Framework</span>
                    </CardBody>
                  </Card>
                  <Card className="w-full mb-4">
                    <CardBody className="flex flex-row align-center gap-3 justify-items-center">
                      <CiCircleCheck
                        size={32}
                        className="text-lg text-blue-700 dark:text-sky-400"
                      />
                      <span className="text-lg text-blue-700 dark:text-sky-400">I am familiar with MySQL for Database</span>
                    </CardBody>
                  </Card>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {backendSkills
                    .sort((a, b) => b.value - a.value)
                    .map((skill: any) => {
                      const IconComponent = skills_icons[skill.icon as keyof typeof skills_icons];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Card key={skill.name} className="p-2">
                            <CardBody>
                              <div className="flex flex-row mb-4 gap-5 align-center">
                                <IconComponent size={30} />
                                <span>{skill.name}</span>
                              </div>
                              <Progress aria-label={skill.name} className="max-w-md" value={skill.value} />
                            </CardBody>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </Tab>
              <Tab key="tools" title="Tools & Other Skills">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {otherSkills
                    .sort((a, b) => b.value - a.value)
                    .map((skill: any) => {
                      const IconComponent = skills_icons[skill.icon as keyof typeof skills_icons];
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Card key={skill.name} className="p-2">
                            <CardBody>
                              <div className="flex flex-row mb-4 gap-5 align-center">
                                <IconComponent className="text-2xl sm:text-base" size={30} />
                                <span className="sm:text-sm">{skill.name}</span>
                              </div>
                              <Progress aria-label={skill.name} className="max-w-md" value={skill.value} />
                            </CardBody>
                          </Card>
                        </motion.div>
                      );
                    })}
                </div>
              </Tab>
            </Tabs>
          </div>
        </Card>
        <div className="block sm:hidden mb-32">
          <SkillSection title="Frontend Skills" skills={frontendSkills as Skill[]} />
          <SkillSection title="Backend Skills" skills={backendSkills as Skill[]} />
          <SkillSection title="Other Skills" skills={otherSkills as Skill[]} />
        </div>

      </ParallaxDiv>
    </div>
  );
}
