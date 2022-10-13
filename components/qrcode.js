import React from "react";
import { useQRCode } from "next-qrcode";

const Qrcode = () => {
  const { Canvas } = useQRCode();

  return (
    <div>
      <Canvas
        text={"https://hana-1q-wedding.vercel.app"}
        options={{
          type: "image/jpeg",
          quality: 0.3,
          level: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        }}
      />
    </div>
  );
};

export default Qrcode;
