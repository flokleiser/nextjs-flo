'use client'
import React, {useState, useEffect} from 'react';
import ExpandableButton from 'app/components/ExpandableButton.js';
import styles from 'app/page.module.css'
import Image from 'next/image'
import { PiXCircle } from "react-icons/pi"; 
import { AnimatePresence, motion } from "framer-motion";
import LightButton from 'app/components/LightButton.js';
  

const data = [
  { image: '/images/sketches/sketch test scan website3.png', id: 0},  
  { image: '/images/sketches/sketch test scan website2.png', id: 1},
  { image: '/images/sketches/illusions2.png', id: 2},
  { image: '/images/sketches/sketch test scan website4.png', id: 3},  
  { image: '/images/sketches/sketch test scan website5.png', id: 4},
];


export default function testing() {

  

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

const handleResetClick = () => {
    setSelectedImage(null);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
};


useEffect(() => {
  const handleOutsideClick = (event) => {
    const imageElement = document.querySelector("#overlay img");

    if (imageElement) {
       const imageRect = imageElement.getBoundingClientRect();

    if (
      event.clientX < imageRect.left ||
      event.clientX > imageRect.right ||
      event.clientY < imageRect.top ||
      event.clientY > imageRect.bottom
      ) {
        handleResetClick();
      }
    }
  };

  document.addEventListener("mouseup", handleOutsideClick);

  return () => {
    document.removeEventListener("mouseup", handleOutsideClick);
  };
}, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
        handleResetClick();
    }
  };

  
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
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

            <h1 className={styles.title}>
            Testing 
            </h1>

            <div className = {styles.subtitle}>
              <h1>
               <span>subtitle 
                <ExpandableButton />    
                </span>
              </h1> 
            </div> 

            <div className={styles.subtitledescription}>
            <p>
              placeholder
             </p>
            </div>



            <div className="">
            {selectedImage && (
        <div id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none bg-black bg-opacity-75 transition-transform duration-300 z-50">
          <img
            src={selectedImage}
            alt=""
            className="max-w-4/5 max-h-4/5 z-9990"
            style={{ maxHeight: '80vh'}}
          />
           <button
            className="absolute top-5 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded z-9999"
            onClick={handleResetClick}
          >
            <PiXCircle style={{ fontSize: '2rem' }} />
          </button>
        </div>
      )}
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data.map((x) =>  (
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
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


              <div className='flex align-center'>
                <LightButton/>
                <iframe className={styles.iframevideo} 
                style={{ zIndex: selectedImage ? 1 : 51, position:'relative'}}

                src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview"> 
                </iframe>
              </div>

              <div style={{ padding: '2rem' }}> </div>
       
        </main>
    )
}


// track of z levels: lightbutton button: 52, lightbutton overlay: 50, video: 50, image: 9990, image button: 9999