import styles from 'app/subpage.module.css'


export const metadata = {
    title: 'Projects',
    description: '-',
  }
export default function projects() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}> 
            Projects
            </h1>
        <div className={styles.grid}>
            <a
            href='/skylands'
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Skylands
            </h2>
            </a>

            <a
            href = '/creative-coding'
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            </a>

            <a
            href = '/animations'
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            </a>
            </div>


            <div className={styles.grid}>
            <a
                className={styles.card}
                rel="noopener noreferrer"
                href = '/cad'
            >
            <h2>
                CAD
            </h2>
            </a>

            <a
            className={styles.card}
            href = '/sketches'
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            </a> 
      </div>
    </main>
    )
}