import React, { useState } from "react";
import Input from "../../AdminPage/Components/Input";
import axios from "axios";

function Rtop() {
  const [formData, setFormData] = useState({
    examName: "",
    examDate: "",
    suggestLecturer: false,
    lecturerName: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an Axios POST request to your backend endpoint
      const response = await axios.post("BACKEND_ENDPOINT", formData);

      // Handle the response as needed
      console.log("Response from the server:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="w-full pb-10 ">
      <div className="w-[60%] mx-auto justify-center">
        <h1 className="text-black text-[25px] font-normal font-Lato text-center flex ">
          If you have an emergency, you can request for an exchange of duty and
          suggest a lecturer for the examination duty.
        </h1>
        <div className="flex justify-center mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-[760px] h-[420px] bg-gray-200 rounded-3xl mt-10">
              <h1 className="text-gray-600 text-[25px] font-normal font-Lato w-[80%] flex justify-center mx-auto py-5">
                Request for an exchange and suggest a lecturer
              </h1>
              <div className="flex w-[80%] mt-[10px] mx-auto justify-center space-x-[20%]">
                <div>
                  <p className="text-black text-[20px]  font-normal font-Lato">
                    <Input
                      title="Examination Name"
                      type="text"
                      name="examName"
                      display="Enter exam code"
                      onChange={handleChange}
                    />
                  </p>
                </div>
                <p className="text-black text-[20px] font-normal font-Lato">
                  <Input
                    title="Examination Date"
                    type="date"
                    name="examDate"
                    display="enter Date"
                    onChange={handleChange}
                  />
                </p>
              </div>
              <div className="ml-[21%] mt-[1%]">
                <p className="text-black text-[23px] font-normal font-Lato">
                  Can you Suggest a lecturer ?
                </p>
                <div className="flex space-x-5 w-[20%] ">
                  <div>
                    <input
                      type="checkbox"
                      name="suggestLecturer"
                      value={formData.suggestLecturer}
                      onChange={handleChange}
                    />
                    <label>Yes</label>
                  </div>
                </div>
              </div>
              <p className="text-black text-[15px] font-normal font-Lato mt-[2%] ml-[21%]">
                *Click here to notify the selected lecturer
              </p>
              {formData.suggestLecturer && (
                <div className="flex justify-center ">
                  <input
                    className="  mt-[1%] w-[500px] h-[50px] bg-white border border-gray-400 rounded-lg"
                    type="text"
                    name="lecturerName"
                    placeholder="Name of the Lecturer you suggest"
                    onChange={handleChange}
                  />
                </div>
              )}
              <button className="flex justify-center mx-auto text-[20px] font-normal font-Lato mt-5  relative px-4 py-1 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-purple-600">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rtop;