import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import React, { useState } from "react";
// import ReactPlayer from "react-player";

export default function Player() {
  const [videoFilePath, setVideoFilePath] = useState(null);

  const handleVideoUpload = (event) => {
    setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleVideoUpload} />
      <ReactPlayer
        url={videoFilePath}
        width="100%"
        height="100%"
        playing={true}
        // muted={true}
        controls={false}
      />
    </div>
  );
}
