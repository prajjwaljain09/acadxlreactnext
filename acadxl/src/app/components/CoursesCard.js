import React from 'react';

const CourseCard = ({ title, image, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-800 font-bold mt-4">{price}</p>
        <button className="mt-6 w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
