import React from "react";

import tecktech from "/images/8.png";
import integration from "/images/10.png";
import lindsey from "/images/11.png";
import ideametrics from "/images/12.png";

const sponsors = [
  tecktech,
  integration,
  lindsey,
  ideametrics,
];

export default function SponsorList() {
  return (
    <section className="bg-white text-black py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* AUTO-SCROLL CONTAINER */}
        <div className="relative w-full overflow-hidden -mt-10">
          <div className="flex w-max animate-scroll whitespace-nowrap">
            {[...sponsors, ...sponsors].map((logo, index) => (
              <div key={index} className="inline-block px-10">
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="h-26 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* QUOTE */}
        <p className="text-center italic mt-10 text-lg max-w-3xl mx-auto">
          "If you're serious about boosting productivity, Mera Monitor is the tool you need!"
          <br />
          <span className="font-semibold">- Abhishek Sharma – Founder, One Six One</span>
        </p>

        {/* STARS */}
        <div className="flex justify-center mt-4 text-yellow-400 text-3xl">
          {"⭐".repeat(5)}
        </div>
      </div>

      {/* SCROLL ANIMATION STYLE */}
      <style jsx>{`
        .animate-scroll {
          display: inline-flex;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
