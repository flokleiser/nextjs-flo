import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     <div  className={styles.center}>
      <h1 className={styles.title}>
        Florian Kleiser
      </h1>
      <h2 className={styles.subtitle}>
        Portfolio
      </h2>
      </div>
    </main>
  )
}