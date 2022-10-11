import React from "react";
import Image from "next/image";
import Animation from "../components/animation";
import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <div id="main-section">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto justify-items-center">
          <div className="flex flex-wrap justify-center">
            <div className="p-12 md:w-1/2 flex flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  // className="object-cover object-center rounded"
                  alt="hero"
                  src="/hana-byuldol.png"
                  width={680}
                  height={700}
                />
              </div>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  // className="object-cover object-center rounded"
                  alt="hero"
                  src="/hana-byulsong.png"
                  width={680}
                  height={700}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="items-center">
              <a
                href="#canvas-section"
                className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              >
                <Animation width={100} height={100} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
