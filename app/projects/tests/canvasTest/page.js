"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "app/page.module.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SpotLight, AmbientLight, PointLight, DirectionalLight } from "three";

const light = new PointLight();
light.position.set(1, 1, 0);

export default function canvasTest() {

  useEffect(() => {
    document.title = "3D test";
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
 
      <h1 className={styles.title}>3D Models</h1>


      <div style={{ width: "75vw", height: "75vh" }}>
      {/* <Canvas camera={{ position: [0, 0, 3] }}>  */}
      <Canvas  onCreated={({ camera, scene }) => {
        camera.add(light);
        scene.add(camera);
      }}>
        <ambientLight intensity={0.25} />
        {/* <DirectionalLight color="white" position={[0,0,5]} /> */}
        <spotLight color="white" position={[0, 0, 5]} />
        <OrbitControls />
            <mesh>
            <boxGeometry args={[2,2,2]} /> 
            <meshStandardMaterial />
            </mesh>
         
      </Canvas>
      </div>

      


      <div style={{ padding: "2rem" }} />
    </main>
  );
}
