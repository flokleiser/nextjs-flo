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
       <Image src="/images/sketch test scan website.png"  width={500} height={500} /> 
       <Image src="/images/sketch test scan website3.png"  width={500} height={500} /> 
       <Image src="/images/sketch test scan website2.png"  width={500} height={500} /> 
        </main>
    )
}