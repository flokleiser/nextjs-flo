// 'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
// import { useState } from 'react';

// const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Florian Kleiser - Home',
  description: '-',
}

export default function RootLayout({ children }) {

  // const [showSubNavbar, setShowSubNavbar] = useState(false);

  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head />
      <body className={assistant.className}>
      <Navbar />
       {/* showSubNavbar={showSubNavbar}
      transform={showSubNavbar ? 'scale(1.1)' : 'scale(1)'} */}
      {children}
      </body>
    </html>
  )
}
