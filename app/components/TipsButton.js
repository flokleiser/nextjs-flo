'use client'
import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import styles from 'app/page.module.css'
import {AnimatePresence, motion} from "framer-motion";
import {Tooltip} from "@nextui-org/tooltip";

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
        
        const randomIndex = Math.floor(Math.random() * tips.length);
        const randomTip = tips[randomIndex];
        setRandomTip(randomTip);
        };

  return (
    <div>
      <Tooltip
       showArrow
       content="Press this for a random tip on how to create your own art"
       delay={0}
       placement="top"
       closeDelay={0}
       classNames={{
        base: ["bg-[#78716c]/50 rounded-md"],
        content: ["py-0.5 px-1 shadow-xl text-white",
        "rounded-md" ]
       }}
       >
      <button className={styles.buttonNew} style={{position:'absolute', justifyContent:'center',  backgroundColor:'rgb(50,50,50)', color:'white', marginTop:'10px'}} onClick={handleToggleClick}>
       {randomTip ? randomTip : "Tips:"}
      </button>
      </Tooltip>
      </div>
  );
};
