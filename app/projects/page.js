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
           className={styles.card}
           style={{ 
                backgroundImage: 'url("/images/skylandslogo5.png")'
           }}
                rel="noopener noreferrer"
            >
            <h2> 
                Skylands
            </h2>
            </a>


            <a
            href = '/projects/creative-coding'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cropped.png")' }}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            </a>

            <a
            href = '/projects/animations'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/animlogo2.png")' }}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            </a>

            <a
            className={styles.card}
            href = '/projects/sketches'
            // style={{ backgroundImage: 'url("/images/BRW7440BB876FAE_002226_Part8-1.png")' }}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
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