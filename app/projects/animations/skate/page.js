import styles from 'app/page.module.css'

export const metadata = {
    title: 'Skate',
    description: '-',
  }

export default function skate() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Skateboarding Animations
            </h1>
          <video
            src="https://drive.google.com/uc?id=10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E" controls>
            </video>

            <video
            src="https://drive.google.com/uc?id=1Qc3XrH6i341jI5vEosjXbxfbixdFFfD0" controls>
            </video>
        </main>
    )
}