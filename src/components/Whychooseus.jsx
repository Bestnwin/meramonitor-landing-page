import React from 'react';

const industryData = [
  {
    title: "Legal Team",
    imageSrc: "/images/1.png",
    imageAlt: "A legal team collaborating around a desk."
  },
  {
    title: "Software Development",
    imageSrc: "/images/2.png",
    imageAlt: "Software developers working together on laptops."
  },
  {
    title: "E-commerce",
    imageSrc: "/images/3.png",
    imageAlt: "People discussing e-commerce strategies."
  },
  {
    title: "Real Estate",
    imageSrc: "/images/4.png",
    imageAlt: "Real estate agents showing a property to clients."
  },
  {
    title: "Consulting",
    imageSrc: "/images/5.png",
    imageAlt: "Consultants reviewing documents and discussing."
  },
  {
    title: "Marketing Agency",
    imageSrc: "/images/6.png",
    imageAlt: "Marketing professionals brainstorming ideas."
  },
  {
    title: "Financial Tech",
    imageSrc: "/images/FinancialTech.png",
    imageAlt: "Finance professionals analyzing data on multiple screens."
  },
  {
    title: "Health-Tech",
    imageSrc: "/images/HealthTech.png",
    imageAlt: "Medical professionals working with technology."
  },
];

export default function IndustryAdaptabilitySection() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Employee Monitoring Software That Adapts To Any Industry
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Seamlessly manage your global team from one powerful employee monitoring software.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-75"
            >
              <img
                src={item.imageSrc}
                alt={item.imageAlt}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-base font-semibold">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
