"use client";
import React, { useState } from 'react';

const VideoContentSection = ({ videoUrl, title }) => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    // You can add your form submission logic here (e.g., API call)
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg shadow-lg my-8">
      {/* Left Section: Video */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <iframe
          src={videoUrl}
          title="Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-80 rounded-lg"
        ></iframe>
      </div>

      {/* Right Section: Contact Form */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded focus:outline-none focus:border-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoContentSection;
