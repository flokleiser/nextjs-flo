import styles from '/app/page.module.css'
import { CiGrid32,CiImageOn, CiFileOn, CiViewList, CiStickyNote} from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'


export default function Home() {
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

  
      <h1 className={styles.titleHomepage} style={{zIndex:60}}>
        Florian Kleiser
      </h1>




    <div className={styles.homepageSlices}>

    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/1.png" width={1100} height={1000} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/2.png" width={1100} height={1000} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/3.png" width={1100} height={1000} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/4.png" width={1100} height={1000} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/5.png" width={1100} height={1000} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/6.png" width={1100} height={1000} /> 

    </div>

    <div style={{ margin: '5rem' }}> </div>

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="/projects"> <CiGrid32/> Projects </Link> 
        </h2>
     </div>

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="https://drive.google.com/file/d/1ie6MWhrbnUPSAtZAVg1rsde08PLT4qqe/view" target="_blank"> 
          <CiImageOn />
          Portfolio 
          </Link> 
        </h2>
     </div>

     <div style={{ margin: '3.5rem' }}> </div>

     <div className={styles.subtitledescription} style={{opacity:0.1}}>
    <p>
      Disclaimer: this website is still under construction. 
      <Image src="/images/happysad.png" width={25} height={25} className={styles.emoji}/>
    </p>
    </div>

    </main>

  )
}