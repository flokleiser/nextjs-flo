'use client'
import {Tooltip} from "@nextui-org/tooltip";
import styles from '@/app/page.module.css'

export default function CenterTooltip({children}) {
return (
    <Tooltip
      showArrow={true}
       content="Center video"
       placement="right"
       delay={0}
       closeDelay={0}
       classNames={{
        base: [
        "bg-white",
        "bg-[#78716c]/50 rounded-md",
        ],
        content: [
        "py-0.5 px-1 shadow-xl text-white",
        "rounded-md" 
        ]
       }}
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