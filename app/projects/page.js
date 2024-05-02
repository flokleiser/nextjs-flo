'use client'
import styles from 'app/page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useEffect } from 'react';


export default function projects() {

    useEffect(() => {
        document.title = "Projects";
      }, []);
    
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
            Projects
            </h1>

        <div className={styles.grid}>

        <Link
            className={styles.card}
            href = '/projects/sketches'
            style={{ 
                    backgroundImage: 'url("/images/cards/sketch1.webp")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            <p>Sketchbook</p>
            </Link> 
            
            <Link
            href = '/projects/creative-coding'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/creativecodingwhite3.webp")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            <p>Generative Art, p5js</p>
            </Link>

            <Link
           href='/projects/skylands'
           className={styles.card}
           style={{ backgroundImage: 'url("/images/cards/skylandslogo5 transparentwide.webp")',
                backgroundSize: '102%',
                backgroundPosition: 'center',
          }}
                rel="noopener noreferrer"
            >
            <h2> 
                Skylands
            </h2>
            <p>VR Game, Unity</p>
            </Link>

            <Link
                className={styles.card}
                rel="noopener noreferrer"
                href = '/projects/cad'
                style={{ backgroundImage: 'url("/images/cards/cadwhite.webp")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
            >
            <h2>
                CAD
            </h2>
            <p>Modeling, OnShape</p>
            </Link>

            <Link
            href = '/projects/springFlowers'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/flowercardWhite.webp")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Spring Flowers
            </h2>
            <p>Illustrator, 3D-Printed</p>
            </Link>

            <Link
            href = '/projects/momentfulness'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/momentfulness card test 4.webp")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
           <h2>
               Momentfulness 
            </h2>
            <p>JavaScript/HTML-canvas</p>
            </Link>



     

            <Link
            href = '/projects/animations'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/animlogo transparent5.webp")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            <p>Adobe After Effects</p>
            </Link>

            <Link
            href = '/projects/illustrator'
            className={styles.card}
            rel="noopener noreferrer"
            // style={{ backgroundImage: 'url("/images/cards/illustrator2.webp")',
            style={{ backgroundImage: 'url("/images/cards/illustratorcard.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Illustrator
            </h2>
            <p>Designs & Artworks </p>
            </Link>

            <Link
            href = '/projects/voxel'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/voxelwhite5.webp")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Voxel Art
            </h2>
            <p>MagicaVoxel</p>
            </Link>

         

            <Link
            href = '/projects/crafts'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/craft card 4.webp")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Arts & Crafts
            </h2>
            <p>Handcrafted Stuff</p>
            </Link>


            
          
      </div>

            <div style={{ padding: '1rem' }}> </div>
    </main>
    )
}