import styles from 'app/page.module.css'
import { BsUnity } from "react-icons/bs";
import { BiSolidFileBlank, BiLink, BiLinkExternal } from "react-icons/bi";


export const metadata = {
    title: 'Skylands',
    description: '-',
  }

export default function skylands() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              Skylands 
            </h1>
            
            <div className={styles.subtitledescription}>
              <a>
             <BsUnity /> VR game for the Meta Quest 2, made in Unity
             </a> 
            </div>
        
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ehdOkglKb0o?si=PzmIKV4jRCQDJvDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen ></iframe>
            {/* <iframe src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview" width="640" height="480" allow="autoplay"></iframe> */}
           
            <div className = {styles.subtitledescription}>
            <p>
            <a href="https://drive.google.com/file/d/1Kg5mvFeOzfIsQm974Fk5bhWUzK3I6VP3/view?usp=drive_link" target="_blank">
            <BiSolidFileBlank />.apk
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

        </main>
    )
}