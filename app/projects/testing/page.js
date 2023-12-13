"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "app/page.module.css";
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import ExpandableButton from "@/app/components/ExpandableButton";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiUnity,
  SiAdobeillustrator,
  SiVisualstudiocode,
  SiAdobeindesign,
} from "react-icons/si";
import Image from "next/image";

export default function test() {
  useEffect(() => {
    document.title = "test";
  }, []);

  const text = "Testing the button".split("");

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

      <div className={styles.backbutton}>
        <h1>
          {" "}
          <Link href="/">Home </Link>{" "}
        </h1>
      </div>

      <div className={styles.title}>
        {text.map((el, i) => (
          <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            opacity: { duration: 0.25 },
            duration: 0.25,
            delay: i / 10,
          }}
          key= {i} >
            {el}{""}
          </motion.span>
        ))} 
        </div>

      <div className={styles.linkContainer}>
        <div style={{ padding: "1rem" }}></div>

        <div className={styles.subtitledescription}>
          {/* <div className="flex row"> */}
          <h1>Education/Experience</h1>
          <ExpandableButton>
            <Image
              src="/svg/timeline4.svg"
              alt="timeline"
              width={900}
              height={24}
              style={{ margin: 20 }}
            />
          </ExpandableButton>
          {/* </div> */}
        </div>

        <div style={{ padding: "1rem" }}></div>
      </div>

      <div style={{ padding: "1rem" }}></div>

      <div className={styles.subtitledescription}>
        <h1>Skills</h1>
        <ExpandableButton>
          <div style={{ padding: "1rem" }}></div>
          <div className="flex flex-wrap justify-center gap-2">
            <SiAdobeillustrator size={60} />
            <SiAdobephotoshop size={60} />
            <SiAdobeindesign size={60} />
            <SiAdobepremierepro size={60} />
            <SiAdobeaftereffects size={60} />
            <SiVisualstudiocode size={60} />
            <SiBlender size={60} />
            <SiUnity size={60} />
            <Image
              src="/svg/logic.svg"
              width={60}
              height={24}
              style={{ filter: "invert(1)" }}
            />
          </div>
          <div style={{ padding: "1rem" }}></div>
        </ExpandableButton>
      </div>

      {/* <div className={styles.grid}
      >
      
        <motion.a
            className={styles.card}
            href = '/projects/sketches'
            style={{ 
                    backgroundImage: 'url("/images/cards/sketch1.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center',
                  whileTap:"scale: 0.9"
                  }}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            <p>Sketchbook</p>
            </motion.a> 
            
            <a
            href = '/projects/creative-coding'
            className={styles.card}
            // style={{ backgroundImage: 'url("/images/cards/creative coding transparentwide.png")' ,
            style={{ backgroundImage: 'url("/images/cards/creativecodingwhite3.png")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            <p>Generative Art, p5js</p>
            </a>

</div> */}
      <div style={{ padding: "2rem" }}></div>
    </main>
  );
}
