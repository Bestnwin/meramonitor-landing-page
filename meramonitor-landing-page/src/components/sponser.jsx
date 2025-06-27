import React from 'react';
// import trigon from '../assets/sponsors/trigon.png';
// import harrington from '../assets/sponsors/harrington.png';
// import dxtech from '../assets/sponsors/dxtech.png';
// import oncredit from '../assets/sponsors/oncredit.png';
// import sigma from '../assets/sponsors/sigma.png';
// import tecktech from '../assets/sponsors/tecktech.png';
// import integration from '../assets/sponsors/integration.png';
// import lindsey from '../assets/sponsors/lindsey.png';
// import ideametrics from '../assets/sponsors/ideametrics.png';

export const sponsors = [
  null, null, null, null, null, null, null, null, null
];

export default function SponsorList() {
  return (
    <section className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {sponsors.map((logo, index) => (
            logo ? (
              <img
                key={index}
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="h-12 mx-auto object-contain"
              />
            ) : (
              <div
                key={index}
                className="h-12 mx-auto w-full bg-gray-100 border border-gray-300 rounded"
              />
            )
          ))}
        </div>

        <p className="text-center italic mt-8 text-lg">
          "If you're serious about boosting productivity, Mera Monitor is the tool you need!"<br />
          <span className="font-semibold">- Abhishek Sharma – Founder, One Six One</span>
        </p>

        <div className="flex justify-center mt-4 text-yellow-400 text-2xl">
          {'⭐'.repeat(5)}
        </div>
      </div>
    </section>
  );
} 
