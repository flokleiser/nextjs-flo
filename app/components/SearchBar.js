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




export default function SearchBar({placeholder, onSearch}) {
    
const [searchResults, setSearchResults] = useState([]);
var [searchOpen, setSearchOpen] = useState(false);

if (searchOpen = true) {
  console.log('true')
}
else {
  console.log('closed')
}

const handleSearch = useDebouncedCallback((term) => {
  console.log(term)
  const searchResults = pageIndex.filter((page) => {
    const { title, content, keywords } = page;
    const searchTerm = term.toLowerCase();

    if (term === '') {
      // setSearchResults([]);
      setSearchOpen(false);
      return;

    }

    else {
      setSearchOpen(true);
      return (
        title.toLowerCase().includes(searchTerm) ||
        content.toLowerCase().includes(searchTerm) ||
        keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))
      );
    }
  });

  setSearchResults(searchResults);

  // setSearchResults(searchResults);


    const params = new URLSearchParams(searchParams)
       if (term) {
          params.set('query', term)
          }
          else {
          params.delete('query');
          }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  return (

    <div className={styles.searchBar} >

    <div className="relative flex flex-1 flex-shrink-0 pt-1.5">
    <label htmlFor="search" className="sr-only">
    Search
    </label>
  <input
    className={styles.searchBarStyle}
    placeholder={placeholder}
    onChange={(e) => {
      handleSearch(e.target.value);
      onSearch(e.target.value);
    }}
    defaultValue={searchParams.get('query')?.toString()} 
    />
       <FaMagnifyingGlass className="absolute left-2 top-5 h-[18px] w-[15px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
  </div>

  {/* <div className={styles.searchResults}>
      {searchResults.map((page) => (
        <Link key={page.path} href={page.path}>
          <h3>{page.title}</h3>
          <p>{page.content}</p>
        </Link>
      ))}
    </div> */}

  <div className={styles.searchOverlay}
  >
    <div className="p-8  h-[100vh] overflow-y-auto">
      {searchResults.length === 0 ? (
        <h3 className={styles.cardSearch}>No results found.</h3>
      ) : (
        <div>
        {searchResults.map((page) => (
          // <div key={page.path}>
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

  </div>

  </div>

  );
}