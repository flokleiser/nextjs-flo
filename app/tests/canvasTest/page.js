"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import React, { useState, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OrthographicCamera } from "@react-three/drei";
import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Stats } from "@react-three/drei";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import dynamic from "next/dynamic";
import { Orbit } from "next/font/google";

import { Mesh, PlaneGeometry, MeshStandardMaterial } from 'three';
import { Color } from 'three';

import { TextureLoader } from 'three';


const ModelViewer = dynamic(() => 
  import( "@/app/components/ModelViewer")
)
// const modelPath = "/stl/space/SciFi-Animation10.glb"
// const modelPath = "/stl/space/SciFi-Animation11.glb"
// const modelPath = "/stl/space/SciFi-Animation clouds.glb"
const modelPath = "/stl/space/AnimationTest2.glb"

function Clouds() {
  const cloudRef = useRef();
  const cloudTexture = useLoader(TextureLoader, "/stl/space/cloud.png");

  useEffect(() => {
    if (cloudRef.current) {
      cloudRef.current.material.transparent = true;
    }
  }, [cloudTexture]);

  return (
        <mesh
          ref={cloudRef}
          // position={[Math.random() * 100 - 50, -20, Math.random() * 100 - 50]}
          rotation={[-Math.PI / 2, 0, 0]} position={[0, -17, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial map={cloudTexture} opacity={0.8} />
        </mesh>
  );
}

function Model({modelPath}){
  const gltf = useLoader(GLTFLoader, modelPath)
  const mixer = useRef();

  useEffect(() => {
    mixer.current = new AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      mixer.current.clipAction(clip).play();
    });
    gltf.scene.background = new Color('purple');
  }, [gltf]);

  useFrame((state, delta) => mixer.current?.update(delta));

  const prim = useRef();
  const light = useRef();


  // const scene = new THREE.Scene();
  // scene.background = new Color('skyblue');

  return (
    <>

  <primitive object={gltf.scene} position={[0, -17, 0]} rotation={[0,0.8,0]}/>;

  <spotLight ref={light} position={[0,0,0]} intensity={20} distance={10} />
  </>
  );
}

 

export default function canvasTest() {
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

        <Canvas style={{width:'100vw', height:'89.5vh'}}
         orthographic camera={{ zoom: 50, position: [0, 0, 100], far: 5000 }}
        >
            <directionalLight color="white" position={[2, 0, 5]} />
            <ambientLight intensity={1}/>
            <OrbitControls
            maxPolarAngle={2}
            minAzimuthAngle={-1}
            maxAzimuthAngle={1}
            minZoom={40}
            />
            <Model modelPath={modelPath}/>


        </Canvas>
    </main>
  );
}
