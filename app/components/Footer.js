"use client";
import styles from "app/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



const pathVariants= {
  start: {
      d:"m 379 7 c 0 5 -0.01 9.9 -0.03 14.86 H 0 c 0 -5.86 0 -12.86 0 -12.86 Z"
  },
  end: {
    d:"m379.3,4.96c0,4.95-.01,9.9-.03,14.86H.65c0-6.44-.03-12.87-.14-19.31,35.31.82,65.34,7.15,101.48,6.39,26.98-.56,53.04-3.58,80.33-3.3,21.46.21,48.27,3.02,61.42,4.83,13.16,1.81,28.58,3.05,34.04,3.15,5.48.11,9.85.12,10.61.12,1.57.02,3.14.02,4.71,0,.15,0,.29,0,.44,0,2-.02,4-.06,6-.13.96-.03,1.92-.06,2.87-.11,2.95-.12,5.9-.29,8.81-.5h.2c.1-.02.2-.02.29-.03.39-.03.79-.06,1.18-.09.61-.05,1.21-.1,1.81-.15,21.51-1.78,41.83-5.22,64.6-5.74Z"
  }
}

export default function Footer() {


  const [isHoveringFooter, setIsHoveringFooter] = useState(false);

  const handleHoverFooter= () => {
    setIsHoveringFooter(!isHoveringFooter);
    // console.log('hovering footer');
  };

  return (


    

<AnimatePresence>

 <motion.div className={styles.footerContainer}


//       initial={{ backgroundColor: 'rgb(28 25 23 / 0.8)'}}
//        animate={{ backgroundColor: isHoveringFooter? 'rgb(28 25 23 / 1)':'rgb(28 25 23 / 0.8)'}} 
//        transition={{duration: 0.3}} 

 

onMouseEnter={() => handleHoverFooter()}
onMouseLeave={() => setIsHoveringFooter(false)} 

      //  initial={{ height: '4rem'}}
      //  animate={{ height: isHoveringFooter? '5.5rem':'4rem'}} 
      //  transition={{duration: 0.3}} 
       >

<motion.h1 style={{
  position:'absolute', 
  bottom:'2.5rem',
  paddingLeft:'1rem',
  }}
  initial={{ opacity:0, 
    y:100}}
  animate={{ 
    opacity: isHoveringFooter? 0.5:0,
    y: isHoveringFooter? -5:0
  }} 
  transition={{duration: 0.2}}  
  > 

    <ins>Contact:</ins>
  </motion.h1>

  {/* <motion.h1 style={{
  position:'absolute', 
  bottom:'2.5rem',
  right:0,
  paddingRight:'1rem'
  }}
  initial={{ opacity:0}}
  animate={{ opacity: isHoveringFooter? 1:0}} 
  transition={{duration: 0.3}}  
  > 

    <ins>Media:</ins>
  </motion.h1> */}





{/*old*/}
  <motion.svg xmlns="http://www.w3.org/2000/svg" 

        style={{
        position:'absolute',
        bottom:-4,
        width:'105%',
        zIndex:-1,
        left:-5,
        maxHeight:'6.5rem'
      }}
      viewBox="0 0 379.8 20.32"
      preserveAspectRatio="none"

      initial={{ 
        opacity:0,
        height:'0rem'
      }}
      animate={{ 
        opacity: isHoveringFooter? 1:0, 
        height:isHoveringFooter? '6.5rem': '0rem'
      }}
      exit={{
        opacity:0,
        height:'0rem'
      }}
      transition={{duration: 0.2}} 
        >
        <path
          style={{fill:'rgb(28 25 23)'}}
          d="m379.3,4.96c0,4.95-.01,9.9-.03,14.86H.65c0-6.44-.03-12.87-.14-19.31,35.31.82,65.34,7.15,101.48,6.39,26.98-.56,53.04-3.58,80.33-3.3,21.46.21,48.27,3.02,61.42,4.83,13.16,1.81,28.58,3.05,34.04,3.15,5.48.11,9.85.12,10.61.12,1.57.02,3.14.02,4.71,0,.15,0,.29,0,.44,0,2-.02,4-.06,6-.13.96-.03,1.92-.06,2.87-.11,2.95-.12,5.9-.29,8.81-.5h.2c.1-.02.2-.02.29-.03.39-.03.79-.06,1.18-.09.61-.05,1.21-.1,1.81-.15,21.51-1.78,41.83-5.22,64.6-5.74Z"
        ></path>
      </motion.svg> 

{/* <motion.svg xmlns="http://www.w3.org/2000/svg" 

style={{
  position:'absolute',
  bottom:-4,
  width:'105%',
  zIndex:-1,
  left:-5,
  maxHeight:'6.5rem'
  }}
viewBox="0 0 379.8 20.32"
preserveAspectRatio="none"

initial="start"
whileHover="end"
>
<motion.path
  style={{fill:'rgb(28 25 23)'}}
  variants={pathVariants}
  transition={{duration:2}}
>

</motion.path>
</motion.svg>  */}


<div style={{ 
  position:'absolute',
  // position:'fixed',
  display:'flex',
  right:0,
  bottom:'0.5rem'
}}>



  <Link href="https://github.com/flokleiser" style={{right:0,paddingRight:'1rem', paddingBottom:'0.2rem', opacity:0.5}}> 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-5"
      viewBox="0 0 16 16"
      >
        <path
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        />
    </svg>
    </Link>


  <Link href="https://instagram.com/flokleiser" style={{right:0,paddingRight:'1rem', paddingBottom:'0.2rem', opacity:0.5}}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="w-5"
      viewBox="0 0 16 16"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        />
      </svg>
  </Link>
</div>


        {/* <h1> 
          floriankleiser@gmail.com
        </h1> */}

<div style={{ 
  // position:'fixed',
  position:'absolute',
  display:'flex',
  left:0,
  bottom:'0.5rem'
}}>
        <Link href="mailto:floriankleiser@gmail.com">
        <h1 style={{paddingLeft:'1rem', paddingTop:'0.6rem', opacity:0.5}}> 
          {/* Footer coming soon™️ */}
          floriankleiser@gmail.com
        </h1>
        </Link>
        </div>

    {/* </motion.footer> */}
    </motion.div>
    </AnimatePresence>
  );
}