import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
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
        <h1>
          Florian Kleiser, Portfolio
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Skylands<span>-&gt;</span>
          </h2>
          <p>Meta Quest 2 Game. Made with Unity</p>
        </a>

        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Creative Coding<span>-&gt;</span>
          </h2>
          <p>Made with P5JS (JavaScript)</p>
        </a>


        <a
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Animations<span>-&gt;</span>
          </h2>
          <p>Made with Adobe After Effects</p>
        </a>

       
        <a
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
        </a>


        <a
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
        </a>
      </div>
    </main>
  )
}
