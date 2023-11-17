import styles from 'app/subpage.module.css'

export const metadata = {
    title: 'Links',
    description: '-',
  }

export default function links() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
              Links 
            </h1>
        </main>
    )
}
