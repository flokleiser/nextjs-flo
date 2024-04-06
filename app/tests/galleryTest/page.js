"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import ImageGallery from "@/app/components/ImageGallery";

const data = [
  { image: "/images/illustrator/flowers/snowdrop.png", id: 0 },
  { image: "/images/illustrator/flowers/tulip.png", id: 1 },
  { image: "/images/illustrator/flowers/daffodil.png", id: 2 },
  { image: "/images/illustrator/flowers/rose.png", id: 3 },
  { image: "/images/illustrator/flowers/sunflower.png", id: 4 },
  { image: "/images/illustrator/flowers/ivy.png", id: 5 },
];

const data2 = [
    { image: "/images/illustrator/flowers/ivy.png", id: 6 },
    { image: "/images/illustrator/flowers/sunflower.png", id: 7 },
    { image: "/images/illustrator/flowers/rose.png", id: 8 },
    { image: "/images/illustrator/flowers/daffodil.png", id: 9 },
    { image: "/images/illustrator/flowers/tulip.png", id: 10 },
    { image: "/images/illustrator/flowers/snowdrop.png", id: 11 },
  ];

  const data3 = [
    { image: "/images/illustrator/flowers/ivy.png", id: 12 },
    { image: "/images/illustrator/flowers/sunflower.png", id: 13 },
    { image: "/images/illustrator/flowers/rose.png", id: 14 },
  ];

export default function galleryTest() {
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
      <div className={styles.linkContainerFlowers}>
        <h1 className={styles.titleWithoutPadding}>Gallery</h1>

        <div className={styles.subtitledescription}>
          <p>
            testing imagegallery.js
          </p>
        </div>

        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />


<ImageGallery data={data} />


<ImageGallery data={data2} />

<ImageGallery data={data3} />
      

        <div style={{ padding: "1rem" }} />
      </div>
      <div style={{ padding: "2rem" }} />
    </main>
  );
}
