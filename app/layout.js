'use client'
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { SpeedInsights } from "@vercel/speed-insights/next"

const assistant = Assistant({ subsets: ['latin'] })

const pageVariants = {

  initial: { opacity: 0, y: 250 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -250 },

  transition: {duration:0.5, type:'tween', ease:'anticipate'}
};

export default function RootLayout({ children }) {

  const pathname = usePathname();

  return (
    <html lang="en">
      <head /> 
      <body className={assistant.className}>
        <Navbar />

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
                <SpeedInsights />
              </main>
            </div>

        </motion.div>

      <Footer 
      // style={{overflow:'hidden'}}
      // style={{maxWidth:'100vw', overflow:'hidden'}}
      />
      </body>
    </html>
  )
}
