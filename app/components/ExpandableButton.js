'use client'

import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import styles from 'app/page.module.css'

export default function ExpandableButton() {
    const [isVisible, setVisible] = useState(false);
   
    const handleToggleClick = () => {
        setVisible(!isVisible);
        }

  return (
    <div>
      <button className={styles.buttonNew} 
      onClick={handleToggleClick}>
        {isVisible ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>

      {isVisible && (
        <div>
        </div>
      )}
    </div>
  );
};
