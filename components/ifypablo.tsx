'use client';
import { Lacquer } from "next/font/google";

import { Card, Link } from "@heroui/react";
import Image from "next/image";
import { ShineBorder } from "./magicui/shine-border";
import { FaSoundcloud } from "react-icons/fa";
import AnimatedSection from "./animatedSection";
import ParallaxDiv from "./parallaxDiv";

const lacquer = Lacquer({
  subsets: ['latin'],
  weight: '400', // Lacquer only has 400 weight
  display: 'swap',
});
export default function IfypabloComponent() {

    return(
        <div>
            <AnimatedSection>
            <Card className="flex flex-col md:flex-row items-center gap-6 p-8 my-4">
                <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
                <Image
                    src="/images/ifypablo.jpg"
                    alt="Stan Rainier D. Salazar"
                    width={500}
                    height={500}
                    className="rounded-xl mb-4"
                />
                <div className='flex flex-col'>
                    <h1 className={`${lacquer.className} text-6xl  text-center my-8`}>ifypablo</h1>
                    <span className={`${lacquer.className} text-xl mb-8 text-justify`}>
                        ifypablo is a personal passion project driven by a deep love for music and storytelling. As an independent Filipino artist, I write, mix, and arrange every track myself, blending emotionally charged vocals with a genre-defying mix of hip-hop, R&B, and indie pop. Each song is a reflection of real experiences, weaving together themes of love, loss, personal growth, and late-night introspection.
                        <br />
                        <br />
                        Born from a DIY mindset and a desire for raw, honest expression, ifypablo is more than just a name, it’s a creative outlet where authenticity and emotion take center stage. Whether collaborating with underground artists or releasing self-produced tracks on SoundCloud and beyond, I aim to connect with listeners who find pieces of themselves in the music.
                    </span>
                    <div className="flex justify-center items-center">
                    <Link
                        className="flex flex-row justify-center items-center gap-6 p-4 my-4 bg-orange-500 rounded-xl text-white w-1/2"
                        href="https://soundcloud.com/ifypablo"
                    >
                        <FaSoundcloud size={50} />
                        <h1 className={`${lacquer.className} text-2xl`}>Check out ifypablo</h1>
                    </Link>
                    </div>
                </div>
                
                
            </Card>
            </AnimatedSection>
            <AnimatedSection>

            <div className="grid grid-cols-2 gap-4 items-center">
                    <Card className="flex flex-col justify-center items-center gap-6 p-8 my-4">
                        <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
                        <h1 className={`${lacquer.className} text-4xl`}>Latest Release</h1>
                        <div className="w-full">
                            <iframe 
                                width="100%" 
                                height="600" 
                                scrolling="no" 
                                frameBorder="no" 
                                allow="autoplay" 
                                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2047237104&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
                            </iframe>
                            <div
                                style={{
                                    fontSize: "10px",
                                    color: "#cccccc",
                                    lineBreak: "anywhere",
                                    wordBreak: "normal",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    textOverflow: "ellipsis",
                                    fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                                    fontWeight: 100
                                }}
                            >
                                <a href="https://soundcloud.com/ifypablo" title="ifypablo" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>ifypablo</a> · 
                                <a href="https://soundcloud.com/ifypablo/ifypablo-x-slate-di-ko-pa-ma-amin-ft-jdel" title="ifypablo x slate - di ko pa ma amin ft. jdel" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }}>ifypablo x slate - di ko pa ma amin ft. jdel</a>
                            </div>
                        </div>
                    </Card>
                {/* Card with Image */}
                <Card className="flex flex-col justify-center items-center gap-6 p-8 my-4">
                    
                    <ShineBorder shineColor={["#1703fc", "#fc03f0", "#fc03f0"]} />
                    <h1 className={`${lacquer.className} text-4xl`} >Latest Mixtape</h1>
                    <Link href="https://soundcloud.com/ifypablo/sets/roses-for-amy">
                        <Image
                            src="/images/r4a.png"
                            alt="Stan Rainier D. Salazar"
                            width={1000}
                            height={1000}
                            className="rounded-md mb-4"
                        />
                    </Link>
                </Card>
            </div>
            </AnimatedSection>

        </div>
    )
}