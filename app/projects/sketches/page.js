import styles from 'app/page.module.css'
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Sketches',
    description: '-',
  }

export default function sketches() {
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
             Sketches
            </h1>

            <div className={styles.subtitledescription}>
            <p>
            A collection of sketches, designs and artworks ranging from 2018 
            to 2023.   
             </p>
            </div>

            <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back </Link> </h1>
            </div>


       <div styles={'image-container'}>

        <Image src="/images/sketches/sketch test scan website2.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website3.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website4.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website5.png"  width={400} height={400} /> 
       </div>
        </main>
    )
}