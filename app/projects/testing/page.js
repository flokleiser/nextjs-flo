"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, animate, useAnimation, motion, useAnimate, delay } from "framer-motion";
import { BsX, BsList } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";

import testimage from "/public/images/sketches/sketch test scan website2.png";

const data = [
  { image: "/images/sketches/sketch test scan website2.png", id: 0 },
  { image: "/images/sketches/sketch test website.png", id: 1 },
  { image: "/images/sketches/sketch test scan website3.png", id: 2 },
  { image: "/images/sketches/sketch test scan website4.png", id: 3 },
  { image: "/images/sketches/sketch test scan website6.png", id: 4 },
  // {image: testimage, id:0},
  // {image: testimage, id:1},
  // {image: testimage, id:2},
  // {image: testimage, id:3},
  // {image: testimage, id:4}
];


const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 }
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6 } }
};

const pathTopBottom = {
  open : {opacity:0},
  closed: {opacity:1}
}

const pathTopBottomTest = {
  open: {d:"M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"},
  closed: {d:"m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z" }
  
}

const pathMiddle1 = {
  open : {rotate:45},
  closed: {rotate:0}
}

const pathMiddle2 = {  
  open : {rotate:-45},
  closed: {rotate:0}
}


export default function testing() {

  const [showNavbarTest, setShowNavbarTest] = useState(false);
  const toggleNavbarVisibilityTest = () => {
    setShowNavbarTest(!showNavbarTest);
    console.log(showNavbarTest)
  };

  useEffect(() => {
    document.title = "testing";
  }, []);

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
    const dataArray = [...data];
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
      const dataArray = [...data];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data];
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

  const [buttonClicked, setButtonClicked] = useState(false);
  const clickButton = () => {
    setButtonClicked(!buttonClicked);
  };

  const [key, setKey] = useState(0);
  const controls = useAnimation();

  const repeatAnimation = async () => {
    await controls.start({ pathLength: 0, pathOffset: 1 });
    controls.start({ pathLength: 1, pathOffset: 0 });
  };

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

      <h1 className={styles.title}>Testing</h1>

      <div className={styles.subtitledescription}>
        <p>
          A collection of sketches, designs and artworks ranging from 2018 to
          2023.
        </p>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />


<div className="flex-row" style={{display:'flex'}}>

