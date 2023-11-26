'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import styles from 'app/page.module.css'
import { DiGithubBadge } from "react-icons/di";


export default function creativeCoding() {
  const [iframeHeight, setIframeHeight] = useState(0);
  const [iframeWidth, setIframeWidth] = useState(0);
 

  useEffect(() => {
    function handleResize() {
      const aspectRatio = 16 / 9; // replace with your desired aspect ratio
      const maxWidth = window.innerWidth -100; // replace with your desired maximum width
      const maxHeight = window.innerHeight - 100; // replace with your desired maximum height

      const maxWidthByHeight = maxHeight * aspectRatio;
      const maxHeightByWidth = maxWidth / aspectRatio;

      const width = Math.min(maxWidth, maxWidthByHeight);
      const height = Math.min(maxHeight, maxHeightByWidth);

      setIframeWidth(width);
      setIframeHeight(height);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    document.title = 'Creative Coding';
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
            <h1 className={styles.title}>
              Creative Coding 
            </h1>
      
            <div className={styles.subtitledescription}>
            <a>
              An online tool for creating generative art using lines, rotations, movement and colors. 
              Made using P5JS, the JavaScript version of the "Processing" library.
            </a>
            </div>
            
            <div style={{ padding: '2rem' }}>
            <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                width={iframeWidth}
                height={iframeHeight}
                allowFullScreen
                style={{ border: '1px solid white'}}
            />
            </div>

            <div className={styles.subtitledescription}>
            <a style={{paddingBottom: '2rem'}}
                      href="https://github.com/flokleiser/Rotations-P5JS" target="_blank">
                    <DiGithubBadge />Source code on Github
                    </a>
            </div>
            
            <div style={{ padding: '2rem' }}> </div>
            {/* <code>
              test.js
            </code> */}
        </main>
    )
}
