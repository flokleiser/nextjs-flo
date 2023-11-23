import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      
      <h1 className={styles.title}>
        Florian Kleiser
      </h1>
      <h2 className={styles.subtitle}>
        Portfolio
      </h2>
    </main>
  )
}