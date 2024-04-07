import Link from "next/link";

export default function SearchResultsOverlay({ searchResults }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        {searchResults.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div>
            {searchResults.map((page) => (
              <div key={page.path} className="mb-4">
                <Link href={page.path}>
                  <h3 className="text-lg font-bold">{page.title}</h3>
                  <p>{page.content}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}