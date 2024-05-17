"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";

import SearchBar from "@/app/components/SearchBar";
import pageIndex from "./pageIndex";


const navItems = [
  {
    path: "/",
    name: "Home",
    key:"home"
  },
  {
    path: "/links",
    name: "Links/Info",
    key:"links"
  },
  {
    path: "/projects",
    name: "Projects",
    key:"projects"
  },
];

const navSubItems = [
  {
    path: "/projects/sketches",
    name: "Sketches",
    key:"sketches"
  },
  {
    path: "/projects/creative-coding",
    // name: "Creative Coding",
    name: "Coding",
    key:"coding"
  },
  {
    path: "/projects/skylands",
    name: "Skylands",
    key:"skylands"
  },
  {
    path: "/projects/space",
    name: "Space",
    key:"space"
  },
  {
    path: "/projects/springFlowers",
    name: "Flowers",
    key:"flowers"
  },
  {
    path: "/projects/momentfulness",
    name: "Momentfulness",
    key:"momentfulness"
  },
  {
    path: "/projects/animations",
    name: "Animations",
    key:"animations"
  },
  {
    path: "/projects/illustrator",
    name: "Illustrator",
    key:"illustrator"
  },
  {
    path: "/projects/voxel",
    name: "Voxel Art",
    key:"voxel"
  },
  {
    path: "/projects/butterfly",
    name: "Butterfly",
    key:"butterfly"
  },
  {
    path: "/projects/crafts",
    name: "Crafts",
    key:"crafts"
  },
];

const colorMap = {
  "/": "#A9A9A9",
  "/links": "#A9A9A9",
  "/projects":"#A9A9A9", 
  "/projects/sketches" :"#A9A9A9", 
  "/projects/creative-coding" :"#A9A9A9", 
  "/projects/skylands" :"#A9A9A9", 
  "/projects/butterfly" :"#A9A9A9", 
  "/projects/springFlowers" :"#A9A9A9", 
  "/projects/momentfulness" :"#A9A9A9", 
  "/projects/animations" :"#A9A9A9", 
  "/projects/illustrator" :"#A9A9A9", 
  "/projects/voxel" :"#A9A9A9", 
  "/projects/crafts" :"#A9A9A9", 
}

const borderColorMap = {
  "/" : "#FFFFFF",
  "/links" : "#FFFFFF",
  "/projects" :  "#FFFFFF",
  "/projects/sketches" :"#FFFFFF", 
  "/projects/creative-coding" :"#FFFFFF", 
  "/projects/skylands" : "#FFFFFF",
  "/projects/springFlowers" : "#FFFFFF",
  "/projects/momentfulness" : "#FFFFFF",
  "/projects/voxel" :"#FFFFFF", 
  "/projects/butterfly" : "#FFFFFF",
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

const menuButton = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 }
};

const arrowButton = {
  open: {
  transform:"translateX(-100%)"
},
  closed: {
  transform:"translateX(0%)"
}
}

const arrowButton2 = {
  open: {  transform:"translateX(0%)"},
  closed: {
    transform:"translateX(100%)"
  }
}

const pathMiddle1 = {
  open : {rotate:0},
  closed: {rotate:45}
}

const pathMiddle2 = {  
  open : {rotate:0},
  closed: {rotate:-45}
}

const pathMiddle3 = {
  closed: {transform: "translateX(100%)"
  },
  open: {transform: "translateX(0%)" 
  },
}

const pathMiddle4 = {
  closed: {transform: "translateX(100%) "
  },
  open: {transform: "translateX(0%)" 
  },
}

