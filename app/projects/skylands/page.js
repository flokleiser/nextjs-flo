'use client'
import styles from 'app/page.module.css'
import { BsUnity } from "react-icons/bs";
import { BiSolidFileBlank, BiLink, BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import { PiXCircle } from "react-icons/pi"; 
import { DiGithubBadge } from "react-icons/di";
import LightButton from 'app/components/LightButton.js';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';



  const data = [
    { image : '/images/skylands/skylands1.png',  id: 0},
    { image : '/images/skylands/skylandsfull.png', id: 1},
    { image : '/images/skylands/skylands2.png', id: 2},
    ]

  const data2 = [
      { image : '/images/skylands/skylands3.png', id: 3},
      { image : '/images/skylands/skylands4.png', id: 4},
      { image : '/images/skylands/skylands5.png', id: 5},
      ]

export default function skylands() {

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
    const dataArray = [...data, ...data2];
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
      const dataArray = [...data, ...data2];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);
      console.log(`Previous button clicked. Index: ${dataArray[newIndex].id}`);
    }
  };


  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [...data, ...data2];
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
    document.title = 'Projects - Skylands';
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

          <div className={styles.backbutton}>
            <h1> <Link href="/projects">All Projects </Link> </h1>
            </div>

            <h1 className={styles.title}>
              Skylands 
            </h1>
            
            <div className={styles.subtitledescription}>
            <p>
             <BsUnity /> VR game for the Meta Quest 2, made in Unity
            </p>
            </div>
            <div style={{ margin: '1rem' }}> </div> 

            {/* <div className='flex align-center border'> 
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: selectedImage ? 1 : 51, position:'relative'}}
            
            src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview"> 
              </iframe>
            </div>
          
              <div style={{ padding: '2rem' }}> </div> */}


            <div className='flex align-center border'> 
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: selectedImage ? 1 : 51, position:'relative'}}
            src="https://www.youtube.com/embed/ehdOkglKb0o?si=diIzQwaQ9w1WKTU0"> 
              </iframe>
            </div>
            <div style={{ padding: '2rem' }}> </div>
             
           
            <div className="">

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
<motion.img
            src={selectedImage}
            initial={{scale:0.5}}
            animate={{scale:1}}
            exit={{scale:0.5}}
            transition={{duration:0.3}}
            alt=""
            className="max-w-4/5 max-h-4/5"
            style={{ maxHeight: '80vh', zIndex: 9999 }}
          />
           <button
            className="absolute top-5 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
            onClick={handleResetClick}
            style={{ zIndex: 9979 }}
          >
            <PiXCircle style={{ fontSize: '2rem' }} />
          </button>
            {/* prev and next buttons */}
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
      </div>

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
           

              

              <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data2.map((x) =>  (
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative  rounded-2xl">
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

            <div className = {styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <p>
            <a href="https://drive.google.com/file/d/1Kg5mvFeOzfIsQm974Fk5bhWUzK3I6VP3/view?usp=drive_link" target="_blank">
            <BiSolidFileBlank />.apk file
            </a>  
            </p>
            </div>
            </div>

            <div className = {styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <p>
            <a href="https://github.com/flokleiser/FLO-VR-ROOM" target="_blank">
            <DiGithubBadge /> Code files on Github
            </a>  
            </p>
            </div>
            </div>

            <div className = {styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <p>

              <a href="https://sidequestvr.com/setup-howto" target="_blank">
                <BiLinkExternal/> SideQuest (to install .apk file)
              </a>
            </p>
            </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}