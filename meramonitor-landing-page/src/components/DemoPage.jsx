import React from 'react';

export default function DemoPage() {
  const heading = {
    titleHighlight: "Watch Live Demo",
    titleRest: "Employee Monitoring Software"
  };

  const stats = [
    {
      title: "96% More Productivity",
      description: "Boost your Team's productivity by upto 96% with Advanced Employee Monitoring Software."
    },
    {
      title: "40% More Profitability",
      description: "Streamline Employee Monitoring and increase profits by upto 40%. Get the highest ROI."
    },
    {
      title: "100% Transparency",
      description: "Get 100% Transparency with Accurate Employee Computer Tracking & actionable reports."
    }
  ];

  return (
    <section className="bg-[#f9f7fc] py-12">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-4xl font-semibold">
          <span className="text-[#6B47ED] font-bold">{heading.titleHighlight}</span> - <span className="text-black">{heading.titleRest}</span>
        </h2>

        <div
          onClick={() => console.log('Video play clicked')} // You can replace this later
          className="relative mt-10 cursor-pointer group"
        >
          <img
            src="/assets/demo-thumbnail.png" // Replace with your actual thumbnail
            alt="Live Demo"
            className="mx-auto max-w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-red-600 text-white p-4 rounded-full shadow-md transition-transform duration-300 group-hover:scale-110">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-[#6B47ED] mb-2">{item.title}</h3>
              <p className="text-black text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
