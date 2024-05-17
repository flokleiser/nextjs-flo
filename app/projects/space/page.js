"use client";
import styles from "@/app/page.module.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import dynamic from "next/dynamic";

import { Mesh, PlaneGeometry, MeshStandardMaterial } from 'three';
import { Color } from 'three';


const ImageGallery = dynamic(() => import('@/app/components/ImageGallery'))


// const ModelViewer = dynamic(() => 
//   import( "@/app/components/ModelViewer")
// )

const data = [
    {image: '/images/illustrator/wallpaper/full.webp', id:1},
  ]
  
  const data2= [
    {image: '/images/illustrator/wallpaper/center 1.webp', id:2},
    {image: '/images/illustrator/wallpaper/vehicles.webp', id:3},
  ]
  
  const data3= [
    {image: '/images/illustrator/wallpaper/skyline.webp', id:4},
    {image: '/images/illustrator/wallpaper/buildings.webp', id:5},
  ]


// const modelPath = "/stl/SciFi-Animation8.glb"
// const modelPath = "/stl/space/SciFi-Animation9.glb"
const modelPath = "/stl/space/SciFi-Animation11.glb"

function Model({modelPath}){
  const gltf = useLoader(GLTFLoader, modelPath)
  const mixer = useRef();
  gltf.background = new Color("purple");

  useEffect(() => {
    mixer.current = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
  }, [gltf]);

  useFrame((state, delta) => mixer.current?.update(delta));

  const prim = useRef();
  const light = useRef();


  // const scene = new THREE.Scene();
  // scene.background = new Color('skyblue');

  return (
    <>

  <primitive object={gltf.scene} position={[0, -17, 0]} rotation={[0,0.8,0]}/>;

  <spotLight ref={light} position={[0,0,0]} intensity={50} distance={10} />
  </>
  );
}

 

export default function space() {
  useEffect(() => {
    document.title = "Projects - Space";
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
      <div className={styles.linkContainerSpace}>

      <h1 className={styles.title}> Space</h1>


<div className={styles.subtitledescription}>
  <p>
    A wallpaper i designed in Adobe Illustrator, and afterwards recreated and  <br />
    animated in Blender. 
    Inspired by artwork from Tyler Pate (@thecreativepain)
  </p>
</div>

<div style={{padding:'1rem'}} />
      <div style={{ padding: "0.5rem" }} />
<hr className={styles.pageDivider} />
{/* <div style={{ padding: "0.5rem" }} /> */}



<div className='flex flex-row items-center'>
            <ImageGallery data={data}w={900}h={900}datas={[...data,...data2,...data3]}desc={false} />
            <ImageGallery data={data2}w={175}h={175}datas={[...data,...data2,...data3]}vertical={true}desc={false} />
            <ImageGallery data={data3}w={175}h={175}datas={[...data,...data2,...data3]}vertical={true}desc={false} />
           
           </div>
          


            {/* <div style={{ padding: "0.5rem" }} /> */}
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />


<div className={styles.linkContainerSpaceModel}>
        <Canvas 
        // style={{width:'100vw', height:'89.5vh'}}
         orthographic camera={{ zoom: 25, position: [0, 0, 100], far: 5000 }}
        >
            <directionalLight color="white" position={[2, 0, 5]} />
            <ambientLight intensity={1}/>
            <OrbitControls />
            <Model modelPath={modelPath}/>


        </Canvas>

</div>

<div style={{ padding: "0.5rem" }}> </div>

        </div>
        <div style={{ padding: "0.5rem" }}> </div>
    </main>
  );
}
