"use client";
import { useState, useEffect } from "react";
import styles from "/app/page.module.css";
import {
  CiGrid32,
  CiImageOn,
} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import TitleParticles from "@/app/components/Particles";

export default function Home() {
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);

  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");


  if (isHoveringPortfolio) {
    console.log('portfolio')
  }
  if (isHoveringProjects) {
    console.log('projects')
  }

  const handleHoverProjects = (e) => {
    setIsHoveringProjects(!isHoveringProjects);
  };

  const handleHoverPortfolio = (e) => {
    setIsHoveringPortfolio(!isHoveringPortfolio);
  };

  useEffect(() => {
    document.title = "Florian Kleiser - Home";
  }, []);

  

  return (
    <main className={styles.main}>
      <div
        className="relative 
   flex 
   place-items-center 
   before:absolute 
   before:h-[300px] 
   before:w-[480px] 
   before:-translate-x-1/2 
   before:rounded-full 
   before:bg-gradient-radial 
   before:from-white 
   before:to-transparent 
   before:blur-2xl 
   before:content-[''] 
   after:absolute 
   after:-z-20 
   after:h-[180px] 
   after:w-[240px] 
   after:translate-x-1/3 
   after:bg-gradient-conic 
   after:from-sky-200 
   after:via-blue-200 
   after:blur-2xl 
   after:content-[''] 
   before:dark:bg-gradient-to-br 
   before:dark:from-transparent 
   before:dark:to-blue-700 
   before:dark:opacity-10 
   after:dark:from-sky-900 
   after:dark:via-[#0141ff] 
   after:dark:opacity-40 
   before:lg:h-[360px] 
   z-[-1]"
      ></div>

<AnimatePresence>
<motion.div style={{
      position:'absolute', 
      top:0,
      left:0,
    }}
    
    initial={{ opacity:1, 
    }}
    animate={{ opacity: isHoveringProjects? 0:1, 
    }}
    transition={{duration: 0.25, 
    }}
  >
  <TitleParticles />
  </motion.div>
</AnimatePresence>

      <div className={styles.titleHomepage}style={{opacity:0}}>
        flo
        </div>


      <AnimatePresence mode="wait">
      {isHoveringPortfolio ? (
        <motion.div className={styles.homepagePortfolio} style={{ zIndex: -700 }}             
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
            <div className={styles.cardHomepagePortfolio}
             >
            <Image
              src="/images/homepage/portfolio homepage4.png"
              width={1100}
              height={1000}
            />
          </div>
          </motion.div>
      ):(<div style={{marginTop:'1.5rem'}}> </div>)}
      </AnimatePresence>


      <AnimatePresence mode="wait">
      {isHoveringProjects ? (
        <motion.div className={styles.homepageSlices} style={{ zIndex: -900 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} 
        >
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0s" }}
          >
            <Image
              src="/images/homepage/new2/1.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src="/images/homepage/new2/2.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              // style={{width:'100%'}}
              src="/images/homepage/new2/3.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/homepage/new2/4.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/images/homepage/new2/5.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={styles.cardHomepageTest}
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src="/images/homepage/new2/6.png"
              width={1100}
              height={1000}
            />
          </div>
        </motion.div>
         ):(<div style={{marginTop:'1.5rem'}}> </div>)}
      </AnimatePresence>

      <div style={{ margin: "5rem" }}> </div>

      <div
        className={styles.buttonGeneralHomepageProjects}
        onMouseEnter={() => handleHoverProjects()}
        onMouseLeave={() => setIsHoveringProjects(false)}
        style={{ zIndex: 60 }}
      >
      <CiGrid32 />
      </div>

      <div
        className={styles.buttonGeneralHomepage}
        style={{ zIndex: 60 }}
        onMouseEnter={() => handleHoverPortfolio()}
        onMouseLeave={() => setIsHoveringPortfolio(false)}
      >
          <CiImageOn />
      </div>

      {/* Projects hover */}
      <AnimatePresence>
        {isHoveringProjects && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center -z-[901]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backdropFilter: "blur(5px)",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Portfolio hover */}
      {/* <AnimatePresence>
        {isHoveringPortfolio && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center -z-[800]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </AnimatePresence> */}

      <div style={{ margin: "3.5rem" }}> </div>
      {/* </div> */}
    </main>
  );
}
