"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import dynamic from "next/dynamic";

const ImageGallery = dynamic(() => import('@/app/components/ImageGallery'))


const data = [
  { image: "/images/illustrator/flowers/snowdrop.png", id: 0 },
  { image: "/images/illustrator/flowers/tulip.png", id: 1 },
  { image: "/images/illustrator/flowers/daffodil.png", id: 2 },
  { image: "/images/illustrator/flowers/rose.png", id: 3 },
  { image: "/images/illustrator/flowers/sunflower.png", id: 4 },
  { image: "/images/illustrator/flowers/ivy.png", id: 5 },
];

const modelPaths = [
  "/stl/flowers/snowdrop_both.glb",
  "/stl/flowers/tulip_both.glb",
  "/stl/flowers/daffodil_both.glb",
  "/stl/flowers/rose_both.glb",
  "/stl/flowers/sunflower_both.glb",
  "/stl/flowers/ivy_both.glb",
];

modelPaths.onload = console.log('loaded');


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
  <spotLight ref={light} position={[0,0,15]} intensity={20} distance={10} angle={Math.PI / 4} penumbra={0.5} />
  </>
  );
}


export default function flowers() {
  useEffect(() => {
    document.title = "Projects - Spring Flowers";
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleModelChange = (index) => {
    setCurrentIndex(index);
    console.log(index, modelPaths[index])
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


      <div style={{ paddingTop: "1rem" }} />
      <div className={styles.linkContainerFlowers}>
        {/* <h1 className={styles.titleWithoutPadding}>Flowers</h1> */}
        <h1 className={styles.title}>Flowers</h1>

        <div className={styles.subtitledescription}>
          <p>
            Minimalistic flowers designed in Adobe Illustrator, converted to STL
            files with blender, and 3D printed to use as a frame for making
            postcards.
          </p>
        </div>

        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <ImageGallery data={data} />

        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1.5rem" }} />

        <div style={{ display: "flex" }}>
          <div className={styles.linkContainerFlowerModel}>
            <Canvas>
              <directionalLight color="white" position={[2, 0, 5]} />
              <ambientLight intensity={0.3}/>
              <OrbitControls />
              <Model modelPath={modelPaths[currentIndex]}/>
            </Canvas>
          </div>

          <div className={styles.flowerButtonDiv}>

              <button className={styles.flowerButton} onClick={() => handleModelChange(0)}>
                <h1> Snowdrop</h1>
              </button>

              <button className={styles.flowerButton} onClick={() => handleModelChange(1)}>
                <h1> Tulip </h1>
              </button>

              <button className={styles.flowerButton} onClick={() => handleModelChange(2)}>
                <h1> Daffodil</h1>
              </button>

              <button className={styles.flowerButton} onClick={() => handleModelChange(3)}>
                <h1> Rose </h1>
              </button>

              <button className={styles.flowerButton} onClick={() => handleModelChange(4)}>
                <h1> Sunflower</h1>
              </button>

              <button className={styles.flowerButton} onClick={() => handleModelChange(5)}>
                <h1> Ivy</h1>
              </button>

          </div>
          

        </div>

        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <div style={{ padding: "1rem" }} />
      </div>
      <div style={{ padding: "2rem" }} />
    </main>
  );
}
