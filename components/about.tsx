import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Card, CardBody, Progress, Tab, Tabs, Tooltip } from "@heroui/react";
import { frontendSkills, backendSkills, otherSkills } from "@/app/common/data/skills-data";
import { skills_icons } from "@/app/common/data/skills-icons";
import { motion } from "framer-motion";

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
        <h1 className="text-8xl font-bold text-default-500">Background</h1>
      <div className="relative flex justify-center items-center h-[300px]">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="m-2"
          style={{ top: `${index * 50}px` }} // Spreads them out
          initial={{ opacity: 1 }}
          whileHover={{ y: -20, opacity: 1, scale: 1.05, zIndex: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Card className="p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <span className={title({ color: "blue" })}>{item.title}</span>
            {item.details}
          </Card>
        </motion.div>
      ))}
    </div>
      {/* =================section 2================= */}
      <h1 className="text-8xl font-bold text-default-500">Skills</h1>
      <div className="flex flex-col gap-4 justify-center mt-8">
        <Tabs aria-label="Options" variant="light">
              <Tab key="frontend" title="Frontend">
                <Card className="w-full ">
                  <CardBody>
                    <div className="flex">
                      <h1 className="text-2xl mb-2">
                        Programming Languages
                      </h1>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
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
