"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const Banner: React.FC = () => {
    
    return (
        <div className="container mx-auto px-10 py-10 flex items-center justify-between">
            <div className="text-white">
                <h2 className="mb-10">Trone Barbershop</h2>
                <div className="flex flex-col items-center text-7xl mb-3 capitalize font-semibold text-white">
            <h4>TRIMMED. 
                <br/>
                SHAVED. 
                <br/>
                <span className="text-golden">
                    HANDSOME.
                </span>
                </h4> 
            </div>
            </div>

            <div>
                <Image
                src="/images/mainphoto.png"
                alt="Main page photo"
                width={800}
                height={50}
                />
            </div>
        </div>
    )
}


export default Banner