<motion.button
        className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
        onClick={toggleNavbarVisibilityTest} >

        <motion.svg stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" width={25} strokeWidth={0} 
                style={{backgroundColor:'#211f1e', zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem', width:"48px"}}>

                  <motion.path d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z" 
                  variants={pathTopBottomTest}
                  initial={showNavbarTest? "open" : "closed"} 
                  animate={showNavbarTest? "closed" : "open"}
                  transition={delay } />


                  <motion.path d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
                  variants={pathMiddle1}
                  initial={showNavbarTest ? "open" : "closed"} 
                  animate={showNavbarTest ? "closed" : "open"}/>
                  
                  <motion.path d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z" 
                    variants={pathMiddle2}
                    initial={showNavbarTest ? "open" : "closed"} 
                    animate={showNavbarTest ? "closed" : "open"}/>

                  <motion.path d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
                     variants={pathTopBottom}
                     initial={showNavbarTest? "open" : "closed"} 
                     animate={showNavbarTest? "closed" : "open"} />

                </motion.svg> 
        </motion.button>

        <motion.button
        // className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
        onClick={repeatAnimation}>

        <motion.svg 
        stroke="currentColor" fill="currentColor"  viewBox="0 0 16 16" width={25} strokeWidth={0}     
        initial="rest"
        whileHover="hover" 
        style={{backgroundColor:'#211f1e', zIndex:'9999', border:'1px',borderStyle:'solid', borderColor:'#FFFFFF', borderRadius:'0.35rem', width:"48px"}}>
                  <motion.path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
                          variants={arrow}/>
                  {/* <motion.path d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  variants={arrow}
                  />
                  <motion.path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" 
                  /> */}

        </motion.svg> 
        </motion.button>
        
          <motion.button
        className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
        onClick={repeatAnimation}
        whileTap={{scale:"0.5"}}
     
      >
         <BsArrowClockwise 
            style={{
              fontSize: "3rem",
              paddingBottom: "-0.5rem",
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
            }}
          />
      </motion.button>


      </div>

      <div style={{ padding: "1rem" }} />

<div className="flex flex-row">
      <Image src="/svg/skylands.svg" width={200} height={200}/>
      <div style={{padding:'2rem'}} />

<svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 1300.22 2042.41" style={{width:200}} stroke="currentColor" fill="currentColor">

  <motion.g id="Layer_1-2" data-name="Layer 1" >
    <motion.polyline fill="none" strokeWidth="20px" class="cls-1" points="156.26 1181.31 156.26 761.14 626.85 761.14 696.47 761.14 696.47 1181.31"
    // initial={{pathLength:0}} animate={{pathLength:1}}  transition={{duration:2, repeat: Infinity, repeatType:"loop", repeatDelay:2}}
    />
    <polygon fill="none" strokeWidth="20px" class="cls-1" points="635.2 220.93 635.2 761.14 468.13 761.14 468.13 220.93 490.41 220.93 635.2 220.93"/>
    <rect fill="none" strokeWidth="20px" class="cls-1" x="493.19" y="87.27" width="116.95" height="133.66"/>
    <polyline fill="none" strokeWidth="20px"class="cls-1" points="130.5 761.14 229.22 594.76 468.13 594.76"/>
    <path fill="none" strokeWidth="20px" class="cls-1" d="m468.13,87.27s0-77.27,83.54-77.27,83.54,77.27,83.54,77.27"/>
    <polyline fill="none" strokeWidth="20px" class="cls-1" points="635.2 543.94 568.37 543.94 568.37 641.41 635.2 641.41"/>
    <rect fill="none" strokeWidth="20px" class="cls-1" x="243.91" y="889.09" width="110.81" height="164.28"/>
    <rect fill="none" strokeWidth="20px" class="cls-1" x="512.97" y="889.09" width="110.81" height="292.23"/>
    <polyline fill="none" strokeWidth="20px" class="cls-1" points="635.2 324.66 568.37 324.66 568.37 422.12 635.2 422.12"/>
    
    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1080.2,761.14c-72.4,151.88-72.4,430.61-72.4,430.61"
  //  initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}  transition={{duration:2,  repeatDelay:2}}
  animate={controls}
  transition={{ duration: 1, repeatDelay: 2 }} 
  />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" 
    d="m870.19,864.09s62.23-115.17,213.91-105.3"
    // initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}   transition={{delay:2, duration:2, }} />
    animate={controls} 
  transition={{ duration: 1, repeatDelay: 2 }} />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" 
    d="m952.95,898.26s38.15-149.13,131.14-136.34"
       initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}  transition={{duration:2,delay:2, }} />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1188.9,910.8s-1.87-109.75-108.7-148.09"
        initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}   transition={{duration:2,delay:2, }} />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1290.82,915.31s-59.55-164.37-220.86-156.87"
        initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}   transition={{duration:2,delay:2, }} />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1277.41,787.54s-101.04-90.85-233.41-26.79"
        initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}   transition={{duration:2, delay:2,}} />
    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1094.57,754.6s-112.89-75.62-234.85,6.55"
       initial={{pathLength:0}} animate={{pathLength:1}}  transition={{duration:2,delay:2, }} />

    <motion.path fill="none" strokeWidth="20px" class="cls-1" d="m1110.33,1443.34c228.75,118.94-7.07,256.86-7.07,256.86,69.43,332.24-298.74,267.1-298.74,267.1-233.78,164.17-437.22-33.88-437.22-33.88-298.74,41.51-246.81-206.6-246.81-206.6-151.51-80.22-147.23-221.49,13.03-313.07h5.21"/>

    <polygon fill="none" strokeWidth="20px" class="cls-1" points="1141.78 1191.69 1110.33 1443.34 1107.72 1464.18 981.34 1681.4 850.12 1616.62 757.8 1755.29 597.36 1852.27 461.11 1787.49 383.31 1819.87 242.41 1681.4 138.73 1413.74 52.75 1191.69 1141.78 1191.69"/>
  </motion.g>
</svg>




       </div>

          {/* <AnimatePresence>
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
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.45 }}
              transition={{ duration: 0.3 }}
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

      <div className="">
        <div className="p-3 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x) => (
              <article className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
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
      </div> */}

      {/* <Image
        // src="/images/sketches/sketch test scan website2.png"
        src={testimage}
        alt="testing"
        key="test"
        width={500}
        height={500}
        placeholder="blur"
      /> */}

      <div style={{ padding: "2rem" }} />
    </main>
  );
}
