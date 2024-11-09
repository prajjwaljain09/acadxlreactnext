import React from 'react';

const InformationPanel = ({ exams }) => {
  return (
    <div className="text-center py-12 bg-gray-50">
      <h2 className="text-4xl font-bold mb-4 text-black">Information Panel</h2>
      <p className="text-lg text-gray-600 mb-8">
        Here you can get information about the exams you will pursue in the future. 
        Just click on the icons and get the whole information about the exams.
      </p>
      <div className="grid grid-cols-3 gap-8 mx-4">
  {exams.map((exam, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-6 bg-green-50 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        src={exam.icon}
        alt={exam.title}
        className="w-20 h-20 mb-4"
      />
      <h3 className="text-xl font-bold text-gray-900">{exam.title}</h3>
    </div>
  ))}
</div>

    </div>
  );
};

export default InformationPanel;
