import React, { useState, useEffect } from 'react';

export default function HomePage() {
  // State to track loading of the Spline scene
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  
  // Clear any cached version on component mount
  useEffect(() => {
    // Force reload of any cached resources
    const timestamp = new Date().getTime();
    const iframeEl = document.querySelector('iframe');
    if (iframeEl) {
      iframeEl.src = `https://my.spline.design/boxeshover-ev1uKPCZ6mXpRnteiJT32KCt/?t=${timestamp}`;
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex flex-col overflow-hidden">
      {/* Spline Background Container */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={`https://my.spline.design/boxeshover-ev1uKPCZ6mXpRnteiJT32KCt/?refresh=${new Date().getTime()}`}
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full pointer-events-auto"
          title="IETE Spline Background"
          loading="eager"
          allow="pointer-lock; camera; microphone; autoplay"
          onLoad={() => setIsSplineLoaded(true)}
        ></iframe>
        
        {/* Loading overlay that disappears when Spline is loaded */}
        {!isSplineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}
      </div>

      {/* Content Layout - Allow pointer events to pass through */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 lg:p-16 pointer-events-none">
        {/* Main Content Area */}
        <div className="flex-1 flex items-end">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            {/* Left Side - Logo and Main Title */}
            <div className="pointer-events-none self-end">
              {/* IETE Logo */}
              <div className="mb-6">
                <img 
                  src="public/logo.png" 
                  alt="IETE Logo" 
                  className="h-42 md:h-56 lg:h-64 w-auto"
                />
              </div>
              
              {/* Main Title */}
              <h1 className="text-white font-bold leading-none">
                <div className="text-5xl lg:text-6xl xl:text-7xl mb-2">IETE</div>
                <div className="text-3xl lg:text-4xl xl:text-5xl">STUDENT'S CHAPTER</div>
              </h1>
              <div className="mt-6">
                <p className="text-white text-xl lg:text-2xl font-medium">BIT MESRA</p>
              </div>
            </div>

            {/* Right Side - Description and Buttons */}
            <div className="flex flex-col items-end justify-end pointer-events-auto self-end">
              <div className="text-right mb-8 max-w-md">
                <p className="text-white text-lg lg:text-xl leading-relaxed pointer-events-none">
                  Institution of Electronics and Telecommunication Engineers
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-4 w-full md:w-auto md:min-w-[240px]">
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 w-full">
                  About Us
                </button>
                <button className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition-all duration-300 flex items-center justify-center gap-2 w-full">
                  Learn more
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}