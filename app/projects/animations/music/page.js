import styles from 'app/page.module.css'
import Link from 'next/link';
import LightButton from 'app/components/LightButton.js';
import { DiGoogleDrive } from "react-icons/di";

export const metadata = {
    title: 'Animations - Music',
    description: '-',
  }

export default function music() {
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
              Animations to Music
            </h1>
            {/* <div className={styles.subtitledescription}>
            <p>
                placeholder
            </p>
            </div> */}

            {/* <video
            src="https://drive.google.com/uc?id=16sVUVFGcCh9B5xtfMXyjT8JG6CnF7dug" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=17JQFnplhl78hUX6wIcvRLMOEZu-8t9xH" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=1sy4U3cpGvj3lQL_jCDiVZgU4gIA2s9eV" controls>
            </video>     */}

        <div className = {styles.subtitle}>
              <p>
               Public Transport
              </p> 
        </div>

        <div className={styles.subtitledescription}>
            <p>
            An animation to the song “Funk For Food” by Moderator. Drawn in Photoshop, animated in Adobe After Effects.
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 

            <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 51, position:'relative'}} 
            src="https://drive.google.com/file/d/16sVUVFGcCh9B5xtfMXyjT8JG6CnF7dug/preview" >
            </iframe>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        <div className = {styles.subtitle}>
              <p>
               Piano
              </p>
        </div>
            
            <div className={styles.subtitledescription}>
            <p>
            An animation of my room, drawn in Photoshop and animated in Adobe After Effects. To the song “Be Encouraged” by Kiefer.
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 
           
            <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 51, position:'relative'}}  src="https://drive.google.com/file/d/17JQFnplhl78hUX6wIcvRLMOEZu-8t9xH/preview" >
            </iframe>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        <div className = {styles.subtitle}>
              <p>
               Blurry
              </p>
        </div>

        <div className={styles.subtitledescription}>
            <p>
            An animation/visualizer to Milky Chances “Flashed Junk Mind”, made in Adobe After Effects.
            </p>
            </div>
            <div style={{ padding: '1rem' }}> </div> 

            <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 51, position:'relative'}}  src="https://drive.google.com/file/d/1sy4U3cpGvj3lQL_jCDiVZgU4gIA2s9eV/preview" >
           </iframe>
           </div>

           <div className={styles.subtitledescription} >
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
                <a href="https://drive.google.com/drive/folders/1hs6amskQ3A8BmUvoEel6KlbXPeIVsO_5?usp=sharing" target="_blank"> 
                    <DiGoogleDrive /> Videos on Google Drive
                </a>
                </div>
            </div>

           <div style={{ padding: '2rem' }}> </div>

        </main>

    )
}