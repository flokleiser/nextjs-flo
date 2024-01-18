'use client'
import styles from 'app/page.module.css'
import { useEffect } from "react"
import Link from 'next/link';

export default function portfolio () {
    useEffect(() => {
    document.title = 'Portfolio';
    }, []);

    // const handleScroll = (e) => {
    //     e.preventDefault();
    //     const href = e.currentTarget.href;
    //     const targetId = href.replace(/.*\#/, "");
    //     const elem = document.getElementById(targetId);
    //     elem?.scrollIntoView({ behavior: "smooth" });
    //   };

    return( 
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

        {/* <div className={styles.backbutton}
       style={{position:'fixed', zIndex:9999}}
       >
        <h1>
          {" "}
          <Link href="#environments">Test</Link>{" "}
        </h1>
      </div> */}

        <iframe 
        src="https://drive.google.com/file/d/1b4mRdDAdqGD0KS4nlxXLnif71r8ayYdB/preview" 
        // src="https://drive.google.com/file/d/14PnzzDMOzSfJ7xMbp5O3WNXJfA1RE3rh/preview"
        style={{width:'100vw', height: '95vh'}} 
        width="640" height="480" 
        ></iframe>

{/* <div id='environment'
style={{padding:'3rem'}} /> */}

    </main>
    
    )
}