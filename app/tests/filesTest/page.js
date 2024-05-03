"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  useAnimation,
  motion,
  useAnimate,
  delay,
  easeIn,
} from "framer-motion";
import { DiGoogleDrive } from "react-icons/di";

export default function filesTest() {

  useEffect(() => {
    document.title = "testing";
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
 
      <h1 className={styles.title}>Testing</h1>

      <div className={styles.subtitledescription}>
        <p>
         testing some files 
        </p>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
      <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="https://drive.google.com/drive/folders/1GmyeRz-utv5k1CX-CwbitDriEwuDIp37?usp=sharing"
                target="_blank"
              >
                <DiGoogleDrive />
                Google Drive
              </a>
            </p>
          </div>
        </div>
        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
            all files
       </p>
      </div>
      </div>

      <motion.div whileInView={{translateX:0, filter:'blur(0px)'}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            filter:'blur(20px)',
            translateX:100,
            backgroundImage: "url(/images/links/googledrive2.png)", 
            opacity: 0.5}}
      />
      </motion.div>
      <div style={{ padding: "2rem" }} />
    </main>
  );
}
