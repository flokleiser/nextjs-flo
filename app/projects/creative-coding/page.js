'use client'
import React from 'react';
import { useState, useEffect } from 'react';
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
  useEffect(() => {
    document.title = 'Creative Coding';
  }, []);

    
    return (
        <main className={styles.main}>
            <iframe
                src="https://editor.p5js.org/flokleiser/full/1JskqsGtG"
                width={iframeWidth}
                height={iframeHeight}
                allowFullScreen
                style={{ border: '1px solid white' }}
            />
            <h1 className={styles.spacing2}>
            </h1>
        </main>
    )
}
