'use client'
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import dynamic from 'next/dynamic'


const ImageGallery = dynamic(() => 
  import( "@/app/components/ImageGallery")
)

  const data = [ 
    { image : '/images/voxel/voxel room transparent.png', id: 0},
    { image : '/images/voxel/voxel space transparent.png', id: 1},
  ];

  const data2 = [
    { image : '/images/voxel/voxel space transparent.png', id: 1},
  ];

export default function voxel() {
  
  useEffect(() => {
    document.title = 'Projects - Voxel';
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
      <div className={styles.linkContainerVoxel} >

      <h1 className={styles.title}>

             Voxel Art 
            </h1>

            <div className={styles.subtitledescription}>
            <p>
            3D Voxel art, made using MagicaVoxel.
             </p>
            </div>

            <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />


      <ImageGallery data={data} w={1000} h={1000} /> 
       </div>

       <div style={{ padding: "0.3rem" }} />

        </main>
    )
}