"use client";
import styles from "@/app/page.module.css";
import { Puff } from "react-loader-spinner";
import { Grid } from "react-loader-spinner";
import { Hourglass } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
import {RotatingLines} from "react-loader-spinner"
import {Watch} from "react-loader-spinner"
import BounceLoader from "react-spinners/BounceLoader";


export default function LoadingScreen() {
  return (
    <main className={styles.main}>
      <div style={{ paddingTop: "5rem" }} />
      <Puff
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
      />

<div style={{padding:'3rem'}} />

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

<div style={{padding:'3rem'}} />

      <RotatingLines
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
      />

<div style={{padding:'3rem'}} />

      <Watch
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
      />

<div style={{padding:'3rem'}} />

      <ProgressBar
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
      />

<div style={{padding:'3rem'}} />

      <Hourglass
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
      />

      <div style={{padding:'3rem'}} />

<BounceLoader color="#36d7b7" />


<div style={{padding:'3rem'}} />
    </main>
  );
}

