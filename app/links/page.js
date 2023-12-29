"use client";
import styles from "app/page.module.css";
import { DiGithubBadge, DiGoogleDrive } from "react-icons/di";
import { CiStickyNote, CiViewTimeline, CiImageOn } from "react-icons/ci";
import { React, useState, useEffect } from "react";

import { AnimatePresence, easeIn, motion } from "framer-motion";


export default function links() {
  useEffect(() => {
    document.title = "Links/Info";
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

      {/* <p className={styles.subtitledescription}>
        Hi, im Florian Kleiser, I am 24 years old and I come from Zürich,
        Switzerland. <br></br>
        My passions include drawing, editing, programming, gaming, skating and
        music. <br></br>I am currently applying to study Interaction Design /
        Digital Ideation.
      </p> */}

      <p className={styles.subtitledescription}>
        Links to my Portfolio, Curriculum Vitae, Google Drive, GitHub, and info about me 
      </p>

      <div style={{ padding: "1rem" }} />

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
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
        My portfolio for <br/> Interaction Design / <br/> Digital Ideation, <br/> made in 2023 <br/>
        </p>
        </div>

        </div>
        
        <motion.div whileInView={{translateX:0}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            translateX:100,
            backgroundImage: "url(/images/links/portfolio3.png)", 
            opacity: 0.5}}
            />

      </motion.div>
      
      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
      <motion.div whileInView={{translateX:0}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            translateX:-100,
            backgroundImage: "url(/images/links/cv2.png)", 
            opacity: 0.5}}
      />
           <motion.div className="flex-col mx-11" >
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
        My Curriculum Vitae<br/> (my education, skills <br/> and work experience)
        </p>
      </div>
      </motion.div>
      </motion.div>

      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
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
        All the animations/<br/>videos, the CV, and<br/>the Portfolio in <br/>high quality <br/> 
       </p>
      </div>
      </div>
      <motion.div whileInView={{translateX:0}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            translateX:100,
            backgroundImage: "url(/images/links/googledrive2.png)", 
            opacity: 0.5}}
      />
      </motion.div>


      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
     
     <motion.div whileInView={{translateX:0}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            translateX:-100,
            backgroundImage: "url(/images/links/github2.png)", 
            opacity:0.5}}
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
         The GitHub repositories/ <br/> source code for the p5js<br/> project, the Skylands VR<br/> game, and the code for <br/> this website <br/>
        </p>
      </div>
        </div>
      </motion.div>


      <div style={{ padding: "1rem" }} />
      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />


      <motion.div className={styles.linkContainerLinks} style={{opacity:0}} 
      whileInView={{opacity:1}} transition={{duration:1}}
      >
      <div className="flex-col mx-11">

      <motion.div className={styles.buttonLinksPage} style={{cursor:'default'}} whileTap={{scale:0.9}}> 
        <div className={styles.subtitledescription}>
          <p 
          style={{ padding: '1.5rem' }}
          >
            About Me
          </p>
        </div>
      </motion.div>  

        <div style={{padding:'0.5rem'}}/>
      <div className="max-w-prose ">
        <p className={styles.subtitledescription}>
        Hi, my name is Florian Kleiser.<br/> 
        I am 24 years old and I come <br/> 
        from Zürich, Switzerland. <br/> 
        My passions include drawing, <br/>
        editing, programming, gaming, <br/> 
        skating and music. I am currently <br/>
        applying to study Interaction<br/>
        Design/Digital Ideation.
        </p>
      </div>

        </div>
        <motion.div whileInView={{translateX:0}} transition={{duration:0.5}}
          className={styles.linkContainerImage}
          style={{
            translateX:100,
            backgroundImage: "url(/images/links/flofinal.png)", 
            opacity: 0.5}} 
      />
      </motion.div>

      <div style={{ padding: "2rem" }}> </div>
    </main>
  );
}
