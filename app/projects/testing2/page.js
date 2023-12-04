import styles from '/app/page.module.css'
import { CiGrid32,CiImageOn, CiFileOn, CiViewList, CiStickyNote} from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image'


export default function testing2() {
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

  
      <h1 className={styles.titleHomepage}style={{zIndex:60, textShadow:'5px'}}>
        Florian Kleiser
      </h1>

    <div style={{ margin: '-1.5rem' }}> </div>


    <div className={styles.homepageSlices}>

    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/1.png" width={800} height={800} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/2.png" width={800} height={800} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/3.png" width={800} height={800} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/4.png" width={800} height={800} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/5.png" width={800} height={800} />
    <Image className={styles.cardHomepageTest} src="/images/homepage/new2/6.png" width={800} height={800} />

    </div>

    <div style={{ margin: '10rem' }}> </div>

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="/projects"> <CiGrid32/> Projects </Link> 
        </h2>
     </div>

     <div className={styles.buttonGeneralHomepage}style={{zIndex:60}}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="https://drive.google.com/file/d/16pP5-QeRobbIaPl6GKzlcJCqClgF8gMK/view" target="_blank"> 
          <CiImageOn />
          Portfolio 
          </Link> 
        </h2>
     </div>

    </main>

  )
}

// import styles from '/app/page.module.css'
// import { CiGrid32,CiImageOn, CiFileOn, CiViewList, CiStickyNote} from "react-icons/ci";
// import Link from 'next/link';
// import Image from 'next/image'

// export default function Home() {
//   return (
    
//     <main className={styles.main}>
//         <div className="relative 
//    flex 
//    place-items-center 
//    before:absolute 
//    before:h-[300px] 
//    before:w-[480px] 
//    before:-translate-x-1/2 
//    before:rounded-full 
//    before:bg-gradient-radial 
//    before:from-white 
//    before:to-transparent 
//    before:blur-2xl 
//    before:content-[''] 
//    after:absolute 
//    after:-z-20 
//    after:h-[180px] 
//    after:w-[240px] 
//    after:translate-x-1/3 
//    after:bg-gradient-conic 
//    after:from-sky-200 
//    after:via-blue-200 
//    after:blur-2xl 
//    after:content-[''] 
//    before:dark:bg-gradient-to-br 
//    before:dark:from-transparent 
//    before:dark:to-blue-700 
//    before:dark:opacity-10 
//    after:dark:from-sky-900 
//    after:dark:via-[#0141ff] 
//    after:dark:opacity-40 
//    before:lg:h-[360px] 
//    z-[-1]">
//           </div>

//       <h1 className={styles.titleHomepage} style={{zIndex:60}}> 
//         Florian Kleiser
//       </h1>

//     <div style={{ margin: '-1.5rem' }}> </div>

//     <div className={styles.homepageSlicesTest}>

// {/*less gap */}

//       <Image className={styles.cardHomepage} style={{ marginRight: '0.3rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/1.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{marginLeft: '-6.5rem', marginRight: '-5.5rem' ,width: 'auto', height: '400px' }} src="/images/homepage/new/2.png" width={300} height={300} />  
      
//       <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-5.5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/3.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/4.png" width={600} height={600} />  
      
//       <Image className={styles.cardHomepage} style={{ marginLeft: '-5.5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} src="/images/homepage/new/5.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{ marginLeft: '-1.5rem', width: 'auto', height: '400px'}} src="/images/homepage/new/6.png" width={300} height={300} />  

//       {/* <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px'}} src="/images/homepage/new/1.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px' }} src="/images/homepage/new/2.png" width={300} height={300} />  
      
//       <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px'}} src="/images/homepage/new/3.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px'}} src="/images/homepage/new/4.png" width={600} height={600} />  
      
//       <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px'}} src="/images/homepage/new/5.png" width={300} height={300} />  
//       <Image className={styles.cardHomepage} style={{width: 'auto', height: '400px'}} src="/images/homepage/new/6.png" width={300} height={300} />   */}



// {/* more gap */}

//       {/* <Image className={styles.cardHomepage} style={{
//         zIndex:1,  marginRight: '0rem' ,width: 'auto', height: '400px'}} 
//         src="/images/homepage/new/1.png" width={300} height={300} />  
     
//       <Image className={styles.cardHomepage} style={{
//         marginLeft: '-4rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px' }} 
//         src="/images/homepage/new/2.png" width={300} height={300} />  
      
//       <Image className={styles.cardHomepage} style={{ 
//         marginLeft: '-5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} 
//         src="/images/homepage/new/3.png" width={300} height={300} />  
     
//       <Image className={styles.cardHomepage} style={{ 
//         marginLeft: '-5rem', marginRight: '-4.5rem' ,width: 'auto', height: '400px'}} 
//         src="/images/homepage/new/4.png" width={300} height={300} />  
     
//       <Image className={styles.cardHomepage} style={{ 
//         marginLeft: '-4rem', marginRight: '-4rem' ,width: 'auto', height: '400px'}} 
//         src="/images/homepage/new/5.png" width={300} height={300} />  
     
//       <Image className={styles.cardHomepage} style={{ 
//         marginLeft: '0rem', zIndex:1 ,width: 'auto', height: '400px'}} 
//         src="/images/homepage/new/6.png" width={300} height={300} />   */}

//     </div> 

//     <div style={{ margin: '-1rem' }}> </div>

//      <div className={styles.buttonGeneralHomepage}>
//         <h2 className={styles.subtitleHomepage} style={{zIndex:60}}>
//           <Link  className="link-hover" href="/projects"> <CiGrid32/> Projects </Link> 
//         </h2>
//      </div>

//      <div className={styles.buttonGeneralHomepage}>
//         <h2 className={styles.subtitleHomepage} style={{zIndex:60}}>
//           <Link  className="link-hover" href="https://drive.google.com/file/d/16pP5-QeRobbIaPl6GKzlcJCqClgF8gMK/view" target="_blank"> 
//           {/* <div className={styles.mirrorIcon}>
//           <CiStickyNote/>
//           </div> */}
//           <CiImageOn />
//           Portfolio 
//           </Link> 
//         </h2>
//      </div>
      
//     </main>

//   )
// }