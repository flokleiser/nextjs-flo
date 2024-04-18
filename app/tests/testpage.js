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

const TestPage = () => {
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

      <div className="flex flex-row mx-11">
        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/galleryTest">ImageGallery</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/canvasTest">3D</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/svgTest">SVG</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/filesTest">Files</Link>
            </p>
          </div>
        </div>

      </div>

      <div style={{ padding: "1rem" }} />

      <div className="flex flex-row mx-11">
        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/loadingTest">Loading</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/gaussianSplatting">Gaussian Splatting</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/particlesTest">Particles</Link>
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "1rem" }} />

      <div className="flex flex-row mx-11">
        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/homepagePerformance">New Homepage</Link>
            </p>
          </div>
        </div>

        <div className={styles.buttonLinksPage}>
          <div className={styles.subtitledescription}>
            <p>
              <Link href="/tests/homepageAnimation">Homepage Animation</Link>
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: "2rem" }} />
    </main>
  );
};

export default TestPage;
