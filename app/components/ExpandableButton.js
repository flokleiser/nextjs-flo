"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState,} from "react";
import styles from "app/page.module.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {Tooltip} from "@nextui-org/tooltip";

export default function ExpandableButton({ children }) {
  const [isExpanded, setExpanded] = useCycle(false, true);

  // const buttonVariants = {
  //   closed: {width:'auto'},
  //   open: {width:'auto'}
  // }

  const childrenVariants = {
    open: {opacity: 1, 
      scale:1,
      height:10
    },
    closed: { opacity:0, 
      scale:0
    }
  };

  return (
    // <div className="flex flex-col justify-center">
    <div className="flex flex-col items-center" >

    <Tooltip
      showArrow={true}
       content={isExpanded ? "Hide pseudo code" : "Show pseudo code"}
       placement="top"
       delay={0}
       closeDelay={0}
       classNames={{
        base: [
        "bg-white",
        "bg-[#78716c]/50 rounded-md",
        ],
        content: [
        "py-0.5 px-1 shadow-xl text-white",
        "rounded-md" 
        ]
       }}
       >

      <motion.button
      // variants={buttonVariants}
      // initial="closed"
      // animate="open"
      // exit="closed"
      className={styles.expandableButtonNew}
      onClick={setExpanded}>
        {isExpanded ? 
          <IoIosArrowDown style={{ fontSize: "1.5rem"}} />
         : 
          <IoIosArrowUp style={{ fontSize: "1.5rem"}} />
        }
      </motion.button>
      </Tooltip>

      <AnimatePresence>
        {isExpanded && (
      // <motion.div className="flex flex-col justify-center"
      <motion.div
      initial="closed"
      animate="open"
      exit="closed"
      // transition="duration(0.1)"
      variants={childrenVariants}
      >
        <motion.div 
        animate={{}}>
          {children} 
        </motion.div>
      </motion.div>
        )}
        </AnimatePresence>
    </div>
  );
}
