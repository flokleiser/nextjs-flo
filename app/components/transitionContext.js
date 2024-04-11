import { useRouter } from "next/navigation";
import { createContext, use, useTransition } from "react";

export const DELAY = 10;

const sleep = ms =>
  new Promise(resolve => setTimeout(() => resolve(), ms));
const noop = () => {};


const Context = createContext({
  pending: false,
  navigate: noop,
});

export const useNavigationTransition = () => use(Context);

export default function Transitions({ children }) {
  const [pending, start] = useTransition();
  const router = useRouter();
  const navigate = (href) => {
    start(async () => {
      await Promise.all([router.push(href), sleep(DELAY)]);
    });
  };
  return (
    <Context.Provider value={{ pending, navigate }}>
      {children}
    </Context.Provider>
  );
}



// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { useRouter } from "next/router";
// import { createContext,use,useTransition } from "react";

// const DELAY = 200;

// const sleep = (ms) =>
//   new Promise((resolve) => setTimeout(() => resolve(), ms));
// const noop = () => {};

// const Context = createContext({
//   pending: false,
//   navigate: noop,
// });
// const usePageTransition = () => use(Context);
// const usePageTransitionHandler = () => {
//   const { navigate } = usePageTransition();
//   const onClick = (e) => {
//     e.preventDefault();
//     const href = e.currentTarget.getAttribute("href");
//     if (href) navigate(href);
//   };

//   return onClick;
// };

// function Transitions({ children, className }) {
//   const [pending, start] = useTransition();
//   const router = useRouter();
//   const navigate = (href) => {
//     start(async () => {
//       router.push(href);
//       await sleep(DELAY);
//     });
//   };

//   const onClick = (e) => {
//     const a = e.target.closest("a");
//     if (a) {
//       e.preventDefault();
//       const href = a.getAttribute("href");
//       if (href) navigate(href);
//     }
//   };

//   return (
//     <Context.Provider value={{ pending, navigate }}>
//       <div onClickCapture={onClick} className={className}>
//         {children}
//       </div>
//     </Context.Provider>
//   );
// }

// function Animate({ children, className }) {
//   const { pending } = usePageTransition();
//   return (
//     <AnimatePresence>
//       {!pending && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className={className}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// module.exports = {
//   Transitions,
//   Animate,
//   usePageTransitionHandler,
// };

