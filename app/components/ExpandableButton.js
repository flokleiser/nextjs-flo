"use client";
import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState,} from "react";
import styles from "app/page.module.css";
import { AnimatePresence, motion, useCycle } from "framer-motion";

export default function ExpandableButton({ children }) {
  const [isExpanded, setExpanded] = useCycle(false, true);

  const childrenVariants = {
    open: {opacity: 1, 
      // width:"100%"
      // width:"auto"
      // height:"100%"
      scale:1
    },
    closed: { opacity:0, 
      // width:"0%"
      // height:"0%"
      scale:0
    }
  };

  return (
    <div>
      <button
        className={styles.buttonNew}
        // onClick={() => setExpanded((isExpanded) => !isExpanded)}>
        onClick={setExpanded}>
         {isExpanded ? 
          <IoIosArrowDown style={{ fontSize: "1.5rem" }} />
         : 
          <IoIosArrowUp style={{ fontSize: "1.5rem" }} />
        }
      </button>

      <AnimatePresence>
        {isExpanded && (
      <motion.div className="flex flex-col justify-center"
      // className={styles.linkContainer}
      initial="closed"
      animate="open"
      exit="closed"
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
