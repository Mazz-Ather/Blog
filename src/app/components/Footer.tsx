import  Link from "next/link";
import React from "react";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 lg:mb-0">
          <h3 className="text-lg font-semibold text-white">My Blog</h3>
          <p className="text-sm text-gray-400">
            Sharing thoughts, <br /> insights, and stories.
          </p>
        </div>

        {/* Center Section */}
        <nav className="mb-4 lg:mb-0 flex space-x-6">
          <Link
            href="/about"
            className="hover:text-white transition duration-200 text-sm"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition duration-200 text-sm"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="hover:text-white transition duration-200 text-sm"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex space-x-4">
  {/* LinkedIn */}
  <Link
    href="https://linkedin.com/in/your-linkedin-profile"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="text-gray-400 hover:text-white transition duration-200"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.22c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75c.97 0 1.75.78 1.75 1.75s-.79 1.75-1.75 1.75zm13.5 11.22h-3v-4.79c0-1.14-.02-2.61-1.59-2.61-1.59 0-1.83 1.24-1.83 2.53v4.87h-3v-10h2.88v1.38h.04c.4-.76 1.37-1.56 2.83-1.56 3.02 0 3.58 1.99 3.58 4.57v5.61z" />
    </svg>
  </Link>

  {/* Gmail */}
  <Link
    href="mailto:mazzather@gmail.com"
    aria-label="Gmail"
    className="text-gray-400 hover:text-white transition duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/></svg>
  </Link>
</div>
      </div>
<div className="h-px bg-white w-[80%] flex mx-auto mt-5 -mb-3"/>
      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
