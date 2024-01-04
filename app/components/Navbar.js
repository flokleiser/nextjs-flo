"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";
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

export default function Navbar() {

  const pathname = usePathname() || "/";

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(pathname);

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className="flex border-stone-900/80 p-[0.4rem] mb-1 fixed top bg-stone-900/80 backdrop-blur-md z-[9998] w-full ">
        <motion.div whileTap={{ scale: 0.5 }}>
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
        </motion.div>

        <AnimatePresence>
          {showNavbar && (
            <motion.div
              className={`navbar-contents ${showSubNavbar ? "expanded" : ""}`}
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
                {navItems.map((item) => {
                  return (
                    <motion.div whileTap={{ scale: 0.8 }}>
                      <Link
                        key={item.path}
                        className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in"
                        href={item.path}
                        onClick={() => setHoveredPath(item.path)}
                      >
                        <span>{item.name}</span>
                        {item.path === hoveredPath && (
                          <motion.div
                            className={styles.navbarBox}
                            layoutId="navbar"
                            aria-hidden="true"
                            style={{
                              width: "100%",
                            }}
                            animate
                          />
                         )} 
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div whileTap={{ scale: 0.5 }}>
                  <button
                    className={`${styles.subNavbar} px-2 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-100`}
                    onClick={toggleSubNavbarVisibility}
                  >
                    {showSubNavbar ? (
                      <CiSquareChevRight style={{ fontSize: "1.5rem" }} />
                    ) : (
                      <CiSquareChevLeft style={{ fontSize: "1.5rem" }} />
                    )}
                  </button>
                </motion.div>
                <AnimatePresence>
                  {showSubNavbar && (
                       <motion.div
                        className={styles.subNavbar}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                        }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          staggerChildren:0.5
                        }}
                      >
                    <nav className="flex flex-row justify-start w-full z-9999">
                        {navSubItems.map((subItem) => {
                      return (
                        <motion.div whileTap={{ scale: 0.8 }}>
                          <Link
                            key={subItem.path}
                            className="px-1.5 py-2 rounded-md text-xs lg:text-base relative z-9999 no-underline duration-300 ease-in z-9999" 
                            href={subItem.path}
                            onClick={() => setHoveredPath(subItem.path)}
                          >
                            <motion.span>
                            {subItem.name}  
                            </motion.span>
                            {subItem.path === hoveredPath && (
                              <div
                                className={styles.navbarBox}
                                layoutId="navbar"
                                aria-hidden="true"
                                style={{
                                  width: "100%",
                                }}
                              />
                            )}
                          </Link>
                          </motion.div>
                            );
                        })}
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
