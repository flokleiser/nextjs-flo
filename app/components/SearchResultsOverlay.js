import Link from "next/link";
import styles from "app/page.module.css";

export default function SearchResultsOverlay({ searchResults }) {
  return (
    // <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
    // <div className="fixed top-10 left-0 right-0 bottom-0 flex items-center justify-center focus:outline-none z-50">
    <div className={styles.searchOverlay}>
      <div className="p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        {/* <h2 className="text-2xl font-bold mb-4">Search Results</h2> */}
        <h2 className="text-2xl mb-4"><ins>Search Results</ins></h2>

        {searchResults.length === 0 ? (
          <p>No results found.</p>
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
  );
}