'use client'
import './globals.css';
import { Assistant } from 'next/font/google';  
import Navbar from './components/Navbar';
import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import SearchBar from './components/SearchBar';
import pageIndex from "./components/pageIndex";

const assistant = Assistant({ subsets: ['latin'] })



const pageVariants = {


  initial: { opacity: 0, y: 500 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 500 },
  transition: {duration:0.5, type:'tween', ease:'anticipate'}

};

export default function RootLayout({ children }) {

  const pathname = usePathname();


const [searchResults, setSearchResults] = useState([]);
const [showSearchResults, setShowSearchResults] = useState(false);

const handleSearch = (term) => {
  const results = pageIndex.filter((page) => {
    const { title, content, keywords } = page;
    const searchTerm = term.toLowerCase();

    return (
      title.toLowerCase().includes(searchTerm) ||
      content.toLowerCase().includes(searchTerm) ||
      keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
    );
  });

  setSearchResults(results);
  setShowSearchResults(true);
};


  return (
    <html lang="en">
      <head /> 
      <body className={assistant.className}>
        <Navbar />
        <SearchBar onSearch={handleSearch}/>
      {showSearchResults}

      <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
         variants={pageVariants}
         initial="initial"
         animate="animate"
         exit="exit"
       >

            <div className="pt-[50px]" >
              <main>{children}</main>
            </div>

        </motion.div>
      </AnimatePresence>

      </body>
    </html>
  )
}
