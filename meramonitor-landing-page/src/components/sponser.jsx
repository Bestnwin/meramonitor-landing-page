import React from 'react';

// Assuming these paths are correct for your project
// import trigon from '/images/trigon.png';
// import harrington from '/images/harrington.png';
// import dxtech from '/images/dxtech.png';
// import oncredit from '/images/oncredit.png';
// import sigma from '/images/f6ae5a_7de154f1056e49feb9b13507f2829a5c~mv2.png';
import tecktech from '/images/8.png';
import integration from '/images/10.png';
import lindsey from '/images/11.png';
import ideametrics from '/images/12.png';

// ✅ Put them into the array directly
export const sponsors = [

  tecktech,
  integration,
  lindsey,
  ideametrics,
];

export default function SponsorList() {
  return (
    <section className="bg-white text-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid of sponsor logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
          {sponsors.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Sponsor ${index + 1}`}
              // Changed h-16 to h-12 for a slightly smaller, more consistent look
              className="h-12 mx-auto object-contain"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-center italic mt-10 text-lg max-w-3xl mx-auto">
          "If you're serious about boosting productivity, Mera Monitor is the tool you need!"<br />
          <span className="font-semibold">- Abhishek Sharma – Founder, One Six One</span>
        </p>

        {/* Stars */}
        <div className="flex justify-center mt-4 text-yellow-400 text-2xl">
          {'⭐'.repeat(5)}
        </div>
      </div>
    </section>
  );
}