"use client";
import { Card } from "@heroui/react";
import { NumberTicker } from "./magicui/number-ticker";



export default function numberCounter() {
    return(
        <div className="">
            <div className="flex flex-cols gap-4 p-4 w-full h-full justify-between ">
                <Card className="w-96 flex flex-row justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-center">Years of Experience</h1>
                    <NumberTicker
                    value={3}
                    className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                    />
                </Card>
                <Card className="w-96 flex flex-row justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-center">Projects Deployed</h1>
                    <NumberTicker
                    value={4}
                    className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                    />
                </Card>
                <Card className="w-96 flex flex-row justify-between items-center p-4">
                    <h1 className="text-xl font-bold text-center">Clients</h1>
                    <NumberTicker
                    value={1}
                    className="whitespace-pre-wrap text-4xl font-medium tracking-tighter text-gray"
                    />
                </Card>
            </div>
        </div>
        
       
    )
}

