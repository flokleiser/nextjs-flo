import styles from 'app/subpage.module.css'

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

       
        {/* <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            CAD<span>-&gt;</span>
          </h2>
          <p>
            Made using OnShape
          </p>
        </a> */}


        {/* <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sketches<span>-&gt;</span>
          </h2>
          <p>
            A collection of Sketches
          </p>
        </a> */}
      </div>
    </main>
    )
}