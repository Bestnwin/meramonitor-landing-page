import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      text: "Mera Monitor’s powerful employee monitoring software turned my team into a productivity powerhouse—effortless tracking, real results.",
      name: "Salil Mathur",
      title: "Former CEO, Human Capital",
      image: "images/sahil.png",
    },
    {
      stars: 5,
      text: "Tracking 100% employee activities, apps & URLs visited, and overall performance from a single AI-powered dashboard has never been easier with Mera Monitor.",
      name: "Ashish Vyas",
      title: "CEO, 4Tunes Technologies Pvt Ltd",
      image: "images/Ashish.png",
    },
    {
      stars: 5,
      text: "With actionable reports, real-time screen monitoring, and the most economical employee monitoring software, Mera Monitor delivers unmatched features and UX that save hours daily.",
      name: "Aasif Ansari",
      title: "Lead Consultant, IT Infra",
      image: "images/aasif.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Avatars */}
        <div className="flex justify-center space-x-2 mb-4">
          <img
            src="images/people.png"
            alt="people"
            className="w-40 h-10"
          />
        </div>

        {/* Top stars and subtitle */}
        <p className="text-yellow-400 text-xl mb-2">★★★★★</p>
        <p className="text-gray-600 mb-8">Loved by Business Leaders</p>

        {/* Headings */}
        <h2 className="text-3xl font-bold mb-2">
          See Why Mera Monitor Is the{" "}
          <span className="text-indigo-600">#1 Choice for</span>
        </h2>
        <h3 className="text-3xl font-bold text-indigo-700 mb-12">
          Employee Monitoring Software
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md flex flex-col items-start text-left"
            >
              {/* Quote Dots Floating Above */}
              <img
                src="images/dots.png"
                alt="quote"
                className="w-16 h-16 absolute -top-8 left-6"
              />

              {/* Stars */}
              <p className="text-yellow-400 text-2xl mb-4">
                {"★".repeat(t.stars)}
              </p>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed">{t.text}</p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-black">{t.name}</p>
                  <p className="text-sm text-gray-600">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
