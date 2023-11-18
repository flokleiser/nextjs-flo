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
        </main>
    )
}