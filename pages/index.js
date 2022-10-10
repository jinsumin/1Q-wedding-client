import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Player from "./player";
import Recorder from "./recorder";

export default function Home() {
  return (
    <div>
      {/* <Player /> */}
      <Recorder id="root"/>
    </div>
  );
}
