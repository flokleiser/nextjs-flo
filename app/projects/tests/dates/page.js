"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "app/page.module.css";
import Calendar from "react-calendar";
// import


export default function filesTest() {

  useEffect(() => {
    document.title = "testing";
  }, []);

  const [value, onChange] = useState(new Date());

  return (
    <main className={styles.main}>
      <div
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
      ></div>
 
      <h1 className={styles.title}>Dates</h1>

      <hr className={styles.pageDivider} />
      <div style={{ padding: "1rem" }} />

      <Calendar
          onChange={onChange}
          value={value}
      />

      <div style={{ padding: "2rem" }} />
    </main>
  );
}
