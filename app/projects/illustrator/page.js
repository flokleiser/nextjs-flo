import styles from 'app/page.module.css'

export const metadata = {
    title: 'Illustrator Art',
    description: '-',
  }

export default function illustrator() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
             Illustrator Artworks
            </h1>
        </main>
    )
}