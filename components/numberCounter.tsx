"use client";
import { Card } from "@heroui/react";
import { NumberTicker } from "./magicui/number-ticker";
import { countProjects, projects } from "@/app/common/data/project-data";
import { MdComputer } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";


export default function numberCounter() {

    const years = Math.floor((Date.now() - new Date("2022-01-01").getTime()) / (1000 * 60 * 60 * 24 * 365));
    const projectsCount = countProjects(projects);
    return(
        <div>
            <div className="flex flex-col lg:flex-row gap-4 p-4 w-full h-full justify-between">
                <Card className="w-auto flex flex-col gap-4 lg:flex-row lg:w-96 justify-between items-center p-4">
                    <div className="flex flex-row gap-4 items-center">
                        <MdComputer size={35} />
                        <h1 className="text-xl font-bold text-center">Years of Experience</h1>
                    </div>
                    <NumberTicker
                        value={years}
                        className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                        />
                </Card>
                <Card className="w-auto flex flex-col gap-4 lg:flex-row lg:w-96 justify-between items-center p-4">
                    <div className="flex flex-row gap-4 items-center">
                        <FiBox size={30}  />
                        <h1 className="text-xl font-bold text-center">Projects Deployed</h1>
                    </div>
                    <NumberTicker
                            value={projectsCount.projectCount}
                            className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                        />
                </Card>
                <Card className="w-auto flex flex-col gap-4 lg:flex-row lg:w-96 justify-between items-center p-4">
                    <div className="flex flex-row gap-4 items-center">
                        <FaPeopleGroup   size={30} />
                        <h1 className="text-xl font-bold text-center">Clients</h1>
                    </div>
                    <NumberTicker
                            value={3}
                            className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                        />
                </Card>
            </div>
        </div>
    )
}

