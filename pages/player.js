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
    <div id="player-section">
      <section className="text-gray-600 body-font">
        <div className="flex justify-center mx-20 mt-20">
          <div className="flex-col items-center place-items-center">
            <div>
              <input type="file" onChange={handleVideoUpload} />
            </div>
            <div className="max-w-3xl">
              <ReactPlayer
                url={videoFilePath}
                width="100%"
                height="100%"
                playing={true}
                // muted={true}
                controls={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
