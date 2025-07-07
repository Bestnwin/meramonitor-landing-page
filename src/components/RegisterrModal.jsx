// src/FormModal.js
import React, { useState, useEffect } from 'react';

// Adjust the path if needed
import meraMonitorLogo from '/images/MeraMonitor.png';

function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phoneNumber: '',
    businessName: '',
  });

  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for signing up for the free trial!');
    setFormData({
      fullName: '',
      workEmail: '',
      phoneNumber: '',
      businessName: '',
    });
    onClose();
  };

  if (!isOpen && !animateIn) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Transparent Dark Layer */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${animateIn ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose} // Click outside to close
      ></div>

      {/* Modal Content */}
      <div className={`
        relative z-10
        bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500
        p-8 rounded-xl shadow-2xl w-11/12 max-w-md
        transform transition-all duration-300 ease-out
        ${animateIn ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}
        overflow-y-auto max-h-[90vh]
      `}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 focus:outline-none"
        >
          &times;
        </button>

        {/* Form Header */}
        <div className="text-center mb-6">
          <img
            src={meraMonitorLogo}
            alt="MeraMonitor Logo"
            className="h-16 w-auto mx-auto mb-4"
          />
          <h2 className="text-white text-3xl font-bold mb-2">30 Days Free Trial</h2>
          <p className="text-purple-200 text-sm mb-3">Please Fill In Your Details To Continue – Limited Time Offer!</p>
          <p className="text-yellow-400 text-lg font-semibold animate-pulse">✨ Instant Signup ✨</p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200"
            />
          </div>
          <div>
            <input
              type="email"
              name="workEmail"
              placeholder="Work Email"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200"
            />
          </div>
          <div>
            <input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 border border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-200"
            />
          </div>
          <button
            type="submit"
            className="
              w-full p-3 rounded-lg text-lg font-semibold
              bg-yellow-500 text-purple-900
              hover:bg-yellow-400 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-purple-800
            "
          >
            Start Free Trial
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormModal;
