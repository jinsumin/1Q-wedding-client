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
      <section className="text-gray-600 body-font overflow-hidden">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          layout="fill"
          src="/hana-background.jpeg"
          alt="background"
        />
        <div className="px-5 py-24 mx-auto justify-items-center">
          <div className="mt-44 bg-orange-300 flex flex-col">
            <h1 className="items-center mb-14 text-black text-center">
              금융의 모든 것<br></br>토스에서 쉽고 간편하게
            </h1>
            <div class="flex flex-row justify-center">
              <a
                class="border"
                type="button"
                aria-disabled="false"
                target="_blank"
                href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                rel="noreferrer noopener"
              >
                <Image
                  src={appStoreURL}
                  width="40"
                  height="40"
                  className=""
                  alt="app-store"
                />
                <div>App Store</div>
              </a>
              <a
                class="p-button p-button--default p-button--inline p-button--fill p-button--large padding--l css-1hs38uh"
                type="button"
                aria-disabled="false"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=viva.republica.toss"
                rel="noreferrer noopener"
              >
                <Image
                  src={playStoreURL}
                  width="40"
                  height="40"
                  class="css-1m3khn2"
                  alt="google-play"
                />
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
