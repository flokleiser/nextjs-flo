"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiGrid32 } from "react-icons/ci";
import Link from "next/link";
import styles from "app/page.module.css";
import ExpandableButton from "@/app/components/ExpandableButton";

export default function Test() {
  useEffect(() => {
    document.title = "Links/Info";
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.backbutton}>
        <h1>
          {" "}
          <Link href="/">Home </Link>{" "}
        </h1>
      </div>

      <h1 className={styles.title}>Testing</h1>

      <div className={styles.subtitledescription}>
        <p>testing page</p>
      </div>
      <div style={{ padding: "1rem" }} />

      <ExpandableButton />
      <div style={{ padding: "1rem" }} />
      <div className={styles.subtitledescription}>
        <p>testing page</p>
      </div>

      {/* <div className={styles.buttonGeneralHomepageProjects}>
        <h2 className={styles.subtitleHomepage}>
          <Link className="link-hover" href="/projects">
            {" "}
            <CiGrid32 /> Projects
          </Link>
        </h2>
      </div> */}
    </main>
  );
}
