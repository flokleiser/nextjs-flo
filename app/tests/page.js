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
import { DiGoogleDrive } from "react-icons/di";
import { FaLock } from "react-icons/fa";
import TestPage from "app/tests/testpage.js"

// const testPage = () => { 
export default function testPage() {

  useEffect(() => {
    document.title = "Tests";
  }, []);

  const [showContents, setShowContents] = useState(false);

  const handleInputChange = (event) => {
    if (event.target.value === "test") {
      setShowContents(true);
    }
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
 
      <h1 className={styles.title}>Tests</h1>

      <div>
      <div className="relative flex flex-1 flex-shrink-0 pt-1.5">
      <input className={styles.passwordBar} type="password" onChange={handleInputChange} />
      <FaLock className="absolute left-2 top-5 h-[18px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>

      {showContents && <div> <TestPage/>
    
        </div>}
        </div>

      <div style={{ padding: "2rem" }} />
    </main>
  );
}
