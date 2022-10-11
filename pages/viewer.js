import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Viewer = () => {
  const videoProperties = [
    {
      id: 1,
      title: "video1",
      src: "https://www.youtube.com/watch?v=OEZc_c7A7Ko",
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
        <div className="mx-80">
          <Carousel>
            {videoProperties.map((videoObject) => {
              return (
                <Carousel.Item key={videoObject.id}>
                  <ReactPlayer
                    url={videoObject.src}
                    width="100%"
                    heigh="100%"
                    pip={true}
                    controls={true}
                    playing={false}
                  />
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
