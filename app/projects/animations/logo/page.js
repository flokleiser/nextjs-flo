import styles from 'app/page.module.css'

export const metadata = {
    title: 'Logo',
    description: '-',
  }

export default function logo() {
    return(
        <main className={styles.main}>
           
            <h1 className={styles.title}>
              Logo
            </h1>
            <video
            src="https://drive.google.com/uc?id=1t3uRCLQX84zKMnf8HlKfAWi6Srv_W94F" controls>
            </video>
        </main>
    )
}