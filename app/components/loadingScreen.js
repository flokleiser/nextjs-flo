'use client'
import styles from 'app/page.module.css'
import { Puff } from "react-loader-spinner";
// import {Spinner} from "@nextui-org/react";


export default function LoadingScreen(){
    return (
    <main className={styles.main}>

        <div style={{paddingTop:'5rem'}}/>
        <div className={styles.subtitleHomepage}>
        Loading
        </div>
            <Puff
  visible={true}
  height="180"
  width="180"
  color="white"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </main>
    )
}