import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Alert, Card, CardBody, Progress, Tab, Tabs, Tooltip } from "@heroui/react";
import { frontendSkills, backendSkills, otherSkills } from "@/app/common/data/skills-data";
import { skills_icons } from "@/app/common/data/skills-icons";
import { motion } from "framer-motion";
import {aboutItems} from "@/app/common/data/about-data";

import { CiCircleCheck } from "react-icons/ci";

export default function About() {
  const items = [
    {
      title: "Education",
      details: (
        <>
          <p className="text-lg text-default-500">University of Negros Occidental - Recoletos</p>
          <p className="text-lg text-default-500">B.S. Information Technology <br /> 2020-2024</p>
        </>
      )
    },
    {
      title: "Work Experience",
      details: (
        <>
          <p className="text-lg text-default-500 font-bold">Prominent Outsource</p>
          <p><span className="text-lg text-default-500">Position:</span> Full-Stack Developer</p>
          <p><span className="text-lg text-default-500">Duration:</span> 2024 - Present</p>
        </>
      )
    },
  ];

  
  return (
    <div>
        <h1 className="text-4xl font-bold  dark:text-amber-50">About Me</h1>
        
      <div className="relative flex justify-center items-center h-[300px] w-full">
      {aboutItems.map((item, index) => (
        <motion.div
          key={index}
          className="m-2 w-full"
          style={{ top: `${index * 50}px` }} // Spreads them out
          initial={{ opacity: 1 }}
          whileHover={{ y: -20, opacity: 1, scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Card className="w-full p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span className={title({ color: "blue" })}>{item.title}</span>
            {item.details}
          </Card>
        </motion.div>
      ))}
    </div>
      {/* =================section 2================= */}
      <h1 className="text-4xl font-bold dark:text-amber-50">Skills</h1>
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
                <Card className="w-full ">
                  <CardBody>
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
                  </CardBody>
                </Card>
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
                <Card className="w-full">
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="tools" title="Tools & Other Skills">
                <Card className="w-full">
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Tab>
        </Tabs>
      </div>
    </div>
  );
}
