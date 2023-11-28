import React from 'react';
import ExpandableButton from 'app/components/ExpandableButton.js';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';


export const metadata = {
    title: 'Testing',
    description: '-',
  }

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",  
    width: 320,
    height: 174,
  },
{
    src: "public/images/crafts/crafts 2.png",  
    width: 320,
    height: 174,
  }
]

export default function testing() {
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
            Testing 
            </h1>

            <div className = {styles.subtitle}>
              <h1>
               <span>subtitle 
                <ExpandableButton />    
                </span>
              </h1> 
            </div> 

            <div className={styles.subtitledescription}>
            <p>
              placeholder
             </p>

            </div>

        </main>
    )
}