import React from 'react';
import './About.css';

function IETESection() {
  return (
    <div className="Post">
      <div id="About" className="relative">
        {/* Image and About Us */}
        <div className="z-40 flex flex-col gap-[40px] pl-[550px] pt-[10px] w-10/12">
          <img src="/newImage/Screenshot (273).png" alt="IETE Logo" height="50px" width="100px" />
          <div className="font-myFont font-bold text-[40px] text-white rounded-[100%]">ABOUT US</div>
        </div>

        {/* Content */}
        <div className="flex gap-[40px] justify-between">
          <div className="max-w-[500px] mt-[20px] group">
            <p
              id="Animate"
              className="text-white pl-[30px] font-myFont opacity-70 group-hover:scale-105 transition-all duration-700 group-hover:underline"
            >
              The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognised professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT...
            </p>
          </div>

          <div id="Animate2">
            <img
              src="/newImage/WhatsApp Image 2025-03-21 at 22.10.00_e6ad8ef7.jpg"
              alt="Members"
              height="336px"
              width="485px"
            />
          </div>
        </div>

        <div className="flex group relative">
          <div id="image2">
            <img className="mt-[100px]" src="/newImage/Screenshot (274).png" alt="Vision" height="500px" width="500px" />
          </div>
          <div className="pl-[50px]">
            <h1 className="text-white font-myFont font-bold text-[40px]">VISION</h1>
            <p className="max-w-[300px] text-white font-myFont font-bold leading-[1.2] opacity-70">
              Reaching the unreached and empowering the youth through technical education and skill development
            </p>
          </div>
        </div>

        <div className="pl-[550px] hover:scale-110 transition-all duration-700">
          <h1 className="text-white font-myFont font-bold text-[40px]">MISSION</h1>
          <p className="max-w-[300px] text-white font-myFont font-bold leading-[1.2] opacity-70">
            Advancement of Electronics, Telecommunication, Information Technology & other related disciplines to contribute in Nation’s Human Resource & Infrastructure Development through our Engineers.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="flex flex-col items-center py-8 text-white">
        <h1 className="font-myFont font-bold text-[40px] mb-8">WHAT WE DO</h1>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-[40px] px-4 font-myFont font-bold">
          {[
            'Conducts several Hackathons',
            'Organize Workshops on topics like DSA, Web development, Machine learning and many more',
            'Conducts various events',
            'Arranges speaker sessions'
          ].map((item, index) => (
            <div
              key={index}
              className="max-w-[200px] border border-white/40 rounded-lg transition-transform duration-300 hover:scale-105 p-4"
            >
              <li>{item}</li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default IETESection;
