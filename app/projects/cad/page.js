'use client'
import React, {useState, useEffect} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { PiXCircle } from "react-icons/pi"; 


const data = [
  { image : '/images/cad/cad website.png'},
]

const data2 = [
  { image : '/images/cad/cadknife4.png'},
  { image : '/images/cad/cadknife2.png'},
  { image : '/images/cad/cadknife1.png'},
  { image : '/images/cad/cadknife3.png'},
]

const data3 = [
  { image: '/images/cad/cad parts2.png'},
  { image: '/images/cad/cad parts1.png'},
  { image: '/images/cad/cad parts3.png'}
]

const data4 = [
  { image: '/images/cad/popsicle1.png'},
  { image: '/images/cad/popsicle2.png'},
]

export default function cad() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

const handleResetClick = () => {
    setSelectedImage(null);
};

const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    setSelectedImage(data[currentIndex === 0 ? data.length - 1 : currentIndex - 1].image);
  };

const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    setSelectedImage(data[currentIndex === data.length - 1 ? 0 : currentIndex + 1].image);
  };


  useEffect(() => {
    const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
        handleResetClick();
    } else if (event.key === 'ArrowLeft') {
      handleNextClick();
    } else if (event.key === 'ArrowRight') {
      handlePrevClick();
    }
  };

  
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, []);

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
    document.title = 'CAD';
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
             Computer Aided Design
            </h1>
             
            <div className={styles.subtitledescription}>
            <p>
            A balisong (butterfly knife) designed in onshape.com, rendered in Blender, and built using popsicle sticks and hot glue.
            </p>
            </div> 
            {/* <Image src="/images/cad/cad website.png"width={800} height={800}/>  */}



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
                        width={600}
                        height={400}
                        className={`max-h-600 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
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
                    {data4.map((x) =>  (
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


            <div className={styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <a style={{paddingBottom: '2rem'}}
                      href="https://cad.onshape.com/documents/74ceed200a5aa4f63a77c82e/w/2cd4c25834f626e76cd4c9af/e/d0d97ca62557a0c79fb7dfc5?renderMode=0&uiState=6567658f98467778680c9faf" target="_blank">
                    <Image
                      src="/onshape.svg"
                      alt="Onshape Logo"
                      className={styles.vercelLogo}
                      style={{ filter: 'invert(100%)' }}
                      width={50}
                      height={24}
                      priority
                    />  
                   Project on OnShape
                    </a>
            </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}