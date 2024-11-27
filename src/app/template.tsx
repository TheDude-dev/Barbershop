"use client"
import { useSelectedLayoutSegment } from "next/navigation"
import MenuBar from "@/components/common/MenuBar"


export default function Template({children} : {children: React.ReactNode}) {
    const segment = useSelectedLayoutSegment()

    //check if the current segment is the homepage (root)
    if (segment === null) {
 // If it's the home page, render children without the layout
        return <>
        <MenuBar/>
        {children}
        </>
    }
 // For other pages, apply the layout
 return(
    <div className="flex flex-col min-h-screen">
        <MenuBar/>
        <main className="container mx-auto pt-20">
            {children}
        </main>
    </div>
 )
} 