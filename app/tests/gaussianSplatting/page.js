"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function gaussianSplatting() {

  useEffect(() => {
    document.title = "Gaussian";
  }, []);

  return (
    <main className={styles.main}>

<iframe 
// className={styles.iframeMomentfulness} 
style={{width:'100vw', height:'96vh'}}
src="https://flokleiser.github.io/gaussianFlo/"></iframe> 

    </main>
  );
}

