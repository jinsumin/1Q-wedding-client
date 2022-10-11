import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";
// import videoURL from "../public/videos/sample.mp4";

// const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Viewer = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 5000);
  }, []);

  const videoProperties = [
    {
      id: 1,
      title: "video1",
      src: "../public/videos/sample.mp4",
      description: "sample video of 1q wedding",
    },
    {
      id: 2,
      title: "video2",
      src: "https://www.youtube.com/watch?v=OEZc_c7A7Ko",
      description: "sample video of 1q wedding",
    },
    {
      id: 3,
      title: "video3",
      src: "https://www.youtube.com/watch?v=OEZc_c7A7Ko",
      description: "sample video of 1q wedding",
    },
  ];

  return (
    <div id="viewer-section">
      <section>
        <div class="container px-5 py-24 mx-auto">
          <Carousel>
            {videoProperties.map((videoObject) => {
              return (
                <Carousel.Item key={videoObject.id}>
                  {/* <ReactPlayer
                    url={videoObject.src}
                    width="100%"
                    heigh="100%"
                    pip={true}
                    controls={true}
                    playing={false}
                  /> */}
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="100%"
                    loop
                    muted
                    src={require("../public/videos/sample.mp4")}
                  />
                  {/* <video ref={videoRef} controls width="250" loop muted>
                    <source src={videoObject.src} type="video/mp4" />
                  </video> */}
                  <Carousel.Caption>
                    <h3>{videoObject.title}</h3>
                    <p>{videoObject.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Viewer;
