'use client'
import {Tooltip} from "@nextui-org/tooltip";
import styles from 'app/page.module.css'
// import { Children } from "react";

export default function CenterTooltip({children}) {
return (
    <Tooltip
       content="Center video"
       delay={0}
       closeDelay={0}
       motionProps={{
         variants : {
           exit: {
             opacity:0,
             transition: { 
               duration: 0.1, ease:"easeIn",
             }
           },
           enter : {
             opacity:1,
             transition: {
               duration:0.15, ease:"easeOut",
             }
           },
         },
       }}
       >
        {children}

       </Tooltip>
    
)
    }