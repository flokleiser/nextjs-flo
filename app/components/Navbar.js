'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { BsXCircle, BsList, BsX,  BsGrid, BsSearch } from "react-icons/bs";


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

  const [showNavbar, setShowNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };



  return (
    <div className="flex border border-stone-800/90 p-[0.4rem] mb-12 sticky top z-[100] bg-stone-900/80 backdrop-blur-md ">
    {/*menu button*/}
       <button
        className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out text-zinc-100"
        onClick={toggleNavbarVisibility}
      >
        {showNavbar ? <BsX style={{ fontSize: '1.5rem' }} /> : <BsList style={{ fontSize: '1.5rem' }}  />}
      </button>
      
      
      <AnimatePresence>
      {showNavbar && (
        <motion.div
        className={"navbar-contents show "} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        
      <nav className="flex justify-start items-center w-full z-[100]" >
      
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
            // <button
              key={item.path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-300"
              }`}
              data-active={isActive}
              href={item.path}
              // onClick={() => scrollTo(item.path)}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width:"100%",
                  }}
                  transition={{
                    type:"spring",
                    bounce:0.1,
                    stiffness:100,
                    damping:11,
                    duration:0.5,
                  }}
                  />
              )}
            {/* </button> */}
            </Link>
          );
        })}

          <button className="px-4 py-2 rounded-md text-sm lg:text-base no-underline text-zinc-100">
            <BsSearch style={{ fontSize: '1rem' }} /> 
          </button>

        </nav>
        </motion.div>
       )}
        </AnimatePresence>
    </div>
  );
}