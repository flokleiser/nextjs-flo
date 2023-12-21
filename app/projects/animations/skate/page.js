'use client'
import styles from 'app/page.module.css'
import Link from 'next/link';
import LightButton from 'app/components/LightButton.js';
import { DiGoogleDrive } from "react-icons/di";
import { AnimatePresence, motion } from "framer-motion";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";
import React, { useState, useEffect } from "react";

// export const metadata = {
//     title: 'Animations - Skate',
//     description: '-',
//   }

export default function skate() {

  const [isDim, setDim] = useState(false);
  const handleToggleClick = () => {
    setDim(!isDim);
    };

  useEffect(() => {
    document.title = "Animations - Skate";
  }, []);

    return(
        <main className={styles.main}>
            <div className="relative 
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
   z-[-1]">
          </div> 

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

          <div className={styles.backbutton}>
            <h1> <Link href="/projects/animations">All Animations </Link> </h1>
            </div>

            <h1 className={styles.title}>
              Skate Animations
            </h1>

          {/* <div className={styles.subtitledescription}>
            <p>
              placeholder
            </p>
          </div> */}


          {/* <video
            src="https://drive.google.com/uc?id=10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E" controls height={10}>
            </video>

            <video
            src="https://drive.google.com/uc?id=1Qc3XrH6i341jI5vEosjXbxfbixdFFfD0" controls>
            </video> */}
        <div className = {styles.subtitle}>
              <p>
                Skate Loop
              </p>
        </div>

        <div className={styles.subtitledescription}>
            <p>
            A short sequence of myself, edited and rotoscoped in Adobe After Effects.
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 

            <div className={styles.linkContainer}>
            <div style={{ padding: "1.25rem" }}> </div>
            <div className='flex align-center'>
            <button className="absolute mt-3 ml-3 align-right bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
      style={{ zIndex: 53}}
      
      onClick={handleToggleClick}>
        {isDim? <LuLightbulb style={{ fontSize: '2rem' }}/> : <LuLightbulbOff style={{ fontSize: '2rem' }} />}
      </button>
            <iframe className={styles.iframevideo} style={{ zIndex: 48, position:'relative'}}  src="https://www.youtube.com/embed/e0uNApQ7UCU?si=eEiQ0psd4jvcLBxI&rel=0"> 
            </iframe>
            </div>
            <div style={{ padding: "1.25rem" }}> </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        <div className = {styles.subtitle}>
              <p>
             Skate Doodles 
              </p>
            </div>

              <div className={styles.subtitledescription}>
            <p>
            4 stop-motion sequences, sketched  on semi transparent paper and edited in Premiere Pro.            
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 
      
            <div className={styles.linkContainer}>
            <div style={{ padding: "1.25rem" }}> </div>
            <div className='flex align-center'>
            <button className="absolute mt-3 ml-3 align-right bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
      style={{ zIndex: 53}}
      
      onClick={handleToggleClick}>
        {isDim? <LuLightbulb style={{ fontSize: '2rem' }}/> : <LuLightbulbOff style={{ fontSize: '2rem' }} />}
      </button>
            <iframe className={styles.iframevideo} style={{ zIndex: 48, position:'relative'}}  src="https://www.youtube.com/embed/umJCwoddDB0?si=9Z5XUmaWOWmykIHc&rel=0">
            </iframe>
            </div>
            <div style={{ padding: "1.25rem" }}> </div>
            </div>

            <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/drive/folders/1iLXs6Nq4P4xim8TtD9pt7Rt66jx3em-l?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> Videos on Google Drive
                </a>
                </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>
        </main>
    )
}