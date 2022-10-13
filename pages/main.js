import React from "react";
import Image from "next/image";
import Animation from "../components/animation";
import { useEffect } from "react";

const Main = () => {
  const appStoreURL =
    "https://static.toss.im/png-icons/timeline/applekorea.png";
  const playStoreURL =
    "https://static.toss.im/png-icons/timeline/googleplay.png";

  return (
    <div id="main-section">
      <section className="text-gray-600 body-font overflow-hidden bg-teal-200">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          layout="fill"
          src="/hana-background.jpeg"
          alt="background"
        />
        <div className="px-5 py-24 mx-auto justify-items-center">
          <div className="mt-44 flex flex-col">
            <h1 className="items-center mb-14 text-black text-center text-7xl">
              금융의 모든 것<br></br>토스에서 쉽고 간편하게
            </h1>
            <div class="flex flex-row justify-center">
              <div class="flex flex-row justify-center bg-black w-52 h-12 rounded-lg m-3 shadow-lg">
                <div>
                  <a
                    type="button"
                    aria-disabled="false"
                    target="_blank"
                    href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={appStoreURL}
                      width="40"
                      height="40"
                      alt="app-store"
                    />
                  </a>
                </div>
                <div className="text-white">App Store</div>
              </div>
              <div class="flex flex-row justify-center bg-black w-52 h-12 rounded-lg m-3 shadow-lg">
                <div>
                  <a
                    type="button"
                    aria-disabled="false"
                    target="_blank"
                    href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                    rel="noreferrer noopener"
                  >
                    <img
                      src={playStoreURL}
                      width="40"
                      height="40"
                      alt="app-store"
                    />
                  </a>
                </div>
                <div className="text-white">Google Play</div>
              </div>
            </div>
          </div>
        </div>
        <Animation />
      </section>
    </div>
  );
};

export default Main;
