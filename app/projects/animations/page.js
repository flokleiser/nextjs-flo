import React from 'react';
import styles from 'app/page.module.css'
import { DiGoogleDrive } from "react-icons/di";


export const metadata = {
    title: 'Animations',
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

            <h1 className={styles.title}>
              Animations
            </h1>
            
            <div className={styles.subtitledescription}>
            <a>
            A collection of various projects ranging from 2019 to 2023. Experiments with VFX, stop motion, 
            sound design, different art styles and simulated physics. Made mostly in Adobe After Effects.
             </a>
            </div>

            <div style={{ padding: '2rem' }}>
            <div className={styles.gridanimation}>
                <a
                href='/projects/animations/plasticine'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/animations/cards/plasticine card4.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Plasticine (A)life
                </h2>
                <p>Stop Motion</p>
                </a>

                <a
                href='/projects/animations/skate'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/animations/cards/skate transparent2.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Skate
                </h2>
                <p>Rotoscoping, Drawing</p>
                </a>

                <a
                href='/projects/animations/escape'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/animations/cards/escape transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                   Escape 
                </h2>
                <p>Animating an image</p>
                </a>

                <a
                href='/projects/animations/kontakt'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/animations/cards/kontakt transparent.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Kontakt
                </h2>
                <p>Animating physics</p>
                </a>

                <a
                href='/projects/animations/logo'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/cards/animlogo transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Logo 
                </h2>
                <p>Variations of a Logo</p>
                </a>

                <a
                href='/projects/animations/music'
                className={styles.cardanimation}
                style={{ backgroundImage: 'url("/images/animations/cards/music transparent3.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Music
                </h2>
                <p>Music Visualizers</p>
                </a>
            </div>
            </div>

            <div className={styles.subtitle}>
                <a href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> All videos
                    </a>
                </div>

                <div style={{ padding: '2rem' }}> </div>
    

        </main>
    )
}