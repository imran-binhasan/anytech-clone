import React, { useState } from "react";
import Headroom from "react-headroom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Headroom>
      <nav className="fixed flex w-full bg-transparent  text-blue-600 justify-between items-center px-6 py-4 container mx-auto">
        <h1 className="text-2xl font-bold">ANYTECH</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-500 transition">Solutions</a>
          <a href="#" className="hover:text-blue-500 transition">Services</a>
          <a href="#" className="hover:text-blue-500 transition">About Us</a>
        </div>

        <button className="hidden md:block bg-transparent border border-white px-5 py-2 rounded-lg text-white hover:bg-white hover:text-black transition">
          Contact Us
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center py-5 space-y-4">
            <a href="#" className="hover:text-blue-400">Solutions</a>
            <a href="#" className="hover:text-blue-400">Services</a>
            <a href="#" className="hover:text-blue-400">About Us</a>
            <button className="bg-transparent border border-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </Headroom>
  );
};

export default Navbar;
