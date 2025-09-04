import React, { useState } from "react";
import { Instagram, Linkedin, Mail } from "lucide-react";
import abhinavgautam from '../assets/EXE-BODY PICS/Abhinavgautam.jpg'
import akansha from '../assets/EXE-BODY PICS/Akansha Chouhan.jpg'
import parvchaturvedi from '../assets/EXE-BODY PICS/Parv Chaturvedi.png'
import virpareek from '../assets/EXE-BODY PICS/Vir Pareek.jpg'
import sauravkumar from '../assets/EXE-BODY PICS/Saurav Kumar.jpeg'
import akt from '../assets/EXE-BODY PICS/AKT.jpeg'
import sh from '../assets/EXE-BODY PICS/SH.jpg'
import ar from '../assets/EXE-BODY PICS/AR.jpeg'
import hr from '../assets/EXE-BODY PICS/hr.webp'
import shubhamraj from '../assets/EXE-BODY PICS/Shubham Raj.jpg'
import shreyas from '../assets/EXE-BODY PICS/Shreyas Snehal.jpg'
import sushant from '../assets/EXE-BODY PICS/Sushantgupta.jpg'
import rahul from '../assets/EXE-BODY PICS/rahulkumar.jpg'
import nidhi from '../assets/EXE-BODY PICS/Nidhi Devi.jpg'
import cs from '../assets/EXE-BODY PICS/ChandraShekhar.jpeg'
import anoushka from '../assets/EXE-BODY-2024/Anoushka.jpg'
import sv from '../assets/EXE-BODY-2024/SV.jpg'
import ss from  '../assets/EXE-BODY-2024/SS.jpeg'
import as from '../assets/EXE-BODY-2024/AS.jpeg'
import shivansh from '../assets/EXE-BODY PICS/Shivansh.jpg'
import gyanu from '../assets/EXE-BODY PICS/gyanu.jpg'
import dhanay from '../assets/EXE-BODY PICS/DhanayPatil.jpg'
const teamData = {
  "2025": [
    {
      name: "Sushant Gupta",
      role: "President",
      image: sushant,
      email: "mailto:sushantgupta@outlook.com",
      instagram: "https://www.instagram.com/sushantgupta.626/",
      linkedin: "https://www.linkedin.com/in/sushant-gupta-0aab48255/"
    },
    {
      name: "Akansha Chouhan",
      role: "Vice President",
      image: akansha,
      email: "mailto:akanshachouhan2004.06@gmail.com",
      instagram: "https://www.instagram.com/ac_huehuehue?igsh=MXY5dTNkbjIwNXg3aw==",
      linkedin: "https://www.linkedin.com/in/akansha-chouhan-a0a7451aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Parv Chaturvedi",
      role: "Vice President",
      image: parvchaturvedi,
      email: "mailto:parvchaturvedi2005@gmail.com",
      instagram: "https://www.instagram.com/parv__chaturvedi/",
      linkedin: "https://www.linkedin.com/in/parvchaturvedi/"
    },
    {
      name: "Aashish Ranjan",
      role: "Director",
      image: ar,
      email: "mailto:",
      instagram: "https://www.instagram.com/aashish.18_/",
      linkedin: "https://www.linkedin.com/in/aashish-ranjan-45280b266/"
    },
    {
      name: "Sougata Halder",
      role: "Director",
      image: sh,
      email: "mailto:halderdk33@gmail.com",
      instagram: "https://instagram.com/sougata_halder12",
      linkedin: "https://www.linkedin.com/in/sougata-halder-b76b94134/"
    },
    {
      name: "Akash Kumar Tiwary",
      role: "Co-Director",
      image: akt,
      email: "mailto:1akashtiwary@gmail.com",
      instagram: "https://www.instagram.com/akashdidwhat",
      linkedin: "https://www.linkedin.com/in/akashkt10172/"
    },
    {
      name: "Hemant Raj",
      role: "Co-Director",
      image: hr,
      email: "mailto:Hemant.raj3536@gmail.com",
      instagram: "https://instagram.com/raj.hemant3536?igsh=MTk4dTg2emg0ejlmbw==",
      linkedin: "https://www.linkedin.com/in/hemantraj3536?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Vir Pareek",
      role: "General Secretary",
      image: virpareek,
      email: "mailto:vir24112004@gmail.com",
      instagram: "https://www.instagram.com/vir.pareek/",
      linkedin: "https://www.linkedin.com/in/vir-pareek-99383127a"
    },
    {
      name: "Saurav",
      role: "Joint Secretary",
      image: sauravkumar,
      email: "mailto:sk4saurav@gmail.com",
      instagram: "https://www.instagram.com/sk4saurav_k/?next=%2F",
      linkedin: "https://www.linkedin.com/in/saurav-kumar-a62b63280/"
    }, 
     {
      name: "Rahul Kumar",
      role: "Joint Secretary",
      image: rahul,
      email: "mailto:Rahuldba8078@gmail.com",
      instagram: "https://www.instagram.com/rahullkumarr.__?igsh=MXN5aXJwZjg2cXQybQ==",
      linkedin: "https://www.linkedin.com/in/rahul-kumar-2297ba2a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }, 
    {
      name: "Shubham Raj",
      role: "Treasurer",
      image: shubhamraj,
      email: "mailto:shubhamraj2613@gmail.com",
      instagram: "https://www.instagram.com/_shubham_raj30/",
      linkedin: "https://www.linkedin.com/in/shubham-raj26/"
    },
     {
      name: "Shivansh Shukla",
      role: "Joint Treasurer",
      image: shivansh,
      email: "mailto:quark.shiv@gmail.com",
      instagram: "https://instagram.com/Ig_shivansh._",
      linkedin: "https://www.linkedin.com/in/shivansh-shukla-26807a356/"
    },  
    {
      name: "Abhinav Gautam",
      role: "Event Head",
      image: abhinavgautam,
      email: "mailto:abhinavgautam12345@gmail.com",
      instagram: "N/A",
      linkedin: "https://www.linkedin.com/in/abhinavgautam2024/"
    },
      {
      name: "Shreyas Snehal",
      role: "Event Coordinator",
      image: shreyas,
      email: "mailto:shreyassnehal6@gmail.com",
      instagram: "https://www.instagram.com/shreyas_19218?igsh=bHBwcWI4c3d6Znk5",
      linkedin: "https://www.linkedin.com/in/shreyas-snehal-3a70bb334"
    }, 

      {
      name: "Nidhi",
      role: "EXECUTIVE MEMBER CUM PRO",
      image: nidhi,
      email: "mailto:nidhidevi425@gmail.com",
      instagram: "N/A",
      linkedin: "https://www.linkedin.com/in/nidhi-devi-a13227314/"
    }, 
      {
      name: "M Chandra Sekhar Naik",
      role: "Technical Coordinator ",
      image: cs,
      email: "mailto:chandra19404@gmail.com",
      instagram: "https://instagram.com/chandraaasekhar",
      linkedin: "https://www.linkedin.com/in/chandra-sekhar-41961a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }, 
     {
      name: "Gyanu",
      role: "Web Lead ",
      image: gyanu,
      email: "mailto:chandra19404@gmail.com",
      instagram: "",
      linkedin: "https://www.linkedin.com/in/gyanu-rajmaniar-3a2a92359/"
    }, 
       {
      name: "Dhanay Patil",
      role: "WebMaster",
      image: dhanay,
      email: "mailto:btech10581.23@bitmesra.ac.in",
      instagram: "https://www.instagram.com/dhanay_patil_/",
      linkedin: "http://www.linkedin.com/in/dhanaypatil"
    }, 

  ],
  "2024": [
 {
  name: "Anoushka Singh",
  role: "President",
  image: anoushka,
  email: "",
  instagram: "https://instagram.com/anoushka_singh18",
  linkedin: ""
},
{
  name: "Sushant Gupta",
  role: "General Secretary",
  image: sushant,
  email: "mailto:sushantgupta@outlook.com",
  instagram: "https://instagram.com/sushantgupta.626",
  linkedin: "https://www.linkedin.com/in/sushant-gupta-0aab48255"
},
{
  name: "Akansha Chouhan",
  role: "Vice President",
  image: akansha,
  email: "mailto:akanshachouhan2004.06@gmail.com",
  instagram: "https://instagram.com/ac_huehuehue",
  linkedin: "https://www.linkedin.com/in/akansha-chouhan-a0a7451aa"
},
{
  name: "Hemant Raj",
  role: "Treasurer",
  image: hr,
  email: "mailto:Hemant.raj3536@gmail.com",
  instagram: "https://instagram.com/raj.hemant3536?igsh=MTk4dTg2emg0ejlmbw==",
  linkedin: "https://www.linkedin.com/in/hemantraj3536?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
},
{
  name: "Sougata Halder",
  role: "Joint Secretary",
  image: sh,
  email: "mailto:halderdk33@gmail.com",
  instagram: "https://instagram.com/sougata_halder12",
  linkedin: "https://www.linkedin.com/in/sougata-halder-b76b94134/"
},

    {
      name: "Shubhi Verma",
      role: "Co-Director",
      image: sv,
      email: "mailto:shubhiv612@gmail.com",
      instagram: "https://www.instagram.com/shubhiiiverma ",
      linkedin: "https://www.linkedin.com/in/shubhi-verma12/"
    },
    {
      name: "Akash Kumar Tiwary",
      role: "Coordinator",
      image: akt,
      email: "mailto:1akashtiwary@gmail.com",
      instagram: "https://www.instagram.com/akashdidwhat",
      linkedin: "https://www.linkedin.com/in/akashkt10172"
    },
    {
      name: "Aditya Srivastava",
      role: "Joint Treasurer",
      image: as,
      email: "mailto:sriaditya16@gmail.com",
      instagram: "https://www.instagram.com/adiedits_1816",
      linkedin: "https://www.linkedin.com/in/aditya-srivastava-12476524a/"
    },
    {
      name: "Satakshi Sinha",
      role: "Design Coordinator",
      image: ss,
      email: "mailto:btech10198.22@bitmesra.ac.in",
      instagram: "https://www.instagram.com/shatakshi2608/",
      linkedin: "https://www.linkedin.com/in/shatakshi-singh-29538a256/"
    },
    {
      name: "Ashish Ranjan",
      role: "Event Coordinator",
      image: ar,
      email: "mailto:",
      instagram: "https://www.instagram.com/aashish.18_/",
      linkedin: "https://www.linkedin.com/in/aashish-ranjan-45280b266/"
    }
  ]
};

const Team = () => {
    const years = Object.keys(teamData).sort((a, b) => b - a);
    const [selectedYear, setSelectedYear] = useState(years[0]);
  
    return (
    <div id="team" className="relative w-full min-h-screen  p-8 overflow-hidden bg-black">
      {/* Optional dark overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r bg-white">
          <span className="border-b-2  pb-2 inline-block text-sans">
            Executive Team
          </span>
        </h1>
        <div className="flex items-center mb-12">
          <select
            className="px-4 py-2 text-gray-400 rounded border border-b-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamData[selectedYear].map((member) => (
            <div
              key={member.name}
              className={`
                group relative
                rounded-2xl
                bg-gradient-to-br from-[#010b3a] via-[#235490] to-[#bbbdda]
                border border-[#3f3554] hover:border-[#a941d2]
                shadow-lg bg-transparent
                flex flex-col items-center
                p-8
                transition-all duration-300
                hover:shadow-[#a941d2]/30 hover:shadow-2xl hover:-translate-y-2
              `}
            >
              <div className="relative mb-4">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-[#a941d2] via-transparent to-[#f97316] blur-lg opacity-40 group-hover:opacity-80 transition" />
                <img
      src={member.image}
      alt={member.name}
      className="
        w-28 h-28 object-cover rounded-full
        border-4 border-yellow-500
        relative z-10 shadow-lg
        transition-transform duration-300 group-hover:scale-105
      "
    />
              </div>
              <h2 className="text-lg md:text-xl font-bold  mb-1 text-center group-hover:text-[#f97316] transition">
                {member.name}
              </h2>
              <p className="text-gray-300 font-serif mb-4 mt-1 text-center">
                {member.role.toUpperCase()}
              </p>
              <div className="flex space-x-4 mt-auto pt-3">
                <a
                  href={member.email}
                  className="group relative rounded-full p-2  hover:bg-[#a941d2] transition"
                  title="Email"
                >
                  <Mail className="w-6 h-6 text-blue-300 group-hover:text-white" />
                </a>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="group relative rounded-full p-2  hover:bg-pink-500 transition"
                >
                  <Instagram className="w-6 h-6 text-pink-300 group-hover:text-white" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="group relative rounded-full p-2 hover:bg-blue-600 transition"
                >
                  <Linkedin className="w-6 h-6 text-blue-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;