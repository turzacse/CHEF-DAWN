// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-50 py-6 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} CHEF DAWN. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">CHEF DAWN</Link></li>
          {/* <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li> */}
        </ul>
      </div>
    </footer>
  );
}
