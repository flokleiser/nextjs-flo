import { Inter } from 'next/font/google'
import './globals.css'
import { Assistant } from 'next/font/google'  
import Navbar from './components/Navbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Florian Kleiser - Home',
  description: '-',
}

export default function RootLayout({ children,}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head />
      <body className={assistant.className}>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
