'use client'
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"

import SearchBar from './components/SearchBar';
import pageIndex from './components/pageIndex';


const assistant = Assistant({ subsets: ['latin'] })



const pageVariants = {
  initial: { opacity: 0, x: -500 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 500 },
  transition: {duration:0.5, type:'tween', ease:'anticipate'}
};

const contentVariants= {
  initial: { x: 500 },
  animate: { x: 0 },
  exit: { x: 500 },
  transition: {duration:0.5, type:'tween', ease:'anticipate'}
};

export default function RootLayout({ children }) {

  const pathname = usePathname();


  return (
    <html lang="en">
      <head /> 
      <body className={assistant.className}>
        <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
         variants={pageVariants}
         initial="initial"
         animate="animate"
         exit="exit"
       >


            <div className="pt-[50px]" >
              <main>
                {children}
              </main>
            </div>

        </motion.div>
      </AnimatePresence>

      <Footer />
      </body>
    </html>
  )
}
