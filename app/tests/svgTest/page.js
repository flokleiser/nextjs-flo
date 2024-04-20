"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  useAnimation,
  motion,
  useAnimate,
  delay,
  easeIn,
} from "framer-motion";
import { BsX, BsList } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {Tooltip} from "@nextui-org/tooltip";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.6 } },
};

const pathTopBottom = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const pathMiddle1 = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

const pathMiddle2 = {
  open: { rotate: -45 },
  closed: { rotate: 0 },
};

const pathMiddle3 = {
  open: { transform: "translateY(-100%)" },
  closed: { transform: "translateY(0%)" },
};

const pathMiddle4 = {
  open: { transform: "translateY(100%)" },
  closed: { transform: "translateY(0%)" },
};

const pathMiddleDelay1 = {
  open: { transform: "translateY(25%)", opacity: 0 },
  closed: { transform: "translateY(0%)", opacity: 1 },
};

const pathMiddleDelay2 = {
  open: { transform: "translateY(-25%)", opacity: 0 },
  closed: { transform: "translateY(0%)", opacity: 1 },
};

const pathMiddleDelay3 = {
  open: { transform: "translateX(100%)" },
  closed: { transform: "translateX(0%)" },
};

const pathMiddleDelay4 = {
  open: { transform: "translateX(100%)" },
  closed: { transform: "translateX(0%)" },
};

const pathMiddleSwipe1 = {
  open: { transform: "translateX(300%) scale(7.2)" },
  closed: { transform: "translateX(0%) scale(1)" },
};

const pathMiddleSwipe2 = {
  open: { transform: "translateX(300%) scale(7.2)" },
  closed: { transform: "translateX(0%) scale(1)" },
};

const arrowButton = {
  open: {
    transform: "translateX(100%)",
  },
  closed: {
    transform: "translateX(0%)",
  },
};

const arrowButton2 = {
  open: { transform: "translateX(0%)" },
  closed: {
    transform: "translateX(-100%)",
  },
};

const testButtonMenu = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const testAnimationReverse = {
  initial:{pathLength:0, pathOffset:1} ,
  animate:{pathLength:1, pathOffset:0} 
}
const testAnimation = {
  initial:{pathLength:0},
  animate:{pathLength:1}
}

