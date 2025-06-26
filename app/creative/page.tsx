'use client';

import IfypabloComponent from "@/components/ifypablo";
import Standardx from "@/components/standardx";
import { Divider } from "@heroui/react";



export default function creativePage(){

    return(
        <div>
            <h1 className="text-center text-6xl mb-8">
                Creative Portfolio
            </h1>
            <Divider className="my-4" />
                <IfypabloComponent/>
            <Divider className="my-4" />
                <Standardx/>
        </div>
    )
}