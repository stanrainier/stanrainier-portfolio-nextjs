'use client'

import { frontendSkills, backendSkills, otherSkills } from '@/app/common/data/skills-data';
import { skills_icons } from "@/app/common/data/skills-icons";
import { Marquee } from './magicui/marquee';

const mergedSkills = [...frontendSkills, ...backendSkills, ...otherSkills]

export default function SkillsMarquee() {
  return (
    <div className="overflow-hidden py-4">
      {/* Magic UI Marquee component */}
      <Marquee pauseOnHover className="text-center">
        <div className="flex w-max">
          {mergedSkills.concat(mergedSkills).map((skill, index) => {
            const IconComponent = skills_icons[skill.icon as keyof typeof skills_icons]
            return IconComponent ? (
              <span
                key={index}
                className="inline-block mx-6 text-3xl text-indigo-600 transition-transform duration-300 hover:scale-125"
                title={skill.name}
              >
                <IconComponent size={40} />
              </span>
            ) : null
          })}
        </div>
      </Marquee>
      
    </div>
  )
}
