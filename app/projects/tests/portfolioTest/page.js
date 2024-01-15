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

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const data = [
  { image: "/images/creative-coding/creativecoding white.png", id: 0 },
  { image: "/images/creative-coding/creativecoding twocolor.png", id: 1 },
  { image: "/images/creative-coding/creativecoding green.png", id: 2 },
];

const data2 = [
  { image: "/images/creative-coding/creativecoding2.png", id: 3 },
  { image: "/images/creative-coding/creativecoding3.png", id: 4 },
  { image: "/images/creative-coding/creativecoding6.png", id: 6 },
];

const data3 = [
  // { image: "/images/creative-coding/creativecoding5.png", id: 7 },
  { image: "/images/creative-coding/creativecoding9.png", id: 8 },
  { image: "/images/creative-coding/creativecoding4.png", id: 5 },
];

function codeBlock1() {
  const codeString1=
  `    if (newCenterPoint1) {
    selectedCenterPoint = 1;
    followMouse = false;

    centerX = width/2 + 300 * cos(angleX * (PI/2*frequency));    
    centerY = height/2 + 200 * sin(angleY * (PI*frequency));     

    angleX += 0.1;
    angleY += 0.1;
  }`
      return(
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {codeString1}
          </SyntaxHighlighter>
      );
}


function codeBlock2() {
    const codeString2=
    // "if (newCenterPoint2) { selectedCenterPoint = 2;  followMouse = false;"
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
  }; `
        return(
            <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                {codeString2}
            </SyntaxHighlighter>
        );
}

function codeBlock3() {
  const codeString2=
  `if (newCenterPoint3) {
    selectedCenterPoint = 3;
    followMouse = false;
    //circle-ish
    amplitude = 150;
    centerX = width/2 + sin(angle) * amplitude;
    centerY = height/2 + cos(angle) * amplitude;
    angle += 0.01* PI;
    
    let numPoints = 12;
    let angleIncrement = TWO_PI / numPoints;
    angle += 0.01 * angleIncrement;
  }`

      return(
          <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
              {codeString2}
          </SyntaxHighlighter>
      );
}

// function codeBlock4() {
//   const codeString2=
//   `
//   if (newCenterPoint7) {
//     selectedCenterPoint = 7;
//     isRotating = !isRotating;

//     if (speedX > 0 && speedY > 0) {
//       direction = downright;
//     } else if (speedX > 0 && speedY < 0) {
//       direction = upright;
//     } else if (speedX < 0 && speedY > 0) {
//       direction = downleft;
//     } else if (speedX < 0 && speedY < 0) {
//       direction = upleft;
//     }
//     //todo: fix bouncy one pixel too high
//     if (!modifier1 && !modifier3) {
//       centerX += speedX;
//       centerY += speedY;

//       //todo: fix one pixel too high when bouncy
//       if (!verticalLine) {
//         if (!newLine5) {
//           if (centerY > height -25|| centerY < 25) {
//           speedY *= -1;
//           }
//           if (centerX > width - 175 || centerX < 175) {
//             speedX *= -1;
//           }
//         }  
//         else if (newLine5) {
//           if (centerY > height -105|| centerY < 105) {
//             speedY *= -1;
//             }
//             if (centerX > width - 175 || centerX < 175) {
//               speedX *= -1;
//             }
//           }
//         }
    
//         else if (verticalLine) {
//         if (centerY > height -175|| centerY < 175) {
//           speedY *= -1;
//           }
//         if (centerX > width - 25 || centerX < 25) {
//             speedX *= -1;
//         }
//       } 
      
//       if (modifier2) {
//         if (centerX > 175 && centerX < width - 175 && centerY > 175 && centerY < height - 175) {
//           //'b' automatic, 's' automatic, 't' automatic.
//           randomSwitch();
//         }
//       }
//   }

//     //tping out frame
//     if (modifier1) {
//     modifier3 = false;
//     centerX += speedX;
//     centerY += speedY;
    
