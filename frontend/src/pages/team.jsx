import React, { useState } from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
const teamData = {
  "2024": [
    {
      name: "Old Member 1",
      role: "President",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      email: "mailto:old1@email.com",
      instagram: "https://instagram.com/old1",
      linkedin: "https://linkedin.com/in/old1"
    }
  ],
  "2023": [
    {
      name: "Old Member 1",
      role: "President",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      email: "mailto:old1@email.com",
      instagram: "https://instagram.com/old1",
      linkedin: "https://linkedin.com/in/old1"
    },
    {
      name: "Old Member 2",
      role: "General Secretary",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      email: "mailto:old2@email.com",
      instagram: "https://instagram.com/old2",
      linkedin: "https://linkedin.com/in/old2"
    },
  ]
};
const Team = () => {
    const years = Object.keys(teamData).sort((a, b) => b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
  
    return (
      <div id = "team" className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#A941D2] to-[#F97316]">
            <span className="border-b-2 border-pink-500 pb-2 inline-block italic">
              Executive Team
            </span>
          </h1>
          <div className="flex items-center mb-12">
            <select
              className="px-4 py-2 text-gray-400 rounded border border-b-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              value={selectedYear}
              onChange={e => setSelectedYear(e.target.value)}
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
  {teamData[selectedYear].map(member => (
    <div
      key={member.name}
      className={`
        group relative
        rounded-2xl
        bg-gradient-to-br from-gray-800 via-gray-900 to-black
        border border-[#3f3554] hover:border-[#a941d2]
        shadow-lg
        flex flex-col items-center
        p-8
        transition-all duration-300
        hover:shadow-[#a941d2]/30 hover:shadow-2xl hover:-translate-y-2
      `}
    >
      {/* Avatar with subtle colored ring */}
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#a941d2] via-transparent to-[#f97316] blur-lg opacity-40 group-hover:opacity-80 transition" />
        <img
          src={member.image}
          alt={member.name}
          className="w-28 h-28 object-cover rounded-full border-4 border-[#191624] z-10 relative shadow-xl"
        />
      </div>
      <h2 className="text-lg md:text-xl font-bold text-white mb-1 text-center group-hover:text-[#f97316] transition">{member.name}</h2>
      <p className="text-gray-300 italic mb-4 text-center">{member.role}</p>
      <div className="flex space-x-4 mt-auto pt-3">
        <a href={member.email} className="group relative rounded-full p-2 bg-[#191624] hover:bg-[#a941d2] transition" title="Email">
          <Mail className="w-6 h-6 text-blue-300 group-hover:text-white" />
        </a>
        <a href={member.instagram} target="_blank" rel="noopener noreferrer" title="Instagram" className="group relative rounded-full p-2 bg-[#191624] hover:bg-pink-500 transition">
          <Instagram className="w-6 h-6 text-pink-300 group-hover:text-white" />
        </a>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="group relative rounded-full p-2 bg-[#191624] hover:bg-blue-600 transition">
          <Linkedin className="w-6 h-6 text-blue-300 group-hover:text-white" />
        </a>
      </div>
    </div>
  ))}
</div>

       </div>
        </div>
    )
}

export default Team