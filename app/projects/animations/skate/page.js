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

            <iframe src="https://drive.google.com/file/d/1Qc3XrH6i341jI5vEosjXbxfbixdFFfD0/preview" 
            width="100%" 
            style={{ padding: ' 2rem', aspectRatio: '16/9' }}
            allow="autoplay"></iframe>

            <iframe src="https://drive.google.com/file/d/10vV_TqscYwc4Oru_dqNVzKM385Bs8O1E/preview" 
            width="100%" 
            style={{ padding: ' 2rem', aspectRatio: '16/9' }}
            allow="autoplay"></iframe>

        </main>
    )
}