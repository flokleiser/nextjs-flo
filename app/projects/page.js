import styles from 'app/page.module.css'


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
           href='/projects/skylands'
           className={styles.card2}
           style={{ backgroundImage: 'url("/images/boat.png")' }}
           rel="noopener noreferrer"
            >
            <h2>
                Skylands
            </h2>
            </a>


            <a
            href = '/projects/creative-coding'
            className={styles.card2}
            style={{ backgroundImage: 'url("/images/canvas-1301(t, half width screen) copy.jpg")' }}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            </a>


            <a
                className={styles.card}
                rel="noopener noreferrer"
                href = '/projects/cad'
            >
            <h2>
                CAD
            </h2>
            </a>

            <a
            className={styles.card}
            href = '/projects/sketches'
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            </a> 
            
            <a
            href = '/projects/animations'
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            </a>

            <a
            href = '/projects/voxel'
            className={styles.card}
            rel="noopener noreferrer"
            >
            <h2>
                Voxel Art
            </h2>
            </a>
      </div>
    </main>
    )
}