"use client";
import styles from "@/app/page.module.css";
import * as THREE from "three";
import React, { useState, useEffect, useMemo, useRef } from "react";
import PropTypes from 'prop-types';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Model({modelPath, i}){
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
    <spotLight ref={light} position={[0,0,15]} intensity={i} distance={10} angle={Math.PI / 4} penumbra={0.5} />
    </>
    );
}


const ModelViewer = ({modelPaths, intensity}) => {

    ModelViewer.propTypes = {
        modelPaths: PropTypes.array.isRequired,
        intensity: PropTypes.number.isRequired
    }

        return( 
        <Canvas>
            <directionalLight color="white" position={[2, 0, 5]} />
            <ambientLight intensity={0.3}/>
            <OrbitControls />
            <Model modelPath={modelPaths}i={intensity}/>
        </Canvas>
        )

    }
export default ModelViewer