import styles from 'app/page.module.css'
import Image from 'next/image'
import React from 'react';

export const metadata = {
    title: 'Sketches',
    description: '-',
  }

export default function sketches() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
             Sketches 
            </h1>

            <div className={styles.subtitledescription}>
            <a>
            A collection of sketches, designs and artworks ranging from 2018 
            to 2023.   
             </a>
            </div>


       <div classname={styles.grid}>

        <Image src="/images/sketches/sketch test scan website2.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website3.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website4.png"  width={400} height={400} /> 
       <Image src="/images/sketches/sketch test scan website5.png"  width={400} height={400} /> 
       </div>
        </main>
    )
}