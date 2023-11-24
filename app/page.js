import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
     {/* <div  className={styles.center}> */}
      <h1 className={styles.titleHomepage}>
        Florian Kleiser
      </h1>
      <h2 className={styles.subtitleHomepage}>
        Portfolio
      </h2>
      {/* </div> */}
    </main>
  )
}