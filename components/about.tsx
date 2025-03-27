import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Card, CardBody, Progress, Tab, Tabs, Tooltip } from "@heroui/react";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="flex gap-8">
            {/* Left Side (Flexible) */}
            <div className="w-full h-full">
              <Card className="max-w-xl p-4  max-h-86">
              <span className={title({ color: "blue" })}>Work Experience</span>
                <p className="text-lg text-default-500 oklch(0.666 0.179 58.318) font-bold">
                  Prominent Outsource
                </p>
                <p>
                  <span className="text-lg text-default-500">Position:</span> Full-Stack Developer
                </p>
                <p>
                  <span className="text-lg text-default-500">Duration:</span> 2024 - Present  
                </p>
              </Card>
            </div>
            {/* Right Side (Fixed Width) */}
            <div className="flex flex-col justify-center items-center w-full">
              <Card className="max-w-xl p-4">
                <span className={title({ color: "blue" })}>Educational Background</span>
                <br />
                <p className="text-lg text-default-500">
                  I am a graduate of Bachelor of Science in Information Technology from the University of 
                  Negros Occidental - Recoletos. I have taken various subjects that have helped me gain knowledge 
                  in programming, web development, and software engineering.
                </p>
              </Card>
            </div>
        </div>
      </div>
      {/* =================section 2================= */}
      <div className="flex flex-col gap-4 justify-center">
        <Tabs aria-label="Options" variant="light">
              <Tab key="frontend" title="Frontend">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    <div className="flex">
                      <h1 className="text-2xl mb-2">
                        Programming Languages
                      </h1>
                    </div>
                    <div className="grid grid-cols-4 gap-4" >
                    <Card className="p-2">
                      <CardBody>
                        <div className="flex flex-row mb-4 gap-5 align-center">
                          <SiTypescript size={30} />
                          <span> TypeScript </span>
                        </div>
                        <Progress aria-label="Loading..." className="max-w-md" value={90} />
                      </CardBody>
                    </Card>
                    <Card className="p-2">
                      <CardBody>
                        <div className="flex flex-row mb-4 gap-5 align-center">
                          <IoLogoJavascript size={30} />
                          <span> JavaScript </span>
                        </div>
                        <Progress aria-label="Loading..." className="max-w-md" value={90} />
                      </CardBody>
                    </Card>
                    <Card className="p-2">
                      <CardBody>
                        <div className="flex flex-row mb-4 gap-5 align-center">
                          <FaHtml5 size={30} />
                          <span> HTML </span>
                        </div>
                        <Progress aria-label="Loading..." className="max-w-md" value={90} />
                      </CardBody>
                    </Card>
                    <Card className="p-2">
                      <CardBody>
                        <div className="flex flex-row mb-4 gap-5 align-center">
                          <FaCss3Alt  size={30} />
                          <span> CSS </span>
                        </div>
                        <Progress aria-label="Loading..." className="max-w-md" value={90} />
                      </CardBody>
                    </Card>
                   
                    </div>

                  </CardBody>
                </Card>
              </Tab>
              <Tab key="backend" title="Backend">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="cicd" title="CI/CD">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="tools" title="Tools & Other Skills">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
        </div>
    </div>
  );
}
