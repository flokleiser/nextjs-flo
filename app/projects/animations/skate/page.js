import styles from 'app/page.module.css'

export const metadata = {
    title: 'Skate',
    description: '-',
  }

export default function skate() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Skate Animations
            </h1>
          {/* <video
            src="https://drive.google.com/uc?id=10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E" controls height={10}>
            </video>

            <video
            src="https://drive.google.com/uc?id=1Qc3XrH6i341jI5vEosjXbxfbixdFFfD0" controls>
            </video> */}
      <div className = {styles.subtitle}>
              <h1>
                Skate Loop
              </h1>
        </div>
            <iframe src="https://drive.google.com/file/d/1Qc3XrH6i341jI5vEosjXbxfbixdFFfD0/preview"> 
            </iframe>

<div className = {styles.subtitle}>
              <h1>
             Skate Doodles 
              </h1>
        </div>
            <iframe src="https://drive.google.com/file/d/10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E/preview">
            </iframe>

        </main>
    )
}