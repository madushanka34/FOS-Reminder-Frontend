import React from "react";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const Navigate = useNavigate();
  return (
    <header className="top-0 z-0 w-full ">
      <div className="relative flex p-10 mx-auto ml-0 ">
        <div className="flex w-full ml-0">
          <img
            src="https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png"
            alt="uop Logo"
            className="w-10 h-10 mr-2 aling-left"
          />
          <div className="relative font-semibold text-center text-black">
            <i>FOS</i> <br /> R e m i n d e r
          </div>
        </div>

        <div className="flex items-center justify-end w-full">
          {/* <button
            className="px-4 py-2 text-black rounded-full"
            onClick={() => Navigate("/")}
          >
            Home
          </button> */}
          <button
            className="px-4 py-2 text-black "
            onClick={() => Navigate("/task")}
          >
            My Task
          </button>

          <button
            className="px-4 py-2 text-black "
            onClick={() => Navigate("/request")}
          >
            Request
          </button>
          <AiOutlineBell className="text-black cursor-pointer w-7 h-7" />
        </div>
      </div>
    </header>
  );
};

export default Header;
