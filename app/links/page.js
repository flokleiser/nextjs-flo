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
                    <a href="https://github.com/flokleiser" target="_blank">
                        - Github
                    </a>
                </p>
                
                <p>
                    <a href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing" target="_blank">
                        - Google Drive
                    </a>
                </p>
                
                <p>
                    <a href="https://drive.google.com/drive/folders/1iTuoikGpE1WVMLkolIVQ4kmpH4dhQVAP?usp=sharing" target="_blank">
                    - Portfolio
                    </a>
                </p>
            </div>
        </main>
    )
}
