import styles from 'app/page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: 'Illustrator Art',
    description: '-',
  }

export default function illustrator() {
    return (
        <main className={styles.main}>
              <div className="relative 
   flex 
   place-items-center 
   before:absolute 
   before:h-[300px] 
   before:w-[480px] 
   before:-translate-x-1/2 
   before:rounded-full 
   before:bg-gradient-radial 
   before:from-white 
   before:to-transparent 
   before:blur-2xl 
   before:content-[''] 
   after:absolute 
   after:-z-20 
   after:h-[180px] 
   after:w-[240px] 
   after:translate-x-1/3 
   after:bg-gradient-conic 
   after:from-sky-200 
   after:via-blue-200 
   after:blur-2xl 
   after:content-[''] 
   before:dark:bg-gradient-to-br 
   before:dark:from-transparent 
   before:dark:to-blue-700 
   before:dark:opacity-10 
   after:dark:from-sky-900 
   after:dark:via-[#0141ff] 
   after:dark:opacity-40 
   before:lg:h-[360px] 
   z-[-1]">
          </div>

           
          {/* <div className={styles.backbutton}>
            <h1> <Link href="/projects"> Back to Projects </Link> </h1>
            </div> */}

            <h1 className={styles.title}>
             Illustrator Artworks
            </h1>
            <div className={styles.subtitle}>
            <p>
            How To'nt    
            </p>
            </div>
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_1.jpg"width={800} height={800}/> 
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_2.jpg"width={800} height={800}/> 
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_3.jpg"width={800} height={800}/> 
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_4.jpg"width={800} height={800}/> 
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_5.jpg"width={800} height={800}/> 
            <Image src="/images/illustrator/howton't/HOW-TON'T final version_Page_6.jpg"width={800} height={800}/> 
            
            <div className={styles.subtitle}>
            <p>
            Reduce To The Max 
            </p>
            </div>
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_1.png"width={800} height={800}/> 
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_2.png"width={800} height={800}/> 
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_3.png"width={800} height={800}/> 
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_4.png"width={800} height={800}/> 
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_5.png"width={800} height={800}/> 
            <Image src="/images/illustrator/reduce to the max/Reduce To The Max_Page_6.png"width={800} height={800}/> 
        </main>
    )
}