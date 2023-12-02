import styles from 'app/page.module.css'
import { CiGrid32 } from "react-icons/ci";
import Link from 'next/link';
import { ImFilePdf } from "react-icons/im";
import { PiFilePdfLight } from "react-icons/pi";

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
      <h1 className={styles.titleHomepage}>
        Florian Kleiser
      </h1>
  
      <div style={{ padding: '8rem' }}> </div>


     <div className={styles.buttonGeneral}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="/projects"> <CiGrid32/> Projects </Link> 
        </h2>
     </div>

     <div className={styles.buttonGeneral}>
        <h2 className={styles.subtitleHomepage}>
          <Link  className="link-hover" href="https://drive.google.com/file/d/1wO83IUSZOoHywbHAPXMUuf5oEhLLAwMu/view?usp=sharing" target="_blank"> <PiFilePdfLight/> Portfolio </Link> 
        </h2>
     </div>


     <h1 className={styles.title}> 
            Projects
            </h1>
        
        <div className={styles.grid}>

        <a
            className={styles.card}
            href = '/projects/sketches'
            style={{ 
                    backgroundImage: 'url("/images/cards/sketches transparent10.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            <p>Sketchbook</p>
            </a> 
            
            <a
            href = '/projects/creative-coding'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/creative coding transparentwide.png")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            <p>Generative Art, p5js</p>
            </a>

            <a
           href='/projects/skylands'
           className={styles.card}
           style={{ backgroundImage: 'url("/images/cards/skylandslogo5 transparentwide.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center',
          }}
                rel="noopener noreferrer"
            >
            <h2> 
                Skylands
            </h2>
            <p>VR Game, Unity</p>
            </a>
       

            <a
            href = '/projects/voxel'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/voxel transparentwide.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Voxel Art
            </h2>
            <p>MagicaVoxel</p>
            </a>

            <a
                className={styles.card}
                rel="noopener noreferrer"
                href = '/projects/cad'
                style={{ backgroundImage: 'url("/images/cards/cad transparent2.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
            >
            <h2>
                CAD
            </h2>
            <p>Modeling, OnShape</p>
            </a>

            <a
            href = '/projects/animations'
            className={styles.card}
            style={{ backgroundImage: 'url("/images/cards/animlogo transparent5.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Animations
            </h2>
            <p>Adobe After Effects</p>
            </a>

            <a
            href = '/projects/crafts'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/craft card 4.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Arts & Crafts
            </h2>
            <p>Handcrafted Stuff</p>
            </a>


            <a
            href = '/projects/illustrator'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/illustrator card2.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Illustrator
            </h2>
            <p>Designs & Artworks </p>
            </a>

            <div style={{ padding: '2rem' }}> </div>
          
      </div>
      {/* <div className = {styles.subtitledescription}>
            <p>
            <a href='/projects/testing' >
            testing
            </a>  
            </p>
            </div> */}

            <div style={{ padding: '2rem' }}> </div>
   
    </main>

  )
}