export default function svgTest() {
  const [testOpen, setTestOpen] = useState(false);
  const toggleTestOpen = () => {
    setTestOpen(!testOpen);
    console.log("test menu", !testOpen);
  };

  const [showNavbarTest, setShowNavbarTest] = useState(false);
  const toggleNavbarVisibilityTest = () => {
    setShowNavbarTest(!showNavbarTest);
    console.log(showNavbarTest);
  };

  useEffect(() => {
    document.title = "testing";
  }, []);

  const [key, setKey] = useState(0);
  const controls = useAnimation();

  const repeatAnimation = async () => {
    await controls.start({ pathLength: 0, pathOffset: 1 });
    controls.start({ pathLength: 1, pathOffset: 0 });
  };

  const [startAnimation, setStartAnimation] = useState(0);
  const toggleStartAnimation = () => {
    setStartAnimation(!startAnimation);
  }

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

 
      <motion.button
        className={styles.backbutton}
        style={{ position: "fixed", zIndex: 9999, display: "flex", flexDirection:"column"}}
        onClick={() => toggleTestOpen()}
      >
        <motion.svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          width={25}
          strokeWidth={0}
          style={{
            zIndex: "9999",
            width: "25px",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <motion.path
            d="M 8 8.79 l 2.65 -2.64 a 0.495 0.495 270 0 1 0.7 0.7 c -0.12 0.13 -0.24 0.25 -0.37 0.38 c -0.87 0.87 -1.75 1.75 -2.63 2.62 a 0.492 0.492 270 0 1 -0.7 0 l -3 -3 a 0.495 0.495 270 0 1 0.7 -0.7 Z"
            variants={testButtonMenu}
            initial={testOpen ? "open" : "closed"}
            animate={testOpen ? "closed" : "open"}
          />
        </motion.svg>
        </motion.button>
   


      <h1 className={styles.title}>Testing</h1>

      <div className={styles.subtitledescription}>
        <p>
         testing some buttons
        </p>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className="flex-row" style={{ display: "flex" }}>

        <Tooltip
    content="test"
    delay={0}
    closeDelay={0}
    motionProps={{
      variants : {
        exit: {
          opacity:0,
          transition: { 
            duration: 0.1, ease:"easeIn",
          }
        },
        enter : {
          opacity:1,
          transition: {
            duration:0.15, ease:"easeOut",
          }
        },
      },
    }}
    >

        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z"
              variants={pathTopBottom}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
              variants={pathTopBottom}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />
          </motion.svg>
        </motion.button>

</Tooltip>


        {/* V2 --> unfolding with delay? */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z"
              variants={pathMiddle3}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
              variants={pathMiddle4}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />
          </motion.svg>
        </motion.button>

        {/* V3 --> "unfolding" from middle */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.25 }}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.25 }}
            />

            <motion.path
              d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z"
              variants={pathMiddleDelay1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />

            <motion.path
              d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
              variants={pathMiddleDelay2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />
          </motion.svg>
        </motion.button>

        {/* V4 --> different rotate */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.5 }}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.5 }}
            />

            <motion.path
              d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z"
              variants={pathMiddleDelay3}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />

            <motion.path
              d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
              variants={pathMiddleDelay4}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />
          </motion.svg>
        </motion.button>

        {/* V5 --> variation of v4 */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.25 }}
            />

            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 H 13 A 0.5 0.5 0 0 1 13 8.5 H 3 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0 : 0.25 }}
            />

            <motion.path
              d="m 2.5 4 a 0.5 0.5 0 0 1 0.5 -0.5 h 10 a 0.5 0.5 0 0 1 0 1 h -10 a 0.5 0.5 0 0 1 -0.5 -0.5 z"
              variants={pathMiddleSwipe1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transform={{ scale: showNavbarTest ? "5" : "10" }}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />

            <motion.path
              d="M 2.5 12 A 0.5 0.5 0 0 1 3 11.5 H 13 A 0.5 0.5 0 0 1 13 12.5 H 3 A 0.5 0.5 0 0 1 2.5 12 Z "
              variants={pathMiddleSwipe2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
              transition={{ delay: showNavbarTest ? 0.25 : 0 }}
            />
          </motion.svg>
        </motion.button>

        {/* V6 --> only middle line */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 2.5 8 A 0.5 0.5 0 0 1 3 7.5 L 13 7.5 A 0.5 0.5 0 0 1 13 8.5 L 3 8.5 A 0.5 0.5 0 0 1 2.5 8 Z"
              variants={pathMiddle1}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />
          </motion.svg>
        </motion.button>

        {/* V6 --> only middle line */}
        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleNavbarVisibilityTest}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M 7.21 8 l 2.64 2.65 a 0.495 0.495 0 0 1 -0.7 0.7 c -0.13 -0.12 -0.25 -0.24 -0.38 -0.37 c -0.87 -0.87 -1.75 -1.75 -2.62 -2.63 a 0.492 0.492 0 0 1 0 -0.7 l 3 -3 a 0.495 0.495 0 0 1 0.7 0.7 Z"
              variants={arrowButton}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />

            <motion.path
              d="M 8.79 8 l -2.64 -2.65 a 0.495 0.495 180 0 1 0.7 -0.7 c 0.13 0.12 0.25 0.24 0.38 0.37 c 0.87 0.87 1.75 1.75 2.62 2.63 a 0.492 0.492 180 0 1 0 0.7 l -3 3 a 0.495 0.495 180 0 1 -0.7 -0.7 Z"
              variants={arrowButton2}
              initial={showNavbarTest ? "open" : "closed"}
              animate={showNavbarTest ? "closed" : "open"}
            />
          </motion.svg>
        </motion.button>

        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={repeatAnimation}
          whileTap={{ scale: "0.5" }}
        >
          <BsArrowClockwise
            style={{
              fontSize: "3rem",
              paddingBottom: "-0.5rem",
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
            }}
          />
        </motion.button>

        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={toggleStartAnimation}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            initial="rest"
            whileHover="hover"
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.path
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
              variants={arrow}
            />
          </motion.svg>
        </motion.button>

        <motion.button
          className="px-3 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in-out  text-zinc-100 "
          onClick={repeatAnimation}
        >
          <motion.svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            width={25}
            strokeWidth={0}
            initial="rest"
            whileHover="hover"
            style={{
              backgroundColor: "#211f1e",
              zIndex: "9999",
              border: "1px",
              borderStyle: "solid",
              borderColor: "#FFFFFF",
              borderRadius: "0.35rem",
              width: "48px",
            }}
          >
            <motion.path
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              variants={arrow}
            />
          </motion.svg>
        </motion.button>
      </div>

      <div style={{ padding: "1rem" }} />

      <div style={{ padding: "1rem" }} />

      <div className="flex flex-row">
        <Image src="/svg/skylands.svg" width={200} height={200} />
        <div style={{ padding: "2rem" }} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 1300.22 2042.41"
          style={{ width: 200 }}
          stroke="currentColor"
          fill="currentColor"
        >
          <motion.g id="Layer_1-2" data-name="Layer 1">

{/* HOUSE WALLS */}
            <motion.polyline
              fill="none"
              strokeWidth="20px"
              points="156.26 1181.31 156.26 761.14 626.85 761.14 696.47 761.14 696.47 1181.31"
              variants={testAnimation}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={{ duration: 1, repeatDelay: 2 }}
            />

{/* TOWER WALLS */}
            <motion.polygon
              fill="none"
              strokeWidth="20px"
              points="635.2 220.93 635.2 761.14 468.13 761.14 468.13 220.93 490.41 220.93 635.2 220.93"
            />

{/* TOWER SECTION */}
            <rect
              fill="none"
              strokeWidth="20px"
              x="493.19"
              y="87.27"
              width="116.95"
              height="133.66"
            />
            
{/* HOUSE ROOF */}
            <motion.polyline
              fill="none"
              strokeWidth="20px"
              points="130.5 761.14 229.22 594.76 468.13 594.76"
            />

{/* TOWER ROOF */}
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m468.13,87.27s0-77.27,83.54-77.27,83.54,77.27,83.54,77.27"
            />

{/* WINDOW 1 */}
            <motion.polyline
              fill="none"
              strokeWidth="20px"
              points="635.2 543.94 568.37 543.94 568.37 641.41 635.2 641.41"
            />

{/* WINDOW 3 */}
            <motion.rect
              fill="none"
              strokeWidth="20px"
              x="243.91"
              y="889.09"
              width="110.81"
              height="164.28"
            />

{/* DOOR */}
            <motion.rect
              fill="none"
              strokeWidth="20px"
              x="512.97"
              y="889.09"
              width="110.81"
              height="292.23"
            />

{/* WINDOW 2*/}
            <motion.polyline
              fill="none"
              strokeWidth="20px"
              points="635.2 324.66 568.37 324.66 568.37 422.12 635.2 422.12"
            />


{/* PALM TREE */}
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1080.2,761.14c-72.4,151.88-72.4,430.61-72.4,430.61" 
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? {duration: 1, delay:2}:{duration:1, delay:1}}
              />

            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m870.19,864.09s62.23-115.17,213.91-105.3" 
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}}
              />

            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m952.95,898.26s38.15-149.13,131.14-136.34"
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}} 
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1188.9,910.8s-1.87-109.75-108.7-148.09"
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}} 
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1290.82,915.31s-59.55-164.37-220.86-156.87"
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}} 
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1277.41,787.54s-101.04-90.85-233.41-26.79"
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}} 
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1094.57,754.6s-112.89-75.62-234.85,6.55"
              variants={testAnimation}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={startAnimation ? { duration: 1, delay: 3 }:{ duration: 1, delay:0}} 
            />

