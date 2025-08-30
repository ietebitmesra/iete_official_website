import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <Link
      to={to}
      className="text-white font-medium hover:text-blue-300 transition-colors duration-300 text-sm md:text-base"
    >
      {children}
    </Link>
  );
}

const navLinks = [
  { to: "/", name: "Home" },
  { to: "/events", name: "Events" },
  { to: "/archives", name: "Archives" },
  { to: "/resources", name: "Resources" },
  { to: "/team", name: "Team" }
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
         <div className="flex items-center space-x-8">
  {navLinks.map(link => (
    <NavItem
      key={link.to}
      to={link.to}
      className="pb-2 border-b-4 border-blue-300 hover:border-blue-500 transition-all duration-200"
    >
      {link.name}
    </NavItem>
  ))}
</div>

          {/* Register Button */}
          <button className="bg-gray-900/80 hover:bg-gray-800/90 text-white font-semibold px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 text-sm md:text-base transform hover:scale-105">
            Register!
          </button>
        </div>
      </div>
      {/* <div className="md:hidden"> ... </div> */}
    </nav>
  );
}
