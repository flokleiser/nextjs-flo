"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function backgroundTest() {

  useEffect(() => {
    document.title = "backgroundTest";
  }, []);

  return (
    <main className={styles.main}>
          {/* <div
    className="relative 
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
z-[-1]"
  ></div> */}

      <div style={{ paddingTop: "1rem" }} />
        <h1 className={styles.titleWithoutPadding}>Backgrounds</h1>

        <div className={styles.subtitledescription}>
          <p>
            Testing the background
          </p>
        </div>

        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />


        <div style={{ padding: "1rem" }} />
      <div style={{ padding: "2rem" }} />
    </main>
  );
}
