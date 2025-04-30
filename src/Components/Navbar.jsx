// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navBg shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold headline-color">
          {/* CHEF DAWN */}
          <img className="rounded-full w-[50px]" src="/logo.jpg" alt="" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About the Chef</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/signature-dishes">Signature Dishes</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden navBg px-4 pb-4">
          <ul className="space-y-2 text-white font-medium">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About the Chef</Link></li>
            <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link to="/signature-dishes" onClick={() => setIsOpen(false)}>Signature Dishes</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
