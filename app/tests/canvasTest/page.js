"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import dynamic from "next/dynamic";
// import ModelViewer from "@/app/components/ModelViewer"
import handleModelChange from "@/app/components/ModelViewer"

const ModelViewer = dynamic(() => 
  import( "@/app/components/ModelViewer")
)

const modelPaths = [
  "/stl/butterfly_open.glb",
  "/stl/flowers/tulip_both.glb",
];

function Model({modelPath}){
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
  <spotLight ref={light} position={[0,0,15]} intensity={5} distance={10} angle={Math.PI / 4} penumbra={0.5} />
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
        <h1 className={styles.title}>Canvas Test</h1>

        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1.5rem" }} />

        <div style={{ display: "flex" }}>
          <div className={styles.linkContainerFlowerModel}>

{/* <ModelViewer modelPaths={modelPaths[currentIndex]}intensity={1}/> */}
        <Canvas 
        >
            <directionalLight color="white" position={[2, 0, 5]} />
            <ambientLight intensity={0.3}/>
            <OrbitControls
            minPolarAngle={1}
            maxPolarAngle={1.5}
            minAzimuthAngle={0}
            maxAzimuthAngle={1}
            panSpeed={0.5}
            // enableDamping="true"
            // dampingFactor={0.075}

//implement maxZoom, minZoom
//implement panSpeed
//implement dampingFactor

            />
            <Model modelPath={modelPaths[currentIndex]} />
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
      </div>
      {/* <div style={{ padding: "2rem" }} /> */}
      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
