import styles from 'app/page.module.css'
import { BsUnity } from "react-icons/bs";
import { BiSolidFileBlank, BiLink, BiLinkExternal } from "react-icons/bi";
import Link from 'next/link';
import Image from 'next/image';



export const metadata = {
    title: 'Skylands',
    description: '-',
  }

  const images = [
    { image : '/images/skylands/skylands1.png'},
    { image : '/images/skylands/skylandsfull.png'},
    { image : '/images/skylands/skylands2.png'},
    ]

  const images2 = [
      { image : '/images/skylands/skylands3.png'},
      { image : '/images/skylands/skylands4.png'},
      { image : '/images/skylands/skylands5.png'},
      ]

export default function skylands() {
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
              Skylands 
            </h1>
            
            <div className={styles.subtitledescription}>
            <p>
             <BsUnity /> VR game for the Meta Quest 2, made in Unity
            </p>
      
            </div>
            
            {/* <Gallery images={images} />  */}
          
            <iframe className={styles.iframevideo}
            src="https://drive.google.com/file/d/11t2V2fNRhP-PGdSNn318-IaCXGwou5uD/preview"> 
              </iframe>

              <div style={{ padding: '2rem' }}> </div>

              <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {images.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="">
              <div className="p-3 container mx-auto">
                <div className="py-2">
                </div>
                  <div className="md:flex md:gap-2 md:grid-cols-2 lg:grid-cols-3 mb-12">
                    {images2.map((x) => {
                      return (
                        <>
                 
                  <article
                    className="p-3 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                    </div>
                  </article>
                  
                  </>
                    );
                  })}
                </div>
              </div>
            </div>
        

            <div className = {styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <p>
            <a href="https://drive.google.com/file/d/1Kg5mvFeOzfIsQm974Fk5bhWUzK3I6VP3/view?usp=drive_link" target="_blank">
            <BiSolidFileBlank />.apk file
            </a>  
            </p>
            </div>
            </div>

            <div className = {styles.subtitledescription}>
            <div className=" transition duration-300 group transform hover:scale-[1.07] cursor-pointer"> 
            <p>

              <a href="https://sidequestvr.com/setup-howto" target="_blank">
                <BiLinkExternal/> SideQuest (to install .apk file)
              </a>
            </p>
            </div>
            </div>

            <div style={{ padding: '2rem' }}> </div>

        </main>
    )
}