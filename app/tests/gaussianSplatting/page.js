"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import SplatManager from "@/app/components/SplatManager";

export default function gaussianSplatting() {

  useEffect(() => {
    document.title = "Gaussian";
  }, []);

  useEffect(() => {
    const splatManager = new SplatManager();
    
    return () => {
        splatManager.renderer.domElement.remove();
    };
}, []);

  return (
    <main className={styles.main}>
    </main>
  );
}


// "use client";
// import styles from "app/page.module.css";
// import Link from "next/link";
// import React, { useState, useEffect, useMemo, useRef } from "react";
// import * as THREE from "three";
// import { Canvas, useFrame, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { WebGLRenderer, PerspectiveCamera, Scene } from 'three';
// import { LumaSplatsThree, LumaSplatsSemantics } from '@lumaai/luma-web';


// const modelPaths = [
//   'https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a',
//   "https://lumalabs.ai/embed/dda54514-b5b8-4675-8d4c-a2590acbe399",
//   "https://lumalabs.ai/embed/66bcf4a4-ddbd-4c53-9d89-93f39a943dba",
//   "https://lumalabs.ai/embed/2c100df7-a93d-4893-9430-fbf9715e012d",
//   "https://lumalabs.ai/embed/f3fa6a0c-de07-4f58-b395-f75f993c1d6f",
//   "https://lumalabs.ai/embed/2a7c971c-fb52-4aca-b7c3-117a9e1016a0",
// ];

// modelPaths.onload = console.log('loaded');


// function Model({modelPath}) {
//   const {scene} = useLoader(WebGLRenderer, modelPath)
//   const copiedScene = useMemo(() => scene.clone(),[scene]);
//   const prim = useRef();
//   const light = useRef();


//   useFrame(({ camera }) => {
//     light.current.position.copy(camera.position);
//     light.current.rotation.copy(camera.rotation);
//   });

//   return (
//     <>
//   <primitive ref={prim} object={copiedScene}  />
//   <spotLight ref={light} position={[0,0,15]} intensity={20} distance={10} angle={Math.PI / 4} penumbra={0.5} />
//   </>
//   );
// }


// export default function flowers() {
//   useEffect(() => {
//     document.title = "Projects - Spring Flowers";
//   }, []);

//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handleModelChange = (index) => {
//     setCurrentIndex(index);
//     console.log(index, modelPaths[index])
//   };
  


//   return (
//     <main className={styles.main}>
//       <div
//         className="relative 
//    flex 
//    place-items-center 
//    before:absolute 
//    before:h-[300px] 
//    before:w-[480px] 
//    before:-translate-x-1/2 
//    before:rounded-full 
//    before:bg-gradient-radial 
//    before:from-white 
//    before:to-transparent 
//    before:blur-2xl 
//    before:content-[''] 
//    after:absolute 
//    after:-z-20 
//    after:h-[180px] 
//    after:w-[240px] 
//    after:translate-x-1/3 
//    after:bg-gradient-conic 
//    after:from-sky-200 
//    after:via-blue-200 
//    after:blur-2xl 
//    after:content-[''] 
//    before:dark:bg-gradient-to-br 
//    before:dark:from-transparent 
//    before:dark:to-blue-700 
//    before:dark:opacity-10 
//    after:dark:from-sky-900 
//    after:dark:via-[#0141ff] 
//    after:dark:opacity-40 
//    before:lg:h-[360px] 
//    z-[-1]"
//       ></div>

//       {/* <div
//         className={styles.backbutton}
//         style={{ position: "fixed", zIndex: 9999 }}
//       >
//         <h1>
//           {" "}
//           <Link href="/projects">Back to Projects </Link>{" "}
//         </h1>
//       </div> */}

//       <div style={{ paddingTop: "1rem" }} />



//         <div style={{ display: "flex" }}>
//           <div className={styles.linkContainerFlowerModel}>
//             <Canvas>
//               <directionalLight color="white" position={[2, 0, 5]} />
//               <ambientLight intensity={0.3}/>
//               <OrbitControls />
//               <Model modelPath={modelPaths[currentIndex]}/>
//             </Canvas>
//           </div>

//           {/* <div className={styles.flowerButtonDiv}>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(0)}>
//                 <h1> Snowdrop</h1>
//               </button>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(1)}>
//                 <h1> Tulip </h1>
//               </button>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(2)}>
//                 <h1> Daffodil</h1>
//               </button>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(3)}>
//                 <h1> Rose </h1>
//               </button>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(4)}>
//                 <h1> Sunflower</h1>
//               </button>

//               <button className={styles.flowerButton} onClick={() => handleModelChange(5)}>
//                 <h1> Ivy</h1>
//               </button>

//           </div> */}
          


// </div>
//     </main>
//   );
// }
