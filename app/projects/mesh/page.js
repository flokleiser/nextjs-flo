import styles from 'app/page.module.css'

export const metadata = {
    title: 'Mesh Design',
    description: '-',
  }

export default function mesh() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Mesh Design
            </h1>
        </main>
    )
}