//     if (direction === upright) {
//       if(centerX > width && verticalLine) {
//         centerX = 0;
//       }
//       if(centerX > width+150 && !verticalLine) {
//         centerX = -150;
//       }
//       if(centerY < 0 && !verticalLine) {
//           centerY = height;
//         }
//       if(centerY < -150 && verticalLine) {
//           centerY = height + 150;
//       }
//     }

//     if (direction === downright) {
//       if(centerX > width && verticalLine) {
//         centerX = 0;
//       }
//       if(centerX > width+300 && !verticalLine) {
//         centerX = -300;
//       }
//       if(centerY > height && !verticalLine) {
//         centerY = 0;

//       }
//       if(centerY > height + 150 && verticalLine) {
//         centerY = -150;
//         console.log('check');
//       }
//     } 
//     if (direction === upleft) {
//       if(centerX < 0 && verticalLine) {
//         centerX = width;
//       }
//       if(centerX < -150 && !verticalLine) {
//         centerX = width + 150;
//       }
//       if(centerY < 0 && !verticalLine) {
//           centerY = height;
//         }
//       if(centerY < -150 && verticalLine) {
//           centerY = height + 150;
//       }
//     }

//     if (modifier2) {
//       randomSwitch();
//     }
//     }   
    
//     //tping in frame
//     if (modifier3) {
//       modifier1 = false;
//       centerX += speedX;
//       centerY += speedY;
      
//       if (direction === upright) {
//           if(centerX > width - 25 && verticalLine) {
//             centerX = 25;
//           }
//           if(centerX > width - 175 && !verticalLine /* && centerY < 75 */ ) {
//             centerX = 175;
//           }
//           if(centerY < 175 && verticalLine) {
//               centerY = height - 175;
//           }
//           if(centerY < 25 && !verticalLine) {
//               centerY = height - 25;
//           }
//         }
      
//       if (direction === downright) {
//         if(centerX > width - 25 && verticalLine) {
//           centerX = 25;
//         }
//         if(centerX > width - 175 && !verticalLine) {
//           centerX = 175;
//         }
//         if(centerY > height - 175 && verticalLine) {
//             centerY = 175;
//         }
//         if(centerY > height - 25 && !verticalLine) {
//             centerY = 25;
//         }
//       }

//       if (direction === upleft) {
//         //change here
//         if(centerX < 25 && verticalLine) {
//           centerX = width - 25;
//         }
//         if(centerX < 175 && !verticalLine  ) {
//           centerX = width -175;
//         }
        
//         if(centerY < 175 && verticalLine) {
//             centerY = height - 175;
//         }
//         if(centerY < 25 && !verticalLine) {
//             centerY = height - 25;
//         }
//       }

//       if (modifier2) {
//         randomSwitch();
//       }
//     }
//   }
//   if (newCenterPoint8) {
//     selectedCenterPoint = 8;
    

//     if(modifier1 && !modifier3) {
//     centerX = lerp(centerX, targetPoints[currentTargetIndex].x, easing);
//     centerY = lerp(centerY, targetPoints[currentTargetIndex].y, easing);
   
//     let d = dist(centerX, centerY, targetPoints[currentTargetIndex].x, targetPoints[currentTargetIndex].y);
      
//         if (!modifier2){
//           if (d < 1) {
//             currentTargetIndex = (currentTargetIndex + 1) % targetPoints.length;
//           }
//         }
//         else {
//           if (d < 1) {
//             currentTargetIndex2 = (currentTargetIndex2 - 1 + targetPoints2.length) % targetPoints2.length;
//           }
//         }
//     }
    
//     if(modifier3 && !modifier1) {
//       centerX = lerp(centerX, targetPoints2[currentTargetIndex2].x, easing);
//       centerY = lerp(centerY, targetPoints2[currentTargetIndex2].y, easing);
    
//       let d = dist(centerX, centerY, targetPoints2[currentTargetIndex2].x, targetPoints2[currentTargetIndex2].y);
      
