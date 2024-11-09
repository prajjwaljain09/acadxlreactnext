import React from 'react';
import Link from 'next/link';

const courses = [
  {
    id: 1,
    title: 'JavaScript for Beginners',
    category: 'Programming',
    description: 'Learn the basics of JavaScript, one of the most popular programming languages.',
    image: '/images/js-course.jpg',
  },
  {
    id: 2,
    title: 'Introduction to Data Science',
    category: 'Data Science',
    description: 'Get started with data science and learn how to analyze and visualize data.',
    image: '/images/data-science-course.jpg',
  },
  {
    id: 3,
    title: 'Web Development Bootcamp',
    category: 'Web Development',
    description: 'Become a full-stack web developer with this comprehensive course.',
    image: '/images/web-dev-course.jpg',
  },
  {
    id: 4,
    title: 'Digital Marketing Essentials',
    category: 'Marketing',
    description: 'Learn the fundamentals of digital marketing, from SEO to social media strategy.',
    image: '/images/digital-marketing-course.jpg',
  },
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center text-3xl font-bold text-gray-800 mb-8">
        <h1>Our Courses</h1>
      </header>

      <div className="flex justify-center mb-6">
        <div className="flex space-x-4">
          {/* Categories Filter */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            All Categories
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Programming
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Data Science
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Web Development
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
            Marketing
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{course.category}</span>
                {/* Use Link directly without the <a> tag */}
                <Link href={`/courses/${course.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
