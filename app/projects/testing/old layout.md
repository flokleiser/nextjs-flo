import { Inter } from 'next/font/google';
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';

const assistant = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Florian Kleiser - Home',
  description: 'Home',

}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head />
      <body className={assistant.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}







'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


const assistant = Assistant({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Florian Kleiser - Home',
//   description: 'Home',

// }

// useEffect(() => {
//   document.title = "Home";
// }, []);

export default function RootLayout({ children }) {

  let pathname = usePathname() || "/";

  return (
    <html lang="en">
      <head />
      <body className={assistant.className}>
      <Navbar />

      <TransitionGroup>
          <CSSTransition
            key={pathname}
            classNames="page"
            timeout={300}
          >

      {children}
      
      </CSSTransition>
      </TransitionGroup>

      </body>
    </html>
  )
}
