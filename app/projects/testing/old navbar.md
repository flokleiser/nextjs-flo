'use client'

import styles from 'app/page.module.css'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {AnimatePresence, m, motion} from "framer-motion";
import { BsList, BsX, BsXSquare, BsSearch } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { CiSquareChevDown, CiSquareChevUp,  CiSquareChevLeft, CiSquareChevRight, CiSquarePlus, CiSquareMinus, CiSquareMore, CiCircleChevUp} from "react-icons/ci";


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  // {
  //   path: "/toggle-navbar",
  //   name: "Toggle Navbar",
  // },
  {
    path: "/links",
    name: "Links/Info",
  },
];

const navSubItems = [
  {
    path: "/projects/sketches",
    name: "Sketches",
  },
  {
    path: "/projects/creative-coding",
    name: "Creative Coding",
  },
  {
    path: "/projects/skylands",
    name: "Skylands",
  },
  {
    path: "/projects/voxel",
    name: "Voxel Art",
  },
  {
    path: "/projects/cad",
    name: "CAD",
  },
  {
    path: "/projects/animations",
    name: "Animations",
  },
  {
    path: "/projects/crafts",
    name: "Crafts",
  },
  {
    path: "/projects/illustrator",
    name: "Illustrator",  
  }
]


export default function Navbar() {
  let pathname = usePathname() || "/";

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };
  
  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  const handleSubNavbarItemClick = () => {
    setShowSubNavbar(false);
  };


  return (
    <div className="flex border-stone-900/80 p-[0.4rem] mb-1 sticky top bg-stone-900/80 backdrop-blur-md ">
      <button
        className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out text-zinc-100"
        onClick={toggleNavbarVisibility}
      >
        {showNavbar ? <BsX style={{ fontSize: '1.5rem' }} /> : <BsList style={{ fontSize: '1.5rem' }}  />}
      </button>
      
      
      <AnimatePresence>
      {showNavbar && (
        
        <motion.div
        // className={"navbar-contents show "} 
        className={`navbar-contents ${showSubNavbar ? 'expanded' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >

      <nav className="flex justify-start items-center w-full z-9999">

        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          if (index === 1) {
            return (
              <>
               <Link
          key={item.path}
          className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
            isActive ? "text-zinc-100" : "text-zinc-300"
          }`}
          href={item.path}
          onMouseOver={() => setHoveredPath(pathname)}
          onMouseLeave={() => setHoveredPath(pathname)}
        >
          <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width:'100%'
                  }}
                  transition={{
                    // type:"spring",
                    bounce:0.01,
                    stiffness:100,
                    damping:20,
                    duration:0.3,
                  }}
                  />
              )} 
        </Link>
            
            <button
            className="px-2 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-100 "
            onClick={toggleSubNavbarVisibility}>

            {showSubNavbar ? (
            <CiSquareChevDown style={{ fontSize: '1.5rem' }} />
         ) : ( 
         <CiSquareChevUp style={{ fontSize: '1.5rem' }}  />
          )}
            </button>  
            </>
            );
         }
  
         
          return (

            <Link
              key={item.path}
              className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-300"
              }`}
              data-active={isActive}
              href={item.path}
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
                    width:'100%'
                  }}
                  transition={{
                    // type:"spring",
                    bounce:0.01,
                    stiffness:100,
                    damping:20,
                    duration:0.3,
                  }}
                  />
              )}
            </Link>
            

);
})}

             {showSubNavbar && (
                <motion.div className={styles.subNavbar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}}
                  >
                 <nav className="flex justify-start items-center w-full z-9999">
                  {navSubItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      className={`px-1.5 py-2 rounded-md text-xs lg:text-base relative z-9999 no-underline duration-300 ease-in z-9999 ${
                        // className={`z-10 ${
                        subItem.path === pathname ? "text-zinc-100" : "text-zinc-300"
                      }`}
                      data-active={subItem.path === pathname}
                      href={subItem.path}
                      onMouseOver={() => setHoveredPath(subItem.path)}
                      onMouseLeave={() => setHoveredPath(pathname)}
                      onClick={handleSubNavbarItemClick}
                 

                    >
                      <span>{subItem.name}</span>
                      {subItem.path === hoveredPath && (
                        <motion.div
                          // className="absolute bottom-0 left-0 h-full bg-stone-900/30 rounded-md z-10"
                          className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
                          layoutId="navbar"
                          aria-hidden="true"
                          style={{
                            width: '100%',
                           
                          }}
                          transition={{
                            // type:"spring",
                            bounce:0.01,
                            stiffness:100,
                            damping:20,
                            duration:0.3,
                          }}
                          />
                          )}
                    </Link>
                  ))}
                  </nav>
                  </motion.div> 
                )}


           </nav>
        
        </motion.div>
       )}
        </AnimatePresence>
    </div>
  );
}










'use client'

import styles from 'app/page.module.css'
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { BsList, BsX, BsXSquare, BsSearch } from "react-icons/bs";
import { CiSquareChevDown, CiSquareChevUp,  CiSquareChevLeft, CiSquareChevRight, CiSquarePlus, CiSquareMinus, CiSquareMore, CiCircleChevUp} from "react-icons/ci";


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
    name: "Links/Info",
  },
];

const navSubItems = [
  {
    path: "/projects/sketches",
    name: "Sketches",
  },
  {
    path: "/projects/creative-coding",
    name: "Creative Coding",
  },
  {
    path: "/projects/skylands",
    name: "Skylands",
  },
  {
    path: "/projects/voxel",
    name: "Voxel Art",
  },
  {
    path: "/projects/cad",
    name: "CAD",
  },
  {
    path: "/projects/animations",
    name: "Animations",
  },
  {
    path: "/projects/crafts",
    name: "Crafts",
  },
  {
    path: "/projects/illustrator",
    name: "Illustrator",  
  }
]


export default function Navbar() {
  let pathname = usePathname() || "/";

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };
  
  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  const handleSubNavbarItemClick = () => {
    setShowSubNavbar(false);
  };


  return (
    <div className="flex border-stone-900/80 p-[0.4rem] mb-1 sticky top bg-stone-900/80 backdrop-blur-md ">
      <button
        className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out text-zinc-100"
        onClick={toggleNavbarVisibility}
      >
        {showNavbar ? <BsX style={{ fontSize: '1.5rem' }} /> : <BsList style={{ fontSize: '1.5rem' }}  />}
      </button>
      
      
      <AnimatePresence>
      {showNavbar && (
        
        <motion.div
        // className={"navbar-contents show "} 
        className={`navbar-contents ${showSubNavbar ? 'expanded' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >

      <nav className="flex justify-start items-center w-full z-9999">

        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

        //   if (index === 1) {
        //     return (
        //       <>
        //        <Link
        //   key={item.path}
        //   className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
        //     isActive ? "text-zinc-100" : "text-zinc-300"
        //   }`}
        //   href={item.path}
        //   onMouseOver={() => setHoveredPath(pathname)}
        //   onMouseLeave={() => setHoveredPath(pathname)}
        // >
        //   <span>{item.name}</span>
        //       {item.path === hoveredPath && (
        //         <motion.div
        //           className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
        //           layoutId="navbar"
        //           aria-hidden="true"
        //           style={{
        //             width:'100%'
        //           }}
        //           transition={{
        //             // type:"spring",
        //             bounce:0.01,
        //             stiffness:100,
        //             damping:20,
        //             duration:0.3,
        //           }}
        //           />
        //       )} 
        // </Link>
            
        //     <button
        //     className="px-2 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-100 "
        //     onClick={toggleSubNavbarVisibility}>

        //     {showSubNavbar ? (
        //     <CiSquareChevDown style={{ fontSize: '1.5rem' }} />
        //  ) : ( 
        //  <CiSquareChevUp style={{ fontSize: '1.5rem' }}  />
        //   )}
        //     </button>  
        //     </>
        //     );
        //  }
  
         
          return (

            <Link
              key={item.path}
              className={`px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-300"
              }`}
              data-active={isActive}
              href={item.path}
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
                    width:'100%'
                  }}
                  transition={{
                    // type:"spring",
                    bounce:0.01,
                    stiffness:100,
                    damping:20,
                    duration:0.3,
                  }}
                  />
              )}
            </Link>
            

);
})}

             {showSubNavbar && (
                <motion.div className={styles.subNavbar}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5}}
                  >
                 <nav className="flex justify-start items-center w-full z-9999">
                  {navSubItems.map((subItem) => (
                    <Link
                      key={subItem.path}
                      className={`px-1.5 py-2 rounded-md text-xs lg:text-base relative z-9999 no-underline duration-300 ease-in z-9999 ${
                        // className={`z-10 ${
                        subItem.path === pathname ? "text-zinc-100" : "text-zinc-300"
                      }`}
                      data-active={subItem.path === pathname}
                      href={subItem.path}
                      onMouseOver={() => setHoveredPath(subItem.path)}
                      onMouseLeave={() => setHoveredPath(pathname)}
                      onClick={handleSubNavbarItemClick}
                 

                    >
                      <span>{subItem.name}</span>
                      {subItem.path === hoveredPath && (
                        <motion.div
                          // className="absolute bottom-0 left-0 h-full bg-stone-900/30 rounded-md z-10"
                          className="absolute bottom-0 left-0 h-full bg-stone-500/50 rounded-md -z-10"
                          layoutId="navbar"
                          aria-hidden="true"
                          style={{
                            width: '100%',
                           
                          }}
                          transition={{
                            // type:"spring",
                            bounce:0.01,
                            stiffness:100,
                            damping:20,
                            duration:0.3,
                          }}
                          />
                          )}
                    </Link>
                  ))}
                  </nav>
                  </motion.div> 
                )}


           </nav>
        
        </motion.div>
       )}
        </AnimatePresence>
    </div>
  );
}