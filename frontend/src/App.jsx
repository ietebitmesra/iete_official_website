import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import About from "./components/About";
import Events from "./pages/events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Team from "./pages/team";
import Alumni from "./pages/Alumni";
import Projects from "./pages/projects";
import Leaderboard from "./pages/leaderboard";
import Resources from "./pages/resources";
import Blog from "./pages/blog";
import Login from "./pages/login";
import Register from "./pages/register";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Admin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
