"use client";
import styles from "app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PiXCircle } from "react-icons/pi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";




const ImageGallery = ({data, w, h}) => {


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
  const dataArray = [...data];
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
    const dataArray = [...data];
    // const dataArray = [dataIndex]
    // const dataArray = [...dataArray];
    const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
    const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
    setCurrentIndex(dataArray[newIndex].id);
    setSelectedImage(dataArray[newIndex].image);
  }
};

const handleNextImage = () => {
  if (selectedImage !== null) {
    const dataArray = [...data];
    // const dataArray = [dataIndex]
    // const dataArray = [...dataArray]
    const nextIndex = dataArray.findIndex((item) => item.id === currentIndex);
    const newIndex = nextIndex === dataArray.length - 1 ? 0 : nextIndex + 1;
    setCurrentIndex(dataArray[newIndex].id);
    setSelectedImage(dataArray[newIndex].image);
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
              className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                backdropFilter: `blur(${selectedImage ? "10px" : "0px"})`,
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              }}
            >
              <motion.img
                src={selectedImage}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.45 }}
                transition={{ duration: 0.3 }}
                alt=""
                className="max-w-4/5 max-h-4/5"
                style={{
                  maxHeight: "80vh",
                  zIndex: 9990,
                  borderRadius: "24px",
                }}
              />
              <button
                className="absolute top-16 right-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"
                onClick={handleResetClick}
                style={{ zIndex: 9999 }}
              >
                <PiXCircle style={{ fontSize: "2rem" }} />
              </button>
              {/* prev and next buttons */}
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
              {/* <div className="absolute right-5"> */}
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


                      // width={400}
                      // height={400}


                      width={w}
                      height={h}


                      className={`max-h-1000 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105 ${
                        selectedImage ? "z-0" : ""
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
        </div>

)

}

export default ImageGallery;