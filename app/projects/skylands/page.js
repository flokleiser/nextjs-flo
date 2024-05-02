"use client";
import styles from "app/page.module.css";
import { BiSolidFileBlank, BiLink, BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { PiXCircle } from "react-icons/pi";
import { DiGithubBadge } from "react-icons/di";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";
import { MdFilterCenterFocus } from "react-icons/md";
import {Tooltip} from "@nextui-org/tooltip";
import CenterTooltip from "@/app/components/CenterTooltip";
import DimTooltip from "@/app/components/DimTooltip";

import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import('@/app/components/ImageGallery'))

const data = [
  { image: "/images/skylands/skylandsnew8.png", id: 1, description:'Birds eye view of the islands' }, 
];
// interactables
const data2 = [
  { image: "/images/skylands/skylands3.png", id: 2, description:'Mini-Golf course' },
  { image: "/images/skylands/skylands4.png", id: 3, description:'Starter room with mirror and interactable music player' },
  { image: "/images/skylands/skylandsnew1.png", id: 4, description:'Interactable buttons to change the exterior (see "Environments")'},
];
const data3 = [
  { image: "/images/skylands/skylands_whiteboard.png", id: 5, description:'Different whiteboards to draw on'},
  { image: "/images/skylands/skylandsnew2.png", id: 6, description:'3D Voxel models to pick up and interact with'},
  { image: "/images/skylands/skylandsnew3.png", id: 7, description:'Whiteboard and marker'}
]

// environment
const data4 = [
  { image: "/images/skylands/skylandsfull.png", id: 8, description:'Overview of the islands'},
  { image: "/images/skylands/skylands_ferriswheel.png", id: 9, description:'Island with a ferris wheel' },
  { image: "/images/skylands/skylands_waterfall.png", id: 10, description:'Island with a waterfall'},
  { image: "/images/skylands/skylandsnew4.png", id: 11, description:'Island with a small pond'},
];
const data5 = [
  { image: "/images/skylands/skylandsnew7.png", id: 12, description:'Main island with empty exterior'},
  { image: "/images/skylands/skylands5.png", id: 13, description:'Main island with stone paths and a fountain'},
  { image: "/images/skylands/skylandsnew6.png", id: 14, description:'Main island with a small lake'},
];

// boat?
const data6 = [
  { image: "/images/skylands/skylands1.png", id: 15, description:'Island with a dock for the boat' },
  { image: "/images/skylands/skylands2.png", id: 16 , description:'Full view of the steerable boat'},
  { image: "/images/skylands/skylands_steering.png", id: 17 , description:'The steering mechanism'},
];

