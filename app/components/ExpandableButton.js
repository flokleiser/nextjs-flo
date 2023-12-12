'use client'
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import styles from 'app/page.module.css'
import {AnimatePresence, motion} from "framer-motion";

export default function ExpandableButton({ children }) {
    const [isVisible, setVisible] = useState(false);
   
    const handleToggleClick = () => {
        setVisible(!isVisible);
        };

  return (
    <div>
      <button className={styles.buttonNew} 
      onClick={handleToggleClick}>
        {isVisible ? <IoIosArrowDown style={{filter:'invert(100%)', fontSize: '1.5rem' }}/> : <IoIosArrowUp style={{filter:'invert(100%)', fontSize: '1.5rem' }} />}
      </button>

      {isVisible && (
        <AnimatePresence>
        <motion.div>
      {children}
        </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};
