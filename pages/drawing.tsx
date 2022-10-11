import React, { useRef } from "react";
import ReactSignatureCanvas from "react-signature-canvas";

function Drawing(): JSX.Element {
  const signCanvas = useRef() as React.MutableRefObject<any>;

  const clear = () => {
    signCanvas.current.clear();
  };

  const save = async () => {
    console.log("try save");
    const image = signCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "sample.png";
    link.click();
    // const { uploadURL } = await (await fetch(`/api/files`)).json();
    // const form = new FormData();
    // form.append("file", image[0]);
    // const {} = await (
    //   await fetch(uploadURL, {
    //     method: "POST",
    //     body: form,
    //   })
    // ).json();
  };

  return (
    <div id="canvas-section">
      <section>
        <div className="bg-white">
          <div className="flex flex-col justify-center h-screen items-center">
            <div className="canvas border-2 border-color: rgb(161 161 170) rounded-lg ring-2 ring-blue-100/50 shadow-2xl shadow-indigo-500/40 justify-center bg-gradient-to-r from-cyan-100 to-blue-100">
              <ReactSignatureCanvas
                ref={signCanvas}
                canvasProps={{
                  width: 1000,
                  height: 400,
                  className: "sigCanvas canvasStyle",
                }}
                penColor="green"
              />
            </div>
            <div className="py-10">
              <button
                onClick={clear}
                className="rounded-3xl h-20 px-14 m-2 text-2xl bg-blue-100 hover:bg-blue-100 text-white font-bold py-2 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-center"
              >
                수정하기
              </button>
              <button
                onClick={save}
                className="rounded-3xl h-20 px-14 m-2 text-2xl bg-blue-100 hover:bg-blue-100 text-white font-bold py-2 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-center"
              >
                자필 축하메시지 저장하기
              </button>

              <button
                onClick={() => {
                  location.href = "http://localhost:8080/account/list";
                }}
                className="rounded-3xl h-20 px-14 m-2 text-2xl bg-blue-100 hover:bg-blue-100 text-white font-bold py-2 bg-gradient-to-r from-green-200 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-center"
              >
                축의금 송금하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Drawing;
