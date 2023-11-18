import styles from 'app/page.module.css'

export const metadata = {
    title: 'About',
    description: '-',
  }

export default function about() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              About me
            </h1>
        </main>
    )
}