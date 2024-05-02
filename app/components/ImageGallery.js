"use client";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PropTypes from 'prop-types';

const ImageGallery = ({data, w, h, desc, dColor, datas}) => {

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string, 
    })
  ).isRequired,
  h: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  desc: PropTypes.bool.isRequired,
  dColor: PropTypes.string,
  datas:PropTypes.array.isRequired
};


const [selectedImage, setSelectedImage] = useState(null);
const [selectedDescription, setSelectedDescription] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

const handleResetClick = () => {
  setSelectedImage(null);
  setCurrentIndex(0);
  document.documentElement.style.overflow = "auto";
  document.body.style.overflow = "auto";
};

const handleImageClick = (imageSrc) => {
  const dataArray = [...data];
  const selectedIndex = dataArray.findIndex(
    (item) => item.image === imageSrc
  );
  if (selectedIndex !== -1) {
    setSelectedImage(imageSrc);
    setCurrentIndex(dataArray[selectedIndex].id);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    setSelectedDescription(dataArray[selectedIndex].description);

  }
};

const handlePrevImage = () => {
  if (selectedImage !== null) {
    const dataArray = [...datas];
    const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
    const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
    setCurrentIndex(dataArray[newIndex].id);
    setSelectedImage(dataArray[newIndex].image);

    setSelectedDescription(dataArray[newIndex].description);
  }
};

const handleNextImage = () => {
  if (selectedImage !== null) {
    const dataArray = [...datas];
    const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
    const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
    setCurrentIndex(dataArray[newIndex].id);
    setSelectedImage(dataArray[newIndex].image);

    setSelectedDescription(dataArray[newIndex].description);
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

return ( 

    <div>
    <AnimatePresence>
          {selectedImage && (
            <motion.div
              id="overlay"
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                backdropFilter: `blur(${selectedImage ? "10px" : "0px"})`,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              }}
            >



{desc ? (
<motion.div className="flex flex-col items-center mt-8"
   initial={{ scale: 0.5 }}
   animate={{ scale: 1 }}
   exit={{ scale: 0.45 }}
   transition={{ duration: 0.3 }}>

              <motion.img
              //<Image 
                src={selectedImage}
                alt={selectedImage.description}
                className="max-w-4/5 max-h-4/5"
                style={{ maxHeight: "80vh", zIndex: 9998, borderRadius:'24px 24px 0px 0px '}}
               />

<div className={styles.imageDescription} style={{  backgroundColor: dColor}}>
          <p>
          {currentIndex + ")    "}  {selectedDescription}
          </p>
          </div>
</motion.div>
) : (
  <motion.img
  src={selectedImage}
  initial={{ scale: 0.5 }}
  animate={{ scale: 1 }}
  exit={{ scale: 0.45 }}
  transition={{ duration: 0.3 }}
  alt=""

  style={{
    maxHeight: "80vh",
    zIndex: 9998,
    borderRadius: "24px",
  }}
/>)}

              <button
                className="absolute top-16 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
                onClick={handleResetClick}
                style={{ zIndex: 9999 }}
              >
                <PiXCircle style={{ fontSize: "2rem" }} />
              </button>
              <div className="absolute left-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded">
                <button
                  id="leftButton"
                  className="text-black px-0 py-4 rounded-r"
                  onClick={handlePrevImage}
                  style={{ zIndex: 9999 }}
                >
                  <IoIosArrowBack style={{ fontSize: "2rem" }} />
                </button>
              </div>
              <div className="absolute right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded">
                <button
                  id="rightButton"
                  className=" text-black px-0 py-4 rounded-r"
                  onClick={handleNextImage}
                  style={{ zIndex: 9999 }}
                >
                  <IoIosArrowForward style={{ fontSize: "2rem" }} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="">
          <div className="p-3 container mx-auto">
            <div className="py-2"></div>
            <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
              {data.map((x) => (
                <article
                key="i1"
                  className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
                  <div className="relative rounded-2xl">
                    <Image
                      width={w}
                      height={h}
                      priority
                      className={`max-h-1500 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                        selectedImage ? "z-0" : ""
                      }`}
                      src={x.image}
                      alt=""
                      onClick={() => handleImageClick(x.image)}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,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"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        </div>

)

}

export default ImageGallery;