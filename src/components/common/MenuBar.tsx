"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect } from "react"



const links = [
    { href: "/price", label: "Price" },
    { href: "/certificate", label: "Certificate" },
    { href: "/photo", label: "Photo" },
    { href: "/contacts", label: "Contacts" },
];

const MenuBar: React.FC = () => {
    const pathname = usePathname() // to show user active link
    // what state are we? Scrolling or no, so we use usestate 
    const [isScrolled, setIsScrolled] = useState(false)
    // for the mobilemenu (adaptive menu)
    const [isMobileOpen, setIsMobileOpen] = useState(false)

    // function to handle scroll
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      //Return the image and the links
    return (<nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/50 backdrop-blur-sm" : "bg-transparent"
      )}>

       <div className=" mx-auto">
        <div className=" container flex items-center justify-between">
            <div className="text-white text-xl font-bold flex items-center justify-between">
                <Link href="/" className="text-white hover:text-golden transition-colors mt-4 mx-4">
                <Image
                src="/images/logo.png"
                alt="BarberShop logo"
                width={60}
                height={20}
                />
                </Link>
                <div className="hidden md:flex items-center space-x-10 mt-4 mx-10">
                {links.map((link) => (
                    <Link 
                    key={link.href}
                    href={link.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-golden",
                        pathname === link.href 
                        ? "text-golden"
                        : "text-white"
                    )}>
                        {link.label.includes(' ') ? (
                            <span className="whitespace-nowrap">{link.label}</span>
                        ) : link.label}
                    </Link>
                ))}
            </div> 
            </div>
            <div className="mt-4 flex items-center">
                <Link
                key={"/phone"} 
                href={"/phone"}
                className={cn(
                    "text-sm font-medium transition-colors hover:text-golden",
                    pathname === "/phone" 
                    ? "text-golden"
                    : "text-white"
                )}
                >
              +79776087081
                </Link>
            </div>
           
        </div>
       </div>
    </nav>)
  
}

export default MenuBar;