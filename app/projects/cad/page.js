"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ImageGallery from "@/app/components/ImageGallery";


function Model({modelPath}) {
  const {scene} = useLoader(GLTFLoader, modelPath)
  const copiedScene = useMemo(() => scene.clone(),[scene]);
  const prim = useRef();
  const light = useRef();

  useFrame(({ camera }) => {
    light.current.position.copy(camera.position);
    light.current.rotation.copy(camera.rotation);
  });
  return (
    <>
  <primitive ref={prim} object={copiedScene}  />
  <spotLight ref={light} position={[0,0,15]} intensity={1} distance={10} angle={Math.PI / 4} penumbra={0.5} />
  </>
  );

  // return <primitive ref={prim} object={copiedScene} />;
}

const data2 = [
  {
    image: "/images/cad/cad parts2.png",
    id: 1,
    description: "Individual parts nr. 1",
  },
  {
    image: "/images/cad/cad parts1.png",
    id: 2,
    description: "Individual parts nr. 2",
  },
  { image: "/images/cad/cad parts3.png", id: 3, description: "Assembly" },
];

const data3 = [
  { image: "/images/cad/cadknife4.png", id: 4 },
  { image: "/images/cad/cadknife2.png", id: 5 },
  { image: "/images/cad/cadknife1.png", id: 6 },
  { image: "/images/cad/cadknife3.png", id: 7 },
];

const data4 = [
  { image: "/images/cad/popsicle1.png", id: 8 },
  { image: "/images/cad/popsicle2.png", id: 9 },
];

export default function cad() {
  const [modelPath, setModelPath] = useState('/stl/butterfly_open.glb');
  const [modelOpen, setModelOpen] = useState(false);
  const toggleModel= () => {
    setModelPath(currentPath => 
      currentPath === "/stl/butterfly_open.glb" ? "/stl/butterfly_closed.glb" : "/stl/butterfly_open.glb"
    );
    setModelOpen(!modelOpen);
    console.log(modelOpen)
    console.log(modelPath)
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

      <div
        className={styles.backbutton}
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <h1>
          {" "}
          <Link href="/projects">Back to Projects </Link>{" "}
        </h1>
      </div>
      <div style={{ paddingTop: "1rem" }} />

      <div className={styles.linkContainerCad}>
        <h1 className={styles.titleWithoutPaddingCad}>Computer Aided Design</h1>

        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>
            A balisong (butterfly knife) designed in onshape.com, rendered in
            Blender, and built using popsicle sticks and hot glue.
          </p>
        </div>


          <div style={{ padding: "1rem" }} />

          <div className={styles.linkContainerCADModel}>
            <Canvas>
              {/* <ambientLight intensity={0.5} /> */}
              {/* <spotLight position={[0, 0, 0]} /> */}
              <directionalLight color="white" position={[2, 0, 5]} />
              <OrbitControls />
              <Model modelPath={modelPath}/>
            </Canvas>

            <div className={styles.cadModelButtons}>
              <button className={styles.buttonCad} onClick={toggleModel}>
              {modelOpen? (
                <h1> Open</h1>
                  ) : (
                    <h1> Close</h1>
                  )}
              </button>
            </div>
          </div>


        <div style={{ padding: "2rem" }} />
        {/* <hr className={styles.pageDivider} /> */}
        <hr className={styles.pageDividerCad} />
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
              backgroundImage: "url('/images/cad/cadimage.png')",
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
        {/* <hr className={styles.pageDivider} /> */}
        <hr className={styles.pageDividerCad} />
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Assembly process/individual parts</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

<ImageGallery data={data2} />

        <div styles={{ padding: "2rem" }}> </div>

        <div className={styles.pageDividerCad} />
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Completed CAD design:</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

        <ImageGallery data={data3} />

        <div styles={{ padding: "2rem" }}> </div>

        <div className={styles.pageDividerCad} />
        {/* <div className={styles.pageDividerDark} /> */}
        <div style={{ padding: "1rem" }} />

        <div className={styles.subtitledescription}>
          <p>Prototypes out of popsicle sticks</p>
        </div>

        <div styles={{ padding: "2rem" }}> </div>

        <ImageGallery data={data4} />

      </div>

      <div style={{ padding: "2rem" }}> </div>
    </main>
  );
}
