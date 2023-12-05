'use client'
import styles from 'app/page.module.css'
import { DiGithubBadge , DiGoogleDrive } from "react-icons/di";
import { BiSolidFilePdf, BiSolidFile  } from "react-icons/bi";
import { CiStickyNote, CiViewTimeline, CiImageOn} from "react-icons/ci";
import { React, useState, useEffect} from 'react';

export default function links() {

useEffect(() => {
    document.title = 'Links';
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

 const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };
  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };
  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };
 
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
              Links
            </h1>

            <div style={{ padding: '2rem' }}> </div>

<div className={styles.linkContainer}>
      
          <div className={`${styles.backgroundCard} 
              ${isHovered ? styles.backgroundCardPortfolioHovered : ''}
              ${isHovered2 ? styles.backgroundCardGithubHovered : ''}
              ${isHovered3 ? styles.backgroundCardGoogledriveHovered: ''}
              ${isHovered4 ? styles.backgroundCardCVHovered: ''}`} >
          </div>
         
     
         <div className={styles.buttonGeneral}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
            <div className={styles.subtitle}>
                <p>
                    <a href="https://drive.google.com/file/d/16pP5-QeRobbIaPl6GKzlcJCqClgF8gMK/view" target="_blank">
                    <CiImageOn/> 
                    Portfolio
                    </a>
                </p>
            </div>
            </div>

            <div  className={styles.buttonGeneral} 
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>
                <div className={styles.subtitle}>
                <p>
                    <a href="https://github.com/flokleiser" target="_blank">
                    <DiGithubBadge />Github
                    </a>
                </p>
               </div> 
               </div>
               
               <div className={styles.buttonGeneral}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}>
                <div className={styles.subtitle}>
                <p>
                    <a href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing" target="_blank">
                    <DiGoogleDrive />Google Drive
                    </a>
                </p>
            </div>
            </div>

            <div className={styles.buttonGeneral}
            onMouseEnter={handleMouseEnter4}
            onMouseLeave={handleMouseLeave4}>
            <div className={styles.subtitle}>
                <p>
                    <a href="https://drive.google.com/file/d/16NBQjV3BtpM_I0j3xOTWSksGIu0zpR-Q/view" target="_blank">
                    <CiViewTimeline />CV 
                    </a>
                </p>
            </div>
          </div>
   

            </div>
        </main>
    )
}