export default function Navbar() {

  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (term) => {
    const results = pageIndex.filter((page) => {
      const { title, content, keywords } = page;
      const searchTerm = term.toLowerCase();

      return (
        title.toLowerCase().includes(searchTerm) ||
        content.toLowerCase().includes(searchTerm) ||
        keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
      );
    });

    setSearchResults(results);
    setShowSearchResults(true);
  };
  
  const pathname = usePathname() || "/";

  const boxBackgroundColor = colorMap[pathname]
  const boxBorderColor = borderColorMap[pathname]

  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubNavbar, setShowSubNavbar] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const [hoveringPath, setHoveringPath] =useState(pathname)

  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);

  const handleHoverNavbar= () => {
    setIsHoveringNavbar(!isHoveringNavbar);
    // console.log('hovering Navbar');
  };

  const toggleNavbarVisibility = () => {
    setShowNavbar(!showNavbar);
  };

  const toggleSubNavbarVisibility = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  return (
    <div className={styles.navbarContainer}
    >
          <motion.button style={{zIndex:'9999'}}
            className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
            onClick={toggleNavbarVisibility} variants={menuButton}   initial="rest" whileHover="hover" whileTap="pressed">

                <motion.svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" width={25} strokeWidth={0} 
                style={{
                  backgroundColor:'#211f1e', 
                  zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem'}}>

                  <motion.path d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z" 
                  variants={pathMiddle3}
                  initial={showNavbar? "open" : "closed"} 
                  animate={showNavbar? "closed" : "open"} 
                  transition={{ delay: showNavbar? 0: 0.25 }}  
                  />

                  <motion.path d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
                  variants={pathMiddle1}
                  initial={showNavbar? "open" : "closed"} 
                  animate={showNavbar? "closed" : "open"}
                  transition={{ delay: showNavbar? 0.5 : 0}}  
                  />
                  
                  <motion.path d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z" 
                    variants={pathMiddle2}
                    initial={showNavbar ? "open" : "closed"} 
                    animate={showNavbar? "closed" : "open"}
                    transition={{ delay: showNavbar? 0.5 : 0 }} 
                    />

                  <motion.path d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
                     variants={pathMiddle4}
                     initial={showNavbar? "open" : "closed"} 
                     animate={showNavbar? "closed" : "open"}
                     transition={{ delay: showNavbar? 0: 0.25 }}  
                     />
                </motion.svg> 

                
          </motion.button>



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
              {/* <nav className="flex justify-start items-center w-full z-9990"> */}
              <nav className="flex justify-start items-center w-full h-full z-9990">
                {navItems.map((item) => {
                  return (
                    <motion.div key={item.path} whileTap={{ scale: 0.8 }}>
                      <Link
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

                  <motion.button style={{zIndex:'9999'}}
                    className={`${styles.subNavbar} px-2 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in text-zinc-100`}
                    onClick={toggleSubNavbarVisibility} 
                    variants={menuButton}   initial="rest" whileHover="hover" whileTap="pressed">

                <motion.svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" width={25} strokeWidth={0} 
                style={{
                  backgroundColor:'#211f1e', 
                  zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem', width:'25px'
                }}
                >

                  <motion.path d="M 7.21 8 l 2.64 2.65 a 0.495 0.495 0 0 1 -0.7 0.7 c -0.13 -0.12 -0.25 -0.24 -0.38 -0.37 c -0.87 -0.87 -1.75 -1.75 -2.62 -2.63 a 0.492 0.492 0 0 1 0 -0.7 l 3 -3 a 0.495 0.495 0 0 1 0.7 0.7 Z"
                  variants={arrowButton}
                  initial={showSubNavbar? "open" : "closed"} 
                  animate={showSubNavbar? "closed" : "open"}
                  transition={{delay: showSubNavbar? 0.25:0}}
                  />
                  <motion.path d="M 8.79 8 l -2.64 -2.65 a 0.495 0.495 180 0 1 0.7 -0.7 c 0.13 0.12 0.25 0.24 0.38 0.37 c 0.87 0.87 1.75 1.75 2.62 2.63 a 0.492 0.492 180 0 1 0 0.7 l -3 3 a 0.495 0.495 180 0 1 -0.7 -0.7 Z"
                  variants={arrowButton2}
                  initial={showSubNavbar? "open" : "closed"} 
                  animate={showSubNavbar? "closed" : "open"}
                  transition={{delay: showSubNavbar ? 0:0.25}}
                  />

                </motion.svg> 
                  </motion.button>




                <AnimatePresence>
                  {showSubNavbar && (
                       <motion.div
                        className={styles.subNavbar}
                        initial={{
                          opacity: 0,
                          transform:"translateX(-100%)"
                        }}
                        animate={{
                          opacity: 1,
                          transform:"translateX(0%)"
                        }}
                        exit={{
                          opacity: 0,
                          transform:"translateX(-100%)"
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                          staggerChildren:0.5
                        }}
                      >
                    {/* <nav className="flex flex-row justify-start w-full z-9998"> */}
                    <nav className="flex flex-row justify-start top-11 w-full z-9998">
                        {navSubItems.map((subItem) => {
                      return (
                        <motion.div key={subItem.path} whileTap={{ scale: 0.8 }}>
                          <Link
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
          
      <Suspense>
      <SearchBar onSearch={handleSearch} style={{zIndex:'-100'}}/>
      {showSearchResults}
      </Suspense>
    </div>
  );
}
