import styles from 'app/page.module.css'

export const metadata = {
    title: 'Crafts',
    description: '-',
  }

export default function crafts() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
             Crafts
            </h1>
        </main>
    )
}