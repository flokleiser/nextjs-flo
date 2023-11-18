import styles from 'app/page.module.css'

export const metadata = {
    title: 'Sketches',
    description: '-',
  }

export default function sketches() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
             Sketches 
            </h1>
        </main>
    )
}