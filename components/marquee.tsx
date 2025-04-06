// components/Marquee.tsx
'use client'

import { frontendSkills, backendSkills, otherSkills } from '@/app/common/data/skills-data';
import { skills_icons } from "@/app/common/data/skills-icons";
import { useEffect, useRef } from 'react'

const mergedSkills = [...frontendSkills, ...backendSkills, ...otherSkills]

export default function SkillsMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const marquee = marqueeRef.current
      if (!marquee) return
  
      let animationFrame: number
      let offset = 0
  
      const scroll = () => {
        offset -= 1
        if (marquee) {
          marquee.style.transform = `translateX(${offset}px)`
          if (Math.abs(offset) >= marquee.scrollWidth / 2) {
            offset = 0
          }
        }
        animationFrame = requestAnimationFrame(scroll)
      }
  
      animationFrame = requestAnimationFrame(scroll)
      return () => cancelAnimationFrame(animationFrame)
    }, [])
  
    return (
        <div className="overflow-hidden py-4">
          <div className="group relative">
            <div className="flex w-max animate-marquee ">
              {mergedSkills.concat(mergedSkills).map((skill, index) => {
                const IconComponent = skills_icons[skill.icon as keyof typeof skills_icons]
                return IconComponent ? (
                  <span
                    key={index}
                    className="inline-block mx-6 text-3xl text-indigo-600 transition-transform duration-300 hover:scale-125"
                    title={skill.name}
                  >
                    <IconComponent />
                  </span>
                ) : null
              })}
            </div>
          </div>
        </div>
      )
  }
