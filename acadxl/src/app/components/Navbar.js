import React from "react";
import { FaBars } from "react-icons/fa";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="AcadXL Logo" className="h-8" />
        <span className="text-2xl font-bold">AcadXL</span>
      </div>

      {/* Centered search bar (hidden on small screens) */}
      <div className="hidden md:flex flex-grow justify-center items-center mx-4">
        <input
          type="text"
          placeholder="Search for the courses"
          className="w-64 p-2 border border-gray-300 rounded-full outline-none px-4"
        />
      </div>

      {/* Navigation items (responsive for mobile) */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link href="/courses" className="text-blue-800">
          Home
        </Link>
   
        <Link href="/courses" className="text-blue-800">
          course
        </Link>
        <Link href="/login">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Login
        </button>
        </Link>
      </div>

      {/* Hamburger menu for small screens */}
      <div className="md:hidden flex items-center">
        <button className="text-blue-800 text-2xl">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}
