import React from "react";
import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-8 text-center md:text-left mb-4 md:mb-0">
          <a href="/termandcondition" className="hover:underline">Terms of Use</a>
         
          <a href="/terms" className="hover:underline">Privacy Policy</a>

          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">FAQs</a>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">Refund Policy</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition duration-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-gray-400 mt-4">
        © {new Date().getFullYear()} AcadXL. All rights reserved.
      </div>
    </footer>
  );
}
