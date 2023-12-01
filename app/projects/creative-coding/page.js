'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import styles from 'app/page.module.css'
import { DiGit, DiGithubBadge } from "react-icons/di";
import Link from 'next/link';
import Image from 'next/image'
import { PiXCircle } from "react-icons/pi"; 


const data = [
  { image : '/images/creative-coding/creativecoding white.png'},
  { image : '/images/creative-coding/creativecoding twocolor.png'},
  { image : '/images/creative-coding/creativecoding green.png'},
];

const data2 = [
  { image : '/images/creative-coding/creativecoding2.png'},
  { image : '/images/creative-coding/creativecoding3.png'},
  { image : '/images/creative-coding/creativecoding4.png'},
  { image : '/images/creative-coding/creativecoding6.png'},
];


const data3 = [
  { image : '/images/creative-coding/creativecoding5.png'},
  { image : '/images/creative-coding/creativecoding9.png'},
];

export default function creativeCoding() {


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
  
  useEffect(() => {
    document.title = 'Creative Coding';
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

           
          {/* <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back to Projects </Link> </h1>
            </div> */}

            <h1 className={styles.title}>
              Creative Coding
            </h1>

            {/* <div className={styles.subtitle}>
             <h1> Rotations </h1>
            </div> */}
      
            <div className={styles.subtitledescription}>
            <p>
              An online tool for creating generative art using lines, rotations, movement and colors. 
              Made using p5js, the JavaScript version of the "Processing" library.
            </p>
            </div>
            
            <div style={{ padding: '2rem' }}>
              <div>
            <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                width= '100vw'
                allowFullScreen
                style={{ border: '2px solid white', width: '80vw', aspectRatio: '16/9'}}
            />
            </div>
            </div>


            <div className={styles.subtitledescription}>
              <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <a style={{paddingBottom: '2rem'}}
                      href="https://github.com/flokleiser/Rotations-P5JS" target="_blank">
                    <DiGithubBadge />Source code on Github
                    </a>
                    </div>
            </div>
            <div className={styles.subtitledescription}>
            <p> Examples: </p>
            </div>
            
           
       
            <div className="">
            {selectedImage && (
        <div id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none bg-black bg-opacity-75 transition-transform duration-300 z-50">
          <img
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

              

              <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data2.map((x) =>  (
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


              <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data3.map((x) =>  (
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


            <div style={{ padding: '2rem' }}> </div>
            {/* <code>
              test.js
            </code> */}
        </main>
    )
}