{/* CLOUD */}
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1110.33,1443.34c228.75,118.94-7.07,256.86-7.07,256.86,69.43,332.24-298.74,267.1-298.74,267.1-233.78,164.17-437.22-33.88-437.22-33.88-298.74,41.51-246.81-206.6-246.81-206.6-151.51-80.22-147.23-221.49,13.03-313.07h5.21"
              variants={testAnimation}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={{duration:1}}
            />


{/* ISLAND */}
            <motion.polygon
              fill="none"
              strokeWidth="20px"
              points="1141.78 1191.69 1110.33 1443.34 1107.72 1464.18 981.34 1681.4 850.12 1616.62 757.8 1755.29 597.36 1852.27 461.11 1787.49 383.31 1819.87 242.41 1681.4 138.73 1413.74 52.75 1191.69 1141.78 1191.69"
              variants={testAnimationReverse}
              initial="initial"
              animate={startAnimation ? "animate" : "initial" }
              transition={{duration:1}}
            />

          </motion.g>
        </svg>

        <div style={{ padding: "2rem" }} />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Layer_2"
          data-name="Layer 2"
          viewBox="0 0 1300.22 2042.41"
          style={{ width: 200 }}
          stroke="currentColor"
          fill="currentColor"
        >
          <motion.g id="Layer_1-2" data-name="Layer 1">
            <motion.polyline
              fill="none"
              strokeWidth="20px"
              points="156.26 1181.31 156.26 761.14 626.85 761.14 696.47 761.14 696.47 1181.31"
              // initial={{pathLength:0}} animate={{pathLength:1}}  transition={{duration:2, repeat: Infinity, repeatType:"loop", repeatDelay:2}}
            />
            <polygon
              fill="none"
              strokeWidth="20px"
              points="635.2 220.93 635.2 761.14 468.13 761.14 468.13 220.93 490.41 220.93 635.2 220.93"
            />
            <rect
              fill="none"
              strokeWidth="20px"
              x="493.19"
              y="87.27"
              width="116.95"
              height="133.66"
            />
            <polyline
              fill="none"
              strokeWidth="20px"
              points="130.5 761.14 229.22 594.76 468.13 594.76"
            />
            <path
              fill="none"
              strokeWidth="20px"
              d="m468.13,87.27s0-77.27,83.54-77.27,83.54,77.27,83.54,77.27"
            />
            <polyline
              fill="none"
              strokeWidth="20px"
              points="635.2 543.94 568.37 543.94 568.37 641.41 635.2 641.41"
            />
            <rect
              fill="none"
              strokeWidth="20px"
              x="243.91"
              y="889.09"
              width="110.81"
              height="164.28"
            />
            <rect
              fill="none"
              strokeWidth="20px"
              x="512.97"
              y="889.09"
              width="110.81"
              height="292.23"
            />
            <polyline
              fill="none"
              strokeWidth="20px"
              points="635.2 324.66 568.37 324.66 568.37 422.12 635.2 422.12"
            />

            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1080.2,761.14c-72.4,151.88-72.4,430.61-72.4,430.61"
              //  initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}  transition={{duration:2,  repeatDelay:2}}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m870.19,864.09s62.23-115.17,213.91-105.3"
              // initial={{pathLength:0, pathOffset:1}} animate={{pathLength:1, pathOffset:0}}   transition={{delay:2, duration:2, }} />
              animate={controls}
              transition={{ duration: 1, repeatDelay: 2 }}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m952.95,898.26s38.15-149.13,131.14-136.34"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, delay: 2 }}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1188.9,910.8s-1.87-109.75-108.7-148.09"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, delay: 2 }}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1290.82,915.31s-59.55-164.37-220.86-156.87"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, delay: 2 }}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1277.41,787.54s-101.04-90.85-233.41-26.79"
              initial={{ pathLength: 0, pathOffset: 1 }}
              animate={{ pathLength: 1, pathOffset: 0 }}
              transition={{ duration: 2, delay: 2 }}
            />
            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1094.57,754.6s-112.89-75.62-234.85,6.55"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 2 }}
            />

            <motion.path
              fill="none"
              strokeWidth="20px"
              d="m1110.33,1443.34c228.75,118.94-7.07,256.86-7.07,256.86,69.43,332.24-298.74,267.1-298.74,267.1-233.78,164.17-437.22-33.88-437.22-33.88-298.74,41.51-246.81-206.6-246.81-206.6-151.51-80.22-147.23-221.49,13.03-313.07h5.21"
            />

            <polygon
              fill="none"
              strokeWidth="20px"
              points="1141.78 1191.69 1110.33 1443.34 1107.72 1464.18 981.34 1681.4 850.12 1616.62 757.8 1755.29 597.36 1852.27 461.11 1787.49 383.31 1819.87 242.41 1681.4 138.73 1413.74 52.75 1191.69 1141.78 1191.69"
            />
          </motion.g>
        </svg>
        </div>
        <div style={{ padding: "1rem" }} />


