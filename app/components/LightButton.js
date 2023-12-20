'use client'

import React from 'react';
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";

export default function LightButton() {
    const [isDim, setDim] = useState(false);
   
    const handleToggleClick = () => {
        setDim(!isDim);
        };

  return (
    <div>
      <button className="absolute mt-3 ml-3 align-right bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
      style={{ zIndex: 53}}
      
      onClick={handleToggleClick}>
        {isDim? <LuLightbulb style={{ fontSize: '2rem' }}/> : <LuLightbulbOff style={{ fontSize: '2rem' }} />}
      </button>


<AnimatePresence>
      {isDim && (
        <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[47]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        
        style={{
          backdropFilter: `blur(10px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}>
      
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  );
};

