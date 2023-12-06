import React from 'react';
import styles from 'app/page.module.css'
import { DiGoogleDrive } from "react-icons/di";
import Link from 'next/link';


export const metadata = {
    title: 'Projects - Animations',
    description: '-',
  }

export default function animations() {
    return (
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

        <div className={styles.backbutton}>
            <h1> <Link href="/projects">All Projects </Link> </h1>
            </div> 


            <h1 className={styles.title}>
              Animations
            </h1>
            
            <div className={styles.linkContainerRest}>
            <div style={{ padding: '1rem' }}> </div>
            <div className={styles.subtitledescription}>
            <p>
            A collection of various projects ranging from 2019 to 2023. Experiments with VFX, stop motion, 
            sound design, different art styles and simulated physics. Made mostly in Adobe After Effects.
             </p>
            </div>
      
            </div>

            <div style={{ padding: '2rem' }}>
            <div className={styles.gridanimation}>
                <a
                href='/projects/animations/plasticine'
                className={styles.cardanimation}
                style={{ 
                    // backgroundImage: 'url("/images/animations/cards/plasticine card4.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
                    
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                    Plasticine (A)life
                </h2>
                <p>Stop Motion</p>
                </a>

                <a
                href='/projects/animations/skate'
                className={styles.cardanimationSkate}
               
                style={{ 
                    // backgroundImage: 'url("/images/animations/cards/skate transparent2.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                    Skate
                </h2>
                <p>Rotoscoping, Drawing</p>
                </a>

                <a
                href='/projects/animations/escape'
                className={styles.cardanimationEscape}
                style={{ 
                    // backgroundImage: 'url("/images/animations/cards/escape transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                   Escape 
                </h2>
                <p>Image animation</p>
                </a>

                <a
                href='/projects/animations/kontakt'
                className={styles.cardanimationKontakt}
                style={{ 
                    // backgroundImage: 'url("/images/animations/cards/kontakt transparent.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                    Kontakt
                </h2>
                <p>Animating physics</p>
                </a>

                <a
                href='/projects/animations/logo'
                className={styles.cardanimationLogo}
                style={{ 
                    // backgroundImage: 'url("/images/cards/animlogo transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                    Logo 
                </h2>
                <p>Variations of a Logo</p>
                </a>

                <a
                href='/projects/animations/music'
                className={styles.cardanimationMusic}
                style={{ 
                    // backgroundImage: 'url("/images/animations/cards/music transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                priority = {true}
                >
                <h2>
                    Music
                </h2>
                <p>Music Visualizers</p>
                </a>
            </div>
            </div>

            <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/drive/folders/1tV3FvfgCulwlXBDga_Jf9pJH1nuoTqvK?usp=drive_link" target="_blank"> 
                    <DiGoogleDrive /> All videos
                </a>
                </div>
            </div>

                <div style={{ padding: '2rem' }}> </div>
    

        </main>
    )
}