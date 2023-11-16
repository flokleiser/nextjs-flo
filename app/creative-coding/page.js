'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from 'app/subpage.module.css'

export default function creativeCoding() {
    const [iframeHeight, setIframeHeight] = useState(0);
  const [iframeWidth, setIframeWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      const aspectRatio = 16 / 9; // replace with your desired aspect ratio
      const maxWidth = window.innerWidth -100; // replace with your desired maximum width
      const maxHeight = window.innerHeight - 100; // replace with your desired maximum height

      const maxWidthByHeight = maxHeight * aspectRatio;
      const maxHeightByWidth = maxWidth / aspectRatio;

      const width = Math.min(maxWidth, maxWidthByHeight);
      const height = Math.min(maxHeight, maxHeightByWidth);

      setIframeWidth(width);
      setIframeHeight(height);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
        <main className={styles.main}>
            <h1 className={styles.title2}>
               Creative Coding
            </h1>
            <h1 className={styles.spacing}>


            </h1>
            {/* <iframe src="https://editor.p5js.org/flokleiser/full/1JskqsGtG" width="100%" height="850" style={{ border: '1px solid white' }}></iframe> */}
            <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                width={iframeWidth}
                height={iframeHeight}
                allowFullScreen
                style={{ border: '1px solid white' }}
            />
            <h1 className={styles.spacing}>
            </h1>
        </main>
    )
}
