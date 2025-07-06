import React from 'react';

export default function SignupBanner() {
  return (
    <section className="bg-[#f9f7fc] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#8b2fff] to-[#1e70ff] rounded-[2rem] shadow-xl px-6 py-12 md:px-12 md:py-16 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Text Section */}
          <div className="text-white lg:max-w-[50%]">
            <h3 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Teams using Mera Monitor witnessed <br />
              <span className="text-yellow-400">50% faster growth!</span>
            </h3>
            <p className="text-base md:text-lg">
              Sign-up For Mera Monitor Now and Get 15 Days Subscription Absolutely Free Of Cost. No Conditions Applied!
            </p>
          </div>

          {/* Right Form Section - No container box around the form */}
          {/* I've removed the <div> with bg-white, rounded-2xl, etc. */}
          <div className="w-full max-w-sm text-center"> {/* Added text-center for the "Instant Signup" and adjusted positioning */}
            <p className="text-white font-semibold mb-4 text-lg"> {/* Changed text color to white for visibility on gradient */}
              ⚡ Instant Signup ⚡
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Full Name"
                // Adjusted background and border for visibility on gradient
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500"
              />
              <input
                type="email"
                placeholder="Work Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-white bg-opacity-90 text-gray-800 placeholder-gray-500"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}