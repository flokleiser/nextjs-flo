import styles from 'app/page.module.css'

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
            <div className={styles.subtitle}>
                <p>
                    -Github
                </p>
                <p>
                    -Google Drive
                </p>
                <p>
                    -Portfolio
                </p>
            </div>
        </main>
    )
}
