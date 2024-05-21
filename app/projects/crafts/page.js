'use client'
import React, {useState, useEffect} from 'react';
import styles from '@/app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import crafts1 from '/public/images/crafts/crafts 1.webp';
import crafts2 from '/public/images/crafts/crafts 2.webp';
import crafts3 from '/public/images/crafts/crafts 3.webp';
import crafts4 from '/public/images/crafts/crafts 4.webp';
import crafts5 from '/public/images/crafts/crafts 5.webp';
import crafts6 from '/public/images/crafts/crafts 6.webp';

import dynamic from 'next/dynamic'


const ImageGallery = dynamic(() => 
  import( "@/app/components/ImageGallery")
)

const blurData = "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAgDBgf/xAAkEAACAgEEAQQDAAAAAAAAAAABAgMEEQAFBiESEyIxgUFRcf/EABUBAQEAAAAAAAAAAAAAAAAAAAAC/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERIRL/2gAMAwEAAhEDEQA/ALTsfEeQJx/d1v2Tbvt0iSTl4vId+39A9d/0aLfA91rbY8MFiKSWzIIfOLziaMM2fLOSeuvjWyU0Qw5KLkk561I0SMQCoxj41SzA43YKbY4jzOxIX2lblisC0fqNY7LoxRvrKn60aaFaVapmOrAkEZJcrGPEZJyTgfknRpC+2f/Z"

const data = [
// { image : '/images/crafts/crafts 1.webp', id: 0,blurData: blurData},
// { image : '/images/crafts/crafts 2.webp', id: 1,blurData: blurData},
// { image : '/images/crafts/crafts 3.webp', id: 2,blurData: blurData},
{ image : crafts1, imageBig:'/images/crafts/crafts 1.webp', id: 0},
{ image : crafts2, imageBig:'/images/crafts/crafts 2.webp', id: 1},
{ image : crafts3, imageBig:'/images/crafts/crafts 3.webp', id: 2},
]

const data2 = [
// { image : '/images/crafts/crafts 5.webp', id: 3,blurData: blurData},
// { image : '/images/crafts/crafts 6.webp', id: 4,blurData: blurData},
// { image : '/images/crafts/crafts 4.webp', id: 5,blurData: blurData},
{ image : crafts4, imageBig:'/images/crafts/crafts 4.webp', id: 0,},
{ image : crafts5, imageBig:'/images/crafts/crafts 5.webp', id: 1,},
{ image : crafts6, imageBig:'/images/crafts/crafts 6.webp', id: 2,},
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