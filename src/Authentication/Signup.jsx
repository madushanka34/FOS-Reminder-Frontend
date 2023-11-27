import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import axios from "axios"; // Import Axios

function SignUp() {
  //   const history = useHistory();
  const [postData, setPostData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleRegisterClick = async () => {
    try {
      // Your data posting logic using Axios
      const response = await axios.post("?", postData);

      // Check if the registration was successful
      if (response.status === 200) {
        // Navigate to the Login page
        // history.push('/Login');
      } else {
        // Handle registration failure, show an error message, etc.
        console.error("Registration failed");
      }
    } catch (error) {
      // Handle errors, show an error message, etc.
      console.error("Error during registration:", error);
    }
  };

  const handleInputChange = (e) => {
    // Update the state when input values change
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-yellow-600 to-yellow-100">
      <div className="flex justify-center w-full pt-10 ml-0">
        <img
          src="https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png"
          alt="uop Logo"
          className="w-16 h-16 mr-2 aling-left"
        />
        <div className="relative pt-2 font-semibold text-center text-white">
          <i>FOS</i> <br /> R e m i n d e r
        </div>
      </div>
      <div className="py-8 text-xl text-center text-white">
        <h1>Welcome to the FOS Examination Reminder Registration page.</h1>
      </div>

      {/* Login W */}
      <div className="relative flex flex-col justify-center pb-[9%] overflow-hidden">
        <div className="w-full p-6 m-auto mt-0 bg-white shadow-md rounded-xl lg:max-w-xl">
          <h1 className="pt-2 pb-5 text-4xl font-semibold text-center text-blue-700">
            Sign Up
          </h1>
          <div className="mb-5">
            <input
              type="name"
              name="name"
              placeholder="Name"
              value={postData.name}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-700 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={postData.email}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={postData.password}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-7">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={postData.confirmPassword}
              onChange={handleInputChange}
              className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-lg w- hover:bg-blue-600 focus:outline-none focus:bg-purple-600"
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
