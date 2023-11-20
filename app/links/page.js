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
                    (github logo)github.com/flokleiser/
                    </a>
                </p>
                <br></br>
                
                <p>
                    <a href="https://drive.google.com/drive/folders/1KUPLIgeu3yFQvicrqMEfe6qayze_X2ea?usp=sharing" target="_blank">
                       (google logo) Drive
                    </a>
                </p>
                <br></br>
                <p>
                    <a href="https://drive.google.com/drive/folders/1iTuoikGpE1WVMLkolIVQ4kmpH4dhQVAP?usp=sharing" target="_blank">
                    (pdf logo) Portfolio
                    </a>
                </p>
            </div>
        </main>
    )
}
