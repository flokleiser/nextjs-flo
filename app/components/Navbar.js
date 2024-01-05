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

const colorMap = {
  "/": "#6b106a",
  "/links": "#670e6b",
  "/projects": "#640d6b",
  "/projects/sketches" : "#600b6c",
  "/projects/creative-coding" : "#5b0a6d", 
  "/projects/skylands" : "#57096d",
  "/projects/voxel" : "#52096e",
  "/projects/cad" : "#4e086f",
  "/projects/animations" : "#480870",
  "/projects/crafts" : "#430970",
  "/projects/illustrator" : "#3d0971"
}

const borderColorMap = {
  "/" : "#FFFFFF",
  "/links" : "#FFFFFF",
  "/projects" :  "#FFFFFF",
  "/projects/sketches" :"#FFFFFF", 
  "/projects/creative-coding" :"#FFFFFF", 
  "/projects/skylands" : "#FFFFFF",
  "/projects/voxel" :"#FFFFFF", 
  "/projects/cad" : "#FFFFFF",
  "/projects/animations" : "#FFFFFF",
  "/projects/crafts" : "#FFFFFF",
  "/projects/illustrator" : "#FFFFFF",
}

const grayBoxVariant = {
  initial:{
    width:'0%', 
  },
    animate:{
    width:'100%', 
  }
}

export default function Navbar() {
  
  const pathname = usePathname() || "/";

  const boxBackgroundColor = colorMap[pathname]
  const boxBorderColor = borderColorMap[pathname]

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const [hoveringPath, setHoveringPath] =useState(pathname)

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className="flex border-stone-900/80 p-[0.3rem] mb-1 fixed top bg-stone-900/80 backdrop-blur-md z-[9998] w-full ">
        {/* <motion.div whileTap={{ scale: 0.5 }}> */}
          <button
            className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
            onClick={toggleNavbarVisibility}
          >
            {showNavbar ? (
              <BsX style={{fontSize: "1.6rem", paddingBottom:'-0.5rem', 
              backgroundColor:'#211f1e', zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem'
            }} />
            ) : (
              <BsList style={{fontSize: "1.6rem", 
              backgroundColor:'#211f1e', zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem'
            }} />
            )}
          </button>
        {/* </motion.div> */}

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
              <nav className="flex justify-start items-center w-full z-9990">
                {navItems.map((item) => {
                  return (
                    <motion.div whileTap={{ scale: 0.8 }}>
                      <Link
                        key={item.path}
                        className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in"
                        href={item.path}
                        onMouseOver={() => setHoveringPath(item.path)}
                        onMouseMove={() => setHoveringPath(item.path)}
                        onMouseLeave={() => setHoveringPath(false)}
                        onClick={() => setActivePath(item.path)}
                      >
                        <span>{item.name}</span>
                        {item.path === activePath && (
                          <motion.div
                            className={styles.navbarBox}
                            aria-hidden="true"
                            style={{
                              backgroundColor: boxBackgroundColor,
                              borderColor: boxBorderColor,
                              width: "100%",
                              // opacity:0.5,
                            }}
                            variants={grayBoxVariant}
                            initial="initial" 
                            animate="animate"
                          />
                         )} 
                         {item.path === hoveringPath && (
                          <motion.div
                          className={styles.navbarBoxHover}
                          aria-hidden="true"
                            style={{
                              width: "100%",
                              opacity: hoveringPath === activePath ? 0 : 1
                            }}
                          />
                         )}
                      </Link>
                    </motion.div>
                  );
                })}

                {/* <motion.div whileTap={{ scale: 0.5 }}> */}
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
                {/* </motion.div> */}
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
                    <nav className="flex flex-row justify-start w-full z-9998">
                        {navSubItems.map((subItem) => {
                      return (
                        <motion.div whileTap={{ scale: 0.8 }}>
                          <Link
                            key={subItem.path}
                            className="px-1.5 py-2 rounded-md text-xs lg:text-base relative z-9998 no-underline duration-300 ease-in z-9998" 
                            href={subItem.path}
                            onMouseOver={() => setHoveringPath(subItem.path)}
                            onMouseMove={() => setHoveringPath(subItem.path)}
                            onMouseLeave={() => setHoveringPath(false)}
                            onClick={() => setActivePath(subItem.path)}
                          >
                            <span>
                            {subItem.name}  
                            </span>
                            {subItem.path === activePath && (
                              <motion.div
                                className={styles.navbarBox}
                                aria-hidden="true"
                                style={{
                                  backgroundColor: boxBackgroundColor,
                                  // opacity:0.5,
                                  borderColor: boxBorderColor,
                                  width: "100%",
                                }}
                                variants={grayBoxVariant}
                                initial="initial" 
                                animate="animate"
                              />
                            )}
                            {subItem.path === hoveringPath && (
                          <motion.div
                          className={styles.navbarBoxHover}
                          aria-hidden="true"
                            style={{
                              width: "100%",
                              opacity: hoveringPath === activePath ? 0 : 1
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
