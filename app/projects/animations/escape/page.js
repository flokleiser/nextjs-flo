import styles from 'app/page.module.css'
import Link from 'next/link'
import LightButton from 'app/components/LightButton.js';
import { DiGoogleDrive } from "react-icons/di";

export const metadata = {
    title: 'Animations - Escape',
    description: '-',
  }

export default function escape() {
    return(
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
          {/* <div className="absolute top-20 left-5 bg-white text-black shadow-lg bg-opacity-50 px-2 py-1 rounded"> */}
          <h1> <Link  href="/projects/animations">All Animations</Link> </h1>
         
          </div>

            <h1 className={styles.title}>
              Escape 
            </h1>

          <div className={styles.subtitledescription}>
           <p>
            Homework for the application to the Propädeutikum ZHdK 2021, in which the task was to creatively utilise the image seen below.
           </p> 
            </div>

            <div style={{ padding: '1rem' }}> </div> 

            <div className={styles.linkContainer}>
<div style={{ padding: "1rem" }}> </div>
            <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 48, position:'relative'}}
        //  src="https://drive.google.com/file/d/1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF/preview"> 
            src="https://www.youtube.com/embed/F1f6YaIqRZI?si=9flICqQyXYAAeEGu&rel=0">
          </iframe>
          </div>
          <div style={{ padding: '1rem' }}> </div>
         </div>

          <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/file/d/1kJvpWzJHuDWREHTwNt2n_IL_YdrhjusF/view?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> Video on Google Drive
                </a>
                </div>
            </div>
            
            
          <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}