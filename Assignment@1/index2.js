import React, { useState } from 'react';

function CourseCard({ course }) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleMarkCompleted = () => {
    setIsCompleted(true);
  };

  return (
    <div className={`course-card ${isCompleted ? 'completed' : ''}`}>
      <img src={course.thumbnail} alt="Course Thumbnail" />
      <div className="course-info">
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Due Date: {course.dueDate}</p>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${course.progress}%` }}></div>
      </div>
      {!isCompleted && (
        <button onClick={handleMarkCompleted}>Mark as Completed</button>
      )}
    </div>
  );
}


