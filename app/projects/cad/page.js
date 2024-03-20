'use client'
import React, {useState, useEffect} from 'react';
import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { PiXCircle } from "react-icons/pi"; 
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SpotLight, AmbientLight, PointLight, DirectionalLight } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// const data = [
//   { image : '/images/cad/cad website.png', id: 0, description:'Render of the knife, made in Blender'},
// ]

function Model() {
  const gltf= useLoader(GLTFLoader, '/stl/butterfly_open.glb');
  const material = new THREE.MeshStandardMaterial({ color: 'white', side: THREE.DoubleSide });

  // gltf.traverse((child) => {
  //     if (child instanceof THREE.Mesh) {
  //       child.material = material;
  //     }
  //   });

  return <primitive object={gltf.scene} />;
  }

const data2 = [
  { image: '/images/cad/cad parts2.png', id: 1, description:'Individual parts nr. 1'},
  { image: '/images/cad/cad parts1.png', id: 2, description:'Individual parts nr. 2'},
  { image: '/images/cad/cad parts3.png', id: 3, description:'Assembly'},
]

const data3 = [
  { image : '/images/cad/cadknife4.png', id: 4},
  { image : '/images/cad/cadknife2.png', id: 5},
  { image : '/images/cad/cadknife1.png', id: 6},
  { image : '/images/cad/cadknife3.png', id: 7},
]

const data4 = [
  { image: '/images/cad/popsicle1.png', id: 8},
  { image: '/images/cad/popsicle2.png', id: 9},
]

