import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import About from './components/About';
import Events from './components/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Team from './pages/team';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to gray-900 text-white pt-16">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
}
