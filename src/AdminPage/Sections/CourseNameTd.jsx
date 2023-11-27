import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CourseNameTd({ courseId }) {
    const [courseData, setCourseData] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/exam_reminder/course/getCourseDetails/${courseId}`
      )
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lecture data:", error);
      });
  }, [courseId]);
  return (
    <td className="px-4 py-2 border-b">
    {courseData && courseData?.courseName}
  </td>
  )
}

export default CourseNameTd