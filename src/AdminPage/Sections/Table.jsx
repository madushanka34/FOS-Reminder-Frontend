import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseNameTd from "./CourseNameTd";

const ExamList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/exam_reminder/exam/getAllExam")
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
      });
  }, []);

  const handleDelete = (examId) => {
    // axios
    //   .delete(
    //     http://localhost:8080/api/exam_reminder/exam/deleteExam/${examId}
    //   )
    //   .then((response) => {
    //     setExams(exams.filter((exam) => exam.examId !== examId));
    //   })
    //   .catch((error) => {
    //     console.error("Error deleting exam:", error);
    //   });
  };

  const handleEdit = (examId) => {
    // Implement your edit functionality here
  };

  return (
    <div className="container mx-auto mt-8 ">
      <h2 className="mb-4 text-2xl font-bold">Exam List</h2>
      <table className="min-w-full bg-pink-300 rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Exam Name</th>
            <th className="px-4 py-2 border-b">Date</th>
            <th className="px-4 py-2 border-b">Start Time</th>
            <th className="px-4 py-2 border-b">End Time</th>
            <th className="px-4 py-2 border-b">Venue</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.examId}>
              <CourseNameTd courseId={exam?.courseId} />
              <td className="px-4 py-2 border-b">{exam.date}</td>
              <td className="px-4 py-2 border-b">{exam.stime}</td>
              <td className="px-4 py-2 border-b">{exam.etime}</td>
              <td className="px-4 py-2 border-b">{exam.venue}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleEdit(exam.examId)}
                  className="px-2 py-1 mr-2 text-white bg-blue-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(exam.examId)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamList;
