'use client'
import React, {useState, useEffect, useRef} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import LightButton from '@/app/components/LightButton';
import { DiGoogleDrive } from 'react-icons/di';
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";


const data = [
  { image: "/images/skylands/skylands3.png", id: 0 },
  { image: "/images/skylands/skylands4.png", id: 1 },
  { image: "/images/skylands/skylands_whiteboard.png", id: 2 },
];

const data2 = [
  { image: "/images/skylands/skylandsfull.png", id: 3 },
  { image: "/images/skylands/skylands_waterfall.png", id: 4 },
  { image: "/images/skylands/skylands5.png", id: 5 },
  { image: "/images/skylands/skylands_ferriswheel.png", id: 6 },
];

const data3 = [
    {image: "/images/skylands/skylands1.png", id: 7 },
    {image: "/images/skylands/skylands2.png", id: 8 },
    {image: "/images/skylands/skylands_steering.png", id: 9 },
];


export default function testing() {

  const [isDim, setDim] = useState(false);
  const handleToggleClick = () => {
    setDim(!isDim);
    };

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResetClick = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };

  /* make image big */
  const handleImageClick = (imageSrc) => {
    const dataArray = [...data,...data2,...data3];
    const selectedIndex = dataArray.findIndex((item) => item.image === imageSrc);
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
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
      const dataArray = [...data,...data2,...data3];
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
  if (event.key === 'Escape') {
      handleResetClick();
  } else if (event.key === 'ArrowLeft') {
    handlePrevImage();
  } else if (event.key === 'ArrowRight') {
    handleNextImage();
  }
};

window.addEventListener('keydown', handleKeyDown);

return () => {
  window.removeEventListener('keydown', handleKeyDown);
};
}, [handleResetClick, handlePrevImage, handleNextImage]);


useEffect(() => {
  document.title = 'Projects - testing';
}, []);


    return (
        <main className={styles.main}>
              <div className="relative 
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
   z-[-1]">
          </div>
          <AnimatePresence>
      {isDim && (
        <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-[52]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        
        style={{
          backdropFilter: `blur(10px)`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}>
      
        </motion.div>
      )}
      </AnimatePresence>

          <div className={styles.backbutton}>
            <h1> <Link href="/">Home</Link> </h1>
            </div>


          <div className={styles.backbutton} style={{marginRight:'4rem'}}>
            <h1> <Link href="/projects/testing/testing2">Testing 2 </Link> </h1>
            </div>
      
            <h1 className={styles.title}>
             Testing
            </h1>

            <div className={styles.subtitledescription}>
            <p>
              this page is for testing purposes  
             </p>
            </div>

            <div className = {styles.subtitle}>
              <p>
                Skate Loop
              </p>
        </div>

        <div className={styles.subtitledescription}>
            <p>
            A short sequence of myself, edited and rotoscoped in Adobe After Effects.
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 

            <div className={styles.linkContainer}>
            <div style={{ padding: "1.25rem" }}> </div>
            <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 48, position:'relative'}}  src="https://www.youtube.com/embed/e0uNApQ7UCU?si=eEiQ0psd4jvcLBxI&rel=0"> 
            </iframe>
            </div>
            <div style={{ padding: "1.25rem" }}> </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        <div className = {styles.subtitle}>
              <p>
             Skate Doodles 
              </p>
            </div>

              <div className={styles.subtitledescription}>
            <p>
            4 stop-motion sequences, sketched  on semi transparent paper and edited in Premiere Pro.            
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 
      
            <div className={styles.linkContainer}>
            <div style={{ padding: "1.25rem" }}> </div>
            <div className='flex align-center'>
            <button className="absolute mt-3 ml-3 align-right bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
      style={{ zIndex: 53}}
      
      onClick={handleToggleClick}>
        {isDim? <LuLightbulb style={{ fontSize: '2rem' }}/> : <LuLightbulbOff style={{ fontSize: '2rem' }} />}
      </button>
            <iframe className={styles.iframevideo} style={{ zIndex: 48, position:'relative'}}  src="https://www.youtube.com/embed/umJCwoddDB0?si=9Z5XUmaWOWmykIHc&rel=0">
            </iframe>
            </div>
            <div style={{ padding: "1.25rem" }}> </div>
            </div>

            <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/drive/folders/1iLXs6Nq4P4xim8TtD9pt7Rt66jx3em-l?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> Videos on Google Drive
                </a>
                </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>
        </main>
    )
}