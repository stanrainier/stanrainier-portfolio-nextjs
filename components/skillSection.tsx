// components/SkillSection.tsx
"use client";
import { Card, Progress } from "@heroui/react";
import { ShineBorder } from "@/components/magicui/shine-border";
import { skills_icons } from "@/app/common/data/skills-icons";

export interface Skill {
  name: string;
  value: number;
  icon: keyof typeof skills_icons;
}

export function SkillSection({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <Card className="p-6 mb-4">
      <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="space-y-4">
        {skills
          .sort((a, b) => b.value - a.value)
          .map((skill) => {
            const Icon = skills_icons[skill.icon];
            return (
              <div key={skill.name} className="flex items-center space-x-4">
                <Icon size={30} />
                <span className="font-semibold">{skill.name}</span>
                <Progress aria-label={skill.name} className="max-w-md" value={skill.value} />
                <span className="ml-auto">{skill.value}%</span>
              </div>
            );
          })}
      </div>
    </Card>
  );
}