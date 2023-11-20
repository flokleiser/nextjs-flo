import React from "react";
import { motion } from "framer-motion";

const TransitionEffect = () => {
    return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-white'
        initial={{ x: "100%", width: "100%"}}
        animate={{ x: "0%", width: "0%"}}
        transition={{ duration: 0.8, ease:"easeInOut" }}
        />
    </>        
    )

}

export default TransitionEffect;
