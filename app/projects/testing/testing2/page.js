"use client";
import { useState, useEffect } from "react";
import styles from "/app/page.module.css";
import {
  CiGrid32,
  CiImageOn,
  CiFileOn,
  CiViewList,
  CiStickyNote,
} from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function Home() {
  const [isHoveringProjects, setIsHoveringProjects] = useState(false);
  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);
//   const [hoveringPortfolioCycle, setHoveringPortfolioCycle] = useCycle(false, true);

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

  const text= "Florian Kleiser".split("");
  const projectstext= "Projects".split("");
  const portfoliotext= "Portfolio".split('');

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

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

      <div className={styles.backbuttonHomepage}>
        <h1>
          {" "}
          <Link href="/projects/testing">Testing</Link>{" "}
        </h1>
      </div>

      <div className={styles.titleHomepage}>
        <AnimatePresence>
          <motion.span
          initial={{ x:  isHoveringPortfolio ? -1000 : 0}}
          animate={{ x: isHoveringPortfolio ? 0 : 1000}}>

        
        {text.map((el, i) => (
          <motion.span
          initial={{ 
            opacity: isHoveringProjects? 1:1,
            // x:  isHoveringPortfolio ? 1000 : 1000
            x: 1000
          }}
          animate={{ 
            opacity: isHoveringProjects? 0:1,
            // x: isHoveringPortfolio ? 100 : 0,
            x:0
          }}
          transition={{
            duration: 0.25,
            delay:  i / 40
          }}
          key={i} >
            {el}{""}
            </motion.span>
            ))}
            </motion.span>
        </AnimatePresence>
        </div>

      <AnimatePresence>
        <div className={styles.homepagePortfolio} style={{ zIndex: -700 }}>
          <div className={`${styles.cardHomepagePortfolio} ${animationClass}`}>
            <Image
              src="/images/homepage/portfolio homepage2.png"
              width={1100}
              height={1000}
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
              src="/images/homepage/new2/1.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.1s" }}
          >
            <Image
              src="/images/homepage/new2/2.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="/images/homepage/new2/3.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Image
              src="/images/homepage/new2/4.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.4s" }}
          >
            <Image
              src="/images/homepage/new2/5.png"
              width={1100}
              height={1000}
            />
          </div>
          <div
            className={`${styles.cardHomepageTest} ${animationClass2}`}
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src="/images/homepage/new2/6.png"
              width={1100}
              height={1000}
            />
          </div>
        </div>
      </AnimatePresence>

      <div style={{ margin: "5rem" }}> </div>

      <div
        className={styles.buttonGeneralHomepageProjects}

        onMouseOver={() => {handleHoverProjects()}}
        onMouseMove={() => setIsHoveringProjects(true)}
        onMouseLeave={() => setIsHoveringProjects(false)}
        style={{ zIndex: 60 }}
      >
        <div className={styles.subtitleHomepage}>
           <motion.span
           initial={{ opacity: isHoveringPortfolio ? 1:1}}
           animate={{ opacity: isHoveringPortfolio ? 0:1}} >
            <CiGrid32 />
            </motion.span>
             {projectstext.map((el, i) => (
                 <motion.span
                 initial={{ opacity: isHoveringPortfolio ? 1:1 }}
                 animate={{ opacity: isHoveringPortfolio ? 0:1 }}
          transition={{
              duration: 0.25,
            }}
          key={i} >
            {el}
          </motion.span>
         ))}   
            <Link className="link-hover" href="/projects">
          </Link>
        </div>
      </div>

      <div
        className={styles.buttonGeneralHomepage}
        style={{ zIndex: 60 }}
        onMouseOver={handleHoverPortfolio}
        onMouseMove={() => setIsHoveringPortfolio(true)}
        onMouseLeave={() => setIsHoveringPortfolio(false)}
      >
        <div className={styles.subtitleHomepage}>
          <motion.span 
          initial={{ opacity: isHoveringProjects ? 1:1 }}
          animate={{ opacity: isHoveringProjects ? 0:1 }}
          >
            <CiImageOn />
            </motion.span>
            {portfoliotext.map((el, i) => (
              <motion.span
              initial={{ opacity: isHoveringProjects ? 1:1 }}
              animate={{ opacity: isHoveringProjects ? 0:1 }}
              transition={{
                duration: 0.25,
                delay: i / 30
              }}
              key={i} >
            {el}
          </motion.span>
        ))}  
            <Link
              className="link-hover"
              href="https://drive.google.com/file/d/1Np6IwGFmij4aCnuPW_C_E2SXuyrAt6nV/view?usp=sharing"
              target="_blank"
            >
          </Link>
        </div>

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
              // backgroundColor: "rgba(0,0,0,0.4)",
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      <div style={{ margin: "3.5rem" }}> </div>
    </main>
  );
}
