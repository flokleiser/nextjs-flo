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
import ExpandableButton from "../components/ExpandableButton";

export default function links() {
  useEffect(() => {
    document.title = "Links/Info";
  }, []);

  const [isHoveringPortfolio, setIsHoveringPortfolio] = useState(false);
  const [isHoveringGithub, setIsHoveringGithub] = useState(false);
  const [isHoveringGoogleDrive, setIsHoveringGoogleDrive] = useState(false);
  const [isHoveringCV, setIsHoveringCV] = useState(false);

  const handleHoverPortfolio = () => {
    setIsHoveringPortfolio(!isHoveringPortfolio);
  };
  const handleHoverGithub = () => {
    setIsHoveringGithub(!isHoveringGithub);
  };
  const handleHoverGoogleDrive = () => {
    setIsHoveringGoogleDrive(!isHoveringGoogleDrive);
  };
  const handleHoverCV = () => {
    setIsHoveringCV(!isHoveringCV);
  };

  const [animationClass, setAnimationClass] = useState("");
  useEffect(() => {
    if (isHoveringPortfolio) {
      setAnimationClass(styles.linkPageAnimationDiv1);
    } else if (animationClass === styles.linkPageAnimationDiv1) {
      setAnimationClass(styles.linkPageAnimationDiv2);
    }
  }, [isHoveringPortfolio]);



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

      <div className={styles.linkContainer}>
        <div style={{ padding: "1rem" }}> </div>
        <p className={styles.subtitledescription}>
          Hi, im Florian Kleiser, I am 24 years old and I come from Zürich,
          Switzerland. <br></br>
          My passions include drawing, editing, programming, gaming, skating and
          music. <br></br>I am currently applying to study Interaction Design /
          Digital Ideation.
        </p>
        <div style={{ padding: "1rem" }}> </div>


        <div className={styles.linkContainerLinks}>
          <div
            className={styles.buttonLinksPage}
            onMouseOver={handleHoverPortfolio}
            onMouseMove={() => setIsHoveringPortfolio(true)}
            onMouseLeave={() => setIsHoveringPortfolio(false)}
          >
            <div className={styles.subtitledescription}>
              <p>
                <a
                  href="https://drive.google.com/file/d/16pP5-QeRobbIaPl6GKzlcJCqClgF8gMK/view"
                  target="_blank"
                >
                  <CiImageOn />
                  Portfolio (.pdf)
                </a>
              </p>
            </div>
          </div>

          <div
            className={styles.buttonLinksPage}
            onMouseOver= {handleHoverGithub}
            onMouseMove={() => setIsHoveringGithub(true)}
            onMouseLeave={() => setIsHoveringGithub(false)}
          >
            <div className={styles.subtitledescription}>
              <p>
                <a href="https://github.com/flokleiser" target="_blank">
                  <DiGithubBadge />
                  Github.com
                </a>
              </p>
            </div>
          </div>

          <div
            className={styles.buttonLinksPage}
            onMouseOver={handleHoverGoogleDrive}
            onMouseMove={() => setIsHoveringGoogleDrive(true)}
            onMouseLeave={() => setIsHoveringGoogleDrive(false)}
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

          <div
            className={styles.buttonLinksPage}
            onMouseOver={handleHoverCV}
            onMouseMove={() => setIsHoveringCV(true)}
            onMouseLeave={() => setIsHoveringCV(false)}
          >
            <div className={styles.subtitledescription}>
              <p>
                <a
                  href="https://drive.google.com/file/d/16NBQjV3BtpM_I0j3xOTWSksGIu0zpR-Q/view"
                  target="_blank"
                >
                  <CiViewTimeline />
                  CV (.pdf)
                </a>
              </p>
            </div>
          </div>
        </div>

        <div style={{ padding: "1rem" }}> </div>

        <div
          className={styles.linkContainerImage}
          style={{
            backgroundImage: "url(/images/flo1.png)", 
            opacity: 0.5, 
            ...(isHoveringPortfolio ? { backgroundImage: "url(/images/links/portfolio2.png)" } : null),
            ...(isHoveringGithub? { backgroundImage: "url(/images/links/github2.png)" } : null),
            ...(isHoveringGoogleDrive? { backgroundImage: "url(/images/links/googledrive2.png)" } : null),
            ...(isHoveringCV? { backgroundImage: "url(/images/links/cv2.png)" } : null),
          }}
          >
        </div>

        <div style={{ padding: "1rem" }}> </div>
      </div>  
      <div style={{ padding: "1rem" }}> </div>
      
      <div className={styles.linkContainer}>

      <div style={{ padding: "1rem" }}> </div>

      <div className={styles.subtitledescription}>
        <h1>Education/Experience</h1>
        <ExpandableButton>

<Image
  src="/svg/timeline4.svg"
  alt="timeline"
  width={900}
  height={24}
  style={{ margin: 20 }}
/>

      </ExpandableButton>
      </div>

      <div style={{ padding: "1rem" }}> </div>
     </div>
      <div style={{ padding: "1rem" }}/>
      <div className={styles.linkContainer}>
      <div style={{ padding: "1rem" }}/> 

      <div className={styles.subtitledescription}>
        <h1>Skills</h1>
        <ExpandableButton>

<div style={{ padding: "1rem" }}></div>
<div className="flex flex-wrap justify-center gap-2">
<SiAdobeillustrator size={60} />
<SiAdobephotoshop size={60} />
<SiAdobeindesign size={60} />
<SiAdobepremierepro size={60} />
<SiAdobeaftereffects size={60} />
<SiVisualstudiocode size={60} />
<SiBlender size={60} />
<SiUnity size={60} />
<Image
src="/svg/logic.svg"
width={60}
height={24}
style={{ filter: "invert(1)" }}
/>
</div>
<div style={{ padding: "1rem" }}></div>

</ExpandableButton>
      </div>

      <div style={{ padding: "1rem" }}> </div>
      </div>
      <div style={{ padding: "2rem" }}> </div>
    </main>
  );
}