export default function cad() {

 
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
    const dataArray = [ ...data2, ...data3, ...data4];
    const selectedIndex = dataArray.findIndex((item) => item.image === imageSrc);
    if (selectedIndex !== -1) {
      setSelectedImage(imageSrc);
      setCurrentIndex(dataArray[selectedIndex].id);
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      setSelectedDescription(dataArray[selectedIndex].description);      

    }
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      const dataArray = [ ...data2, ...data3, ...data4];
      const prevIndex = dataArray.findIndex((item) => item.id === currentIndex);
      const newIndex = prevIndex === 0 ? dataArray.length - 1 : prevIndex - 1;
      setCurrentIndex(dataArray[newIndex].id);
      setSelectedImage(dataArray[newIndex].image);

      setSelectedDescription(dataArray[newIndex].description);

    }
  };


  const handleNextImage = () => {
    if (selectedImage !== null) {
      const dataArray = [ ...data2, ...data3, ...data4];
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
    document.title = 'Projects - CAD';
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
          
          <div className={styles.backbutton}
           style={{position:'fixed', zIndex:9999}}
            >
            <h1> <Link href="/projects">All Projects </Link> </h1>
            </div>
            <div style={{paddingTop:'1rem'}} />

            <div className={styles.linkContainerCad} 
          >
                     
            <h1 className={styles.titleWithoutPaddingCad}>
             Computer Aided Design
            </h1>


            {/* <h1 className={styles.title}>
             Computer Aided Design
            </h1> */}

            <div style={{padding:'1rem'}} />
             
            <div className={styles.subtitledescription}>
            <p>
            A balisong (butterfly knife) designed in onshape.com, rendered in Blender, and built using popsicle sticks and hot glue.
            </p>
            </div> 

            <div className="">

             <AnimatePresence>
              {selectedImage && (
               <motion.div
                id="overlay" 
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50"
        // className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50 border-solid border-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5}}
        style={{
          backdropFilter: `blur(${selectedImage ? '10px' : '0px'})`,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
          >
          
         
          <motion.div className="flex flex-col items-center mt-8"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.45 }}
          transition={{ duration: 0.3 }}
>
              <motion.img
                src={selectedImage}
                alt={selectedImage.description}
                className="max-w-4/5 max-h-4/5"
                style={{ maxHeight: "80vh", zIndex: 9998, borderRadius:'24px 24px 0px 0px ', 
       
              }}

              />

          </motion.div>

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

      <div style={{ padding: "1rem" }} />


<div className={styles.linkContainerCADModel} >

      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[0,0,15]} />
        <OrbitControls />
        <Model />
      </Canvas>

  {/* <div className={styles.cadModelButtons}> */}
  <div className="flex">

    <button className={styles.buttonCad}>
      <h1> <Link href="/projects/cad">Open</Link> </h1>
    </button>

    <button className={styles.buttonCad}>
      <h1> <Link href="/projects/cad">Clo</Link> </h1>
    </button>

  </div>

</div>



             
              </div>
            <div style={{ padding: "2rem" }} />
      {/* <hr className={styles.pageDivider} /> */}
      <hr className={styles.pageDividerCad} />
      <div style={{ padding: "1rem" }} />
            
            <div styles={{ padding: '2rem' }}> </div>

      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
      <motion.div whileInView={{translateX:0, filter:'blur(0px)'}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            filter:'blur(20px)',
            translateX:-100,
            backgroundImage: "url('/images/cad/cadimage.png')",
            opacity: 1
          }}
      />
           <motion.div className="flex-col mx-11" >
        <div
          className={styles.buttonLinksPageCad}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="https://cad.onshape.com/documents/74ceed200a5aa4f63a77c82e/w/2cd4c25834f626e76cd4c9af/e/d0d97ca62557a0c79fb7dfc5?renderMode=0&uiState=6567658f98467778680c9faf" target="_blank">
                 <Image
                      src="/svg/onshape.svg"
                      alt="Onshape Logo"
                      className={styles.vercelLogo}
                      style={{ filter: 'invert(100%)' }}
                      width={50}
                      height={24}
                      priority
                    />  
              cad.onshape.com 
              </a>
            </p>
          </div>
        </div>
        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
          The project on OnShape
        </p>
      </div>
      </motion.div>
      </motion.div>

      

      <div style={{ padding: "1rem" }} />
      {/* <hr className={styles.pageDivider} /> */}
      <hr className={styles.pageDividerCad} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.subtitledescription}>
            <p>
              Assembly process/individual parts
            </p>
            </div>  

            <div styles={{ padding: '2rem' }}> </div>

              <motion.div className=""
              // style={{translateX:-300, opacity:0.5, filter:'blur(10px)'}}
              // whileInView={{translateX:0, opacity:1, filter:'blur(0px)'}}
              // transition={{duration:0.5}} 
              >
                
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3">
                    {data2.map((x) =>  (
                  <article key="cad2"
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
              </motion.div>


              <div styles={{ padding: '2rem' }}> </div>

              <div className={styles.pageDividerCad} />
              <div style={{ padding: "1rem" }} />

<div className={styles.subtitledescription}>
<p>
Completed CAD design:
</p>
</div>  

<div styles={{ padding: '2rem' }}> </div>


              <motion.div className=""
              // style={{translateX:300, opacity:0.5, filter:'blur(10px)'}}
              // whileInView={{translateX:0, opacity:1, filter:'blur(0px)'}}
              // transition={{duration:0.5}} 
              >
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 ">
                    {data3.map((x) =>  (
                  <article key="cad3"
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
              </motion.div>

              <div styles={{ padding: '2rem' }}> </div>

              <div className={styles.pageDividerCad} />
              {/* <div className={styles.pageDividerDark} /> */}
              <div style={{padding:'1rem' }} />

<div className={styles.subtitledescription}>
<p>
Prototypes out of popsicle sticks
</p>
</div>  

<div styles={{ padding: '2rem' }}> </div>


              <motion.div className=""
              // style={{translateX:-300, opacity:0.5, filter:'blur(10px)'}}
              // whileInView={{translateX:0, opacity:1, filter:'blur(0px)'}}
              // transition={{duration:0.5}} 
              >
              <div className="p-3 container mx-auto">
                <div className="py-2"></div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3" >
                    {data4.map((x) =>  (
                  <article key="cad4"
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
              </motion.div>

            {/* <div className={styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <a style={{paddingBottom: '2rem'}}
                      href="https://cad.onshape.com/documents/74ceed200a5aa4f63a77c82e/w/2cd4c25834f626e76cd4c9af/e/d0d97ca62557a0c79fb7dfc5?renderMode=0&uiState=6567658f98467778680c9faf" target="_blank">
                    <Image
                      src="/svg/onshape.svg"
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
            </div> */}
            </div>

            <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}