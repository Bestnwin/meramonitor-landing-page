import React from 'react';

export default function Landing() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Employee Monitoring Software <br />
            built for Exponential Growth
          </h1>
          <p className="text-yellow-300 font-semibold uppercase">Track. Analyze. Grow.</p>
          <ul className="space-y-2 text-lg">
            <li>
              ✅ Track 100% employee activities & get reports
            </li>
            <li>
              ✅ Say Goodbye to fake keystrokes & clicks
            </li>
            <li>
              ✅ Watch & Record Live Employee Screen
            </li>
            <li>
              ✅ Automated Screenshots every minute
            </li>
            <li>
              ✅ Actionable AI Reports & Dashboards
            </li>
            <li>
              ✅ <span className="line-through">₹399/m</span> ₹99/m only (<span className="text-green-400">75% off—limited time</span>)
            </li>
          </ul>

          {/* Ratings */}
          <div className="flex gap-4 pt-4">
            {['Google Reviews', 'Product Hunt', 'Software Suggest'].map((platform) => (
              <div
                key={platform}
                className="bg-indigo-700 rounded-lg px-4 py-2 text-center"
              >
                <p className="font-semibold">{platform}</p>
                <p>
                  {'⭐'.repeat(5)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form Section */}
        <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-full max-w-md mx-auto">
          <h2 className="text-xl font-bold text-center mb-2 text-blue-800">
            Start 15 Days Free Trial Now!
          </h2>
          <p className="text-sm text-center mb-6 text-gray-600">
            Get started in just 3 clicks
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Business Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md"
            >
              Start Free Trial
            </button>
            <p className="text-center text-sm text-gray-500">No Credit Card Required</p>
          </form>
        </div>
      </div>
    </section>
  );
}
