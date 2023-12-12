"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "app/page.module.css";
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import Image from "next/image";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import TipsButton from "@/app/components/TipsButton";

export default function creativeCoding() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResetClick = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  /* make image big */
  const handleImageClick = (imageSrc) => {
    const dataArray = [...data, ...data2, ...data3];
    const selectedIndex = dataArray.findIndex(
      (item) => item.image === imageSrc
    );
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
      console.log(`Previous button clicked. Index: ${dataArray[newIndex].id}`);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2, ...data3];
      const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
      console.log(`Next button clicked. Index: ${dataArray[newIndex].id}`);
    }
  };

  /* handleoutsideclick*/
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const imageElement = document.querySelector("#overlay img");
      const leftButton = document.querySelector("#leftButton");
      const rightButton = document.querySelector("#rightButton");

      if (imageElement) {
        const imageRect = imageElement.getBoundingClientRect();

        if (
          event.clientX < imageRect.left ||
          event.clientX > imageRect.right ||
          event.clientY < imageRect.top ||
          event.clientY > imageRect.bottom
        ) {
          if (
            event.target !== leftButton &&
            event.target !== rightButton &&
            !leftButton.contains(event.target) &&
            !rightButton.contains(event.target)
          ) {
            handleResetClick();
          }
        }
      }
    };

    document.addEventListener("mouseup", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
    };
  }, []);

  /* handlekeydown*/
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleResetClick();
      } else if (event.key === "ArrowLeft") {
        handlePrevImage();
      } else if (event.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleResetClick, handlePrevImage, handleNextImage]);

  useEffect(() => {
    document.title = "Creative Coding";
  }, []);

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
          <Link href="/projects">All Projects </Link>{" "}
        </h1>
      </div>

      <h1 className={styles.title}>Creative Coding</h1>

      

      <div className={styles.linkContainer} 
        style={{
          width:"90vw",
          }}
          >

      <div style={{ padding: "1rem" }}></div>

      <div className={styles.subtitledescription}>
        <p>
          Try it out:
        </p>
      </div>

      <div style={{ padding: "2rem" }}>
        <div>
          <iframe
            src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
            width="100vw"
            allowFullScreen
            style={{
              border: "2px solid white",
              width: "85vw",
              aspectRatio: "16/9"
            }}
          />
        </div>
      </div>

      <TipsButton />

      <div style={{ padding: "1rem" }}> </div>
</div>
      <div style={{padding:"4rem"}}></div>
</main>
  );
}
