import React, { useState } from 'react';

// Data for the FAQ items
const faqData = [
  {
    question: "What is Mera Monitor?",
    answer: "Mera Monitor is an employee monitoring software that tracks employee activity and boosts productivity."
  },
  {
    question: "How does it help businesses?",
    answer: "Our employee monitoring software provides real-time insights, time tracking, and productivity analysis to optimize workflow."
  },
  {
    question: "Can I try Mera Monitor before committing?",
    answer: "Yes! We offer a 15-day FREE trial with no credit card required. Test out all our features and see the results for yourself."
  },
  {
    question: "Is employee monitoring ethical?",
    answer: "Yes, Mera Monitor allows businesses to monitor employee computer activity while respecting privacy through customizable settings."
  },
  {
    question: "What features does it offer?",
    answer: "It includes employee screen monitoring, real-time tracking, activity reports, time management, and security alerts."
  },
  {
    question: "How do I get started?",
    answer: "Sign up for a free trial or book a demo to see how Mera Monitor can improve your business."
  }
];

export default function FAQSection() {
  // State to manage which FAQ item is currently open.
  // Stores the index of the open item, or null if none are open.
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/close state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  {item.question}
                </h3>
                {/* Plus/Minus icon for accordion functionality */}
                <svg
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={openIndex === index ? "M20 12H4" : "M12 4v16m8-8H4"}
                  ></path>
                </svg>
              </div>
              {/* Answer content, conditionally rendered with a smooth transition */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}