<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.79 117.57">
  <g id="Ebene_2" data-name="Ebene 2" fill="rgba(28 25 23 / 0.8)" >
    <g>
      <path class="cls-1" d="m71.82,93.88c-24.06,3.33-46.2,12.27-71.32,13.52.01-35.63.1-71.27.13-106.9,126.22-.02,252.44.03,378.66,0,0,38.84-.31,77.7,0,116.54-35.31-1.77-65.34-15.48-101.48-13.85-26.98,1.22-53.04,7.76-80.33,7.15-33.23-.72-62.67-13.02-94.97-16.8"/>
      <line class="cls-1" x1="379.29" y1="12.62" x2="379.28" y2="12.62"/>
      <path class="cls-1" d="m379.29,18.41h-.02"/>
      <path class="cls-1" d="m379.29,24.02h-.03"/>
      <path class="cls-1" d="m379.29,29.46h-.04"/>
      <path class="cls-1" d="m379.28,34.71h-.04"/>
      <path class="cls-1" d="m379.28,39.78h-.06"/>
      <path class="cls-1" d="m379.3,44.67h-.09"/>
      <path class="cls-1" d="m379.3,49.38h-.1"/>
      <path class="cls-1" d="m379.29,53.88h-.1"/>
      <path class="cls-1" d="m379.29,58.21h-.12"/>
      <path class="cls-1" d="m379.29,62.33h-.12"/>
      <path class="cls-1" d="m379.29,66.26h-.13"/>
      <path class="cls-1" d="m379.29,70h-.13"/>
      <path class="cls-1" d="m379.29,73.53h-.13"/>
      <path class="cls-1" d="m379.29,76.88h-.14"/>
      <path class="cls-1" d="m379.3,80.14h-.15"/>
      <path class="cls-1" d="m379.3,83.56h-.15"/>
      <path class="cls-1" d="m379.3,87.09h-.14"/>
      <path class="cls-1" d="m379.3,90.68h-.14"/>
      <path class="cls-1" d="m379.3,94.26h-.13"/>
      <path class="cls-1" d="m379.3,97.79h-.12"/>
      <path class="cls-1" d="m379.29,101.19h-.09"/>
      <path class="cls-1" d="m379.29,104.41h-.08"/>
      <path class="cls-1" d="m379.28,107.39h-.05"/>
      <path class="cls-1" d="m379.28,110.08h-.03"/>
      <path class="cls-1" d="m379.28,112.42h-.02"/>
      <path class="cls-1" d="m104.77,93.82c-.75-.1-1.5-.19-2.26-.27"/>
      <path class="cls-1" d="m77.39,93.3c5.49-.5,11-.68,16.52-.43"/>
      <path class="cls-1" d="m71.6,93.92c.08,0,.14-.02.22-.03"/>
      <line class="cls-1" x1="379.28" y1="114.34" x2="379.27" y2="114.34"/>
      <path class="cls-1" d="m117.21,95.81c-10.2-1.82-20.57-3.32-30.95-3.02"/>
      <path class="cls-1" d="m80.62,93.04c-4.19.29-8.39.77-12.53,1.41"/>
      <path class="cls-1" d="m102.11,93.54c11.48,1.32,22.75,3.73,33.95,6.33"/>
      <path class="cls-1" d="m63.58,95.23c1.88-.34,3.79-.68,5.68-.96"/>
    </g>
  </g>
