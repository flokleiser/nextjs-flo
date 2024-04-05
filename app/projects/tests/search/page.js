"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import SearchBar from "@/app/components/searchBar";



export default function searchTest({placeholder}) {
  useEffect(() => {
    document.title = "Search function";
  }, []);

  return (
    <main className={styles.main}>

      <div
        className={styles.backbutton}
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <h1>
          {" "}
          <Link href="/projects">All Projects </Link>{" "}
        </h1>
      </div>

      <div style={{ paddingTop: "1rem" }} />
        <h1 className={styles.titleWithoutPadding}>Search function</h1>


        <SearchBar/>

        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />


        <div style={{ padding: "1rem" }} />
      <div style={{ padding: "2rem" }} />
    </main>
  );
}

