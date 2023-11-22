import styles from './page.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="relative 
      flex 
      place-items-center 
      before:absolute 
      before:h-[500px] 
      before:w-[880px] 
      before:-translate-x-1/2 
      before:translate-y-1/2
      before:rounded-full 
      before:bg-gradient-radial 
      before:from-[#c45aa3]
      before:to-transparent
      before:blur-2xl 
      before:content-[''] 
      after:absolute 
      after:-z-20 
      after:h-[180px] 
      after:w-[240px] 
      after:translate-x-2/3 
      after:bg-gradient-conic 
      after:from-[#d55583]
      after:via-[#e55061] 
      after:content-[''] 

      /* Dark mode */
      
      before:dark:bg-gradient-to-br 
      before:dark:from-transparent 
      before:dark:to-[#c45aa3]
      before:dark:opacity-10 
      after:dark:from-[#d55583]
      after:dark:via-[#e55061] 
      after:dark:opacity-40 
      before:lg:h-[360px] 
      z-[-1]">  
      </div>
      <h1 className={styles.title}>
        Florian Kleiser
      </h1>
      <h2 className={styles.subtitle}>
        Portfolio
      </h2>
    </main>
  )
}

/* after first color: */
/* before:blur-2xl/ */

/* after second color: */
/* after:blur-2xl/ */
