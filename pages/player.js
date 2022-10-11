import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import React, { useState } from "react";
import Layout from "../components/layout";
// import ReactPlayer from "react-player";

export default function Player() {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Layout>
      <div id="player-section">
        <section>
          <input type="file" onChange={handleVideoUpload} />
          <ReactPlayer
            url={videoFilePath}
            width="50%"
            height="50%"
            playing={true}
            // muted={true}
            controls={false}
          />
        </section>
      </div>
    </Layout>
  );
}
