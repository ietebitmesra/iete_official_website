import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Navigation Links */}
          <div className="flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-white font-medium hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
            >
              Home
            </a>
            <a 
              href="#events" 
              className="text-white font-medium hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
            >
              Events
            </a>
            <a 
              href="#archives" 
              className="text-white font-medium hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
            >
              Archives
            </a>
            <a 
              href="#resources" 
              className="text-white font-medium hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
            >
              Resources
            </a>
          </div>

          {/* Right Side - Register Button */}
          <button className="bg-gray-900/80 hover:bg-gray-800/90 text-white font-semibold px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 text-sm md:text-base transform hover:scale-105">
            Register!
          </button>
        </div>
      </div>

      {/* Mobile Menu - Hidden by default, can be expanded later */}
      <div className="hidden md:hidden">
        {/* Mobile menu content can be added here if needed */}
      </div>
    </nav>
  );
}
