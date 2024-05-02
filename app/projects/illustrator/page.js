'use client'
import React, {useState, useEffect} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import dynamic from 'next/dynamic'

const ImageGallery = dynamic(() => import('@/app/components/ImageGallery'))

const data2 = [
  { image: '/images/illustrator/howtont/howtont2.png', id: 6},
  { image: '/images/illustrator/howtont/howtont3.png', id: 7},
  { image: '/images/illustrator/howtont/howtont4.png', id: 8},
  { image: '/images/illustrator/howtont/howtont5.png', id: 9},
  { image: '/images/illustrator/howtont/howtont6.png', id: 10},
];

const data3 = [
  { image: '/images/illustrator/reduce to the max/reduce5.png', id: 11},
  { image: '/images/illustrator/reduce to the max/reduce4.png', id: 12},
  { image: '/images/illustrator/reduce to the max/reduce3.png', id: 13},
  { image: '/images/illustrator/reduce to the max/reduce2.png', id: 14},
  { image: '/images/illustrator/reduce to the max/reduce1.png', id: 15},
];

export default function illustrator() {



  useEffect(() => {
    document.title = 'Projects - Illustrator';
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
      <div className={styles.linkContainerIllustrator} >

      {/* <h1 className={styles.titleWithoutPaddingDark} > */}
      <h1 className={styles.title} style={{color:'rgba(50,50,50,1)', textDecoration:'underline 5px rgba(var(--background-start-rgb), 0.5)' }} >

             Illustrator Artworks
            </h1>

            <div className={styles.subtitledescription} 
            style={{color:'rgb(55,55,55)'}}
            >
              
        <p>
          Artworks created with Adobe Illustrator
        </p>
      </div>

      <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDividerDark} />
      <div style={{ padding: "0.5rem" }} />
            

            <div className={styles.subtitle} 
            style={{color:'rgb(55,55,55)'}}
            >
            <p>
            How To'nt    
            </p>
            </div>

            <div className={styles.subtitledescription} 
            style={{color:'rgb(55,55,55)'}}
            >
            <p>
            A series of "Ikea"-like instruction manuals, with a twist.
            </p>
            </div>
           
            <ImageGallery data={data2}w={400}h={400}datas={[...data2,...data3]} />
           
          


            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDividerDark} />
      <div style={{ padding: "0.5rem" }} />
              

            <div className={styles.subtitle} 
            style={{color:'rgb(55,55,55)'}}
            >
            <p>
            Reduce To The Max 
            </p>
            </div>

            <div className={styles.subtitledescription} 
            style={{color:'rgb(55,55,55)'}}
            >
            <p>
             Depictions of 5 sports, reduced to their most basic shapes.
            </p>
            </div>

            <ImageGallery data={data3}w={400}h={400}datas={[...data2,...data3]} />

           
           </div>
           {/* <div style={{padding:'2rem'}}/> */}
           <div style={{ padding: "0.5rem" }}> </div>

        </main>
    )
}