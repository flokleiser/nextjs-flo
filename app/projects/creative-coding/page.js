"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "@/app/page.module.css";
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import Image from "next/image";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import TipsButton from "@/app/components/TipsButton";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import dynamic from "next/dynamic";

import cc1 from "/public/images/creative-coding/creativecoding white.webp"
import cc2 from "/public/images/creative-coding/creativecoding twocolor.webp"
import cc3 from "/public/images/creative-coding/creativecoding green.webp" 

import cc4 from "/public/images/creative-coding/creativecoding2.webp"
import cc5 from "/public/images/creative-coding/creativecoding3.webp"
import cc6 from "/public/images/creative-coding/creativecoding6.webp"

import cc7 from "/public/images/creative-coding/cc3.webp"
import cc8 from "/public/images/creative-coding/cc4.webp"
import cc9 from "/public/images/creative-coding/cc1.webp"
import cc10 from "/public/images/creative-coding/cc8.webp"

import cc11 from "/public/images/creative-coding/creativecoding5.webp"
import cc12 from "/public/images/creative-coding/cc6.webp"
import cc13 from "/public/images/creative-coding/cc5.webp"



// const ImageGallery = dynamic(() => import('@/app/components/ImageGallery'))
const ImageGalleryStatic = dynamic(() => import('@/app/components/ImageGalleryStatic'))


const data = [
  {image:cc1, imageBig: "/images/creative-coding/creativecoding white.webp", id: 1, description:'NewCenterPoint2, Example 1'},
  {image:cc2, imageBig: "/images/creative-coding/creativecoding twocolor.webp", id: 2, description:'NewCenterPoint2, Example 2'},
  {image:cc3, imageBig: "/images/creative-coding/creativecoding green.webp", id: 3, description:'NewCenterPoint2, Example 3' },
];

const data2 = [
  {image:cc4, imageBig: "/images/creative-coding/creativecoding2.webp", id: 4, description:'NewCenterPoint1, Example 1' },
  {image:cc5, imageBig: "/images/creative-coding/creativecoding3.webp", id: 5, description:'NewCenterPoint1, Example 2' },
  {image:cc6, imageBig: "/images/creative-coding/creativecoding6.webp", id: 6, description:'NewCenterPoint1, Example 3' },
];


const data3 = [
  {image:cc7, imageBig: "/images/creative-coding/cc3.webp", id: 7, description:'NewCenterPoint3, Example 1' },
  {image:cc8, imageBig: "/images/creative-coding/cc4.webp", id: 8, description:'NewCenterPoint3, Example 2' },
  {image:cc9, imageBig: "/images/creative-coding/cc1.webp", id: 9, description:'NewCenterPoint3, Example 3' },
  {image:cc10, imageBig: "/images/creative-coding/cc8.webp", id: 10, description:'NewCenterPoint3, Example 4' },
];

const data4 = [
  {image:cc11, imageBig: "/images/creative-coding/creativecoding5.webp", id: 11, description:'NewCenterPoint7, Example 1' },
  {image:cc12, imageBig: "/images/creative-coding/cc6.webp", id: 12, description:'NewCenterPoint7, Example 2' },
  {image:cc13, imageBig: "/images/creative-coding/cc5.webp", id: 13, description:'NewCenterPoint7, Example 3' },
];

function codeBlock1() {
  const codeString1 = 
  `if (newCenterPoint1) {
  selectedCenterPoint = 1;
  followMouse = false;

  centerX = width/2 + 300 * cos(angleX * (PI/2*frequency));
  centerY = height/2 + 200 * sin(angleY * (PI*frequency));

  angleX += 0.1;
  angleY += 0.1;
}`;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        aspectRatio:16/9
      }}
      codeTagProps={{
        style: {
          fontSize: "1rem",
          color: "rgb(170,218,250)",
        },
      }}
    >
      {codeString1}
    </SyntaxHighlighter>
  );
}

function codeBlock2() {
  const codeString2 = 
  `if (newCenterPoint2) { 
  selectedCenterPoint = 2;
  followMouse = false;
          
  centerX = width/2 + 200 * sin(angleX);
  centerY = height/2 + 150 * sin(angleY);
  angleX += 0.02;
  angleY += 0.03; 

  if (toggleRotate) {
    if (angleX >= PI*4 && angleY >= PI*6) {
      drawing = !drawing;
      angleX = 0;
      angleY = 0;
    } 
  }
} `
;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        aspectRatio:16/9
      }}
      codeTagProps={{
        style: {
          fontSize:'1rem',
          color: "rgb(170,218,250)",
        },
      }}
    >
      {codeString2}
    </SyntaxHighlighter>
  );
}

