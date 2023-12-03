import styles from 'app/page.module.css'
import { DiGithubBadge , DiGoogleDrive } from "react-icons/di";
import { BiSolidFilePdf, BiSolidFile  } from "react-icons/bi";
import { CiStickyNote, CiViewTimeline} from "react-icons/ci";


export const metadata = {
    title: 'Links',
    description: '-',
  }

export default function links() {
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

            <div className={styles.buttonGeneral}>
            <div className={styles.subtitle}>
                <p>
        
                    {/* <a href="https://drive.google.com/drive/folders/1iTuoikGpE1WVMLkolIVQ4kmpH4dhQVAP?usp=sharing" target="_blank"> */}
                    <a href="https://drive.google.com/file/d/1wO83IUSZOoHywbHAPXMUuf5oEhLLAwMu/view?usp=sharing" target="_blank">
                    <div className={styles.mirrorIcon}>
                    <CiStickyNote/> 
                    </div>
                    Portfolio
                    </a>
                </p>
            </div>
            </div>
            <div className={styles.buttonGeneral}>
                <div className={styles.subtitle}>
                <p>
                    <a href="https://github.com/flokleiser" target="_blank">
                    <DiGithubBadge />Github
                    </a>
                </p>
               </div> 
               </div>
               <div className={styles.buttonGeneral}>
                <div className={styles.subtitle}>
                <p>
                    <a href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing" target="_blank">
                    <DiGoogleDrive />Google Drive
                    </a>
                </p>
            </div>
            </div>

            <div className={styles.buttonGeneral}>
            <div className={styles.subtitle}>
                <p>
                    <a href="https://drive.google.com/file/d/16NBQjV3BtpM_I0j3xOTWSksGIu0zpR-Q/view" target="_blank">
                    <CiViewTimeline />CV 
                    </a>
                </p>
            </div>

            </div>
        </main>
    )
}
