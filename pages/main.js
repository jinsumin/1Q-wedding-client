import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div id="main-section">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
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
            <div className="p-12 md:w-1/2 flex flex-col items-start">
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
        </div>
      </section>
    </div>
  );
};

export default Main;
