'use client'
import styles from 'app/page.module.css'
import { DiGithubBadge , DiGoogleDrive } from "react-icons/di";
import { CiStickyNote, CiViewTimeline, CiImageOn} from "react-icons/ci";
import { React, useState, useEffect} from 'react';
import { SiAdobeaftereffects,SiAdobephotoshop,SiAdobepremierepro,SiBlender,SiUnity,SiAdobeillustrator,SiVisualstudiocode,SiAdobeindesign,SiXcode } from "react-icons/si";
import Image from 'next/image'

  
const imageUrls = [
    '/images/links/cv1',
    '/images/links/github1',
    '/images/links/googledrive1',
    '/images/links/portfolio1',
  ]

function handleMouseEnter() {
  setCurrentImageUrl(imageUrl);
}

function handleMouseLeave() {
  setCurrentImageUrl('/images/flo5.png');
}


export default function links() {

useEffect(() => {
    document.title = 'Links/Info';
  }, []);


  const [currentImageUrl, setCurrentImageUrl] = useState('');


  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };
 
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
                  Links/Info
              </h1>
                        
              <div>
                {imageUrls.map((imageUrl,index) => (

                  <a
                  key={index}
                  href="#"
                  onMouseEnter={() => handleMouseEnter(imageUrl)}
                  onMouseLeave={handleMouseLeave} >
                  
                  <Image
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  // layout="fill"
                  objectFit='cover'
                  style={{width:'100px', height:'100px'}}
                  />
                  </a>
                ))}
              </div>

<div
style={{
  backgroundImage: `url(${currentImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '300px',
}}>

</div>


        </main>
    )
}




{/* Icons */}

     {/* <div className="flex flex-wrap justify-center gap-2">
                  <SiAdobeillustrator size={60} />
                  <SiAdobephotoshop size={60}/> 
                  <SiAdobeindesign size={60}/> 
                  <SiAdobepremierepro size={60}/> 
                  <SiAdobeaftereffects size={60}/> 
                  <SiVisualstudiocode size={60}/> 
                  <SiBlender size={60} /> 
                  <SiUnity size={60} /> 
                  <Image src="/svg/logic.svg" width={60} height={24} style={{filter: 'invert(1)'}} />
              </div> */}


{/* Links background cards */}
{/* <div className={`${styles.backgroundCard} 
          ${isHovered ? styles.backgroundCardPortfolioHovered : ''}
          ${isHovered2 ? styles.backgroundCardGithubHovered : ''}
          ${isHovered3 ? styles.backgroundCardGoogledriveHovered: ''}
          ${isHovered4 ? styles.backgroundCardCVHovered: ''}`} >
      </div> */}