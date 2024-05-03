"use client";
import styles from "@/app/page.module.css";
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
            
<ImageGallery data={data}w={1330}h={800}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />

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
          // style={{ zIndex:isDim? 53:1 }}
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
          // style={{ zIndex: 0 }}
          src="https://www.youtube.com/embed/sz8cQtsfpzc?si=UkqxEbkulWEECgbM&rel=0"
          allowFullScreen
        ></iframe>

      </div>
      <div style={{padding:"0.8rem"}}/>
    </div>

   <ImageGallery data={data2}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />

     
<ImageGallery data={data3}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />

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
            // style={{ zIndex: 2 }}
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

 

<ImageGallery data={data4}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />



<ImageGallery data={data5}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />

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
            // style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
            style={{ zIndex: 1, position: "relative" }}
            src="https://www.youtube.com/embed/A0E-4BC7WaY?si=0tBe_be9_eXKcwaY&rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{padding:"0.8rem"}} />
      </div>

      
      <ImageGallery data={data6}w={400}h={400}desc={true}dColor={'rgba(187, 188, 122, 0.6)'}datas={[...data,...data2,...data3,...data4,...data5,...data6]} />

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

      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}