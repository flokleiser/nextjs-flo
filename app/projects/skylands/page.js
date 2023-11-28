import styles from 'app/page.module.css'
import { BsUnity } from "react-icons/bs";
import { BiSolidFileBlank, BiLink, BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';
// import { Gallery } from "react-grid-gallery"


// export const metadata = {
//     title: 'Skylands',
//     description: '-',
//   }

//   const images = [
//     {
//        src: "public/images/cards/animlogo transparent3.png",
//        width: 320,
//        height: 174,
//     },
//  ];
 

export default function skylands() {
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

           
          <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back to Projects </Link> </h1>
            </div>

            <h1 className={styles.title}>
              Skylands 
            </h1>
            
            <div className={styles.subtitledescription}>
            <p>
             <BsUnity /> VR game for the Meta Quest 2, made in Unity
            </p>
      
            </div>
            
            {/* <Gallery images={images} />  */}
          
            <iframe className={styles.iframevideo}
            src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview"> 
              </iframe>

            <div className = {styles.subtitledescription}>
              <h1>
               Links
              </h1>
              </div>

            <div className = {styles.subtitledescription}>
            <p>
            <a href="https://drive.google.com/file/d/1Kg5mvFeOzfIsQm974Fk5bhWUzK3I6VP3/view?usp=drive_link" target="_blank">
            <BiSolidFileBlank />.apk file
            </a>  
            </p>
            </div>

            <div className = {styles.subtitledescription}>
            <p>

              <a href="https://sidequestvr.com/setup-howto" target="_blank">
                <BiLinkExternal/> How to sideload with SideQuest
              </a>
            </p>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}