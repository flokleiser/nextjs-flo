'use client'
import React, {useState, useEffect, Suspense} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import DimTooltip from '@/app/components/DimTooltip';
import CenterTooltip from '@/app/components/CenterTooltip';
import { MdFilterCenterFocus } from "react-icons/md";
import { LuLightbulbOff, LuLightbulb } from "react-icons/lu";


const data = [
  {image: '/images/sketches/sketch test scan website2.png', id: 0, description:'test 1'},
  {image: '/images/sketches/sketch test website.png', id: 1, description:'test 2'},
  {image: '/images/sketches/sketch test scan website3.png', id: 2, description:'test 3'},
  {image: '/images/sketches/sketch test scan website4.png', id: 3, description:'test 4'},
  {image: '/images/sketches/sketch test scan website6.png', id: 4, description:'test 5'},
];


export default function imageTest() {

  const [isDim, setDim] = useState(false);
  const handleToggleClick = () => {
    setDim(!isDim);
    };

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleResetClick = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };

  /* make image big */
  const handleImageClick = (imageSrc) => {
    const dataArray = [...data]
    const selectedIndex = dataArray.findIndex((item) => item.image === imageSrc);
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      
      setSelectedDescription(dataArray[selectedIndex].description);

      console.log(dataArray[selectedIndex].description)
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data]
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);

      setSelectedDescription(dataArray[newIndex].description);

      console.log(dataArray[newIndex].description)
    }
  };


  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data];
      const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);

      setSelectedDescription(dataArray[newIndex].description);

      console.log(dataArray[newIndex].description)
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
  document.title = 'imageTest';
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
 
          <div className={styles.backbutton}
           style={{position:'fixed', zIndex:9999}}
           >
            <h1> <Link href="/projects">All Projects </Link> </h1>
            </div>
      
            <h1 className={styles.title}>
             Testing
            </h1>

            <div className={styles.subtitledescription}>
            <p>
              Testing some picture gallery things and video things
             </p>
            </div>

            <div style={{padding:'1rem'}} />
            <div style={{ padding: "0.5rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "0.5rem" }} />
         
            <AnimatePresence>
              {selectedImage && (
               <motion.div
                id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        style={{
          backdropFilter: `blur(${selectedImage ? '10px' : '0px'})`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
          >

          {/* <p className="absolute top-12 text-white text-[1.75rem] text-center mt-4">  */}
          <p className="absolute bottom-12 text-white text-[1.75rem] text-center " >
          {selectedDescription}
          </p>

          <motion.img
            src={selectedImage}
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{scale:0.45}}
            transition={{duration:0.3}}

            alt={selectedImage.description}
            className="max-w-4/5 max-h-4/5"
            style={{ maxHeight: '80vh', zIndex: 9990 }}
          />

           <button
            className="absolute top-16 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            onClick={handleResetClick}
            style={{ zIndex: 9999 }}
          >
            <PiXCircle style={{ fontSize: '2rem' }} />
          </button>
          <div className='absolute left-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded'>
            <button
              id="leftButton"
              className= "text-black px-0 py-4 rounded-r"
              onClick={handlePrevImage}
              style={{ zIndex: 9999 }}
            >
              <IoIosArrowBack style={{ fontSize: '2rem' }}/>
            </button>
            </div>
            {/* <div className="absolute right-5"> */}
            <div className= 'absolute right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded'>
            <button
              id="rightButton"
              className=" text-black px-0 py-4 rounded-r"
              onClick={handleNextImage}
              style={{ zIndex: 9999 }}
            >
              <IoIosArrowForward style={{ fontSize: '2rem' }}/>
            </button>
          </div>
          
        </motion.div>
      )}
      </AnimatePresence>
       
       <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data.map((x) =>  (
                  <article 
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className={`max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                          selectedImage ? 'z-0' : ''
                        }`}
                        src={x.image}
                        alt=""
                        onClick={() => handleImageClick(x.image)}
                      />
                    </div>
                  </article>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{paddingBottom:'1rem', scrollMargin:'50px'}} id='interactables' />

{/* <div className={styles.linkContainer}>
<div style={{ padding: "0.125rem" }}> </div>
  <div className="flex">

<DimTooltip >
<button
    className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
    style={{ zIndex: 53 }}
    onClick={handleToggleClick}
  >
    {isDim ? (
      <LuLightbulb style={{ fontSize: "1.5rem" }} />
    ) : (
      <LuLightbulbOff style={{ fontSize: "1.5rem" }} />
    )}
  </button>
</DimTooltip>

<DimTooltip >
<button
    className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
    style={{ zIndex: 53 }}
    onClick={handleToggleClick}
  >
    <motion.svg  stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={24} >
    </motion.svg>
   
  </button>
</DimTooltip>


<CenterTooltip>
  <Link
    className=" m-1 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
    style={{ zIndex: 53 }}
    href="#interactables"
    rel="noopener noreferrer"
    onClick={handleScroll}
  >
    {" "}
    <motion.svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height={24} >
      <motion.path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
    </motion.svg>
  </Link>
</CenterTooltip>

</div>

<div style={{ padding: "0.125rem" }}> </div>
<div className="flex align-center">

  <iframe
    className={styles.iframevideo}
    style={{ zIndex: selectedImage ? 1 : 52, position: "relative" }}
    allowFullScreen
  ></iframe>

</div>
<div style={{ padding: "1.25rem" }}> </div>
</div> */}

<div style={{padding:'2rem'}} />

                    </main>
    )
}


