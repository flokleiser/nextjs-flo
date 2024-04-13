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


      {/* <div style={{ paddingTop: "1rem" }} />
        <h1 className={styles.titleWithoutPadding}>Gaussian Splatting</h1> */}



        <div style={{height:'100vh', width:'100vw'}}>
        <iframe src="https://lumalabs.ai/embed/dda54514-b5b8-4675-8d4c-a2590acbe399?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" 
        height="100%" 
        width="100%" 
        // height="100%" 
        frameborder="0" 
        // style="border: none;"
        >
        </iframe>
        </div>

    </main>
  );
}
