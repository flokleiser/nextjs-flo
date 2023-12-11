'use client'
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { CiGrid32 } from "react-icons/ci";
import Link from "next/link";
import styles from "app/page.module.css";

export default function Test() {
  
  useEffect(() => {
    document.title = "Links/Info";
  }, []);

  return (
    <main className={styles.main}>
      
      <div
        className={styles.buttonGeneralHomepageProjects}
      >
        <h2 className={styles.subtitleHomepage}>
          <Link className="link-hover" href="/projects">
            {" "}
            <CiGrid32 /> Projects
          </Link>
        </h2>
      </div>
    
    </main>
  );
}