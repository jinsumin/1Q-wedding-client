import React, { useEffect, useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

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
      src: "videos/sample.mp4",
      description: "sample video of 1q wedding",
    },
    {
      id: 2,
      title: "video2",
      src: "videos/sample.mp4",
      description: "sample video of 1q wedding",
    },
    {
      id: 3,
      title: "video3",
      src: "videos/sample.mp4",
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
                  <video
                    ref={videoRef}
                    controls
                    width="100%"
                    height="100%"
                    loop
                    // muted
                    src={require(`../public/${videoObject.src}`)}
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
