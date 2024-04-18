"use client";
import styles from "app/page.module.css";
import { Puff } from "react-loader-spinner";
import { Grid } from "react-loader-spinner";
import { Hourglass } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
import {RotatingLines} from "react-loader-spinner"
import {Watch} from "react-loader-spinner"

export default function LoadingScreen() {
  return (
    <main className={styles.main}>
      <div style={{padding:'7rem'}} />
            <Grid
        visible={true}
        height="330"
        width="330"
        color="#ffffff"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#ffffff", "#ffffff"]}
        barColor="#ffffff"
        borderColor="#ffffff"
        strokeColor="#ffffff"
        strokeWidth="4"
      />
    </main>
  );
}
