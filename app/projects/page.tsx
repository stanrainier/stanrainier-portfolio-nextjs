"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { title } from "@/components/primitives";
import Projects from "@/components/projects";
import ProjectListByCategory from "@/components/projects_grid";
import { Card } from "@heroui/react";

export default function ProjectPage() {
    return(
    <div >
        <h1 className="lg:text-6xl text-center font-bold  dark:text-amber-50 ">
            <TextAnimate animation="slideUp" by="character" duration={0.5} delay={0.1}>
            Projects
            </TextAnimate>
        </h1>
        <div className="w-full">
            <ProjectListByCategory />
        </div>
    </div>
    )
}