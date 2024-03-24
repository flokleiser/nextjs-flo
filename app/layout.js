'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import { Suspense } from 'react';
import { useState } from 'react';
import Loading from './loading.js'
import { NavbarProvider } from './components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';

const assistant = Assistant({ subsets: ['latin'] })

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head /> 
      <body className={assistant.className}>
        <Navbar />

      {/* <AnimatePresence mode="wait">
        <motion.div
         key={children.key}
         variants={pageVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={pageTransition}
       >

        <Suspense fallback={<Loading />}> */}
          <div className="pt-[50px]" >
          <main>{children}</main>
          </div>
        {/* </Suspense>

        </motion.div>
      </AnimatePresence> */}

      </body>
    </html>
  )
}