function codeBlock3() {
  const codeString2 = 
  `if (newCenterPoint3) {
  selectedCenterPoint = 3;
  followMouse = false;
  amplitude = 150;
  centerX = width/2 + sin(angle) * amplitude;
  centerY = height/2 + cos(angle) * amplitude;
  angle += 0.01* PI;
    
  let numPoints = 12;
  let angleIncrement = TWO_PI / numPoints;
  angle += 0.01 * angleIncrement;
}`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        aspectRatio:16/9
      }}
      codeTagProps={{
        style: {
          fontSize: "1rem",
          color: "rgb(170,218,250)",
        },
      }}
    >
      {codeString2}
    </SyntaxHighlighter>
  );
}

function codeBlock4() {
  const codeString4 = 
  `if (newCenterPoint7) {
  selectedCenterPoint = 7;
  isRotating = !isRotating;

  if (speedX > 0 && speedY > 0) {
    direction = downright;
  } else if (speedX > 0 && speedY < 0) {
    direction = upright;
  } else if (speedX < 0 && speedY > 0) {
    direction = downleft;
  } else if (speedX < 0 && speedY < 0) {
    direction = upleft;
  }
  if (!modifier1 && !modifier3) {
    centerX += speedX;
    centerY += speedY;

    if (!verticalLine) {
      if (!newLine5) {
        if (centerY > height -25|| centerY < 25) {
          speedY *= -1;
        }
        if (centerX > width - 175 || centerX < 175) {
          speedX *= -1;
        }
      }  
      else if (newLine5) {
        if (centerY > height -105|| centerY < 105) {
          speedY *= -1;
        }
        if (centerX > width - 175 || centerX < 175) {
          speedX *= -1;
        }
      }
  }
    
    else if (verticalLine) {
      if (centerY > height -175|| centerY < 175) {
        speedY *= -1;
      }
      if (centerX > width - 25 || centerX < 25) {
        speedX *= -1;
      }
    } 
      
    if (modifier2) {
      if (centerX > 175 && centerX < width - 175 
        && centerY > 175 && centerY < height - 175) {
          randomSwitch();
      }
    }
}`;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      wrapLines={true}
      customStyle={{
        aspectRatio:16/9
      }}
      codeTagProps={{
        style: {
          fontSize: "1rem",
          color: "rgb(170,218,250)",
        },
      }}
    >
      {codeString4}
    </SyntaxHighlighter>
  );
}

export default function creativeCoding() {
  const [selectedImage, setSelectedImage] = useState(null);


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


      <div style={{ paddingTop: "1rem" }} />
      <div className={styles.linkContainerCC}>
        {/* <h1 className={styles.titleWithoutPadding}> Creative Coding </h1> */}
        <h1 className={styles.title}> Creative Coding </h1>

        <div className={styles.subtitledescription}>
          <p>
            A creative tool for interactively creating visual artworks by
            manipulating lines, rotations and movement using mathematical
            functions or directly with the mouse movement. Made using p5js, the
            JavaScript version of the "Processing" library.
          </p>
        </div>

        <div style={{ padding: "1rem" }}></div>


        <div style={{ padding: "1rem" }}></div>

        <div
          className={styles.linkContainerCCSandbox}
          style={{
            width: "90vw",
            zIndex: 1,
          }}

        >
          <div style={{ padding: "0.25rem" }}></div>

          <div 
          style={{ padding: "0.5rem" }}
          >
            <div>
              <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                allowFullScreen
                style={{
                  width: "88vw",
                  maxWidth: "1350px",
                  aspectRatio: "16/9",
                }}
              />
            </div>
          </div>
          <div style={{padding:'0.25rem'}}/>
        </div>
        <div style={{ padding: "1rem" }}> </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
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

        <div style={{ padding: "1rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <div className={styles.subtitle}>
          <p2>Examples</p2>
        </div>


<ImageGalleryStatic data={data}w={400}h={400}desc={true}dColor={'rgb(50,50,50)'}datas={[...data,...data2,...data3,...data4]} />


        <div stlye={{ padding: "0.5rem" }} />

        <div className="flex flex-row">
          <div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", 
          }}
          >
            <div style={{ padding: "0.5rem" }}> </div>
            <div className="flex align-center">
              <div
                className={styles.iframevideoSmall}
                style={{position:'relative'}}
              >                
              {codeBlock1()}
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>
        

          <div style={{ marginLeft: "12.5px", marginRight: "12.5px" }} />

          <div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", 
          }}
          >
            <div style={{ padding: "0.5rem" }}> </div>
            <div className="flex align-center">
              <iframe
                className={styles.iframevideoSmall}
                style={{ zIndex: selectedImage ? 1 : 52, position: "relative",}}
                src="https://www.youtube.com/embed/4KYr9DEqOCw?si=VaHdlBZ3h_c79Fw4&rel=0"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>
        
        </div>

        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <ImageGalleryStatic data={data2}w={400}h={400}desc={true}dColor={'rgb(50,50,50)'}datas={[...data,...data2,...data3,...data4]} />


        <div stlye={{ padding: "0.5rem" }} />

