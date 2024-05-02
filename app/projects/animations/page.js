'use client'
import React, { useEffect, useState } from "react";
import styles from "app/page.module.css";
import { DiGoogleDrive } from "react-icons/di";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";


export default function animations() {
  
  useEffect(() => {
    document.title = "Projects - Animations";
  }, []);

  const [isHovering, setHovering] = useState(false)
  const handleHover= () => {
    setHovering(!isHovering);
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

      <AnimatePresence>
      {isHovering&& (
        <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25}}
        
        style={{
          backdropFilter: `blur(6px)`,
          pointerEvents: 'none'
        }}>
        </motion.div>
      )}
      </AnimatePresence>

      <div style={{paddingTop:'1rem'}} />

      <div className={styles.linkContainerAnimationsBackground} style={{minHeight:'93vh'}}>
      <h1 className={styles.titleWithoutPadding} style={{zIndex:'100'}}>Animations</h1>

      <div className={styles.subtitledescription} style={{zIndex:'100'}}>
        <p>
          A collection of various animations, 
          including experiments with VFX, stop motion, sound design, different
          art styles and simulated physics. Made in Adobe After Effects and
          Premiere Pro.
        </p>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} style={{zIndex:'100', 
      }}/>
      <div style={{ padding: "1rem" }} />

      <div style={{ padding: "1rem" }}>
        <div className={styles.gridanimation}>
            <Link
            href="/projects/animations/plasticine"
            className={styles.cardanimationplasticine}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Plasticine (A)life</h2>
            <p>Stop Motion</p>
            </Link>
            
          <Link
            href="/projects/animations/skate"
            className={styles.cardanimationSkate}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Skate</h2>
            <p>Rotoscoping, Drawing</p>
          </Link>

          <Link
            href="/projects/animations/escape"
            className={styles.cardanimationEscape}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Escape</h2>
            <p>Image animation</p>
          </Link>

          <Link
            href="/projects/animations/kontakt"
            className={styles.cardanimationKontakt}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Kontakt</h2>
            <p>Animating physics</p>
          </Link>

          <Link
            href="/projects/animations/logo"
            className={styles.cardanimationLogo}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Logo</h2>
            <p>Variations of a Logo</p>
          </Link>

          <Link
            href="/projects/animations/music"
            className={styles.cardanimationMusic}
            style={{
              backgroundSize: "102%",
              backgroundPosition: "center",
            }}
            rel="noopener noreferrer"
            onMouseOver={() => {handleHover()}}
            onMouseMove={() => {setHovering(true)}}
            onMouseLeave={() => {setHovering(false)}}
            // priority={true}
            priority="true"
          >
            <h2>Music</h2>
            <p>Music Visualizers</p>
          </Link>
        </div>
      </div>

      <div className={styles.subtitledescription} style={{ margin: "-1rem", zIndex:'100'}}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <a
            href="https://drive.google.com/drive/folders/1tV3FvfgCulwlXBDga_Jf9pJH1nuoTqvK?usp=drive_link"
            target="_blank"
          >
            <DiGoogleDrive /> All videos
          </a>
        </div>
      </div>

      <div style={{ padding: "0.375rem" }}> </div>

      </div>

      <div style={{ padding: "0.3rem" }}> </div>
    </main>
  );
}
