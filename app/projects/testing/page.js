"use client";
import styles from "app/page.module.css";
import { CiStickyNote, CiViewTimeline, CiImageOn } from "react-icons/ci";
import { React, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function testing() {
  useEffect(() => {
    document.title = "Testing";
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

      <h1 className={styles.title}>Links/Info</h1>

      {/* <p className={styles.subtitledescription}>
        Hi, im Florian Kleiser, I am 24 years old and I come from Zürich,
        Switzerland. <br></br>
        My passions include drawing, editing, programming, gaming, skating and
        music. <br></br>I am currently applying to study Interaction Design /
        Digital Ideation.
      </p> */}

      <p className={styles.subtitledescription}>
        Links to my Portfolio, Curriculum Vitae, Google Drive, GitHub, and info about me 
      </p>

      <div style={{ padding: "1rem" }} />

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "2rem" }} />


      <div className={styles.linkContainerLinks}  
      >
        <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage} 
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="/"
                // target="_blank"
              >
                <CiImageOn />
                Portfolio (.pdf)
              </a>
            </p>
          </div>
        </div>

        <div style={{padding:'0.5rem'}}/>

        <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        My portfolio for <br/> Interaction Design / <br/> Digital Ideation, <br/> made in 2023 <br/>
        </p>
        </div>

        </div>
        
        <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/portfolio3.png)", 
            opacity: 0.5}}
            />

      </div>
      
     
      <div style={{ padding: "1rem" }}> </div>
    </main>
  );
}
