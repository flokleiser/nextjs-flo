"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import SplatManager from "@/app/components/SplatManager";

export default function gaussianSplatting() {

  useEffect(() => {
    document.title = "Gaussian";
  }, []);

  useEffect(() => {
    const splatManager = new SplatManager();
    
    return () => {
        splatManager.renderer.domElement.remove();
    };
}, []);

  return (
    <main className={styles.main}>
    </main>
  );
}
