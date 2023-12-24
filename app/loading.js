'use client'
import styles from 'app/page.module.css'
import { Puff } from "react-loader-spinner";


export default function Loading(){
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