"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
import pageIndex from "@/app/components/pageIndex";
import {AnimatePresence, motion} from "framer-motion";
import { useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";

export default function SearchBar({onSearch}) {
    
const [searchResults, setSearchResults] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
const [isFocused, setIsFocused] = useState(false);
const [shouldShowOverlay, setShouldShowOverlay] = useState(false);

const overlayRef = useRef(null);
const pathname = usePathname();

useEffect(() => {
  setShouldShowOverlay(false);
}, [pathname]);

const { replace } = useRouter();

const handleSearch = useDebouncedCallback((term) => {
  setSearchTerm(term)
  console.log(term)


  const searchResults = pageIndex.filter((page) => {
    const { title, content, keywords } = page;
    const searchTerm = term.toLowerCase();

      return (
        title.toLowerCase().includes(searchTerm) ||
        content.toLowerCase().includes(searchTerm) ||
        keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
      );
  });

  setSearchResults(searchResults);
  onSearch(term)
  setShouldShowOverlay(true);

  }, 300);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (overlayRef.current && !overlayRef.current.contains(event.relatedTarget)) {
      setIsFocused(false);
      setShouldShowOverlay(false)
    }
  };
  

  const handleCloseOverlay = () => {
    setIsFocused(false);
    setShouldShowOverlay(false);
  };

  const handleClearSearch = () => {
    console.log('search reset')
    searchInputField.value = "";
  };



  const searchParams = useSearchParams();

  return (

    <div className={styles.searchBar} >

    <div className="relative flex flex-1 flex-shrink-0 pt-1.5">
    <label htmlFor="search" className="sr-only">
    Search
    </label>
  <input
    id="searchInputField"
    className={styles.searchBarStyle}
    // value="test"
    onChange={(e) => {
      handleSearch(e.target.value);
      onSearch(e.target.value);
    }}
    onFocus={handleFocus}
    onBlur={handleBlur}
    defaultValue={searchParams.get('query')?.toString()} 
    />
       <FaMagnifyingGlass className="absolute left-2 top-5 h-[18px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
  </div>

  <button style={{zIndex: 500, fontSize: "2rem" }}
    onClick={handleClearSearch}
  >
   <MdClear className="absolute right-2 top-5 h-[18px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
  </button>


  <AnimatePresence mode="wait"> 
{shouldShowOverlay && (
    <motion.div className={styles.searchOverlay}
      initial={{ x:'100%' }}
      animate={{ x: 0 }}
      exit={{ x:'100%' }}
      transition={{ duration: 0.3 }}
      ref={overlayRef}
      >

      <button style={{zIndex: 500, fontSize: "2rem" }}

        onClick={() => {
          handleCloseOverlay
          handleClearSearch
        }}
      >
        <IoCloseCircleOutline className="h-15 w-15 text-gray-500" />
      </button>


        <div className="p-8  h-[100vh] overflow-y-auto">
          {searchResults.length === 0 ? (
            <div className={styles.cardSearch}>
            <h3 className={styles.searchResultsTitle}>No results found.</h3>
            </div>
          ) : (
            <div>
            {searchResults.map((page) => (
              <div className={styles.cardSearch} key={page.path}>
                <Link href={page.path}>
                  <h3 className={styles.searchResultsTitle}>{page.title}</h3>
                  <p className={styles.searchResultsBody}>{page.content}</p>
                </Link>
              </div>
            ))}
          </div>
          )} 
        </div>

    </motion.div>
)}
</AnimatePresence> 
  </div>

  );
}