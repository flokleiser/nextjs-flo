import styles from 'app/page.module.css'

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
            <h2 className = {styles.description}>
              A VR game for the Meta Quest 2, made in Unity, using the built in XR Interaction Toolkit.
            </h2>
            
            <iframe src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview" width="640" height="480" allow="autoplay"></iframe>
        </main>
    )
}