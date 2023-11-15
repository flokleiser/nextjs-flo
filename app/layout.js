import { Inter } from 'next/font/google'
import './globals.css'
import { Assistant } from 'next/font/google'  

const inter = Inter({ subsets: ['latin'] })
const assistant = Assistant({ subsets: ['latin'] })

export const metadata = {
  title: 'Flo Portfolio',
  description: '-',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <head />
      <body className={assistant.className}>{children}
      <nav> 
        <h2>menu</h2>
      </nav>
      </body>
    </html>
  )
}
