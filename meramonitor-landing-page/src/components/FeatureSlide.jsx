import React, { useState, useEffect } from 'react';

const featureSlidesData = [
  {
    id: 1,
    heading: "Watch, Capture & Record Live Employee Screen",
    description: "Take automated screenshots, record employee screen & watch live screen to get proof of work. Don't assume, monitor with confidence.",
    buttonText: "Monitor Screen—Start Free",
    imageAlt: "Live Employee Screen Monitoring Screenshot",
  },
  {
    id: 2,
    heading: "Keystrokes & Mouse Clicks Tracking & Reports",
    description: "Track keystrokes and mouse clicks to know when your employees are working & when they are idle. Gain valuable insights and take fruitful actions.",
    buttonText: "Track Now—Start Free",
    imageAlt: "Keyboard & Mouse Activity Tracking Chart",
  },
  {
    id: 3,
    heading: "Track Apps & URLs Visited",
    description: "Track employee activity effortlessly with real-time apps and websites usage data. Enable time based attendance. Get 100% transparency.",
    buttonText: "Track Now—Start Free",
    imageAlt: "App & URL Usage Tracking Dashboard",
  },
];

export default function FeatureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % featureSlidesData.length);
        setFade(true); // fade back in
      }, 400); // fade duration
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = featureSlidesData[currentIndex];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12
        transition-all duration-700 ease-in-out transform ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}
      >
        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#6B47ED]">
            {currentSlide.heading}
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-8">
            {currentSlide.description}
          </p>
          <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition shadow-md">
            {currentSlide.buttonText}
          </button>
        </div>

        {/* Image placeholder */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-600 shadow-inner text-center p-4">
            {currentSlide.imageAlt}
            <br />
            (Image will appear here)
          </div>
        </div>
      </div>
    </section>
  );
}
