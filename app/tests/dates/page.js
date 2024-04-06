"use client";
import React, { useState, useEffect, Suspense } from "react";
import styles from "app/page.module.css";
import MyCalendar from "@/app/components/Calendar";
import * as markmap from "markmap-view";
import { Transformer } from "markmap-lib";

export default function dates() {

  useEffect(() => {
    document.title = "Calendar";
  }, []);

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

 
      {/* <h1 className={styles.title}>Dates</h1>

      <hr className={styles.pageDivider} /> */}
      <div style={{ padding: "2rem" }} />


          <MyCalendar />

      <div style={{ padding: "2rem" }} />

      {/* <div className={styles.subtitle} >
        <h1> Hausaufgabe </h1>
      </div>

      <iframe 
        src="https://drive.google.com/file/d/12NtDVZx1YMboV0ftDi4XhG7Na7H6KS5H/preview"
        style={{width:'100vw', height: '95vh'}} 
        width="640" height="480" 
        ></iframe> */}
    </main>
  );
}
