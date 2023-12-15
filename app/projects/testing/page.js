"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "app/page.module.css";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PiXCircle } from "react-icons/pi"; 

const data = [
  {
    image: '/images/sketches/sketch test scan website2.png', id: 0
  },
  {
  image: '/images/sketches/sketch test website.png', id: 1
  },
  {
  image: '/images/sketches/sketch test scan website3.png', id: 2
  },
  {
  image: '/images/sketches/sketch test scan website4.png', id: 3
  },
  {
    image: '/images/sketches/sketch test scan website5.png', id: 3
    },
];
export default function test() {
  useEffect(() => {
    document.title = "test";
  }, []);

  


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
    const dataArray = [...data];
    const selectedIndex = dataArray.findIndex((item) => item.image === imageSrc);
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      // setShouldAnimateOut("none");
    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
      console.log(`Previous button clicked. Index: ${dataArray[newIndex].id}`);
      // setShouldAnimateOut("left");
    }
  };


  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data];
      const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
      console.log(`Next button clicked. Index: ${dataArray[newIndex].id}`);
      // setShouldAnimateOut("right");
    }
  };

  const [shouldAnimateOut, setShouldAnimateOut] = useState(false);


/* handleoutsideclick*/
useEffect(() => {
  const handleOutsideClick = (event) => {
    const imageElement = document.querySelector("#overlay img");
    const leftButton = document.querySelector("#leftButton");
    const rightButton = document.querySelector("#rightButton");
    // setShouldAnimateOut(false); 

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

  const [isHovering, setHovering] = useState(false);
  // const handleHover = () => setHovering(!hovering);

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
      <div className={styles.backbutton} style={{right:"6rem"}}>
        <h1>
          {" "}
          <Link href="/projects/testing/testing2">Testing 2 </Link>{" "}
        </h1>
      </div>
      
      <div className={styles.title}>
        <h1> Testing the button </h1>
      </div>

      {/* <div style={{ padding: '2rem' }}/>
            <div className={styles.gridanimation}> */}

              {/*first test card*/}
                {/* <a
                href='/projects/animations/plasticine'
                className={styles.cardanimation}
                style={{ 
                    backgroundImage: 'url("/images/animations/cards/escape transparent3.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Testing Card
                </h2>
                <p>testing</p>
                </a>

                <motion.a
                href='/projects/animations/plasticine'
                className={styles.cardanimation}
                style={{ 
                    backgroundImage: !isHovering ? 'url("images/animations/cards/plasticine card4.png' :  'url("/images/animations/gifs/plasticine-gif-half.gif")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
                rel="noopener noreferrer"  
                onHover={() => setHovering(true)}
                onLeave={() => setHovering(false)}
                >
                <h2>
                    Plasticine (A)life
                </h2>
                <p>Stop Motion</p>
                </motion.a> */}


                {/* Control card to make sure i dont break shit*/}
                {/* <a
                href='/projects/animations/skate'
                className={styles.cardanimationSkate}               
                style={{ 
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
                rel="noopener noreferrer"
                >
                <h2>
                    Skate
                </h2>
                <p>Rotoscoping, Drawing</p>
                </a> */}

                {/* </div> */}

      <AnimatePresence>
              {selectedImage && (
               <motion.div
                id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        style={{
          backdropFilter: `blur(${selectedImage ? '10px' : '0px'})`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
          >

          <motion.img
            // initial={{ scale:0.5}}
            // animate={{ scale:1 }}
            // exit={{ scale:0.5}}

            initial={{x:-1000}}
            animate={{x:0}}
            exit={{x:1000}}

            // initial={shouldAnimateOut ? { x: 1000 } : { x: -1000 }}
            // animate={{ x: 0 }}
            // exit={shouldAnimateOut ? { x: -1000 } : { x: 1000 }}
         
            // initial={shouldAnimateOut === "right" ? { x: 1000 } : shouldAnimateOut === "left" ? { x: -1000 } : shouldAnimateOut === "none" ? { opacity: 0 } : { x: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // exit={shouldAnimateOut === "right" ? { x: -1000 } : shouldAnimateOut === "left" ? { x: 1000 } : { opacity: 0 }}
            transition={{ duration: 0.3}}
            // key={selectedImage} 
            src={selectedImage}
            alt=""
            className="max-w-4/5 max-h-4/5"
            style={{ maxHeight: '80vh', zIndex: 9990 }}

        

          />
           <button
            className="absolute top-5 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
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

     
    </main>
  );
}
