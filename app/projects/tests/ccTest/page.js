"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "app/page.module.css";
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import Image from "next/image";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import TipsButton from "@/app/components/TipsButton";
// import ImageGallery from "@/app/components/ImageGallery";

const data = [
  { image: "/images/creative-coding/creativecoding white.png", id: 0 },
  { image: "/images/creative-coding/creativecoding twocolor.png", id: 1 },
  { image: "/images/creative-coding/creativecoding green.png", id: 2 },
];

const data2 = [
  { image: "/images/creative-coding/creativecoding2.png", id: 3 },
  { image: "/images/creative-coding/creativecoding3.png", id: 4 },
  { image: "/images/creative-coding/creativecoding4.png", id: 5 },
  { image: "/images/creative-coding/creativecoding6.png", id: 6 },
];

const data3 = [
  { image: "/images/creative-coding/creativecoding5.png", id: 7 },
  { image: "/images/creative-coding/creativecoding9.png", id: 8 },
];

export default function creativeCoding() {
 

  useEffect(() => {
    document.title = "Creative Coding";
  }, []);

  return (
    <main className={styles.main}>
      <div
        className="relative 
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
   z-[-1]"
      ></div>

      <div className={styles.backbutton}
       style={{position:'fixed', zIndex:9999}}
       >
        <h1>
          {" "}
          <Link href="/projects">All Projects </Link>{" "}
        </h1>
      </div>

      <div style={{paddingTop:'1rem'}} />
      <div className={styles.linkContainerCC} >

      <h1 className={styles.titleWithoutPadding}>Creative Coding</h1>

      {/* <h1 className={styles.title}>Creative Coding</h1> */}

      {/* <div className={styles.subtitle}>
             <h1> Rotations </h1>
            </div> */}

      <div className={styles.subtitledescription}>
        <p>
        A creative tool for interactively creating visual artworks by
manipulating lines, rotations and movement using mathematical
functions or directly with the mouse movement. Made using p5js, the JavaScript version of the
          "Processing" library.
        </p>
      </div>

      <div style={{ padding: "1rem" }}></div>

      {/* <div className={styles.linkContainer}  */}
      <div className={styles.linkContainerCCSandbox}
        style={{
          // paddingLeft:"2rem", paddingRight:"2rem"  
          width:"90vw",
          zIndex:1
          }}
          >

      <div style={{ padding: "0.25rem" }}></div>

      {/* <div className={styles.subtitledescription}>
        <p>
          Try it out:
        </p>
      </div> */}
      <TipsButton />

      <div 
      style={{ padding: "0.5rem" }}
      >
        <div>
          <iframe
            src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
            // width="100vw"
            allowFullScreen
            style={{
              border: "2px solid white",
              width: "85vw",
              maxWidth: '1350px',
              aspectRatio: "16/9"
            }}
          />
        </div>
      </div>

      {/* <TipsButton /> */}

       {/* <div style={{ padding: "0.5rem" }}> </div> */}
              <div style={{ padding: "1rem" }}> </div>
</div>
<div style={{ padding: "1rem" }}> </div>

      <div className={styles.subtitledescription}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <a
            style={{ paddingBottom: "2rem" }}
            href="https://github.com/flokleiser/Rotations-P5JS"
            target="_blank"
          >
            <DiGithubBadge />
            Source code on Github
          </a>
        </div>
      </div>

            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />
{/* 
    <ImageGallery data={data} /> 

    <ImageGallery data={data2} />  

    <ImageGallery data={data3} />  */}

      </div>

      <div style={{ padding: "2rem" }}> </div>
      {/* <code>
              test.js
            </code> */}
    </main>
  );
}