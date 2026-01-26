import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext.jsx";

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
  { to: "/projects", name: "Projects" },
  { to: "/leaderboard", name: "Leaderboard" },
  { to: "/resources", name: "Resources" },
  { to: "/blog", name: "Blog" },
  { to: "/team", name: "Team" },
  { to: "/alumni", name: "Alumni" },
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                to={link.to}
                className="pb-2 border-b-4 border-blue-300 hover:border-blue-500 transition-all duration-200"
              >
                {link.name}
              </NavItem>
            ))}
          </div>

          {/* Auth actions */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="flex items-center gap-2 text-white/90 text-sm md:text-base font-medium hover:text-blue-300 transition-colors"
                >
                  <span className="h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs">
                    {(user?.name || user?.email || "U").slice(0, 1).toUpperCase()}
                  </span>
                  <span className="hidden sm:inline">{user?.name || user?.email || "Profile"}</span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-3 w-48 rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-lg overflow-hidden">
                    <button
                      onClick={() => {
                        setMenuOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white text-sm md:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gray-900/80 hover:bg-gray-800/90 text-white font-semibold px-6 py-2.5 rounded-full border border-white/20 hover:border-white/40 hover:shadow-lg transition-all duration-300 text-sm md:text-base transform hover:scale-105"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="md:hidden"> ... </div> */}
    </nav>
  );
}
