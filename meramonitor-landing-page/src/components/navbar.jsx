import React from 'react';

// Ensure these paths correctly point to your images
// If your images are in 'public/images/', these paths are correct.
import meraMonitorLogo from '/images/MeraMonitor.png';
import amazonGiftCardLogo from '/images/amazon.png'; // Make sure the file name is 'amazon.png'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Changed h-8 w-8 to h-10 w-auto for potentially better scaling
              and to match the visual size in your reference image */}
          <img src={meraMonitorLogo} alt="Mera Monitor Logo" className="h-10 w-auto" />
          
        </div>

        {/* Call to Action Button with Gift Card */}
        <div className="flex items-center gap-2">
          {/* Increased h-7 to h-8 for amazon logo visibility and better proportion */}
          <img
            src={amazonGiftCardLogo}
            alt="Amazon Gift Card"
            className="h-8 w-auto object-contain" // Added object-contain for better fitting
          />
          <button
            className="
              px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap
              bg-gradient-to-r from-purple-700 to-blue-600 text-white
              hover:from-purple-800 hover:to-blue-700 transition duration-300
            "
          >
            Sign up & Get Amazon Gift Card of rs.99 Free
          </button>
        </div>
      </div>
    </nav>
  );
}