<div className="flex flex-row">
<div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", 
          }}
          >
            <div style={{ padding: "0.5rem" }}> </div>
            <div className="flex align-center">
              <div
                className={styles.iframevideoSmall}
                style={{position:'relative'}}
              >                
              {codeBlock2()}
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>

  <div style={{ marginLeft: "12.5px", marginRight: "12.5px" }} />

  <div
    className={styles.linkContainerCCSandbox}
    style={{ width: "45vw", zIndex: 1, maxWidth: "650px" }}
  >
    <div style={{ padding: "0.5rem" }}> </div>
      <iframe
        className={styles.iframevideoSmall}
        style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
        src="https://www.youtube.com/embed/F0DwWNKuL9I?si=H_yvQk4WO9MaGHcM&rel=0" 
        allowFullScreen
      ></iframe>
    <div style={{ padding: "0.5rem" }} />
  </div>


</div>


        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />


        <ImageGalleryStatic data={data3}w={400}h={400}desc={true}dColor={'rgb(50,50,50)'}datas={[...data,...data2,...data3,...data4]} />


        <div stlye={{ padding: "0.5rem" }} />

<div className="flex flex-row">
<div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", 
          }}
          >
            <div style={{ padding: "0.5rem" }}> </div>
            <div className="flex align-center">
              <div
                className={styles.iframevideoSmall}
                style={{position:'relative'}}
              >                
              {codeBlock3()}
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>

  <div style={{ marginLeft: "12.5px", marginRight: "12.5px" }} />

  <div
    className={styles.linkContainerCCSandbox}
    style={{ width: "45vw", zIndex: 1, maxWidth: "650px" }}
  >
    <div style={{ padding: "0.5rem" }}> </div>
    <div className="flex align-center">
      <iframe
        className={styles.iframevideoSmall}
        style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
        src="https://www.youtube.com/embed/aX9ngBGPKLA?si=edOVv03Gp22W_xQO&rel=0" 
        allowFullScreen
      ></iframe>
    </div>
    <div style={{ padding: "0.5rem" }} />
  </div>

</div>

        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <ImageGalleryStatic data={data4}w={400}h={400}desc={true}dColor={'rgb(50,50,50)'}datas={[...data,...data2,...data3,...data4]} />

 

        <div stlye={{ padding: "0.5rem" }} />



<div className="flex flex-row">
<div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", 
          }}
          >
            <div style={{ padding: "0.5rem" }}> </div>
            <div className="flex align-center">
              <div
                className={styles.iframevideoSmall}
                style={{position:'relative'}}
              >                
              {codeBlock4()}
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>

  <div style={{ marginLeft: "12.5px", marginRight: "12.5px" }} />

  <div
    className={styles.linkContainerCCSandbox}
    style={{ width: "45vw", zIndex: 1, maxWidth: "650px" }}
  >
    <div style={{ padding: "0.5rem" }}> </div>
    <div className="flex align-center">
      <iframe
        className={styles.iframevideoSmall}
        style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
        src="https://www.youtube.com/embed/cQY-fGIULjA?si=wpl6wyj8CXX2_E0Z&rel=0" 
        allowFullScreen
      ></iframe>
    </div>
    <div style={{ padding: "0.5rem" }} />
  </div>

</div>

<div style={{ padding: "1.5rem" }} />

      </div>

      {/* <div style={{ padding: "2rem" }}> </div> */}
      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
