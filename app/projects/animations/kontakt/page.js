import styles from 'app/page.module.css'
import Link from 'next/link';
import LightButton from 'app/components/LightButton.js';

export const metadata = {
    title: 'Kontakt',
    description: '-',
  }

export default function kontakt() {
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
            <h1> <Link href="/projects/animations"> Back to Animations</Link> </h1>
            </div>

            <h1 className={styles.title}>
              Kontakt
            </h1>

            <div className={styles.subtitledescription}>
              <p>
                Animations using the "Physics Now" plugin, made in Adobe After Effects
              </p>
            </div>


{/*           
            <video
            src="https://drive.google.com/uc?id=1i1w_fS3-Os0GrAVs-5XcMHmMXpVzvapQ" controls>
            </video> */}
         
         <div className='flex align-center'>
            <LightButton />
            <iframe className={styles.iframevideo} style={{ zIndex: 51, position:'relative'}} 
            src="https://drive.google.com/file/d/1i1w_fS3-Os0GrAVs-5XcMHmMXpVzvapQ/preview"> 
            </iframe>
            </div>

            <div style={{ padding: '2rem' }}> </div>
        </main>
    )
}