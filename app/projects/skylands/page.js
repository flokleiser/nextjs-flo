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
        
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ehdOkglKb0o?si=PzmIKV4jRCQDJvDR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>

            <h2 className = {styles.description}>
              apk link
              </h2>

        </main>
    )
}