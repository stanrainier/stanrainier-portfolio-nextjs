"use client";
import { Lacquer } from "next/font/google";
import { Card, Link } from "@heroui/react";
import Image from "next/image";

import { FaSoundcloud } from "react-icons/fa";
import { ShineBorder } from "./magicui/shine-border";
import AnimatedSection from "./animatedSection";

const lacquer = Lacquer({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function IfypabloComponent() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <AnimatedSection>
        <Card className="flex flex-col md:flex-row items-center gap-6 p-4 sm:p-6 md:p-8 my-4">
          <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
          <Image
            alt="Stan Rainier D. Salazar"
            className="rounded-xl mb-4 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            height={500}
            src="/images/ifypablo.jpg"
            width={500}
          />
          <div className="flex flex-col">
            <h1
              className={`${lacquer.className} text-3xl sm:text-4xl md:text-6xl text-center md:text-left my-4 md:my-8`}
            >
              ifypablo
            </h1>
            <span
              className={`${lacquer.className} text-base sm:text-lg md:text-xl mb-4 sm:mb-6 md:mb-8 text-justify`}
            >
              ifypablo is a personal passion project driven by a deep love for
              music and storytelling. As an independent Filipino artist, I
              write, mix, and arrange every track myself, blending emotionally
              charged vocals with a genre-defying mix of hip-hop, R&B, and indie
              pop. Each song is a reflection of real experiences, weaving
              together themes of love, loss, personal growth, and late-night
              introspection.
              <br />
              <br />
              Born from a DIY mindset and a desire for raw, honest expression,
              ifypablo is more than just a name, it&apos;s a creative outlet
              where authenticity and emotion take center stage. Whether
              collaborating with underground artists or releasing self-produced
              tracks on SoundCloud and beyond, I aim to connect with listeners
              who find pieces of themselves in the music.
            </span>
            <div className="flex justify-center md:justify-start">
              <Link
                className="flex flex-row justify-center items-center gap-4 sm:gap-6 p-3 sm:p-4 my-4 bg-orange-500 rounded-xl text-white w-full sm:w-1/2 md:w-1/3"
                href="https://soundcloud.com/ifypablo"
              >
                <FaSoundcloud className="sm:!w-10 sm:!h-10" size={36} />
                <h1
                  className={`${lacquer.className} text-lg sm:text-xl md:text-2xl`}
                >
                  Check out ifypablo
                </h1>
              </Link>
            </div>
          </div>
        </Card>
      </AnimatedSection>

      {/* Releases Section */}
      <AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {/* Latest Release */}
          <Card className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 my-4">
            <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
            <h1
              className={`${lacquer.className} text-2xl sm:text-3xl md:text-4xl`}
            >
              Latest Release
            </h1>
            <div className="w-full">
              <iframe
                allow="autoplay"
                className="sm:h-[400px] md:h-[600px]" 
                frameBorder="no" 
                height="300"
                scrolling="no" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2047237104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" 
                title="SoundCloud Player: ifypablo x slate - di ko pa ma amin ft. jdel" 
                width="100%"
              ></iframe>
              <div className="text-[10px] text-gray-400 truncate mt-1">
                <a
                  href="https://soundcloud.com/ifypablo"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  ifypablo
                </a>{" "}
                ·{" "}
                <a
                  href="https://soundcloud.com/ifypablo/ifypablo-x-slate-di-ko-pa-ma-amin-ft-jdel"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  ifypablo x slate - di ko pa ma amin ft. jdel
                </a>
              </div>
            </div>
          </Card>

          {/* Latest Mixtape */}
          <Card className="flex flex-col justify-center items-center gap-4 sm:gap-6 p-4 sm:p-6 my-4">
            <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
            <h1
              className={`${lacquer.className} text-2xl sm:text-3xl md:text-4xl`}
            >
              Latest Mixtape
            </h1>
            <Link
              href="https://soundcloud.com/ifypablo/sets/roses-for-amy"
              className="w-full"
            >
              <Image
                alt="Stan Rainier D. Salazar"
                className="rounded-md mb-4 w-full h-auto object-cover"
                height={1000}
                src="/images/r4a.png"
                width={1000}
              />
            </Link>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}
