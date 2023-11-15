import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Florian Kleiser
      </h1>
      <h2 className={styles.subtitle}>
        Portfolio
        </h2>
      <div className={styles.description}>

      </div>
      <div className={styles.center}>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        
      </div>

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
          // href='/creative-coding'
          href = 'https://editor.p5js.org/flokleiser/sketches/1JskqsGtG'
          target='_blank'
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
