import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
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
    <>
      <header className="p-4 bg-transparent text-gray-800 sticky top-0 z-50 shadow-2xl">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#main-section"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <Image
              // className="object-cover object-center rounded"
              alt="hero"
              src="/hana-3d-logo.png"
              width="90%"
              height="100%"
            />
            <span className="ml-3 text-xl">1Q WEDDING</span>
          </a>
          <nav className="items-stretch hidden space-x-3 md:flex">
            <a
              rel="noopener noreferrer"
              href="#main-section"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              HOME
            </a>
            <a
              rel="noopener noreferrer"
              href="#canvas-section"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              CANVAS
            </a>
            <a
              rel="noopener noreferrer"
              href="#recorder-section"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              RECORDER
            </a>
            <a
              rel="noopener noreferrer"
              href="#player-section"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-teal-600 border-teal-600"
            >
              PLAYER
            </a>
            <a
              rel="noopener noreferrer"
              href="/settings"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
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
