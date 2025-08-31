import React from 'react';
import HomePage from './pages/homepage';
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Alumni from './pages/Alumni.jsx';

// Helper component for Navigation Items
function NavItem({ to, children }) {
  return (
    <Link 
      to={to} 
      className="text-white font-normal text-base hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

// Main App component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
          <div className="flex justify-between items-center">
            {/* Left Side - Navigation Links */}
            <div className="flex space-x-12">
              <NavItem to="/">Home</NavItem>
              <NavItem to="#events">Events</NavItem>
              <NavItem to="#archives">Archives</NavItem>
              <NavItem to="#resources">Resources</NavItem>
              <NavItem to="/alumni">Alumni</NavItem>
            </div>

            {/* Right Side - Register Button */}
            <button className="px-6 py-2 border border-white text-white rounded-full font-normal text-base hover:bg-white hover:text-black transition-all duration-200">
              Register!
            </button>
          </div>
        </nav>

        {/* Main Content Area */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                {/* HomePage Component */}
                <HomePage />
                
                {/* About Us Section */}
                <section id="about" className="bg-gray-900 min-h-screen flex items-center justify-center p-8">
                  <div className="text-center max-w-4xl">
                    <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      The Institution of Electronics and Telecommunication Engineers (IETE) Students Chapter at BIT Mesra 
                      is dedicated to fostering technical excellence and professional development among students. We organize 
                      workshops, seminars, technical competitions, and guest lectures to keep our members at the forefront 
                      of technological advancements.
                    </p>
                  </div>
                </section>

                {/* Events Section */}
                <section id="events" className="bg-gray-800 min-h-screen flex items-center justify-center p-8">
                  <div className="text-center max-w-4xl">
                    <h2 className="text-4xl font-bold text-white mb-6">Events</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      Stay tuned for exciting workshops, hackathons, and technical talks! We regularly update our event 
                      calendar with opportunities to learn new skills and network with industry experts. Check back soon 
                      for more details or follow us on our social media channels.
                    </p>
                  </div>
                </section>
              </>
            } />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 p-6 text-center text-gray-400 rounded-t-lg mt-8">
          <p>&copy; {new Date().getFullYear()} IETE Students Chapter BIT Mesra. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with ❤️ by the IETE Team</p>
        </footer>
      </div>
    </Router>
  );
}