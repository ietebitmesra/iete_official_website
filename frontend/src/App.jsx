import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import About from './components/About';
import Events from './pages/events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Team from './pages/team';
import Alumni from './pages/Alumni';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to gray-900 text-white pt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
      <Footer />
    </div>
  );
}
