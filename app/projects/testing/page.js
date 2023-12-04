'use client'
import styles from '/app/page.module.css'
import { CiGrid32, CiFileOn, CiViewList, CiStickyNote} from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'
import {AnimatePresence, motion} from "framer-motion";


export default function testing() {
  return (
    
    <main className={styles.main}style={{zIndex:60, boxShadow:10}}>
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

    <div style={{ padding: '2rem' }}> </div>

          {/* <div className={styles.triangle}></div> */}


      {/* <h1 className={styles.titleHomepage}>
        Florian Kleiser
      </h1>

  <div style={{ margin: '-1rem' }}> </div> */}

    <div className={styles.homepageSlicesTest} > 

      <Image className={styles.cardHomepage} style={{
       zIndex:1,  marginRight: '0rem' ,width: 'auto', height: '400px'}}
       src="/images/homepage/new/1.png" width={300} height={300} />  
 
     
      <Image className={styles.cardHomepage} style={{
        marginLeft: '-4rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px' }} 
        src="/images/homepage/new/2.png" width={300} height={300} />  
      
      <Image className={styles.cardHomepage} style={{ 
        marginLeft: '-5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} 
        src="/images/homepage/new/3.png" width={300} height={300} />  
     
      <Image className={styles.cardHomepage} style={{ 
        marginLeft: '-5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} 
        src="/images/homepage/new/4.png" width={300} height={300} />  
     
      <Image className={styles.cardHomepage} style={{ 
        marginLeft: '-4rem', marginRight: '-4rem' ,width: 'auto', height: '400px'}} 
        src="/images/homepage/new/5.png" width={300} height={300} />  
     
      <Image className={styles.cardHomepage} style={{ 
        marginLeft: '0rem', zIndex:1 ,width: 'auto', height: '400px'}} 
        src="/images/homepage/new/6.png" width={300} height={300} />  


    </div>

{/*

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="/projects"> <CiGrid32/> Projects </Link> 
        </h2>
     </div>

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="https://drive.google.com/file/d/1wO83IUSZOoHywbHAPXMUuf5oEhLLAwMu/view?usp=sharing" target="_blank"> 
          <div className={styles.mirrorIcon}>
          <CiStickyNote/>
          </div>
          Portfolio 
          </Link> 
        </h2>
     </div> */}
      
    </main>

  )
}










//Smaller Gap

      {/* <AnimatePresence>
      <motion.div>
              <Image className={styles.cardHomepage} style={{zIndex:1,  marginRight: '1rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/1.png" width={300} height={300} />  
      </motion.div>

      <Image className={styles.cardHomepage} style={{marginLeft: '-6.5rem', marginRight: '-5.5rem' ,width: 'auto', height: '400px' }} src="/images/homepage/new/2.png" width={300} height={300} />  
      
      <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-5.5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/3.png" width={300} height={300} />  
      <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/4.png" width={600} height={600} />  
      
      <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/5.png" width={300} height={300} />  
      <Image className={styles.cardHomepage} style={{ marginLeft: '-1rem', zIndex:1 ,width: 'auto', height: '400px'}} src="/images/homepage/new/6.png" width={300} height={300} />  

      </AnimatePresence>   */}







      {/* <div className={styles.cardHomepage} style={{ zIndex:1,  marginRight: '0rem' }}>
      <Image  style={{width: 'auto', height: '400px'}} src="/images/homepage/new/1.png" width={300} height={300} />  
      </div>
      <div className={styles.cardHomepage} style={{ marginLeft: '-4rem', marginRight: '-4.5rem' }}>
      <Image style={{width: 'auto', height: '400px' }} src="/images/homepage/new/2.png" width={300} height={300} />  
      </div>
      <div className={styles.cardHomepage} style={{ marginLeft: '-4rem', marginRight: '-4.5rem' }}>
      <Image style={{width: 'auto', height: '400px'}} src="/images/homepage/new/3.png" width={300} height={300} />  
      </div>
      <div className={styles.cardHomepage} style={{ marginLeft: '-4rem', marginRight: '-4rem' }}>
      <Image style={{width: 'auto', height: '400px'}} src="/images/homepage/new/4.png" width={300} height={300} />  
      </div>
      <div className={styles.cardHomepage} style={{ marginLeft: '-4rem', marginRight: '-4rem' }}>
      <Image style={{width: 'auto', height: '400px'}} src="/images/homepage/new/5.png" width={300} height={300} />  
      </div>
      <div className={styles.cardHomepage} style={{ marginLeft: '0rem', zIndex:1 }}>
      <Image style={{width: 'auto', height: '400px'}} src="/images/homepage/new/6.png" width={300} height={300} />  
      </div> */}

{/* //bigger gap */}