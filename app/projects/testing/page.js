"use client";
import styles from "app/page.module.css";
import { DiGithubBadge, DiGoogleDrive } from "react-icons/di";
import { CiStickyNote, CiViewTimeline, CiImageOn } from "react-icons/ci";
import { React, useState, useEffect } from "react";
import {
  SiAdobeaftereffects,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiBlender,
  SiUnity,
  SiAdobeillustrator,
  SiVisualstudiocode,
  SiAdobeindesign,
} from "react-icons/si";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ExpandableButton from "app/components/ExpandableButton";

export default function testing() {
  useEffect(() => {
    document.title = "Testing";
  }, []);

  return (
    <main className={styles.main}>
      <div
        className="relative 
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
   z-[-1]"
      ></div>

      <h1 className={styles.title}>Links/Info</h1>

      <p className={styles.subtitledescription}>
        Hi, im Florian Kleiser, I am 24 years old and I come from Zürich,
        Switzerland. <br></br>
        My passions include drawing, editing, programming, gaming, skating and
        music. <br></br>I am currently applying to study Interaction Design /
        Digital Ideation.
      </p>

      <div style={{ padding: "1rem" }} />
      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.linkContainerLinks}  
      // style={{gap:'2rem'}}
      >
        <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="https://drive.google.com/file/d/1xSrkDL-yliLV2XVAWYgNaPvalsMcsgKP/view"
                target="_blank"
              >
                <CiImageOn />
                Portfolio (.pdf)
              </a>
            </p>
          </div>
        </div>

        <div style={{padding:'0.5rem'}}/>

        <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        My portfolio for <br/> Interaction Design / <br/> Digital Ideation <br/> made in 2023 <br/>
        </p>
        </div>

        </div>
        
        <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/portfolio3.png)", 
            opacity: 0.5}}
            />

      </div>
      
      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.linkContainerLinks} 
      // style={{gap:'2rem'}}
      style={{marginLeft:'2rem', marginRight:'2rem'}}
      >
     
      <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/github2.png)", 
            opacity: 0.5}}
            />
 <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a href="https://github.com/flokleiser" target="_blank">
                <DiGithubBadge />
                GitHub.com
              </a>
            </p>
          </div>
        </div>
        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        My GitHub repositories <br/> for the p5js project, <br/> the "Skylands" VR game <br/> and the code for this website <br/>
        </p>
      </div>
        </div>
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.linkContainerLinks}>
      <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing"
                target="_blank"
              >
                <DiGoogleDrive />
                Google Drive
              </a>
            </p>
          </div>
        </div>
        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        All the files,<br/> including the images, <br/> videos, and animations <br/> in high quality <br/>     
       </p>
      </div>
      </div>
        <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/googledrive2.png)", 
            opacity: 0.5}}
      />
      </div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.linkContainerLinks}>
      <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/cv2.png)", 
            opacity: 0.5}}
      />
           <div className="flex-col mx-11">
        <div
          className={styles.buttonLinksPage}
        >
          <div className={styles.subtitledescription}>
            <p>
              <a
                href="https://drive.google.com/file/d/1rOXRUr6bOtxws0A105ZNlKbcPbmlmyOn/view"
                target="_blank"
              >
                <CiViewTimeline />
                CV (.pdf)
              </a>
            </p>
          </div>
        </div>
        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        My Curriculum Vitae<br/>
        {/* <br/> videos, and animations <br/> in high quality <br/> */}
        </p>
      </div>
      </div>
      </div>
      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <div className={styles.linkContainerLinks}>
      <div className="flex-col mx-11">

        <div className={styles.buttonLinksPage} style={{backgroundColor:'--background-start-rgb'}}>
          <div className={styles.subtitledescription}>
            <p>
              <a>  
              About Me 
              </a>
            </p>
        </div>
        </div>

        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        My Curriculum Vitae<br/>
        {/* <br/> videos, and animations <br/> in high quality <br/> */}
        </p>
      </div>

        </div>
        <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/links/flofinal.png)", 
            opacity: 0.5}}
      />
      </div>

      <div style={{ padding: "1rem" }}> </div>
    </main>
  );
}
