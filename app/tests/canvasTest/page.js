"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import dynamic from "next/dynamic";
import handleModelChange from "@/app/components/ModelViewer"

const ModelViewer = dynamic(() => 
  import( "@/app/components/ModelViewer")
)

const modelPaths = [
  "/stl/3dVisualisation2.glb",
];


function Model({modelPath}){
  const {scene} = useLoader(GLTFLoader, modelPath)
  const copiedScene = useMemo(() => scene.clone(),[scene]);
  const prim = useRef();
  const light = useRef();

  camera = new THREE.OrthographicCamera

  // cameraOrtho = new THREE.OrthographicCamera( 0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 150, 1000 );



  useFrame(({ camera }) => {
    light.current.position.copy(camera.position);
    light.current.rotation.copy(camera.rotation);
  });

  return (
    <>
  <primitive ref={prim} object={copiedScene} position={[0,-15,-5]} rotation={[0,0.7,0]} />
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
        <h1 className={styles.title}>Canvas Test</h1>

        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "1.5rem" }} />

        <div style={{ display: "flex" }}>
          <div className={styles.linkContainerFlowerModel}>

        <Canvas 
        >
            <directionalLight color="white" position={[2, 0, 5]} />
            <ambientLight intensity={0.3}/>
            <camera/>
            <OrbitControls
            minPolarAngle={1}
            maxPolarAngle={1.5}
            minAzimuthAngle={-0.5}
            maxAzimuthAngle={0.5}
            panSpeed={0.5}
            // enableDamping="true"
            // dampingFactor={0.075}

//implement maxZoom, minZoom
//implement panSpeed
//implement dampingFactor

//check out https://drei.pmnd.rs/?path=/docs/gizmos-gizmohelper--docs

            />
            <Model modelPath={modelPaths[currentIndex]} />
            </Canvas>

          </div>




        </div>

        <div style={{ padding: "1rem" }} />
      </div>
      {/* <div style={{ padding: "2rem" }} /> */}
      <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