//       //reverse logic
//         if (!modifier2){
//           if (d < 1) {
//             currentTargetIndex2 = (currentTargetIndex2 + 1) % targetPoints2.length;
//           }
//         }
//         else {
//           if (d < 1){
//             currentTargetIndex2 = (currentTargetIndex2 - 1 + targetPoints2.length) % targetPoints2.length;
//           }
//         }
//     }
//   }
//   `
//       return(
//           <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
//               {codeString2}
//           </SyntaxHighlighter>
//       );
// }

export default function creativeCoding() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResetClick = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  /* make image big */
  const handleImageClick = (imageSrc) => {
    const dataArray = [...data, ...data2, ...data3];
    const selectedIndex = dataArray.findIndex(
      (item) => item.image === imageSrc
    );
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3];
      const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
    }
  };

  /* handleoutsideclick*/
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const imageElement = document.querySelector("#overlay img");
      const leftButton = document.querySelector("#leftButton");
      const rightButton = document.querySelector("#rightButton");

      if (imageElement) {
        const imageRect = imageElement.getBoundingClientRect();

        if (
          event.clientX < imageRect.left ||
          event.clientX > imageRect.right ||
          event.clientY < imageRect.top ||
          event.clientY > imageRect.bottom
        ) {
          if (
            event.target !== leftButton &&
            event.target !== rightButton &&
            !leftButton.contains(event.target) &&
            !rightButton.contains(event.target)
          ) {
            handleResetClick();
          }
        }
      }
    };

    document.addEventListener("mouseup", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, []);

  /* handlekeydown*/
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleResetClick();
      } else if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleResetClick, handlePrevImage, handleNextImage]);

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

<div className={styles.code}>
        {codeBlock1()}
     </div>

     <div className="">
        <div className="p-3 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data2.map((x) => (
              <article key="cc2" className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                <div className="relative rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className={`max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                      selectedImage ? "z-0" : ""
                    }`}
                    src={x.image}
                    alt=""
                    onClick={() => handleImageClick(x.image)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

    
      <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.code}>
        {codeBlock2()}
     </div>

     <div className="">
        <div className="p-3 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => (
              <article key="cc" className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                <div className="relative rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className={`max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                      selectedImage ? "z-0" : ""
                    }`}
                    src={x.image}
                    alt=""
                    onClick={() => handleImageClick(x.image)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

     <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.code}>
        {codeBlock3()}
     </div>

     <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      {/* <div className={styles.code}>
        {codeBlock4()}
     </div>

     <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} /> */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            id="overlay"
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backdropFilter: `blur(${selectedImage ? "10px" : "0px"})`,
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
          >
            <motion.img
            src={selectedImage}
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{scale:0.45}}
            transition={{duration:0.3}}
              alt=""
              className="max-w-4/5 max-h-4/5"
              style={{ maxHeight: "80vh", zIndex: 9990 }}
            />
            <button
              className="absolute top-16 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
              onClick={handleResetClick}
              style={{ zIndex: 9999 }}
            >
              <PiXCircle style={{ fontSize: "2rem" }} />
            </button>
            <div className="absolute left-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded">
              <button
                id="leftButton"
                className="text-black px-0 py-4 rounded-r"
                onClick={handlePrevImage}
                style={{ zIndex: 9999 }}
              >
                <IoIosArrowBack style={{ fontSize: "2rem" }} />
              </button>
            </div>
            {/* <div className="absolute right-5"> */}
            <div className="absolute right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded">
              <button
                id="rightButton"
                className=" text-black px-0 py-4 rounded-r"
                onClick={handleNextImage}
                style={{ zIndex: 9999 }}
              >
                <IoIosArrowForward style={{ fontSize: "2rem" }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="" >
        <div className="p-3 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data3.map((x) => (
              <article key="cc3" className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                <div className="relative  rounded-2xl">
                  <Image 
                    width={400}
                    height={400}
                    className={`max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                      selectedImage ? "z-0" : ""
                    }`}
                    src={x.image}
                    alt=""
                    onClick={() => handleImageClick(x.image)}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </motion.div>

      </div>

      <div style={{ padding: "2rem" }}> </div>
      {/* <code>
              test.js
            </code> */}
    </main>
  );
}
