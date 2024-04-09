"use client";
import styles from "app/page.module.css";

//very meh
import { Puff } from "react-loader-spinner";

//meh
import { Grid } from "react-loader-spinner";

//this one is pretty good
import { Hourglass } from "react-loader-spinner";

//pretty good aswell
import { ProgressBar } from "react-loader-spinner";

//true classic
import {RotatingLines} from "react-loader-spinner"

//kinda cool
import {Watch} from "react-loader-spinner"

import { Spinner } from "flowbite-react";

export default function LoadingScreen() {
  return (
    <main className={styles.main}>
      <div style={{ paddingTop: "5rem" }} />
      {/* <div className={styles.subtitleHomepage}>Loading</div> */}
      <div style={{padding:'10rem'}} />
      {/* <Puff */}
      {/* <Grid */}
      {/* <RotatingLines */}
      {/* <Watch */}
      {/* <ProgressBar */}
      {/* <Hourglass
        visible={true}
        height="180"
        width="180"
        color="#ffffff"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#ffffff", "#ffffff"]}
        barColor="#ffffff"
        borderColor="#ffffff"
        strokeColor="#ffffff"
        strokeWidth="4"
      /> */}

      <Spinner />
       {/* aria-label="Extra large spinner example" size="xl" /> */}
    </main>
  );
}
