import React from "react";
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="shadow-md">
      <div className="mx-auto max-w-screen-xl p-6 bg-slate-200">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 md:flex-1 flex-row">
            <a href="">
              <span className="text-gray-500 text-3xl font-extralight flex flex-row">
                CH
              </span>
            </a>
          </div>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <a className="text-gray-500" href="">
              About
            </a>
            <a className="text-gray-500" href="">
              Blog
            </a>
            <a className="text-gray-500" href="">
              Projects
            </a>
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex text-gray-500 text-xl">
            {/* <a
              className="rounded-lg bg-blue-400 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500"
              href=""
            >
              Contact me
            </a> */}
            <IoLogoInstagram />
            <IoMailOutline />
          </div>

          <div className="lg:hidden md:hidden">
            <button
              className="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
