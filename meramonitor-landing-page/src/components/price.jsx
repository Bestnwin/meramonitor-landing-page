import React from 'react';

// Array to store the features for easy mapping
const features = [
  "Apps & Website Usage Tracking",
  "Watch Live Employee Screen",
  "Record Employee Screen",
  "Automatic Screenshots",
  "Blur screenshots for privacy",
  "Keystrokes Tracking",
  "Mouse Click Tracking",
  "Idle Time Tracking",
  "Productive Time Tracking",
  "Employee Behavior Analysis",
  "Actionable AI Reports",
  "Intuitive Dashboards",
  "Identify Productivity Loopholes",
  "Projects & Tasks Management",
  "Integration with any tool",
  "Stealth Mode",
  "Private Mode",
  "Custom Alerts & Notifications",
  "Compliance & Data Security",
  "Cloud & Private Servers",
  "Single Sign-on"
];

export default function PricingFeaturesSection() {
  return (
    // Main section background - kept bg-gray-50 as per previous exact copy
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Top Heading Section */}
      <div className="text-center mb-12">
        {/* Main title: Reduced font size (from 5xl to 4xl), semantically keeping as h2 */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          The <span className="text-[#6B47ED]">Most Economical</span> Employee Monitoring Software
        </h2>
        {/* Subtitle: Reduced font size (from lg to base) */}
        <p className="text-base text-gray-700 max-w-2xl mx-auto">
          Mera Monitor is Unarguably The Most Economical Employee Computer Monitoring Tool.
        </p>
      </div>

      {/* Main Content Area: Pricing and Features Layout */}
      {/* Changed lg:items-start to lg:items-center to vertically center the columns on large screens */}
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 max-w-6xl mx-auto">

        {/* Left Section: Pricing Display */}
        <div className="flex flex-col items-center justify-center lg:w-1/2 p-8 lg:pr-12">
          {/* Strikethrough old price: Reduced font size (from 3xl to 2xl) */}
          <p className="text-gray-500 line-through text-2xl mb-2">₹399/m</p>
          {/* New flat price: Significantly reduced font size (from 8xl to 6xl) */}
          <p className="text-[#6B47ED] text-5xl md:text-6xl font-bold mb-4">Flat ₹99/m</p>
          {/* "No credit card required" text: kept as base, which is appropriate for p tag */}
          <p className="text-gray-600 text-base">No credit card required.</p>
        </div>

        {/* Right Section: Features List Card and Call to Action Button */}
        {/* Card styling: Reduced max-w from lg to md to make the box smaller */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:w-1/2 w-full max-w-md"> {/* max-w-md makes the box smaller */}
          {/* Features Heading: Kept as h3 and its size, which seems appropriate */}
          <h3 className="text-[#6B47ED] text-2xl font-semibold mb-6">
            Advanced Features for Effective <br /> Employee Monitoring
          </h3>
          {/* List of features */}
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 text-sm">
                {/* Checkmark SVG icon */}
                <svg className="w-5 h-5 text-[#6B47ED] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          {/* Call to action button */}
          <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition shadow-md">
            Start 30 days Trial
          </button>
        </div>
      </div>
    </section>
  );
}