export default function skylands() {

  const [selectedImage, setSelectedImage] = useState(null);

  const [isDim, setDim] = useState(false);
  const handleToggleClick = () => {
    setDim(!isDim);
    };

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  // const [selectedImage, setSelectedImage] = useState(null);
  // const [selectedDescription, setSelectedDescription] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleResetClick = () => {
  //   setSelectedImage(null);
  //   setCurrentIndex(0);
  //   document.documentElement.style.overflow = "auto";
  //   document.body.style.overflow = "auto";
  // };

  // /* make image big */
  // const handleImageClick = (imageSrc) => {
  //   const dataArray = [...data, ...data2, ...data3,...data4,...data5,...data6];
  //   const selectedIndex = dataArray.findIndex((item) => item.image === imageSrc);
  //   if (selectedIndex !== -1) {
  //     setSelectedImage(imageSrc);
  //     setCurrentIndex(dataArray[selectedIndex].id);
  //     document.documentElement.style.overflow = "hidden";
  //     document.body.style.overflow = "hidden";

  //     setSelectedDescription(dataArray[selectedIndex].description);

  //     setCurrentIndex(dataArray[selectedIndex].id);
  //     console.log('test');
  //   }
  // };

  // const handlePrevImage = () => {
  //   if (selectedImage !== null) {
  //     const dataArray = [...data, ...data2, ...data3,...data4,...data5,...data6];
  //     const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
  //     const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
  //     setCurrentIndex(dataArray[newIndex].id);
  //     setSelectedImage(dataArray[newIndex].image);

  //     setSelectedDescription(dataArray[newIndex].description);
  //   }
  // };

  // const handleNextImage = () => {
  //   if (selectedImage !== null) {
  //     const dataArray = [...data, ...data2, ...data3,...data4,...data5,...data6];
  //     const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
  //     const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
  //     setCurrentIndex(dataArray[newIndex].id);
  //     setSelectedImage(dataArray[newIndex].image);

  //     setSelectedDescription(dataArray[newIndex].description);
  //   }
  // };

  // /* handleoutsideclick*/
  // useEffect(() => {
  //   const handleOutsideClick = (event) => {
  //     const imageElement = document.querySelector("#overlay img");
  //     const leftButton = document.querySelector("#leftButton");
  //     const rightButton = document.querySelector("#rightButton");

  //     if (imageElement) {
  //       const imageRect = imageElement.getBoundingClientRect();

  //       if (
  //         event.clientX < imageRect.left ||
  //         event.clientX > imageRect.right ||
  //         event.clientY < imageRect.top ||
  //         event.clientY > imageRect.bottom
  //       ) {
  //         if (
  //           event.target !== leftButton &&
  //           event.target !== rightButton &&
  //           !leftButton.contains(event.target) &&
  //           !rightButton.contains(event.target)
  //         ) {
  //           handleResetClick();
  //         }
  //       }
  //     }
  //   };

  //   document.addEventListener("mouseup", handleOutsideClick);

  //   return () => {
  //     document.removeEventListener("mouseup", handleOutsideClick);
  //   };
  // }, []);

  // /* handlekeydown*/
  // useEffect(() => {
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       handleResetClick();
  //     } else if (event.key === "ArrowLeft") {
  //       handlePrevImage();
  //     } else if (event.key === "ArrowRight") {
  //       handleNextImage();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [handleResetClick, handlePrevImage, handleNextImage]);

  useEffect(() => {
    document.title = "Projects - Skylands";
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


      <div style={{paddingTop:'1rem'}} />
      <div className={styles.linkContainerSkylands}>

      {/* <h1 className={styles.titleWithoutPadding}> Skylands </h1> */}
      <h1 className={styles.title}> Skylands </h1>


      <div className={styles.subtitledescription}>
        <p>
          A VR game/experience for the Meta Quest 2 Headset, built in Unity, C#
          and Blender. <br />
          This page contains gameplay videos, screenshots, and the downloadable .apk file.
        </p>
      </div>

      <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />


      <AnimatePresence>
      {isDim && (
        <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[52]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        
        style={{
          backdropFilter: `blur(10px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}>
      
        </motion.div>
      )}
      </AnimatePresence>
            
            {/* <div className="">
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
                zIndex:54
              }}
            >

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


          <div className={styles.imageDescription} style={{  backgroundColor: 'rgba(187, 188, 122, 0.6)'}}>
          <p>
          {currentIndex + ")    "}  {selectedDescription}
          </p>
          </div>
</motion.div>

              <button
                className="absolute top-16 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
                onClick={handleResetClick}
                style={{ zIndex: 9979 }}
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
      </div>



      <div className="" 
      >
        <div className="p-1 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-8" >
            {data.map((x) => (
              <article
                key="s2"
                className="pt-3 pl-3 pr-3 pb-0 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
              >
                <div className="relative  rounded-2xl">
                  <Image
                      width={1330}
                      height={800}
                    className={` rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
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

<ImageGallery data={data}w={1330}h={800}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.subtitle}>
        <p2>Interactables</p2>
      </div>

      <div style={{paddingBottom:'1rem', scrollMargin:'50px'}} id='interactables' />

      <div className={styles.linkContainerSkylandsVideo}>
      <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex">

<DimTooltip >
      <button
          className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
          style={{ zIndex: 53 }}
          onClick={handleToggleClick}
        >
          {isDim ? (
            <LuLightbulb style={{ fontSize: "1.5rem" }} />
          ) : (
            <LuLightbulbOff style={{ fontSize: "1.5rem" }} />
          )}
        </button>
</DimTooltip>

<CenterTooltip>
        <Link
          className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
          style={{ zIndex: 53 }}
          href="#interactables"
          rel="noopener noreferrer"
          onClick={handleScroll}
        >
          {" "}
          <MdFilterCenterFocus style={{ fontSize: "1.5rem" }} />
        </Link>
</CenterTooltip>

      </div>

      <div style={{ padding: "0.125rem" }}> </div>
      <div className="flex align-center">

        <iframe
          className={styles.iframevideo}
          style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
          src="https://www.youtube.com/embed/sz8cQtsfpzc?si=UkqxEbkulWEECgbM&rel=0"
          allowFullScreen
        ></iframe>

      </div>
      <div style={{padding:"0.8rem"}}/>
    </div>

    {/* <motion.div className="" style={{filter:'blur(10px)'}} whileInView={{filter:'blur(0px)'}} transition={{duration:0.5}}>
      <div className="p-1 container mx-auto">
        <div className="py-2"></div>
        <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
          {data2.map((x) => (
              <article
                key="s1"
                className="pt-3 pl-3 pr-3 pb-0 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
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
      </motion.div> */}

<ImageGallery data={data2}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      {/* <motion.div className="" style={{filter:'blur(10px)'}} whileInView={{filter:'blur(0px)'}} transition={{duration:0.5}}>
      <div className="p-1 container mx-auto">
        <div className="py-2"></div>
        <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {data3.map((x) => (
              <article
                key="s1"
                className="pt-3 pl-3 pr-3 pb-0 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
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
      </motion.div> */}

<ImageGallery data={data3}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.subtitle}>
        <p2>Environment</p2>
      </div>
      <div style={{paddingBottom:'1rem', scrollMargin:'50px'}} id='environment' />

      <div className={styles.linkContainerSkylandsVideo}>
      <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex ml-1 ">

          <DimTooltip >
          <button
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            onClick={handleToggleClick}
          >
            {isDim ? (
              <LuLightbulb style={{ fontSize: "1.5rem" }} />
            ) : (
              <LuLightbulbOff style={{ fontSize: "1.5rem" }} />
            )}
          </button>
          </DimTooltip>

          <CenterTooltip>
          <Link
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            href="#environment"
            rel="noopener noreferrer"
            onClick={handleScroll}
          >
            {" "}
            <MdFilterCenterFocus style={{ fontSize: "1.5rem" }} />
          </Link>
          </CenterTooltip>

        </div>
        <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex align-center">
    
          <iframe
            className={styles.iframevideo}
            style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
            src="https://www.youtube.com/embed/RHG-6tXNh6s?si=CeC_FO-txlmVHThG&rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{padding:"0.8rem"}} />
      </div>

      {/* <motion.div className="" style={{filter:'blur(10px)'}} whileInView={{filter:'blur(0px)'}} transition={{duration:0.5}}>
        <div className="p-1 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
            {data4.map((x) => (
              <article
                key="s2"
                className="pt-3 pl-3 pr-3 pb-0 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
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
      </motion.div> */}

<ImageGallery data={data4}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      {/* <motion.div className="" style={{filter:'blur(10px)'}} whileInView={{filter:'blur(0px)'}} transition={{duration:0.5}}>
        <div className="p-1 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data5.map((x) => (
              <article
                key="s2"
                className="pt-3 pl-3 pr-3 pb-0 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
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
      </motion.div> */}

<ImageGallery data={data5}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.subtitle}>
        <p2>Boat Showcase</p2>
      </div>
      <div style={{paddingBottom:'1rem', scrollMargin:'50px'}} id='boat' />

      <div className={styles.linkContainerSkylandsVideo}>
      <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex ml-1 ">

          <DimTooltip>
          <button
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            onClick={handleToggleClick}
          >
            {isDim ? (
              <LuLightbulb style={{ fontSize: "1.5rem" }} />
            ) : (
              <LuLightbulbOff style={{ fontSize: "1.5rem" }} />
            )}
          </button>
          </DimTooltip>

          <CenterTooltip>
          <Link
            className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            style={{ zIndex: 53 }}
            href="#boat"
            rel="noopener noreferrer"
            onClick={handleScroll}
          >
            {" "}
            <MdFilterCenterFocus style={{ fontSize: "1.5rem" }} />
          </Link>
          </CenterTooltip>

        </div>

        <div style={{ padding: "0.125rem" }}> </div>
        <div className="flex align-center">

          <iframe
            className={styles.iframevideo}
            style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
            src="https://www.youtube.com/embed/A0E-4BC7WaY?si=0tBe_be9_eXKcwaY&rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{padding:"0.8rem"}} />
      </div>

      {/* <motion.div className="" style={{filter:'blur(10px)'}} whileInView={{filter:'blur(0px)'}} transition={{duration:0.5}}>
        <div className="p-1 container mx-auto">
          <div className="py-2"></div>
          <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data6.map((x) => (
              <article
                key="s2"
                className="pt-3 pl-3 pr-3 pb-0  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
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
      </motion.div> */}
      
      <ImageGallery data={data6}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'} />

      <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />

      <div className={styles.subtitledescription}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <p>
            <a
              href="https://drive.google.com/file/d/1Kg5mvFeOzfIsQm974Fk5bhWUzK3I6VP3/view?usp=drive_link"
              target="_blank"
            >
              <BiSolidFileBlank />
              .apk file
            </a>
          </p>
        </div>
      </div>

      <div className={styles.subtitledescription}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <p>
            <a href="https://github.com/flokleiser/FLO-VR-ROOM" target="_blank">
              <DiGithubBadge /> Code files on Github
            </a>
          </p>
        </div>
      </div>

      <div className={styles.subtitledescription}>
        <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer">
          <p>
            <a href="https://sidequestvr.com/setup-howto" target="_blank">
              <BiLinkExternal /> SideQuest (to install .apk file)
            </a>
          </p>
        </div>
      </div>
      </div>

      <div style={{ padding: "2rem" }}> </div>
    </main>
  );
}