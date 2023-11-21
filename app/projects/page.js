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
           style={{ backgroundImage: 'url("/images/cards/skylandslogo5 transparent4.png")',
                backgroundSize: '101%',
                backgroundPosition: 'center',
                // maskImage: 'linear-gradient(to right, transparent, black)',
                // maskSize: '75% 100%',
                // maskPosition: 'right',
                // maskRepeat: 'no-repeat',
                // WebkitMaskImage: 'linear-gradient(to right, transparent, black)',
                // WebkitMaskSize: '75% 100%',
                // WebkitMaskPosition: 'right',
                // WebkitMaskRepeat: 'no-repeat',
          }}
                rel="noopener noreferrer"
            >
            <h2> 
                Skylands
            </h2>
            <p>VR Game, made with Unity</p>
            </a>


            <a
            href = '/projects/creative-coding'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/creative coding transparent3.png")' ,
            backgroundSize: '101%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            </a>

            <a
            href = '/projects/animations'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/animations/plasticine card3.png")',
            backgroundSize: '101%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            </a>

            <a
            className={styles.card}
            href = '/projects/sketches'
            style={{ backgroundImage: 'url("/images/cards/sketches transparent7.png")',
                    backgroundSize: '101%',
                    backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            <p>Pages from my sketchbook</p>
            </a> 

            <a
                className={styles.card}
                rel="noopener noreferrer"
                href = '/projects/cad'
                style={{ backgroundImage: 'url("images/cards/cad transparent2.png")',
                backgroundSize: '101%',
                backgroundPosition: 'center'}}
            >
            <h2>
                CAD
            </h2>
            </a>

            <a
            href = '/projects/voxel'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("images/cards/voxel transparent4.png")',
            backgroundSize: '101%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Voxel Art
            </h2>
            </a>
      </div>
    </main>
    )
}