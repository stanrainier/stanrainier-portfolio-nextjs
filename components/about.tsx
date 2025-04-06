import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Alert, Avatar, Card, CardBody, CardHeader, Divider, Progress, Tab, Tabs, Tooltip } from "@heroui/react";
import { frontendSkills, backendSkills, otherSkills } from "@/app/common/data/skills-data";
import { skills_icons } from "@/app/common/data/skills-icons";
import { motion } from "framer-motion";
import {aboutItems} from "@/app/common/data/about-data";
import { CiCircleCheck } from "react-icons/ci";
import Marquee from "./marquee";
import AnimatedSection from "./animatedSection";
import ParallaxDiv from "./parallaxDiv";
import { workExperience } from "@/app/common/data/work-experience";

export default function About() {
 

  
  return (
    <div>
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-center  dark:text-amber-50">About Me</h1>
         <div className="relative flex justify-center items-center lg:h-[300px] w-full mb-16 mt-16">
          <div className="w-full p-4 shadow-lg">
            <span className={title({ color: "blue" })}>Work Experience</span>
            <div className="grid grid-cols-2 gap-4 mt-4">
            {workExperience.map((experience, index) => (
              <motion.div
                key={index}
                className="m-2 w-full"
                initial={{ opacity: 1 }}
                whileHover={{ y: -20, opacity: 1, scale: 1.05, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card className="p-2 mt-4 hover:shadow-2xl transition-shadow duration-300 lg:h-full">
                  <CardHeader className="flex flex-row gap-4 items-center justify-start">
                    <Avatar
                      src={experience.image}
                      alt={experience.company}
                      className="w-24 h-24"
                      size="lg"
                    />
                    <div className="flex flex-col">
                      <span className="text-2xl font-semibold">{experience.company}</span>
                      <span className="text-1xl font-bold">{experience.title}</span>
                      <span className="text-sm">{experience.date}</span>
                    </div>
                  </CardHeader>

                  <Divider className="my-2" />

                  <CardBody>
                    <ul className="mt-2 text-sm">
                      {experience.description.map((desc, idx) => (
                        <li key={idx} className="list-disc pl-5 text-base">{desc}</li>
                      ))}
                    </ul>
                  </CardBody>
                </Card>

              </motion.div>
          ))}
          </div>
        </div>
      </div>
      {/* =================section 2================= */}
      <div className="mt-52">
      <Marquee/>
      </div>

      <ParallaxDiv>
        <Card className="p-4">
        <h1 className={title({ color: "blue" })}>Skills</h1>
        <div className="flex flex-col gap-4 justify-center mt-8">
          <Tabs aria-label="Options" variant="light">
                <Tab key="frontend" title="Frontend">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Card className="w-full mb-4">
                    <CardBody className="flex flex-row align-center gap-3 justify-items-center">
                      <CiCircleCheck 
                      size={32}
                      className="text-lg text-blue-700 dark:text-sky-400"
                      />
                      <span className="text-lg text-blue-700 dark:text-sky-400">I have built web applications with Angular Framework</span>
                    </CardBody>
                    </Card>
                    <Card className="w-full mb-4 ">
                      <CardBody className="flex flex-row align-center gap-3 justify-items-center">
                        <CiCircleCheck 
                        size={32}
                        className="text-lg text-blue-700 dark:text-sky-400"
                        />
                        <span className="text-lg text-blue-700 dark:text-sky-400">I build wordpress websites using Elementor</span>
                      </CardBody>
                    </Card>
                  </div>
      
                      <div className="grid grid-cols-4 gap-4 ">
                        {frontendSkills.map((skill:any) => {
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
                    <Card className="w-full mb-4 ">
                      <CardBody className="flex flex-row align-center gap-3 justify-items-center">
                        <CiCircleCheck 
                        size={32}
                        className="text-lg text-blue-700 dark:text-sky-400"
                        />
                        <span className="text-lg text-blue-700 dark:text-sky-400">I am familiar with MySQL for Database</span>
                      </CardBody>
                    </Card>
                  </div>
      
                    <div className="grid grid-cols-4 gap-4">
                        {backendSkills.map((skill:any) => {
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
            
                    <div className="grid grid-cols-4 gap-4">
                        {otherSkills.map((skill:any) => {
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
          </Tabs>
        </div>
        </Card>
      </ParallaxDiv>
            
      </AnimatedSection>
    </div>
  );
}
