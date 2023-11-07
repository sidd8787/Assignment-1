// CourseCard.js
import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <img src={course.thumbnail} alt="Course Thumbnail" />
      <div className="course-info">
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Due Date: {course.dueDate}</p>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CourseCard;
