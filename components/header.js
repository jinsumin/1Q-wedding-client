import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
//   useEffect(() => {
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//           behavior: "smooth",
//         });
//       });
//     });
//   });

  return (
    <>
      <header className="py-3 bg-transparent text-gray-800 sticky top-0 z-50 shadow-lg">
        <div className="container flex justify-between h-10 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#main-section"
            aria-label="Back to homepage"
            className="flex items-center p-2 no-underline"
          >
            <Image
              // className="object-cover object-center rounded"
              alt="hero"
              src="/hana-3d-logo.png"
              width="60%"
              height="80%"
            />
            <span className="ml-3 text-xl text-teal-600">1Q WEDDING</span>
          </a>
          <nav className="items-stretch hidden space-x-3 md:flex">
            <a
              rel="noopener noreferrer"
              href="#main-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              HOME
            </a>
            <a
              rel="noopener noreferrer"
              href="#viewer-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              축하영상
            </a>
            <a
              rel="noopener noreferrer"
              href="#canvas-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              CANVAS
            </a>
            <a
              rel="noopener noreferrer"
              href="#recorder-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              RECORDER
            </a>
            <a
              rel="noopener noreferrer"
              href="#player-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              PLAYER
            </a>
            <a
              rel="noopener noreferrer"
              href="/settings"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              SETTINGS
            </a>
          </nav>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
