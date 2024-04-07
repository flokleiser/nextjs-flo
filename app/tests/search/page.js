"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import SearchBar from "@/app/components/SearchBar";
import pageIndex from "@/app/components/pageIndex";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function searchTest(){
  const [searchResults, setSearchResults] = useState([]);

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
  };

  useEffect(() => {
    document.title = "Search function";
  }, []);

  return (
    <main className={styles.main}>

      <div style={{ paddingTop: "1rem" }} />
        <h1 className={styles.titleWithoutPadding}>Search function</h1>


        <div style={{ padding: "1rem" }} />
        <div style={{ padding: "0.5rem" }} />
        <hr className={styles.pageDivider} />
        <div style={{ padding: "0.5rem" }} />

        <div>
      <SearchBar onSearch={handleSearch}/>
      <div>
        {searchResults.map((page) => (
          <div key={page.path}>
            <Link href={page.path}>
              <h3>{page.title}</h3>
              <p>{page.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>


        <div style={{ padding: "1rem" }} />
      <div style={{ padding: "2rem" }} />
    </main>
  );
}

