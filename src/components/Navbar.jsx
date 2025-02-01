import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex w-full max-w-5xl z-10 justify-between items-center pr-10 pt-6 container mx-auto">
        <h1 className="text-2xl font-bold">ANYTECH</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Solutions</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">About Us</a>
        </div>
        <button className="bg-transparent border border-white px-5 py-2 rounded-lg text-white">Contact Us</button>
      </nav>
    );
};

export default Navbar;