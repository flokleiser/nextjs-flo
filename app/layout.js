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
