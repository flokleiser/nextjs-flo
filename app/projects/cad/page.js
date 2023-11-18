import styles from 'app/subpage.module.css'

export const metadata = {
    title: 'CAD',
    description: '-',
  }

export default function cad() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              Computer Aided Design 
            </h1>
        </main>
    )
}