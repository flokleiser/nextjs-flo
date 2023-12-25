"use client";

import styles from "app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsList, BsX, BsXSquare, BsSearch } from "react-icons/bs";
import {
  CiSquareChevDown,
  CiSquareChevUp,
  CiSquareChevLeft,
  CiSquareChevRight,
  CiSquarePlus,
  CiSquareMinus,
  CiSquareMore,
  CiCircleChevUp,
} from "react-icons/ci";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/links",
    name: "Links/Info",
  },
  {
    path: "/projects",
    name: "Projects",
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
  },
];

export default function NavbarTest() {
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
    <div className={styles.navbarContainer}>
      <div className="flex border-stone-900/80 p-[0.4rem] mb-1 fixed top bg-stone-900/80 backdrop-blur-md z-[9998] w-full ">
        <button
          className="px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100"
          onClick={toggleNavbarVisibility}
        >
          {showNavbar ? (
            <BsX style={{ fontSize: "1.5rem" }} />
          ) : (
            <BsList style={{ fontSize: "1.5rem" }} />
          )}
        </button>

        <AnimatePresence>
          {showNavbar && (
            <motion.div
              className={`navbar-contents ${showSubNavbar ? "expanded" : ""}`}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              // transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{
                position: "relative",
                transform: "translateX(-100%)",
              }}
              initial={{
                transform: "translateX(-100%)",
                opacity: 0,
              }}
              animate={{
                transform: "translateX(0)",
                opacity: 1,
              }}
              exit={{
                transform: "translateX(-100%)",
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <nav className="flex justify-start items-center w-full z-9999">
                {navItems.map((item, index) => {
                  const isActive = item.path === pathname;
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
                            width: "100%",
                          }}
                          transition={{
                            // type:"spring",
                            bounce: 0.01,
                            stiffness: 100,
                            damping: 20,
                            duration: 0.3,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}

                  <button 
                    className={`${styles.subNavbar} px-2 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-100`} 
                    onClick={toggleSubNavbarVisibility}
                  >
                    {showSubNavbar ? (
                      /* <CiSquareChevLeft style={{ fontSize: '1.5rem' }} /> */
                      <CiSquareMinus style={{ opacity:0.4, fontSize: "1.5rem" }} />
                    ) : (
                      /* <CiSquareChevRight style={{ fontSize: '1.5rem' }}  /> */
                      <CiSquarePlus style={{ opacity:0.4, fontSize: "1.5rem" }} />
                    )}
                  </button>

                <AnimatePresence>
                  {showSubNavbar && (
                    <motion.div
                      className={styles.subNavbar}
                      style={{
                        position: "relative",
                        transform: "translateY(-100%)",
                      }}
                      initial={{
                        transform: "translateY(-100%)",
                        opacity: 0,
                      }}
                      animate={{
                        transform: "translateX(0)",
                        opacity: 1,
                      }}
                      exit={{
                        transform: "translateY(-100%)",
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                      }}
                    >
                      <nav className="flex flex-row justify-start w-full z-9999">
                        {/* <div 
                 className={styles.navbarSubContainer}
                 > */}

                        {navSubItems.map((subItem) => (
                          <Link
                            key={subItem.path}
                            className={`px-1.5 py-2 rounded-md text-xs lg:text-base relative z-9999 no-underline duration-300 ease-in z-9999 ${
                              // className={`z-10 ${
                              subItem.path === pathname
                                ? "text-zinc-100"
                                : "text-zinc-300"
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
                                  width: "100%",
                                }}
                                transition={{
                                  // type:"spring",
                                  bounce: 0.01,
                                  stiffness: 100,
                                  damping: 20,
                                  duration: 0.3,
                                }}
                              />
                            )}
                          </Link>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
