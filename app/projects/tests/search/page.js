"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaMagnifyingGlass } from "react-icons/fa6";



export default function searchTest({placeholder}) {
  useEffect(() => {
    document.title = "Search function";
  }, []);

  function handleSearch(term) {
    console.log(term)
   }

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <main className={styles.main}>

      <div
        className={styles.backbutton}
        style={{ position: "fixed", zIndex: 9999 }}
      >
        <h1>
          {" "}
          <Link href="/projects">All Projects </Link>{" "}
        </h1>
      </div>

      <div style={{ paddingTop: "1rem" }} />
        <h1 className={styles.titleWithoutPadding}>Search function</h1>


  {/* INPUT */}
        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
          Search
          </label>
        <input
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}/>
             <FaMagnifyingGlass className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>


        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />


        <div style={{ padding: "1rem" }} />
      <div style={{ padding: "2rem" }} />
    </main>
  );
}

