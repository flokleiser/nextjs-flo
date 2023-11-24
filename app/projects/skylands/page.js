import styles from 'app/page.module.css'
import { BsUnity } from "react-icons/bs";

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
            <h2 className={styles.subtitle}>
              A VR game for the Meta Quest 2, made in Unity, using the built in XR Interaction Toolkit.
            <BsUnity />
            </h2>
        
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ehdOkglKb0o?si=PzmIKV4jRCQDJvDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowfullscreen ></iframe>
            {/* <iframe src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview" width="640" height="480" allow="autoplay"></iframe> */}
            <h2 className = {styles.description}>
              apk link
              </h2>

        </main>
    )
}