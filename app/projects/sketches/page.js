'use client'
import React, {useState, useEffect, Suspense} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import dynamic from 'next/dynamic';


const ImageGallery = dynamic(() => 
  import( "@/app/components/ImageGallery")
)

const data = [
  {image: '/images/sketches/sketch test scan website2.png', id: 0},
  {image: '/images/sketches/sketch test website.png', id: 1},
  {image: '/images/sketches/sketch test scan website3.png', id: 2},
  {image: '/images/sketches/sketch test scan website4.png', id: 3},
  {image: '/images/sketches/sketch test scan website6.png', id: 4},
];

const data2 = [
  {image: '/images/sketches/metal.png', id: 5},
  {image: '/images/sketches/cat3.png', id: 6},
  {image: '/images/sketches/dragon2.png', id: 7},
  {image: '/images/sketches/illusions.png', id: 8},
];

const data3 = [
{ image: '/images/sketches/cartoon2.png', id: 9 },
{ image: '/images/sketches/corona memory3.png', id: 10 },
{ image: '/images/sketches/spaceship sketch2.png', id: 11 },
]

export default function sketches() {


useEffect(() => {
  document.title = 'Projects - Sketches';
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
 

            <div style={{paddingTop:'1rem'}} />
            <div className={styles.linkContainerSketches} >
      
              <h1 className={styles.title}>
             Sketches
            </h1>


            <div className={styles.subtitledescription}
            >
              
            <p>
            A collection of sketches, designs and artworks.
            
             </p>
            </div>

            <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />
      
      <ImageGallery data={data}w={400}h={400} /> 
      <ImageGallery data={data2}w={400}h={400} />
      <ImageGallery data={data3}w={400}h={400} />
         
            
            </div>
            
            <div style={{ padding: '2rem' }}> </div>
        
   
                     
        </main>

    )
}
