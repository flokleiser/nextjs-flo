"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";
// import pageIndex from './pageIndex'
import pageIndex from "@/app/components/pageIndex";

export default function SearchBar({placeholder, onSearch}) {
    
const [searchResults, setSearchResults] = useState([]);

const handleSearch = useDebouncedCallback((term) => {
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
    // className="peer block w-full rounded-md border border-gray-200 py-[4px] pl-10 text-sm outline-2 placeholder:text-gray-500"
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

  <div className={styles.searchResults}>
      {searchResults.map((page) => (
        <Link key={page.path} href={page.path}>
          <h3>{page.title}</h3>
          <p>{page.content}</p>
        </Link>
      ))}
    </div>

  </div>

  );
}