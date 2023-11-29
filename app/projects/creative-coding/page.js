'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import styles from 'app/page.module.css'
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from 'next/link';
import Image from 'next/image'


const data = [
  { image : '/images/creative-coding/creativecoding white.png'},
  { image : '/images/creative-coding/creativecoding twocolor.png'},
  { image : '/images/creative-coding/creativecoding green.png'},
];

const data2 = [
  { image : '/images/creative-coding/creativecoding2.png'},
  { image : '/images/creative-coding/creativecoding3.png'},
  { image : '/images/creative-coding/creativecoding4.png'},
  { image : '/images/creative-coding/creativecoding6.png'},
];


const data3 = [
  { image : '/images/creative-coding/creativecoding5.png'},
  { image : '/images/creative-coding/creativecoding9.png'},
];

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
  }, 
  
  []);
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

           
          {/* <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back to Projects </Link> </h1>
            </div> */}

            <h1 className={styles.title}>
              Creative Coding
            </h1>

            <div className={styles.subtitle}>
             {/* <a href="https://github.com/flokleiser/Rotations-P5JS" target="_blank">Rotations<DiGithubBadge /></a> */}
             <h1> Rotations </h1>
            </div>
      
            <div className={styles.subtitledescription}>
            <p>
              An online tool for creating generative art using lines, rotations, movement and colors. 
              Made using P5JS, the JavaScript version of the "Processing" library.
            </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
            <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                width={iframeWidth}
                height={iframeHeight}
                allowFullScreen
                style={{ border: '2px solid white'}}
            />
            </div>

            <div className={styles.subtitledescription}>
            <a style={{paddingBottom: '2rem'}}
                      href="https://github.com/flokleiser/Rotations-P5JS" target="_blank">
                    <DiGithubBadge />Source code on Github
                    </a>
            </div>
            <div className={styles.subtitledescription}>
            <p> Examples: </p>
            </div>
            
            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>
            
            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data2.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data3.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>
            {/* <code>
              test.js
            </code> */}
        </main>
    )
}
