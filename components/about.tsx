import { title } from "@/components/primitives";
import { Accordion, AccordionItem, Card, CardBody, Tab, Tabs } from "@heroui/react";

export default function About() {
  return (
    <div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="flex gap-8">
            {/* Left Side (Flexible) */}
            <div className="w-1/3">
              <Card className="max-w-xl p-4">
              <span className={title({ color: "blue" })}>Work Experience</span>
                <p className="text-lg text-default-500">
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
            <div className="flex flex-col justify-center items-center w-2/3">
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
              <Tab key="photos" title="Frontend">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CardBody>
                </Card>
              </Tab>
              <Tab key="music" title="Backend">
                <Card className="w-full h-[500px]">
                  <CardBody>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
                    ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur.
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
        </div>
    </div>
  );
}
