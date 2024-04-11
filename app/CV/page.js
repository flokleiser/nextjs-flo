'use client'
import styles from 'app/page.module.css'
import { useEffect } from "react"
import Link from 'next/link';

export default function cv() {
    useEffect(() => {
    document.title = 'CV';
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

        <iframe 
        // src="https://drive.google.com/file/d/1dG7y59mddTFC_tMWaYHcGHHzMeyTrJ2t/preview" 
        src="https://drive.google.com/file/d/1lIIg2R4wxiSsuzoMy4FEkMyLVUHstxet/preview"
        // style={{width:"100vw", height:"95vh"}}
        style={{width:"100vw", height:"96vh"}}
        width="640" height="480" >

        </iframe>


    </main>
    
    )
}