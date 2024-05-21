"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import dynamic from 'next/dynamic'

import cad1 from "/public/images/cad/cad parts2.webp"
import cad2 from "/public/images/cad/cad parts1.webp"
import cad3 from "/public/images/cad/cad parts3.webp"

import cad4 from "/public/images/cad/cadknife4.webp"
import cad5 from "/public/images/cad/cadknife2.webp"
import cad6 from "/public/images/cad/cadknife1.webp"
import cad7 from "/public/images/cad/cadknife3.webp"

import cad8 from "/public/images/cad/popsicle1.webp"
import cad9 from "/public/images/cad/popsicle2.webp"





// const ImageGallery = dynamic(() => 
//   import( "@/app/components/ImageGallery")
// )
const ImageGalleryStatic = dynamic(() => 
  import( "@/app/components/ImageGalleryStatic")
)


const ModelViewer = dynamic(() => import("@/app/components/ModelViewer"))


const modelPaths = [
  "/stl/butterfly_open.glb",
  "/stl/butterfly_closed.glb"
]

const data2 = [
  // { image: "/images/cad/cad parts2.webp", id: 1,description: "Individual parts nr. 1", },
  // { image: "/images/cad/cad parts1.webp",id: 2,description: "Individual parts nr. 2",},
  // { image: "/images/cad/cad parts3.webp", id: 3, description: "Assembly" },
  {image:cad1, imageBig: "/images/cad/cad parts2.webp", id: 1,description: "Individual parts nr. 1", },
  {image:cad2,imageBig: "/images/cad/cad parts1.webp",id: 2,description: "Individual parts nr. 2",},
  {image:cad3,imageBig: "/images/cad/cad parts3.webp", id: 3, description: "Assembly" },
];

const data3 = [
  // { image: "/images/cad/cadknife4.webp", id: 4 },
  // { image: "/images/cad/cadknife2.webp", id: 5 },
  // { image: "/images/cad/cadknife1.webp", id: 6 },
  // { image: "/images/cad/cadknife3.webp", id: 7 },
  {image:cad4,imageBig: "/images/cad/cadknife4.webp", id: 4 },
  {image:cad5,imageBig: "/images/cad/cadknife2.webp", id: 5 },
  {image:cad6,imageBig: "/images/cad/cadknife1.webp", id: 6 },
  {image:cad7,imageBig: "/images/cad/cadknife3.webp", id: 7 },
];

const data4 = [
  // { image: "/images/cad/popsicle1.webp", id: 8 },
  // { image: "/images/cad/popsicle2.webp", id: 9 },
  {image:cad8,imageBig: "/images/cad/popsicle1.webp", id: 8 },
  {image:cad9,imageBig: "/images/cad/popsicle2.webp", id: 9 },
];

export default function cad() {



  const [currentIndex, setCurrentIndex] = useState(0)

  const handleModelChange = (index) => {
    setCurrentIndex(index);
    console.log(index, modelPaths[index])
  };


  useEffect(() => {
    document.title = "Projects - CAD";
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

      <div className={styles.linkContainerCad}>
        <h1 className={styles.title}>Butterfly CAD</h1>

        {/* <div style={{ padding: "1rem" }} /> */}

        <div className={styles.subtitledescription}>
          <p>
            A balisong (butterfly knife) designed in onshape.com, rendered in
            Blender, and built using popsicle sticks and hot glue.
          </p>
        </div>


          <div style={{ padding: "1rem" }} />

          <div className={styles.linkContainerCADModel}>
            <ModelViewer modelPaths={modelPaths[currentIndex]}intensity={5}/>

            <div className={styles.cadModelButtons}>
              <button className={styles.buttonCad} onClick={() => handleModelChange(0)}>                 
                <h1> Open</h1> 
              </button>

              <button className={styles.buttonCad} onClick={() => handleModelChange(1)}>
                <h1> Closed </h1>
              </button>
            </div>
          </div>


        <div style={{ padding: "2rem" }} />
        {/* <hr className={styles.pageDividerCad} /> */}
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1rem" }} />

        <div styles={{ padding: "2rem" }}> </div>

        <div style={{ padding: "1rem" }} />

        <motion.div
          className={styles.linkContainerLinks}
          style={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            whileInView={{ translateX: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className={styles.linkContainerImage}
            style={{
              filter: "blur(20px)",
              translateX: -100,
              backgroundImage: "url('/images/cad/cadimage.webp')",
              opacity: 1,
            }}
          />
          <motion.div className="flex-col mx-11">
            <div className={styles.buttonLinksPageCad}>
              <div className={styles.subtitledescription}>
                <p>
                  <a
                    href="https://cad.onshape.com/documents/74ceed200a5aa4f63a77c82e/w/2cd4c25834f626e76cd4c9af/e/d0d97ca62557a0c79fb7dfc5?renderMode=0&uiState=6567658f98467778680c9faf"
                    target="_blank"
                  >
                    <Image
                      src="/svg/onshape.svg"
                      alt="Onshape Logo"
                      className={styles.vercelLogo}
                      style={{ filter: "invert(100%)" }}
                      width={50}
                      height={24}
                      priority
                    />
                    cad.onshape.com
                  </a>
                </p>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} />
            <div className="max-w-prose ">
              <p className={styles.subtitledescription}>
                The project on OnShape
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div style={{ padding: "1rem" }} />
        {/* <hr className={styles.pageDividerCad} /> */}
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Assembly process/individual parts</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

<ImageGalleryStatic data={data2}w={400}h={400}datas={[...data2,...data3,...data4]}desc={false} />

        <div styles={{ padding: "2rem" }}> </div>

        {/* <div className={styles.pageDividerCad} /> */}
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Completed CAD design</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

        <ImageGalleryStatic data={data3}w={400}h={400}datas={[...data2,...data3,...data4]}desc={false} />

        <div styles={{ padding: "2rem" }}> </div>

        {/* <div className={styles.pageDividerCad} /> */}
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Prototypes out of popsicle sticks</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

        <ImageGalleryStatic data={data4}w={400}h={400}datas={[...data2,...data3,...data4]}desc={false} />

      </div>

      {/* <div style={{ padding: "2rem" }}> </div> */}
      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
