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

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { Tooltip } from "@nextui-org/tooltip";
import ExpandableButton from "@/app/components/ExpandableButton";

const data = [
  { image: "/images/creative-coding/creativecoding white.png", id: 1, description:'NewCenterPoint1, Example 1'},
  { image: "/images/creative-coding/creativecoding twocolor.png", id: 2, description:'NewCenterPoint1, Example 2'},
  { image: "/images/creative-coding/creativecoding green.png", id: 3, description:'NewCenterPoint1, Example 3' },
];

const data2 = [
  { image: "/images/creative-coding/creativecoding2.png", id: 4, description:'NewCenterPoint2, Example 1' },
  { image: "/images/creative-coding/creativecoding3.png", id: 5, description:'NewCenterPoint2, Example 2' },
  { image: "/images/creative-coding/creativecoding6.png", id: 6, description:'NewCenterPoint2, Example 3' },
];


const data3 = [
  { image: "/images/creative-coding/cc3.png", id: 7, description:'NewCenterPoint3, Example 1' },
  { image: "/images/creative-coding/cc4.png", id: 8, description:'NewCenterPoint3, Example 2' },
  { image: "/images/creative-coding/cc1.png", id: 9, description:'NewCenterPoint3, Example 3' },
  { image: "/images/creative-coding/cc8.png", id: 10, description:'NewCenterPoint3, Example 4' },
];

const data4 = [
  { image: "/images/creative-coding/creativecoding5.png", id: 11, description:'NewCenterPoint7, Example 1' },
  { image: "/images/creative-coding/cc6.png", id: 12, description:'NewCenterPoint7, Example 2' },
  { image: "/images/creative-coding/cc5.png", id: 13, description:'NewCenterPoint7, Example 3' },
  { image: "/images/creative-coding/cc7.png", id: 14, description:'NewCenterPoint7, Example 4' },
];

