import React from 'react';

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

export default function PricingFeaturesSection({ onOpenFormModal }) {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          The <span className="text-[#6B47ED]">Most Economical</span> Employee Monitoring Software
        </h2>
        <p className="text-base text-gray-700 max-w-2xl mx-auto">
          Mera Monitor is Unarguably The Most Economical Employee Computer Monitoring Tool.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 max-w-6xl mx-auto">

        {/* Pricing */}
        <div className="flex flex-col items-center justify-center lg:w-1/2 p-8 lg:pr-12">
          <p className="text-gray-500 line-through text-2xl mb-2">₹399/m</p>
          <p className="text-[#6B47ED] text-5xl md:text-6xl font-bold mb-4">Flat ₹99/m</p>
          <p className="text-gray-600 text-base">No credit card required.</p>
        </div>

        {/* Features + Button */}
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:w-1/2 w-full max-w-md">
          <h3 className="text-[#6B47ED] text-2xl font-semibold mb-6">
            Advanced Features for Effective <br /> Employee Monitoring
          </h3>
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 text-sm">
                <svg className="w-5 h-5 text-[#6B47ED] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* ✅ Added onClick */}
          <button
            onClick={onOpenFormModal}
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition shadow-md"
          >
            Start 30 days Trial
          </button>
        </div>
      </div>
    </section>
  );
}
