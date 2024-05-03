'use client'
import styles from "@/app/page.module.css";
import Link from "next/link";
import LightButton from "@/app/components/LightButton.js";
import { DiGoogleDrive } from "react-icons/di";
import { AnimatePresence, motion } from "framer-motion";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import { MdFilterCenterFocus } from "react-icons/md";
import CenterTooltip from "@/app/components/CenterTooltip";
import DimTooltip from "@/app/components/DimTooltip";

// export const metadata = {
//   title: "Animations - Logo",
//   description: "-",
// };

export default function logo() {

  const [isDim, setDim] = useState(false);
  const handleToggleClick = () => {
    setDim(!isDim);
    };

    const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const elem = document.getElementById(targetId);
      elem?.scrollIntoView({ behavior: "smooth" });
    }; 

  useEffect(() => {
    document.title = "Animations - Logo";
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
      {isDim && (
        <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[52]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        
        style={{
          backdropFilter: `blur(10px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}>
      
        </motion.div>
      )}
      </AnimatePresence>


      <div style={{paddingTop:'1rem'}} />

<div className={styles.linkContainerAnimationsBackground} >
{/* <h1 className={styles.titleWithoutPadding}> */}
<h1 className={styles.title}>

        
        Logo</h1>
      <div className={styles.subtitledescription}>
        <p>
          A small project where i designed a logo for the first letter in my
          name, “F”, and animated 3 iterations in Adobe After Effects.
        </p>
      </div>

      <div style={{ padding: "1rem" ,scrollMargin:'50px'}} id="logo"> </div>

      <div className={styles.linkContainerAnimationsVideo}>
      <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex">

<DimTooltip>
          <button
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            onClick={handleToggleClick}
          >
            {isDim ? (
              <LuLightbulb style={{ fontSize: "1.5rem" }} />
            ) : (
              <LuLightbulbOff style={{ fontSize: "1.5rem" }} />
            )}
          </button>
          </DimTooltip>

          <CenterTooltip>
          <Link
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            href="#logo"
            rel="noopener noreferrer"
            onClick={handleScroll}
          >
            {" "}
            <MdFilterCenterFocus style={{ fontSize: "1.5rem" }} />
          </Link>
          </CenterTooltip>
        </div>
        <div style={{ padding: "0.125rem" }}> </div> 
        <div className="flex align-center">
          <iframe
            className={styles.iframevideo}
            style={{ zIndex: 48, position: "relative" }}
            src="https://www.youtube.com/embed/kYIbEc0wmu4?si=is1tQgTleDbIWayt&rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{padding:"0.8rem"}} />
      </div>
      <div className={styles.subtitledescription}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <a
            href="https://drive.google.com/file/d/1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F/view?usp=sharing"
            target="_blank"
          >
            <DiGoogleDrive /> Video on Google Drive
          </a>
        </div>
      </div>

      </div>

      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
