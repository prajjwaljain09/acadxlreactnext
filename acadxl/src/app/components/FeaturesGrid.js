import React from 'react';
import { FiVideo, FiBook, FiBarChart, FiLayers } from 'react-icons/fi';

const features = [
  {
    icon: <FiBook className="text-orange-500 w-8 h-8" />,
    title: 'Systematic Planner',
    description: 'Crafting success through Strategic, Step-by-Step Planning for every Goal.',
  },
  {
    icon: <FiVideo className="text-purple-500 w-8 h-8" />,
    title: 'Video Solution',
    description: 'We provide Video Solutions of All the Content.',
  },
  {
    icon: <FiBarChart className="text-blue-500 w-8 h-8" />,
    title: 'We Do Analysis',
    description: 'Offering precise analysis to boost exam readiness and sharpen Problem-Solving skills.',
  },
  {
    icon: <FiLayers className="text-pink-500 w-8 h-8" />,
    title: 'Online Courses',
    description: 'Engaging video lessons, real-world examples, and personalized support.',
  },
];

const FeaturesGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 text-black"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
