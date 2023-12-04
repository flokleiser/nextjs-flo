import styles from 'app/page.module.css'
import React from 'react';
import Image from 'next/image'
import { SiAdobeaftereffects,SiAdobephotoshop,SiAdobepremierepro,SiBlender,SiUnity,SiAdobeillustrator,SiVisualstudiocode,SiAdobeindesign,SiXcode } from "react-icons/si";


export const metadata = {
    title: 'About',
    description: '-',
  }

export default function about() {
    return (
        <main className={styles.main}>
            <div className="relative 
   flex 
   place-items-center 
   before:absolute 
   before:h-[300px] 
   before:w-[460px] 
   before:-translate-x-1/2 
   before:rounded-full 
   before:bg-gradient-radial 
   before:from-white 
   before:to-transparent 
   before:blur-2xl 
   before:content-[''] 
   after:absolute 
   after:-z-20 
   after:h-[160px] 
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
              About me
            </h1>

            <div style={{ padding: '2rem' }}> </div>
            
            <p className={styles.subtitledescription}>
            
            Hi, im Florian Kleiser, im 24 years old and i come from Zürich, Switzerland.
            My passions include (but are not limited to) programming, drawing, editing, gaming, skating and music.
            I am currently applying to study Interaction Design / Digital Ideation.
            
            </p>

            <div style={{ padding: '2rem' }}> </div>

            <Image src="/images/flo5.png"width={400} height={400} className='shadow-2xl rounded-2xl'/>              

            <div style={{ padding: '2rem' }}> </div>

            {/* <h1 className={styles.subtitle}>
             Education & work so far 
            </h1> */}

            <div style={{ padding: '2rem' }}> </div>
            <Image
                      src="/svg/timeline.svg"
                      alt="timeline"
                      className={styles.vercelLogo}
                      width={500}
                      height={24}
                    />  
            <div style={{ padding: '2rem' }}> </div>
            
            <div className="flex ">
            {/* <Image src="/svg/illustrator.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}}/>
            <Image src="/svg/vscode.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}} />
            <Image src="/svg/photoshop.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}} />
            <Image src="/svg/premierepro.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}} />
            <Image src="/svg/aftereffects.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}} />
            <Image src="/svg/unity.svg" width={60} height={24} className={styles.vercelLogo} style={{margin:20}} /> */}

            <SiAdobeillustrator size={60} />
            <SiAdobephotoshop size={60} />
            <SiAdobeindesign size={60} />
            <SiAdobepremierepro size={60} />
            <SiAdobeaftereffects size={60} />

            <SiVisualstudiocode size={60} />
            <SiBlender size={60} /> 
            <SiUnity size={60} />
            <SiXcode size={60} />
            <Image src="/svg/logic.svg" width={60} height={24} className={styles.vercelLogo} style={{filter: 'invert(1)'}} />


            </div>

            <div style={{ padding: '2rem' }}> </div>
            
            {/* </div> */}
        </main>
    )
}