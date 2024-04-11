// import { useRouter } from "next/navigation";
// import { createContext, use, useTransition } from "react";

// // export const DELAY = 10;
// export const DELAY = 1000;

// const sleep = ms =>
//   new Promise(resolve => setTimeout(() => resolve(), ms));
// const noop = () => {};


// const Context = createContext({
//   pending: false,
//   navigate: noop,
// });

// export const useNavigationTransition = () => use(Context);

// export default function Transitions({ children }) {
//   const [pending, start] = useTransition();
//   const router = useRouter();
//   const navigate = (href) => {
//     start(async () => {
//       await Promise.all([router.push(href), sleep(DELAY)]);
//     });
//   };
//   return (
//     <Context.Provider value={{ pending, navigate }}>
//       {children}
//     </Context.Provider>
//   );
// }