</svg>



      <div style={{ padding: "2rem" }} />
    </main>
  );
}



// <?xml version="1.0" encoding="UTF-8"?>
// <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.79 117.57">
//   <defs>
//     <style>
//       .cls-1 {
//         fill: none;
//         stroke: #333233;
//         stroke-miterlimit: 10;
//       }

//       .cls-2 {
//         opacity: .29;
//       }
//     </style>
//   </defs>
//   <g id="Ebene_2" data-name="Ebene 2">
//     <g class="cls-2">
//       <g>
//         <path class="cls-1" d="m379.28,117.05c-35.31-1.77-65.34-15.48-101.48-13.85-26.98,1.22-53.04,7.76-80.32,7.15-34.75-.77-65.09-14.06-99.04-17.24-35.09-3.29-63.85,12.61-97.94,14.3,0-35.64.1-71.27.13-106.91,126.22-.02,252.44.03,378.66,0,0,38.85-.31,77.7,0,116.54Z"/>
//         <path class="cls-1" d="m379.29,6.65c-126.2.26-252.45-.18-378.67,0"/>
//         <path class="cls-1" d="m379.29,12.62c-34.56-.19-68.97-2.54-103.55-2.13-28.63.34-57.14,1.98-85.79,2.13-24.78.13-49.48,1.2-74.25,1.4-38.37.31-76.7-1.28-115.07-1.4"/>
//         <path class="cls-1" d="m379.28,18.41c-35.05-.57-69.89-4.69-104.99-3.83-28.2.69-56.06,3.42-84.31,3.83-22.37.33-44.52,2.12-66.87,2.52-40.81.72-81.68-2.14-122.48-2.52"/>
//         <path class="cls-1" d="m379.28,24.02c-35.45-.83-70.66-6.5-106.21-5.26-27.87.97-55.11,4.66-83.07,5.28-20.37.45-40.28,2.92-60.61,3.46-42.8,1.15-85.96-2.9-128.76-3.47"/>
//         <path class="cls-1" d="m379.28,29.46c-35.74-.77-70.9-7.25-106.77-5.93-27.77,1.02-54.64,5.35-82.54,5.93-19.51.41-38.26,3.32-57.68,3.9-43.77,1.32-87.91-3.38-131.67-3.91"/>
//         <path class="cls-1" d="m379.27,34.71c-34.69-.89-69.35-5.69-104.12-4.59-28.93.92-57.62,3.4-86.57,4.11-20.05.49-39.75,2.69-59.76,3.2-42.53,1.09-85.66-2.03-128.18-2.7"/>
//         <path class="cls-1" d="m379.28,39.78c-64.77-.73-129.34-2.3-194.16-1.71-61.54.56-122.87,1.98-184.49,1.72"/>
//         <path class="cls-1" d="m379.29,44.67c-30.58.35-61.23,2.58-91.81,1.73-35.61-.99-70.89-4.53-106.57-4.93-23.25-.26-46.55-.18-69.8-.21-36.95-.04-73.6,2.87-110.51,3.41"/>
//         <path class="cls-1" d="m379.3,49.38c-28.91.87-56.87,6.17-85.96,4.73-38.93-1.94-76.94-8.23-116.05-9.22-24.81-.63-49.74-1.55-74.57-1.83-34.49-.39-67.81,5.28-102.13,6.31"/>
//         <path class="cls-1" d="m379.29,53.88c-28.41.8-54.01,7.87-82.84,6.31-40.71-2.2-79.9-10.39-120.87-11.41-25.68-.64-51.35-2.29-77.05-2.67-33.55-.5-64.67,6.83-97.94,7.76"/>
//         <path class="cls-1" d="m379.28,58.21c-28.07.89-54.08,7.09-82.46,5.56-40.55-2.19-80.21-8.88-120.96-10-25.64-.7-51.31-2.49-76.96-2.85-33.51-.47-65.05,6.36-98.32,7.35"/>
//         <path class="cls-1" d="m379.28,62.33c-27.46.64-54,4.64-81.6,3.67-40.39-1.43-80.47-5.22-120.92-6.13-25.59-.57-50.99-2.83-76.57-3.27-33.66-.58-66.11,5.16-99.61,6"/>
//         <path class="cls-1" d="m379.29,66.26c-67.15.42-134.08,1.04-201.3.22-25.52-.31-50.58-3.24-76.05-3.82-33.98-.77-67.45,3.65-101.35,4.15"/>
//         <path class="cls-1" d="m379.29,70c-26.43-.33-52.79-2.04-79.23-1.36-40.21,1.04-80.53,4.42-120.8,4.38-25.39-.03-50.22-3.68-75.52-4.4-34.4-.98-68.78,2.08-103.17,2.23"/>
//         <path class="cls-1" d="m379.29,73.53c-26.34-.66-51.76-4.81-78.24-3.51-40.23,1.98-80.31,8.57-120.75,8.81-25.25.15-49.94-4.05-75.07-4.88-34.79-1.14-69.84.75-104.66.66"/>
//         <path class="cls-1" d="m379.29,76.88c-26.5-.63-50.93-6.23-77.73-4.75-40.43,2.23-79.97,11.03-120.72,11.24-25.22.13-49.74-4.3-74.83-5.14-34.97-1.17-70.43-.08-105.45-.14"/>
//         <path class="cls-1" d="m379.29,80.14c-26.71-.48-50.96-6.37-78.03-4.92-40.35,2.17-79.57,11.16-120.26,11.35-25.37.12-49.87-4.49-75.1-5.3-34.97-1.13-70.33.14-105.35-.01"/>
//         <path class="cls-1" d="m379.3,83.56c-27.08-.45-51.42-6.68-78.89-5.19-39.89,2.16-78.64,11-118.87,11.21-25.72.14-50.39-4.87-75.94-5.72-34.91-1.17-70.1.71-105.04.48"/>
//         <path class="cls-1" d="m379.3,87.09c-27.59-.47-52.17-7.17-80.19-5.66-39.16,2.11-77.2,10.82-116.7,10.99-26.24.11-51.2-5.43-77.25-6.37-34.8-1.27-69.79,1.45-104.61,1.25"/>
//         <path class="cls-1" d="m379.3,90.68c-28.22-.55-53.14-7.82-81.84-6.29-38.21,2.04-75.35,10.61-113.89,10.7-26.9.06-52.26-6.13-78.93-7.21-34.67-1.41-69.42,2.34-104.09,2.26"/>
//         <path class="cls-1" d="m379.3,94.26c-28.94-.67-54.31-8.59-83.77-7.04-37.09,1.95-73.16,10.38-110.59,10.35-27.68-.02-53.51-6.95-80.91-8.2-34.53-1.58-68.99,3.33-103.49,3.45"/>
//         <path class="cls-1" d="m379.29,97.78c-29.72-.83-55.62-9.44-85.89-7.88-35.85,1.85-70.74,10.12-106.92,9.96-28.53-.13-54.9-7.84-83.11-9.29-34.41-1.77-68.5,4.4-102.84,4.76"/>
//         <path class="cls-1" d="m379.29,101.19c-30.52-1-57.03-10.34-88.15-8.78-34.54,1.74-68.16,9.83-103.03,9.54-29.41-.24-56.41-8.68-85.43-10.45-34.24-2.1-68.04,5.52-102.15,6.16"/>
//         <path class="cls-1" d="m379.28,104.41c-31.33-1.18-58.48-11.26-90.45-9.69-33.21,1.62-65.53,9.53-99.05,9.12-30.32-.37-57.95-9.58-87.81-11.64-34.14-2.36-67.53,6.66-101.45,7.6"/>
//         <path class="cls-1" d="m379.28,107.39c-32.11-1.37-59.93-12.16-92.72-10.6-31.89,1.52-62.92,9.21-95.13,8.7-31.22-.5-59.47-10.46-90.16-12.81-34.08-2.61-67.01,7.79-100.76,9.01"/>
//         <path class="cls-1" d="m379.28,110.08c-32.86-1.54-61.32-13.01-94.89-11.46-30.64,1.42-60.44,8.89-91.39,8.3-32.08-.61-60.92-11.31-92.4-13.93-34.09-2.83-66.46,8.88-100.1,10.35"/>
//         <path class="cls-1" d="m379.27,112.42c-33.54-1.68-62.59-13.78-96.88-12.24-29.51,1.33-58.16,8.59-87.97,7.94-32.86-.71-62.23-12.09-94.44-14.94-34.16-3.03-65.91,9.89-99.48,11.58"/>
//         <path class="cls-1" d="m379.27,114.34c-34.15-1.79-63.69-14.45-98.61-12.9-28.53,1.26-56.19,8.31-85.02,7.63-33.55-.79-63.37-12.78-96.21-15.83-34.31-3.18-65.36,10.8-98.94,12.64"/>
//         <path class="cls-1" d="m379.27,115.79c-34.66-1.85-64.55-14.97-100-13.41-27.75,1.22-54.62,8.07-82.67,7.38-34.12-.83-64.26-13.36-97.62-16.53-34.51-3.28-64.82,11.58-98.48,13.48"/>
//         <path class="cls-1" d="m379.28,116.71c-35.05-1.85-65.12-15.32-100.99-13.74-27.22,1.2-53.54,7.88-81.06,7.22-34.53-.83-64.85-13.79-98.59-17.01-34.78-3.33-64.31,12.19-98.14,14.05"/>
//       </g>
//     </g>
//   </g>
// </svg>