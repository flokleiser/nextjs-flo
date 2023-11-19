import styles from 'app/page.module.css'

export const metadata = {
    title: 'Other',
    description: '-',
  }

export default function other() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Various other animations
            </h1>
            <video 
            src="https://drive.google.com/uc?id=1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F" controls>
            </video>

            <video
            src="" controls>
            </video>

            <video
            src="" controls>
            </video>

            <video
            src="" controls>
            </video>    
        </main>
    )
}