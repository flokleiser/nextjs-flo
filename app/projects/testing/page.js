import styles from "app/page.module.css"
import { CiGrid32, CiStickyNote } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'

export default function testing() {
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

      {/* <div className="w-full h-full"> */}
      <div className="absolute top-20 z--9999 opacity-5">
          <Image src="/images/Artboard 1.png"width={1000} height={400} className='shadow-2xl rounded-2xl'/>         
      </div>
      {/* </div> */}

      <div style={{ padding: '6rem' }}> </div>
  
  <div className={styles.buttonGeneralHomepage} style={{zIndex:60}} >
      <h2 className={styles.subtitleHomepage}>
            <Link  className="link-hover " href="/projects"> <CiGrid32/> Projects </Link> 
      </h2>
  </div>


     <div style={{ padding: '1rem' }}> </div>

     <div className={styles.buttonGeneralHomepage} style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="https://drive.google.com/file/d/1wO83IUSZOoHywbHAPXMUuf5oEhLLAwMu/view?usp=sharing" target="_blank"> 
          <div className={styles.mirrorIcon}>
          <CiStickyNote/>
          </div>
          Portfolio
           </Link> 
        </h2>
     </div>



    </main>

  )
}