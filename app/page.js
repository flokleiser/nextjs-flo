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
import TitleParticles from "@/app/components/Particles";

export default function Home() {
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);

  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");

  useEffect(() => {
    if (isHoveringPortfolio) {
      setAnimationClass(styles.animationClassHalf1);
    } else if (animationClass === styles.animationClassHalf1) {
      setAnimationClass(styles.animationClassHalf2);
    }
  }, [isHoveringPortfolio]);

  useEffect(() => {
    if (isHoveringProjects) {
      setAnimationClass2(styles.animationTestClassHalf1);
    } else if (animationClass2 === styles.animationTestClassHalf1) {
      setAnimationClass2(styles.animationTestClassHalf2);
    }
  }, [isHoveringProjects]);

  const handleHoverProjects = () => {
    setIsHoveringProjects(!isHoveringProjects);
  };

  const handleHoverPortfolio = () => {
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
    
    initial={{ opacity:1, y:0,
    }}
    animate={{ opacity: isHoveringProjects? 0:1, 
      // y: isHoveringPortfolio ? -50:0
      y: isHoveringPortfolio ? -25:0
    }}
    transition={{duration: 0.5, 
      type:"spring"
    }}
  >
  <TitleParticles />
  </motion.div>
</AnimatePresence>

      <div className={styles.titleHomepage}
      style={{opacity:0}}
      >
       {/* Florian Kleiser  */}
       f
        </div>


      <AnimatePresence>
        <div className={styles.homepagePortfolio} style={{ zIndex: -700 }}>
          <div className={`${styles.cardHomepagePortfolio} ${animationClass}`}>
            <Image
              src="/images/homepage/portfolio homepage2.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority
              priority={true}
              alt="Portfolio"
            />
          </div>
        </div>
      </AnimatePresence>

      <AnimatePresence>
        <div className={styles.homepageSlices} style={{ zIndex: -900 }}>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0s" }}
          >
            <Image
              src="/images/homepage/new2/1.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority 
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src="/images/homepage/new2/2.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority 
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/images/homepage/new2/3.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority 
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/homepage/new2/4.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority 
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/images/homepage/new2/5.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority 
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src="/images/homepage/new2/6.webp"
              width={1100}
              height={1000}
              style={{ width: '100%', height: 'auto' }}
              // priority
              // priority={true}
              priority="true"
              alt="Projects"
            />
          </div>
        </div>
      </AnimatePresence>

      {/* <div style={{ margin: "4rem" }}> </div> */}
      <div style={{ margin: "5rem"}}> </div>
      {/* <div style={{ margin: "6rem"}}> </div> */}

      <div
        className={styles.buttonGeneralHomepageProjects}

      
        onMouseEnter={() => handleHoverProjects()}
        onMouseLeave={() => setIsHoveringProjects(false)}
        
        style={{ zIndex: 60 }}
      >
        <Link className="link-hover" href="/projects">
        <div className={styles.subtitleHomepage}>
           <motion.span
           initial={{ opacity: isHoveringPortfolio ? 1:1 }}
           animate={{ opacity: isHoveringPortfolio ? 0:1 }} 
           transition={{duration: 0.3}} 
           >
            <div className="flex items-center">
            <CiGrid32 /> Projects
            </div>
              
            </motion.span>
        </div>
        </Link>
      </div>

      <div
        className={styles.buttonGeneralHomepage}
        style={{ zIndex: 60 }}
        onMouseEnter={() => handleHoverPortfolio()}
        onMouseLeave={() => setIsHoveringPortfolio(false)}
      >
         <Link
              className="link-hover"
              href="/portfolio"
            >
        <div className={styles.subtitleHomepage}>
          <motion.span 
          initial={{ opacity: isHoveringProjects ? 1:1 }}
          animate={{ opacity: isHoveringProjects ? 0:1 }}
          transition={{duration: 0.5}} 
          >
            <div className="flex items-center">
            <CiImageOn /> Portfolio
            </div>
            </motion.span>
      
        
         
        </div>
        </Link>

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

      <AnimatePresence>
        {isHoveringPortfolio && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center -z-[800]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              backdropFilter: "blur(100px)",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {/* <div style={{ margin: "3.5rem" }}> </div> */}
    </main>
  );
}
