import styles from 'app/page.module.css'
import Link from 'next/link';
import LightButton from 'app/components/LightButton.js';
import { DiGoogleDrive } from "react-icons/di";

export const metadata = {
    title: 'Animations - Logo',
    description: '-',
  }

export default function logo() {
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
            <h1> <Link href="/projects/animations">All Animations</Link> </h1>
            </div>
          
            <h1 className={styles.title}>
              Logo
            </h1>
            <div className={styles.subtitledescription}>
              <p> 
              A small project where i designed a logo for the first letter in my name, “F”, and animated 3 iterations in Adobe After Effects.
              </p>
            </div>

            <div style={{ padding: '1rem' }}> </div>
            {/* <video
            src="https://drive.google.com/uc?id=1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F" controls>
            </video> */}

<div className={styles.linkContainer}>
<div style={{ padding: "1rem" }}> </div>
<div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 51, position:'relative'}}
          src="https://www.youtube.com/embed/kYIbEc0wmu4?si=is1tQgTleDbIWayt"> 
          </iframe>
          </div>
          <div style={{ padding: '1rem' }}> </div>
         </div>
          <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/file/d/1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F/view?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> Video on Google Drive
                </a>
                </div>
            </div>

          <div style={{ padding: '2rem' }}> </div>
        </main>
    )
}