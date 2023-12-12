'use client'
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import styles from 'app/page.module.css'
import {AnimatePresence, motion} from "framer-motion";

export default function TipsButton() {

    const tips = [
        'Try pressing "w", "t", "spacebar" and move the mouse around',
        'Try pressing "g", "2", "q" and "spacebar"',
        'Try pressing "x", "1" and "spacebar"',
        'Try pressing "3", "n", "k" and "spacebar"',
        'Try pressing "h", "1", "e" and "spacebar"',
        'Try pressing "r", "t", "b", "w" "spacebar" and move the mouse around (optional: "s")',
        'Try pressing "7", "n","k" and "spacebar',
      ];

    const [randomTip, setRandomTip] = useState("");
   
    const handleToggleClick = () => {
        // setVisible(!isVisible);
        
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex];
        setRandomTip(randomTip);
        };

  return (
    <div>
      <button className={styles.buttonNew} onClick={handleToggleClick}>
       {randomTip ? randomTip : "Tips:"}
      </button>
      </div>
  );
};
