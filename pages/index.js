import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Player from "./player";
import Recorder from "./recorder";
import Main from "./main";
import Canvas from "./canvas";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>1Q WEDDING</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/vercel.png" />
      </Head>
      <div>
        <Main />
        <Player />
        <Canvas />
        <Recorder />
      </div>
    </Layout>
  );
}
