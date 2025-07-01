import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-8 lg:px-16 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Top line with Terms, Privacy Policy, and Disclaimer links */}
        <p className="mb-4 text-sm md:text-base">
          <a href="/terms-of-service" className="underline hover:text-white transition-colors duration-200">
            Term of Services
          </a>
          <span className="mx-2"> & </span> {/* Spacing between links */}
          <a href="/privacy-policy" className="underline hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <span className="mx-2"> & </span> {/* Spacing between links */}
          <a href="/disclaimer" className="underline hover:text-white transition-colors duration-200">
            Disclaimer
          </a>
        </p>

        {/* Copyright information */}
        <p className="text-xs md:text-sm">
          &copy; Copyright 2004-20 Mera Monitor. All rights reserved.
        </p>
      </div>
    </footer>
  );
}