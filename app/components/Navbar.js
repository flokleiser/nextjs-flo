'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {motion} from "framer-motion";


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/links",
    name: "Links",
  },
  {
    path: "/about",
    name: "About",
  },
];

export default function Navbar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);
  
  return (
    <div className="border border-stone-800/90 p-[0.4rem] mb-12 sticky top z-[100] bg-stone-900/80 backdrop-blur-md">
      <nav className="flex 2 relative justify-start w-full z-[100]  ">
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-zinc-100"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width:"100%",
                  }}
                  transition={{
                    type:"spring",
                    bounce:0.25,
                    stiffness:130,
                    damping:9,
                    duration:0.5,
                  }}
                  />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}