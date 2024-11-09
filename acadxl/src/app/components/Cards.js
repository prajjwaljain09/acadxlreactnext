import React from 'react';

export default function Card({ color, icon, title, description, buttonLabel }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg ${color} flex flex-col items-start space-y-4`}
    >
      <div className="text-3xl">{icon}</div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{description}</p>
      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md shadow-sm hover:bg-gray-300">
        {buttonLabel}
      </button>
    </div>
  );
}
