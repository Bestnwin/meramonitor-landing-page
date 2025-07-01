import React, { useState } from 'react';

// Data for each feature slide
// The imageSrc paths are still present, but they won't be used for rendering directly
// when the placeholder div is active.
const featureSlidesData = [
  {
    id: 1,
    heading: "Watch, Capture & Record Live Employee Screen",
    description: "Take automated screenshots, record employee screen & watch live screen to get proof of work. Don't assume, monitor with confidence.",
    buttonText: "Monitor Screen—Start Free",
    imageSrc: "/image_0d3300.jpg",
    imageAlt: "Live Employee Screen Monitoring Screenshot", // Descriptive alt text for placeholder
    imagePosition: "right", // Image on the right, text on the left
  },
  {
    id: 2,
    heading: "Keystrokes & Mouse Clicks Tracking & Reports",
    description: "Track keystrokes and mouse clicks to know when your employees are working & when they are idle. Gain valuable insights and take fruitful actions.",
    buttonText: "Track Now—Start Free",
    imageSrc: "/image_0d2fa1.png",
    imageAlt: "Keyboard & Mouse Activity Tracking Chart", // Descriptive alt text for placeholder
    imagePosition: "left", // Image on the left, text on the right
  },
  {
    id: 3,
    heading: "Track Apps & URLs Visited",
    description: "Track employee activity effortlessly with real-time apps and websites usage data. Enable time based attendance. Get 100% transparency.",
    buttonText: "Track Now—Start Free",
    imageSrc: "/image_0d2bda.png",
    imageAlt: "App & URL Usage Tracking Dashboard", // Descriptive alt text for placeholder
    imagePosition: "left", // Image on the left, text on the right
  },
];

export default function FeatureSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSlide = featureSlidesData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featureSlidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + featureSlidesData.length) % featureSlidesData.length
    );
  };

  const contentOrderClass = currentSlide.imagePosition === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-lg p-6 md:p-12">
        <div className={`flex flex-col items-center justify-between gap-8 md:gap-12 ${contentOrderClass}`}>

          {/* Text Content Column */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#6B47ED]">
              {currentSlide.heading}
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              {currentSlide.description}
            </p>
            <button className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition shadow-md">
              {currentSlide.buttonText}
            </button>
          </div>

          {/* Image Placeholder Column */}
          <div className="lg:w-1/2 flex justify-center">
            {/* Placeholder Div: This will display when you don't have the actual images yet. */}
            <div 
              className="w-full h-64 md:h-80 lg:h-96 bg-gray-200 text-gray-600 flex items-center justify-center text-center p-4 rounded-lg shadow-md"
              style={{ fontSize: '1.2rem', lineHeight: '1.5' }} // Inline style for readability
            >
              {currentSlide.imageAlt || "Image Placeholder"}
              <br/>
              (Image will appear here)
            </div>
            
            {/* Uncomment the <img> tag below and remove the <div> above when you have your images */}
            {/* <img 
              src={currentSlide.imageSrc} 
              alt={currentSlide.imageAlt} 
              className="w-full h-64 md:h-80 lg:h-96 object-contain rounded-lg shadow-md"
            /> */}
          </div>
        </div>

        {/* Navigation Buttons for the slider */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prevSlide}
            className="px-6 py-2 bg-[#6B47ED] text-white rounded-lg hover:bg-opacity-80 transition"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-6 py-2 bg-[#6B47ED] text-white rounded-lg hover:bg-opacity-80 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}