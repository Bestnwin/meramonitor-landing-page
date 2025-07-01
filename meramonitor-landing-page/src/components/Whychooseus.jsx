import React from 'react';

// Data for each industry card
const industryData = [
  {
    title: "Legal Team",
    imageSrc: "/placeholder_legal_team.jpg", // Replace with actual image path later
    imageAlt: "A legal team collaborating around a desk."
  },
  {
    title: "Software Development",
    imageSrc: "/placeholder_software_dev.jpg", // Replace with actual image path later
    imageAlt: "Software developers working together on laptops."
  },
  {
    title: "E-commerce",
    imageSrc: "/placeholder_ecommerce.jpg", // Replace with actual image path later
    imageAlt: "People discussing e-commerce strategies."
  },
  {
    title: "Real Estate",
    imageSrc: "/placeholder_real_estate.jpg", // Replace with actual image path later
    imageAlt: "Real estate agents showing a property to clients."
  },
  {
    title: "Consulting",
    imageSrc: "/placeholder_consulting.jpg", // Replace with actual image path later
    imageAlt: "Consultants reviewing documents and discussing."
  },
  {
    title: "Marketing Agency",
    imageSrc: "/placeholder_marketing_agency.jpg", // Replace with actual image path later
    imageAlt: "Marketing professionals brainstorming ideas."
  },
  {
    title: "Financial Tech",
    imageSrc: "/placeholder_financial_tech.jpg", // Replace with actual image path later
    imageAlt: "Finance professionals analyzing data on multiple screens."
  },
  {
    title: "Health-Tech",
    imageSrc: "/placeholder_health_tech.jpg", // Replace with actual image path later
    imageAlt: "Medical professionals working with technology."
  },
];

export default function IndustryAdaptabilitySection() {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Employee Monitoring Software That Adapts To Any Industry
        </h2>
        {/* Subtitle/Description */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Seamlessly manage your global team from one powerful employee monitoring software.
        </p>

        {/* Grid of Industry Cards */}
        {/* Grid layout: 1 col on small, 2 col on medium, 4 col on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-64" // Fixed height for consistent card size
            >
              {/* Image Placeholder */}
              {/* This div acts as a placeholder for your images.
                  When you have the images, replace this div with an <img> tag:
                  <img src={item.imageSrc} alt={item.imageAlt} className="w-full h-full object-cover" />
              */}
              <div
                className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600 text-center font-semibold text-sm"
                style={{ backgroundImage: `url(${item.imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Fallback for when image is not loaded, shows the alt text within the div */}
                {!item.imageSrc && <span>{item.imageAlt}</span>}
                {/* You can remove the span above when you have real images */}
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent text-white text-lg font-semibold text-left">
                 {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}