function codeBlock1() {
  const codeString1 = `
  if (newCenterPoint1) {
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
        // backgroundColor: "rgb(49,49,49)",
        // fontSize: '2rem',
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
  const codeString2 = `
  if (newCenterPoint2) { 
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
} 

`
;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        // backgroundColor: "rgb(49,49,49)",
        aspectRatio:16/9
      }}
      codeTagProps={{
        style: {
          // fontSize: "1.1rem",
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
  const codeString2 = `
  if (newCenterPoint3) {
  selectedCenterPoint = 3;
  followMouse = false;
  amplitude = 150;
  centerX = width/2 + sin(angle) * amplitude;
  centerY = height/2 + cos(angle) * amplitude;
  angle += 0.01* PI;
    
  let numPoints = 12;
  let angleIncrement = TWO_PI / numPoints;
  angle += 0.01 * angleIncrement;
}
`;

  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      customStyle={{
        // backgroundColor: "rgb(49,49,49)",
        aspectRatio:16/9
        // fontSize: '2rem',
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
  const codeString4 = `
if (newCenterPoint7) {
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
}
  `;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={vscDarkPlus}
      wrapLines={true}
      customStyle={{
        // backgroundColor: "rgb(49,49,49)",
        aspectRatio:16/9
        // fontSize: '2rem',
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
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResetClick = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  /* make image big */
  const handleImageClick = (imageSrc) => {
    const dataArray = [...data, ...data2, ...data3, ...data4];
    const selectedIndex = dataArray.findIndex(
      (item) => item.image === imageSrc
    );
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";

      setSelectedDescription(dataArray[selectedIndex].description);

    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3, ...data4];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);

      setSelectedDescription(dataArray[newIndex].description);

    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3, ...data4];
      const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);

      setSelectedDescription(dataArray[newIndex].description);

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

      <div
        className={styles.backbutton}
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <h1>
          {" "}
          <Link href="/projects">All Projects </Link>{" "}
        </h1>
      </div>

      <div style={{ paddingTop: "1rem" }} />
      <div className={styles.linkContainerCC}>
        <h1 className={styles.titleWithoutPadding}> Creative Coding </h1>

        <div className={styles.subtitledescription}>
          <p>
            A creative tool for interactively creating visual artworks by
            manipulating lines, rotations and movement using mathematical
            functions or directly with the mouse movement. Made using p5js, the
            JavaScript version of the "Processing" library.
          </p>
        </div>

        <div style={{ padding: "1rem" }}></div>

        {/* <div className={styles.subtitle}>
          <p2>How its made:</p2>
        </div> */}

        <div style={{ padding: "1rem" }}></div>

        <div
          className={styles.linkContainerCCSandbox}
          style={{
            width: "90vw",
            zIndex: 1,
          }}

        >
          <div style={{ padding: "0.25rem" }}></div>
          {/* <TipsButton /> */}

          <div 
          style={{ padding: "0.5rem" }}
          >
            <div>
              <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                allowFullScreen
                style={{
                  // border: "2px solid white",
                  width: "88vw",
                  maxWidth: "1350px",
                  aspectRatio: "16/9",
                }}
              />
            </div>
          </div>
          {/* <div style={{ padding: "1rem" }}> </div> */}
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

        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

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
              {/* <motion.img
                src={selectedImage}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.45 }}
                transition={{ duration: 0.3 }}
                alt=""
                className="max-w-4/5 max-h-4/5"
                style={{
                  maxHeight: "80vh",
                  zIndex: 9990,
                  borderRadius: "24px",
                }}
              /> */}


<motion.div className="flex flex-col items-center mt-8"
  initial={{ scale: 0.5 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.45 }}
  transition={{ duration: 0.3 }}
>
              <motion.img
                src={selectedImage}
                alt={selectedImage.description}
                className="max-w-4/5 max-h-4/5"
                style={{ maxHeight: "80vh", zIndex: 9998, borderRadius:'24px 24px 0px 0px '}}

              />


          <div className={styles.imageDescription} style={{backgroundColor:'rgb(50,50,50)'}}>
          <p>
          {/* {currentIndex + ")    "}   */}
          {selectedDescription}
          </p>
          </div>
</motion.div>


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

        {/* <div style={{ padding: "1.5rem" }} /> */}

        {/* <codeTooltip> */}

        {/* <ExpandableButton 
style={{display:'flex', justifyItems:'center'}}
>
  {codeBlock1()}
</ExpandableButton> */}

        {/* </codeTooltip> */}

        <div className="">
          <div className="p-3 container mx-auto">
            <div className="py-2"></div>
            <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
              {data2.map((x) => (
                <article
                  key="cc2"
                  className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
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

        <div stlye={{ padding: "0.5rem" }} />

        <div className="flex flex-row">


          {/* <div className={styles.linkContainerCCSandbox}
          style={{ width: "45vw", zIndex: 1, maxWidth: "650px", marginBottom:'10px', overflow: "auto"}} >
          <div style={{ padding: "0.5rem" }}/>

        <div className="flex align-center">
          <div className={styles.iframevideoSmall}>
            {codeBlock1()}
          </div>
          </div>
          <div style={{ padding: "0.5rem" }}/>
          </div> */}

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
                src="https://www.youtube.com/embed/z_rbwerTgBE?si=TiMMhrdZMZn6kD79&rel=0"
                allowFullScreen
              ></iframe>
            </div>
            <div style={{ padding: "0.5rem" }} />
          </div>
        
        </div>

        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        {/* <ExpandableButton 
style={{display:'flex', justifyItems:'center'}}
>
  {codeBlock2()}
</ExpandableButton> */}

        <div className="">
          <div className="p-3 container mx-auto">
            <div className="py-2"></div>
            <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
              {data.map((x) => (
                <article
                  key="cc"
                  className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
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
    {/* <div className="flex align-center"> */}
      <iframe
        className={styles.iframevideoSmall}
        style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
        src="https://www.youtube.com/embed/_fmgP4kvRlk?si=cWvrsFuy78losEc1&rel=0"
        allowFullScreen
      ></iframe>
    {/* </div> */}
    <div style={{ padding: "0.5rem" }} />
  </div>


</div>

        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        {/* <ExpandableButton 
style={{display:'flex', justifyItems:'center'}}
>
  {codeBlock3()}
</ExpandableButton> */}

        <motion.div className="">
          <div className="p-3 container mx-auto">
            <div className="py-2"></div>
            <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
              {data3.map((x) => (
                <article
                  key="cc3"
                  className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
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
        src="https://www.youtube.com/embed/kRxCXPPyuQI?si=Cc1JBPQw8IKZ5F1c&rel=0" 
        allowFullScreen
      ></iframe>
    </div>
    <div style={{ padding: "0.5rem" }} />
  </div>

</div>

        <div style={{ padding: "1.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        {/* <div className="flex flex-row space-x-4"> */}

        {/* <ExpandableButton 
style={{display:'flex', justifyItems:'center'}}
>
  {codeBlock4()}
</ExpandableButton> */}

        <motion.div className="">
          <div className="p-3 container mx-auto">
            <div className="py-2"></div>
            <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
              {data4.map((x) => (
                <article
                  key="cc3"
                  className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
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
        src="https://www.youtube.com/embed/Gh7pxNVKmbU?si=HzZlicGcsVRbgFyw&rel=0" 
        allowFullScreen
      ></iframe>
    </div>
    <div style={{ padding: "0.5rem" }} />
  </div>

</div>

<div style={{ padding: "1.5rem" }} />

        {/* </div> */}
      </div>

      <div style={{ padding: "2rem" }}> </div>
    </main>
  );
}
