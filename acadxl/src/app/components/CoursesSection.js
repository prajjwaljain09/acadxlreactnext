import React from 'react';
import CourseCard from './CoursesCard';

const CoursesSection = ({ sectionTitle, courses }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">{sectionTitle}</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              image={course.image}
              description={course.description}
              price={course.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
