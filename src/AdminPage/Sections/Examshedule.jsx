import { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";

const ExamForm = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/exam_reminder/course/getAllCourseDetails")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
      });
  }, []);

  const [lecs, setLecs] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:8080/api/exam_reminder/lecturer/getAllLecturerDetails"
      )
      .then((response) => {
        setLecs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching exams:", error);
      });
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    console.log("Selected value:", value);
  };

  const [courseData, setCourseData] = useState({
    stime: "",
    etime: "",
    date: "",
    venue: "",
    courseId: "",
    lecName: "",
  });

  // console.log(courseData);

  const [selectedValueLec, setSelectedValueLec] = useState("");

  const handleSelectChangeLec = (event) => {
    const value = event.target.value;
    setSelectedValueLec(value);

    console.log("Selected value:", value);
  };

  const handleChange = (e) => {
    setCourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExam = {
      stime: courseData?.stime,
      etime: courseData?.etime,
      date: courseData?.date,
      venue: courseData?.venue,
      courseId: selectedValue,
      lecId: selectedValueLec,
    };
    console.log(newExam);

    const formattedCourseData = {
      ...newExam,
      date: newExam.date
        ? new Date(newExam.date).toISOString().slice(0, 10)
        : null,
      stime: newExam.stime ? `${newExam.stime}:00` : null,
      etime: newExam.etime ? `${newExam.etime}:00` : null,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/exam_reminder/exam/createexam",
        formattedCourseData
      );
      console.log("Data submitted successfully!", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }

    window.location.reload();
  };

  return (
    <div className="flex justify-center mt-10 h-[250px]">
      <form
        onSubmit={handleSubmit}
        className="relative w-full sm:w-[50%]  border-2 border-black rounded-md"
      >
        <div className="flex justify-center">
          <h1 className="text-black underline text-2xl font-semibold p-[2%] ml-[-5%]">
            Schedule The Examinations
          </h1>
        </div>
        <div className="flex  justify-center pb-2 space-x-[10%] ">
          <div className="block py-1 w-[30%]">
            <select
              id="simpleSelect"
              value={selectedValue}
              onChange={handleSelectChange}
              className="p-2 mb-2 border rounded-md"
            >
              {courses &&
                courses.map((c) => (
                  <option key={c?.courseId} value={c?.courseId}>
                    {c?.courseName}
                  </option>
                ))}
            </select>

            {/* <input
              className="p-2 mb-2 border rounded-md"
              type="text"
              title="Examination Name"
              placeholder="Enter exam code"
              name="courseName"
              value={courseData.courseName}
              onChange={handleChange}
            /> */}
            <input
              className="p-2 mb-2 border rounded-md"
              type="date"
              title="Examination Date"
              placeholder="Enter exam date"
              name="date"
              value={courseData.date}
              onChange={handleChange}
            />

            <select
              id="simpleSelect"
              value={selectedValueLec}
              onChange={handleSelectChangeLec}
              className="p-2 mb-2 border rounded-md"
            >
              {lecs &&
                lecs.map((c) => (
                  <option key={c?.lecId} value={c?.lecId}>
                    {c?.lecName}
                  </option>
                ))}
            </select>
            {/* <input
              className="p-2 border rounded-md"
              type="text"
              title="Supervisor"
              placeholder="Enter supervisor name"
              name="lecName"
              value={courseData.lecName}
              onChange={handleChange}
            /> */}
          </div>
          <div className="space-y-1">
            <input
              className="p-2 mb-2 border rounded-md"
              type="text"
              title="Venue"
              placeholder="Enter venue"
              name="venue"
              value={courseData.venue}
              onChange={handleChange}
            />
            <div className="flex mt-[-4%]">
              <input
                className="p-2 mr-2 border rounded-md"
                type="time"
                title="Examination start time"
                placeholder="Enter exam start time"
                name="stime"
                value={courseData.stime}
                onChange={handleChange}
                pattern="[0-9]{2}:[0-9]{2}"
              />
              <label className="mt-2 mr-2">To</label>
              <input
                className="p-2 border rounded-md"
                type="time"
                name="etime"
                value={courseData.etime}
                onChange={handleChange}
                pattern="[0-9]{2}:[0-9]{2}"
              />
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-0 p-2 mb-2 text-white bg-blue-500 rounded-md right-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExamForm;
