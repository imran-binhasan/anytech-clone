import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full transition-all duration-300 ${
        isTransparent ? "bg-transparent text-white" : "bg-white text-blue-600 shadow-md"
      }`} style={{ zIndex: 999 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-4 py-2">
        <div className="flex justify-between items-center h-16">
          <img
            className="w-40"
            src={
              isTransparent
                ? "https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
                : "https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?w=171&auto=format"
            }
            alt="ANYTECH"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 transition-colors duration-200">
                Solutions <FiChevronDown className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {isSolutionsOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 text-blue-600">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenCaaS</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenBasS</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenPaaS</a>
                </div>
              )}
            </div>

            <a href="#" className="relative transition-colors duration-200 hover:border-b-2 hover:border-blue-500">Services</a>
            <a href="#" className="relative transition-colors duration-200 hover:border-b-2 hover:border-blue-500">About Us</a>

            {/* Language Selector (Click to Toggle) */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-5 py-2 rounded-lg transition-all duration-200 border"
              >
                <FaGlobe size={16} />
                ENG <FiChevronDown className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md p-2 text-blue-600">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bangla</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Indonesian</a>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              className={`px-5 py-2 rounded-lg transition-all duration-200 border ${
                isTransparent ? "" : "bg-orange-500 text-white"
              }`}
            >
              Contact Us {">"}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-blue-600 bg-opacity-90 transition-all duration-300 ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex flex-col items-center py-6 space-y-4">
            {/* Close Button and Logo */}
            <div className="flex justify-between w-full px-4">
              <img
                className="w-32"
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format"
                alt="Logo"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 rounded-md"
              >
                <FiX size={30} />
              </button>
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1 text-white transition-colors duration-200">
                Solutions <FiChevronDown className={`transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              {isSolutionsOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2 text-blue-600">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenCaaS</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenBasS</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">OpenPaaS</a>
                </div>
              )}
            </div>

            {/* Links */}
            <a href="#" className="relative text-white transition-colors duration-200 hover:border-b-2 hover:border-blue-500">Services</a>
            <a href="#" className="relative text-white transition-colors duration-200 hover:border-b-2 hover:border-blue-500">About Us</a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-white transition-all duration-200 border"
              >
                <FaGlobe size={16} />
                ENG <FiChevronDown className={`transition-transform ${isLangOpen ? "rotate-180" : ""}`} />
              </button>
              {isLangOpen && (
                <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md p-2 text-blue-600">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Bangla</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Indonesian</a>
                </div>
              )}
            </div>

            {/* Contact Button */}
            <button
              className={`px-5 py-2 rounded-lg text-white transition-all duration-200 border bg-blue-600 hover:bg-blue-500`}
            >
              Contact Us {">"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
