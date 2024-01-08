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
} from "framer-motion";
import { BsX, BsList } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";

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

<motion.div style={{ position:"relative", zIndex: 9999, display: "flex", flexDirection:"column"}}>
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

      <AnimatePresence>
        {testOpen &&  (
          <motion.ul className={styles.backbutton}
          style={{ position:"fixed", zIndex: 9999, display: "flex", flexDirection:"column" }} 
          >
        <motion.li >Item 1 </motion.li>
        <motion.li >Item 2 </motion.li>
        <motion.li>Item 3 </motion.li>
        <motion.li>Item 4 </motion.li>
        <motion.li >Item 5 </motion.li>
      </motion.ul>
        )}
      </AnimatePresence>
      </motion.div>

     


      <h1 className={styles.title}>Testing</h1>

      <div className={styles.subtitledescription}>
        <p>
          A collection of sketches, designs and artworks ranging from 2018 to
          2023.
        </p>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className="flex-row" style={{ display: "flex" }}>
        {/* V1 --> original from navbar */}
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
              animate={controls}
              transition={{ duration: 1, repeatDelay: 2 }}
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

      <div style={{ padding: "2rem" }} />
    </main>
  );
}
