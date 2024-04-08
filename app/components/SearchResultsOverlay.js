// import Link from "next/link";
// import styles from "app/page.module.css";
// import SearchBar from "./SearchBar";
// import { useState } from "react";
// import {AnimatePresence, motion} from "framer-motion";


// export default function SearchResultsOverlay({ searchResults }) {

//   const [searchOpen, setSearchOpen] = useState(false);

//   return (
//     <div className={styles.searchOverlay}
//     // style={{
//     //   backdropFilter: `blur(10px)`,
//     //   backgroundColor: 'rgba(0, 0, 0, 0.75)',
//     // }}
//     >
//       <motion.div className="p-8  h-[100vh] overflow-y-auto">
//         {searchResults.length === 0 ? (
//           <h3 className={styles.cardSearch}>No results found.</h3>
//         ) : (
//           <div>
//           {searchResults.map((page) => (
//             // <div key={page.path}>
//             <div className={styles.cardSearch} key={page.path}>
//               <Link href={page.path}>
//                 <h3 className={styles.searchResultsTitle}>{page.title}</h3>
//                 <p className={styles.searchResultsBody}>{page.content}</p>
//               </Link>
//             </div>
//           ))}
//         </div>
//         )} 

//       </motion.div>
//     </div>
//   );
// }