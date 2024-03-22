"use client";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SpotLight, AmbientLight, PointLight, DirectionalLight } from "three";
import { AnimatePresence, motion } from "framer-motion";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import ImageGallery from "@/app/components/ImageGallery";

const data = [
  { image: "/images/illustrator/flowers/snowdrop.png", id: 0 },
  { image: "/images/illustrator/flowers/tulip.png", id: 1 },
  { image: "/images/illustrator/flowers/daffodil.png", id: 2 },
  { image: "/images/illustrator/flowers/rose.png", id: 3 },
  { image: "/images/illustrator/flowers/sunflower.png", id: 4 },
  { image: "/images/illustrator/flowers/ivy.png", id: 5 },
];

function Model() {

  // const gltf = useLoader(GLTFLoader, "/stl/flowers/snowdrop_both.glb");
  // const gltf = useLoader(GLTFLoader, "/stl/flowers/tulip_both.glb");
  // const gltf = useLoader(GLTFLoader, "/stl/flowers/daffodil_both.glb");
  // const gltf = useLoader(GLTFLoader, "/stl/flowers/rose_both.glb");
  // const gltf = useLoader(GLTFLoader, "/stl/flowers/sunflower_both.glb");
  // const gltf = useLoader(GLTFLoader, "/stl/flowers/ivy_both.glb");


    const gltf = useLoader(GLTFLoader, modelPath);



  const material = new THREE.MeshStandardMaterial({
    color: "white",
    side: THREE.DoubleSide,
  });


  return <primitive object={gltf.scene} />;
}


// [modelPath, setModelPath] => string
// const switchModelPath(){

// }

export default function flowers() {
  useEffect(() => {
    document.title = "Projects - Spring Flowers";
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
      <div className={styles.linkContainerFlowers}>
        <h1 className={styles.titleWithoutPadding}>Flowers</h1>

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
              <spotLight position={[0, 0, 15]} />
              <directionalLight color="white" position={[2, 0, 5]} />
              <OrbitControls />
              <Model />
            </Canvas>
          </div>

          <div className={styles.flowerButtonDiv}>
              <button className={styles.flowerButton}>
                <h1> Snowdrop</h1>
              </button>

              <button className={styles.flowerButton}>
                <h1> Tulip </h1>
              </button>

              <button className={styles.flowerButton}>
                <h1> Daffodil</h1>
              </button>

              <button className={styles.flowerButton}>
                <h1> Rose </h1>
              </button>

              <button className={styles.flowerButton}>
                <h1> Sunflower</h1>
              </button>

              <button className={styles.flowerButton}>
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
