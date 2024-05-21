'use client'
import React, {useState, useEffect, Suspense} from 'react';
import styles from '@/app/page.module.css'
import dynamic from 'next/dynamic';
import { Image } from 'next/image';

import sketch1 from '/public/images/sketches/sketch test scan website2.webp'
import sketch2 from'/public/images/sketches/sketch test website.webp' 
import sketch3 from'/public/images/sketches/sketch test scan website3.webp'
import sketch4 from'/public/images/sketches/sketch test scan website4.webp'
import sketch5 from'/public/images/sketches/sketch test scan website6.webp'


const ImageGallery = dynamic(() => 
  import( "@/app/components/ImageGallery")
)


const data = [
  // {image: '/images/sketches/sketch test scan website2.webp', id: 0,},
  // {image: '/images/sketches/sketch test website.webp', id: 1},
  // {image: '/images/sketches/sketch test scan website3.webp', id: 2},
  // {image: '/images/sketches/sketch test scan website4.webp', id: 3},
  // {image: '/images/sketches/sketch test scan website6.webp', id: 4},

  {image: sketch1, imageBig: '/images/sketches/sketch test scan website2.webp', id: 0,},
  {image: sketch2,imageBig: '/images/sketches/sketch test website.webp', id: 1},
  {image: sketch3,imageBig: '/images/sketches/sketch test scan website3.webp', id: 2},
  {image: sketch4,imageBig: '/images/sketches/sketch test scan website4.webp', id: 3},
  {image: sketch5,imageBig: '/images/sketches/sketch test scan website6.webp', id: 4},

];

const data2 = [
  {image: '/images/sketches/metal.webp', id: 5},
  {image: '/images/sketches/cat3.webp', id: 6},
  {image: '/images/sketches/dragon2.webp', id: 7},
  {image: '/images/sketches/illusions.webp', id: 8},
];

const data3 = [
  { image: '/images/sketches/corona memory3.webp', id: 10 },
  { image: '/images/sketches/cartoon new.webp', id: 9 },
  { image: '/images/sketches/spaceship sketch2.webp', id: 11 },
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

      <ImageGallery data={data}w={400}h={400}datas={[...data,...data2,...data3]}desc={false} /> 
      <ImageGallery data={data2}w={400}h={400}datas={[...data,...data2,...data3]}desc={false} />
      <ImageGallery data={data3}w={500}h={500}datas={[...data,...data2,...data3]}desc={false} />
         
            
            </div>
            
            <div style={{ padding: "0.5rem" }}> </div>
        
   
                     
        </main>

    )
}
