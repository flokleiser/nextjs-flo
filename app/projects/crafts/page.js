'use client'
import React, {useState, useEffect} from 'react';
import styles from '@/app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
// import ImageGallery from '@/app/components/ImageGallery';

import dynamic from 'next/dynamic'


const ImageGallery = dynamic(() => 
  import( "@/app/components/ImageGallery")
)



const data = [
{ image : '/images/crafts/crafts 1.webp', id: 0},
{ image : '/images/crafts/crafts 2.webp', id: 1},
{ image : '/images/crafts/crafts 3.webp', id: 2},
]
const data2 = [
{ image : '/images/crafts/crafts 5.webp', id: 3},
{ image : '/images/crafts/crafts 6.webp', id: 4},
{ image : '/images/crafts/crafts 4.webp', id: 5},
]

export default function crafts() {

  useEffect(() => {
    document.title = 'Projects - Arts & Crafts';
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
      <div className={styles.linkContainerCrafts} 
      // style={{minHeight:'93vh'}} 
      >

      {/* <h1 className={styles.titleWithoutPadding}> */}
      <h1 className={styles.title}>
           
            Crafts
            </h1>
            <div className={styles.subtitledescription}>
            <p>
             A collection of little handcrafted spacecrafts. 
            </p>
            </div>

            <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />
           
      <ImageGallery data={data} w={400} h={400}datas={[...data,...data2]}desc={false} /> 

              

      <ImageGallery data={data2} w={400} h={400}datas={[...data,...data2]}desc={false} /> 

              </div>
              {/* <div style={{ padding: "0.4rem" }}> </div> */}
              <div style={{ padding: "0.5rem" }}> </div>

        </main>
    )
}