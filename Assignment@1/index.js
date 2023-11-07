import React from 'react';

function CourseList({ courses }) {
  return (
    <div>
      <h2>Enrolled Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
