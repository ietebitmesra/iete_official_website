import React, { useState, useMemo } from 'react';
import { Calendar, MapPin, Search, Star, ArrowRight, GraduationCap, Eye, X } from '../components/Icons';


function formatDate(dateStr) {
  const d = new Date(dateStr);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

const events = [
  {
    id: 1,
    title: "DEVQUEST",
    date: "2024-08-30",
    time: "05:00 PM",
    location: "CAT Hall",
    category: "Technology",
    rating: 4.8,
    featured: false,
    description: "DevQuest, a dynamic and engaging event organized by the IETE Student Forum at BIT Mesra, successfully brought together tech enthusiasts, innovators, and problem solvers on 30th and 31st August 2024.",
    speaker: "Mr Rohit Negi",
    department: "Computer Science",
    fullDescription: "DevQuest, a dynamic and engaging event organized by the IETE Student Forum at BIT Mesra, successfully brought together tech enthusiasts, innovators, and problem solvers on 30th and 31st August 2024. The event was structured in three exciting phases, each designed to challenge participants while fostering learning and creativity. The first phase, held online on 30th August, was a preliminary screening round that tested participants' foundational knowledge in web development and logical reasoning, setting the stage for the mnain event. The following day, 31st August, began with an enlightening speaker session by Mr, Rohit Negi, an industry expert whoshared invaluable insights into emerging tech trends, essential skills for aspiring developers, andcareer guidance, inspiring students to explore new opportunities in the tech world. Following thesession, participants dove into the development round, where teams collaborated under time constraints to design and build functional, innovative web-based solutions, showcasing their technical prowess and creativity. The event concluded with the DevQuest Treasure Hunt, a high-energy challenge where teams deciphered clues, solved puzzles, and cracked codes in a race against time--testing their problem-solving abilities, teamwork, and quick thinking. With a perfect blend of knowledge-sharing, hands-on development, and adrenaline-pumping competition, DevQuest not only provided a platforn for students to demonstrate their skills but also encouraged networking, collaboration, and a deeper passion for technology. The event was a resounding success, leaving participants both motivated and eager for future editions.",
    prerequisites: "Basic understanding of programming concepts recommended",
    duration: "2 days"
  },
  {
    id: 2,
    title: "Connect-o-thon",
    date: "2024-10-05",
    time: "11:30 AM",
    location: "Lab-6",
    category: "Workshop",
    rating: 4.9,
    featured: false,
    description: "The event was structured into two rounds: the preliminary round and the final round. In the preliminary round, teams had to participate in a general quiz consisting of questions related to daily used electronics. ",
    
    department: "Computer Science",
    fullDescription: "The event was structured into two rounds: the preliminary round and the final round. In the preliminary round, teams had to participate in a general quiz consisting of questions related to daily used electronics. The purpose of this round was to test the teams' knowledge and understanding of electronics concepts commonly encountered in everyday devices. Based on their performance in this round, the top 10 teams qualified for the final event. The final round of the event where the top 10 qualifying teams had to compete. Each team consists of four members, who were further divided into two sub-teams of two members each. The primary task in the final round was to assemlble a CPU from scratch. Teams had a total time limit of around 15 minutes for each sub-team, with a total event duration of 2 hours. During this time, sub-teams had to alternate in their assembly efforts. Teams raced against each other to be the first to successfully assemble the CPU within the given time frame. This format added a competitive element anda sense of urgency to the event, making it engaging and challenging for participants. The team that completed the CPU assembly task first within the allotted timne were declared the winner of the event. This format encouraged teamwork, speed, and precision in executing the assembly process.",
    prerequisites: "No prior experience required",
    duration: "3 hours"
  },
  {
    id: 3,
    title: "HAND'N'BRAIN",
    date: "2025-03-21",
    time: "12:00 PM",
    location: "219",
    category: "Formal Event",
    rating: 4.7,
    featured: true,
    description: "Hand & Brain at Bitotsav was a thrilling twist on traditional chess, blending strategy, trust, and teamwork into one electrifying competition.",
    speaker: "IETE Team",
    
    fullDescription: "Hand & Brain at Bitotsav was a thrilling twist on traditional chess, blending strategy, trust, and teamwork into one electrifying competition. In this unique format, one player--the Brain-called the type of piece, while their teammate-the Hand-had to decide where and how to move it. What seemed simple at first quickly turned into a mind-bending challenge of coordination, intuition, and synergy. Held on 21st March from 12:00 PM to 3:00 PM in Rooms 219 & 220, the event drew dynamic duos eager to outthink their opponents and master the chaos. Whether seasoned chess pros or casual enthusiasts, participants experienced a fast-paced, mentally stimulating battle that tested more than just chess knowledge.",
    duration: "2 hours"
  },
  {
    id: 4,
    title: "BYTE BUILDATHON",
    date: "2025-03-17",
    time: "11:00 AM",
    location: "Online",
    category: "Hackathon",
    featured: true,
    description: "Buildathon was a high-energy, skill-driven event that brought together budding tech minds in a competitive yet collaborative environment. ",
    speaker: "IETE Team",
    department: "Computer Science",
    fullDescription: "Buildathon was a high-energy, skill-driven event that brought together budding tech minds in a competitive yet collaborative environment. Divided into two intense rounds, the competition kicked off with a rapid-fire quiz that tested participants' foundational knowledge in Web Development, Cybersecurity, and Machine Learning. The selected few then advanced to the hackathon round, where real-world problem statements awaited their creative and technical solutions. What set Buildathon apart was its perfect blend of theory and application. From sharp thinking in the quiz to hands-on coding in the hackathon, participants experienced the thrill of innovation under pressure. The 1-on-1 mentorship from experienced K21 seniors added depth to the learning, while the competitive spirit kept everyone on their toes. With exciting cash prizes, participation certificates, and a resume-worthy experience, Buildathon wasn't just a competition-it was a launchpad for future tech leaders.",
    duration: "All day"
  },
  
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (event.speaker && event.speaker.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           (event.department && event.department.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesSearch;
    });
  }, [searchTerm]);

  const featuredEvents = events.filter(event => event.featured);

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xl z-50 flex items-center justify-center p-4 transition-all duration-300">
          <div className="bg-transparent backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto 
            shadow-2xl border border-white/10 flex flex-col relative"
          >
            <div className="p-10 md:p-12">
              <button
                onClick={closeEventDetails}
                className="absolute top-4 right-4 bg-white/10 backdrop-blur-xl rounded-full p-2 
                  hover:bg-white/20 transition-all duration-300 z-50"
              >
                <X className="w-6 h-6 text-gray-200" />
              </button>

              <div className="space-y-6">
                {/* Category  */}
                <div className="flex items-center gap-3">
                  <span className="bg-white/10 backdrop-blur-sm text-cyan-300 px-4 py-2 
                    rounded-full text-base font-medium border border-cyan-500/30"
                  >
                    {selectedEvent.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 
                  to-purple-400 bg-clip-text text-transparent"
                >
                  {selectedEvent.title}
                </h2>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 bg-white/5 backdrop-blur-xl rounded-xl p-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span>{formatDate(selectedEvent.date)} at {selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    {selectedEvent.speaker && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                        <span>{selectedEvent.speaker}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                    <h4 className="font-semibold text-cyan-300 mb-2">Event Details</h4>
                    <p className="text-base text-gray-300 mb-1"><strong className="text-gray-200">Department:</strong> {selectedEvent.department}</p>
                    <p className="text-base text-gray-300 mb-1"><strong className="text-gray-200">Duration:</strong> {selectedEvent.duration}</p>
                    <p className="text-base text-gray-300"><strong className="text-gray-200">Prerequisites:</strong> {selectedEvent.prerequisites}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold text-gray-200 mb-3">About This Event</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedEvent.fullDescription}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-end">
                  <button className="bg-[#bec1ee]/80 backdrop-blur-xl text-gray-900 px-8 py-3 
                    rounded-xl hover:shadow-xl hover:shadow-[#bec1ee]/30 transition-all duration-300 
                    font-medium hover:scale-105 flex items-center gap-2"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-white/10 backdrop-blur-xl text-gray-200 px-8 py-3 
                    rounded-xl hover:shadow-xl hover:bg-white/20 transition-all duration-300 
                    font-medium hover:scale-105 border border-white/20"
                  >
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Header section */}
      <header className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <GraduationCap className="w-16 h-16 text-cyan-400 drop-shadow-lg" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Campus Events
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring speaker sessions, workshops, and academic events happening on campus.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-cyan-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search events, speakers, departments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 bg-gray-800/60 backdrop-blur-xl border border-gray-600/50 rounded-2xl text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 shadow-2xl text-lg ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Upcoming Events */}
      {featuredEvents.length > 0 && (
        <section className="w-full px-0 py-12">
          <h2 className="flex items-center gap-3 text-4xl font-bold mb-10 ml-8">
            <span className="text-yellow-400 text-3xl">✨</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <div className="flex flex-wrap gap-16 ml-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => openEventDetails(event)}
                className="group w-[600px] min-h-[420px] flex-shrink-0 rounded-3xl overflow-hidden
                  bg-white/5 bg-gradient-to-br from-white/5 via-[#bec1ee]/5 to-black/5
                  backdrop-blur-2xl border border-white/20
                  shadow-2xl transition-all duration-300
                  hover:scale-[1.03] hover:shadow-[#bec1ee]/40 flex flex-col
                  cursor-pointer"
              >
                <div className="flex flex-col flex-1 h-full justify-between p-12">
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-gradient-to-r from-gray-700/60 to-gray-600/60 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-base font-medium border border-cyan-500/30">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors duration-300 text-gray-100">
                      {event.title}
                    </h3>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-gray-300">
                        <span className="text-base">{formatDate(event.date)} at {event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <MapPin className="w-5 h-5 text-emerald-400" />
                        <span className="text-base">{event.location}</span>
                      </div>
                      {event.speaker && (
                        <div className="flex items-center gap-3 text-gray-300">
                          <GraduationCap className="w-5 h-5 text-purple-400" />
                          <span className="text-base">{event.speaker}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-300 text-base mb-8 flex-1">{event.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-8">
                    <span className="text-base text-gray-400 font-medium">{event.department}</span>
                    <button 
                      onClick={() => openEventDetails(event)}
                      className="bg-[#bec1ee] text-gray-900 px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-[#bec1ee]/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105 font-medium ring-1 ring-white/20 text-base"
                    >
                      <Eye className="w-5 h-5" />
                      View Details
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* All Events */}
      <section className="w-full px-0 py-12">
        <div className="flex items-center justify-between mb-10 ml-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center gap-3">
            <span className="text-yellow-400 text-3xl">✨</span>
            <span>All Events</span>
          </h2>
          <span className="text-gray-200 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 font-medium">
            {filteredEvents.length} events found
          </span>
        </div>
        <div className="flex flex-wrap gap-16 ml-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => openEventDetails(event)}
              className="group w-[600px] min-h-[420px] flex-shrink-0 rounded-3xl overflow-hidden
                bg-white/5 bg-gradient-to-br from-white/5 via-[#bec1ee]/5 to-black/5
                backdrop-blur-2xl border border-white/20
                shadow-2xl transition-all duration-300
                hover:scale-[1.03] hover:shadow-[#bec1ee]/40 flex flex-col"
            >
              <div className="flex flex-col flex-1 h-full justify-between p-12">
                <div className="flex flex-col flex-1 justify-between">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="bg-gradient-to-r from-gray-700/60 to-gray-600/60 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full text-base font-medium border border-cyan-500/30">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors duration-300 text-gray-100">
                    {event.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-cyan-400" />
                      <span className="text-base">{formatDate(event.date)} at {event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                      <span className="text-base">{event.location}</span>
                    </div>
                    {event.speaker && (
                      <div className="flex items-center gap-3 text-gray-300">
                        <GraduationCap className="w-5 h-5 text-purple-400" />
                        <span className="text-base">{event.speaker}</span>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-300 text-base mb-8 flex-1">{event.description}</p>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-base text-gray-400 font-medium">{event.department}</span>
                  <button 
                    onClick={() => openEventDetails(event)}
                    className="bg-[#bec1ee] text-gray-900 px-8 py-3 rounded-xl hover:shadow-xl hover:shadow-[#bec1ee]/50 transition-all duration-300 flex items-center gap-2 group hover:scale-105 font-medium ring-1 ring-white/20 text-base"
                  >
                    <Eye className="w-5 h-5" />
                    View Details
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-10 max-w-md mx-auto border border-gray-700/50 shadow-2xl ring-1 ring-white/10">
              <Calendar className="w-20 h-20 text-cyan-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-200 mb-3">No events found</h3>
              <p className="text-gray-300">Try adjusting your search criteria to find more events.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}