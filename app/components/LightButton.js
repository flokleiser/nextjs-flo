'use client'

import React from 'react';
import { useState } from "react";
import styles from 'app/page.module.css'
import {AnimatePresence, motion} from "framer-motion";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";

export default function LightButton() {
    const [isDim, setDim] = useState(false);
    let isNewDim = true;
   
    const handleToggleClick = () => {
        setDim(!isDim);
        isNewDim = true;
        };

  return (
    <div>
      <button className="absolute mt-4 ml-4 align-right bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
      style={{ zIndex: 52}}
      onClick={handleToggleClick}>
        {isDim? <LuLightbulb style={{ fontSize: '2rem' }}/> : <LuLightbulbOff style={{ fontSize: '2rem' }} />}
      </button>

      {isDim && (
        <div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-75 transition-transform duration-300 z-50">
        {/* style={{
          backdropFilter: `blur(${isDim ? '10px' : '0px'}px)`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.75,
        }}> */}
        </div>
       
      )}

    </div>
  );
};

