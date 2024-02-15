import styles from 'app/page.module.css'
import Link from 'next/link'
import Image from 'next/image'


export const metadata = {
    title: 'Projects',
    description: '-',
}

export default function projects() {
    
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


            <h1 className={styles.title}> 
            Projects
            </h1>

        <div className={styles.grid}>

        <Link
            className={styles.card}
            href = '/projects/sketches'
            style={{ 
                    backgroundImage: 'url("/images/cards/sketch1.png")',
                    backgroundSize: '102%',
                    backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Sketches
            </h2>
            <p>Sketchbook</p>
            </Link> 
            
            <Link
            href = '/projects/creative-coding'
            className={styles.card}
            // style={{ backgroundImage: 'url("/images/cards/creative coding transparentwide.png")' ,
            style={{ backgroundImage: 'url("/images/cards/creativecodingwhite3.png")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
                Creative Coding
            </h2>
            <p>Generative Art, p5js</p>
            </Link>

            <Link
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
            </Link>


            <Link
            href = '/projects/voxel'
            className={styles.card}
            rel="noopener noreferrer"
            // style={{ backgroundImage: 'url("/images/cards/voxel transparentwide.png")',
            style={{ backgroundImage: 'url("/images/cards/voxelwhite5.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Voxel Art
            </h2>
            <p>MagicaVoxel</p>
            </Link>

            <Link
                className={styles.card}
                rel="noopener noreferrer"
                href = '/projects/cad'
                // style={{ backgroundImage: 'url("/images/cards/cad transparent2.png")',
                style={{ backgroundImage: 'url("/images/cards/cadwhite.png")',
                backgroundSize: '102%',
                backgroundPosition: 'center'}}
            >
            <h2>
                CAD
            </h2>
            <p>Modeling, OnShape</p>
            </Link>

            <Link
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
            </Link>

            <Link
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
            </Link>


            <Link
            href = '/projects/illustrator'
            className={styles.card}
            rel="noopener noreferrer"
            style={{ backgroundImage: 'url("/images/cards/illustrator2.png")',
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            >
            <h2>
                Illustrator
            </h2>
            <p>Designs & Artworks </p>
            </Link>
            
            {/* <Link
            href = '/projects/illustrator'
            className={styles.card}
            rel="noopener noreferrer"
            // style={{ backgroundImage: 'url("/images/cards/illustrator2.png")',
            // backgroundSize: '102%',
            // backgroundPosition: 'center'}}
            >
            <h2>
               Placeholder 
            </h2>
            <p>placeholder</p>
            </Link> */}

            <Link
            href = '/projects/momentfulness'
            className={styles.card}
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test2.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test3.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test4.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test 6.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test7.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test9.png")' ,
            // style={{ backgroundImage: 'url("/images/cards/momentfulness card test 10.png")' ,
            style={{ backgroundImage: 'url("/images/cards/momentfulness card test 11.png")' ,
            backgroundSize: '102%',
            backgroundPosition: 'center'}}
            rel="noopener noreferrer"
            >
            <h2>
               Momentfulness 
            </h2>
            <p>JavaScript/HTML-canvas</p>
            </Link>

          
      </div>

            <div style={{ padding: '1rem' }}> </div>
    </main>
    )
}