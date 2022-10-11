import React from "react";
import Webcam from "react-webcam";

const Recorder = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
      console.log("upload url : ");
      console.log(url);
      console.log(a.download);
    }
  }, [recordedChunks]);

  const handleUpload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const videoConstraints = {
    width: 800,
    height: 480,
    facingMode: "user",
  };

  return (
    <>
      <div id="recorder-section">
        <section className="text-gray-600 body-font">
          <div className="container flex justify-center mx-20 mt-20">
            <div className="flex-col items-center place-items-center">
              <div>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  videoConstraints={videoConstraints}
                />
              </div>
              <div className="mt-20 text-center">
                {capturing ? (
                  <div className="mt-5 rounded bg-cyan-700 text-white text-lg shadow-lg">
                    <button onClick={handleStopCaptureClick}>
                      Stop Capture
                    </button>
                  </div>
                ) : (
                  <div className="mt-5 rounded bg-cyan-700 text-white text-lg shadow-lg">
                    <button onClick={handleStartCaptureClick}>
                      축하 영상 보내기
                    </button>
                  </div>
                )}
                {recordedChunks.length > 0 && (
                  <div>
                    <div className="mt-5 rounded bg-cyan-700 text-white text-lg shadow-lg">
                      <button onClick={handleDownload}>Download</button>
                    </div>
                    <div className="mt-5 rounded bg-cyan-700 text-white text-lg shadow-lg">
                      <button onClick={handleUpload}>Upload</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Recorder;
