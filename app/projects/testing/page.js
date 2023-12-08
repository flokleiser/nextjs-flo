'use client'
import styles from 'app/page.module.css'
import { React, useState, useEffect} from 'react';
import Image from 'next/image'
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
  image: '/images/sketches/sketch test scan website5.png', id: 4
  },
];

const data2 = [
  {
    image: '/images/sketches/metal2.png', id: 5
  },
  {
    image: '/images/sketches/cat3.png', id: 6
  },
  {
    image: '/images/sketches/dragon2.png', id: 7
  },
  {
  image: '/images/sketches/illusions2.png', id: 8
  },
];

const data3 = [
{ image: '/images/sketches/cartoon2.png', id: 9 },
{ image: '/images/sketches/corona memory3.png', id: 10 },
{ image: '/images/sketches/spaceship sketch2.png', id: 11 },
]

export default function testing() {

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
    const selectedIndex = data.findIndex((item) => item.image === imageSrc);
    setSelectedImage(imageSrc);
    setCurrentIndex(data[selectedIndex].id);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const prevIndex = data.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? data.length - 1 : prevIndex - 1;
      setCurrentIndex(data[newIndex].id);
      setSelectedImage(data[newIndex].image);
      console.log(`Previous button clicked. Index: ${data[newIndex].id}`);
    }
  };


  const handleNextImage = () => {
    if (selectedImage !== null) {
      const prevIndex = data.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === data.length - 1 ? 0 : prevIndex + 1;
      setCurrentIndex(data[newIndex].id);
      setSelectedImage(data[newIndex].image);
      console.log(`Next button clicked. Index: ${data[newIndex].id}`);
    }
  };



/* handleoutsideclick*/
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
  document.title = 'testing';
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
   

            {/* image overlay and buttons logic */}
              {selectedImage && (
               <div id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none bg-black bg-opacity-75 transition-transform duration-300 z-50">
          <img
            src={selectedImage}
            alt=""
            className="max-w-4/5 max-h-4/5"
            style={{ maxHeight: '80vh', zIndex: 9990 }}
          />


          {/* close button */}
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
           
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data2.map((x) =>  (
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
       
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {data3.map((x) =>  (
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
   

        </main>
    )
}


