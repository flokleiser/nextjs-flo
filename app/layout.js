// 'use client'
import { Inter } from 'next/font/google';
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import { Suspense } from 'react';
// import { useState } from 'react';
import Loading from './loading.js'

// const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <head />
      <body className={assistant.className}>
      <Navbar />
      {/* <NavbarTest /> */}
      <Suspense fallback={<Loading />}>
        <div className="pt-[60px]">
      {children}
      </div>
      </Suspense>
      </body>
    </html>
  )
}


