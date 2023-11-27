import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Timespan from "./Logo/Time Span.png";
import Location from "./Logo/Location.png";
import axios from "axios";

function Card(props) {
  const [courseData, setCourseData] = useState();
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/exam_reminder/course/getCourseDetails/${props?.examName}`
      )
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching lecture data:", error);
      });
  }, [props?.examName]);
  return (
    <div>
      <div className="w-[80%] flex justify-center mx-auto">
        <div className="w-[800px] h-24 bg-stone-300 rounded-[35px]  flex ">
          <div className="w-[77px] h-[77px] bg-yellow-400 rounded-full border border-black mt-[1%] ml-3">
            <p className="w-[45px] h-[47px] text-black text-xl font-normal font-Lato mt-[15%] ml-[20%]">
              {props.Date}
            </p>
          </div>
          <div className="mt-[2%] ml-[5%]">
            <div className="flex">
              <img src={Timespan} alt="" />
              <div className="relative flex">
                <p>{props.stime}</p>-<p>{props.etime}</p>
              </div>
            </div>
            <div className="flex">
              <img src={Location} alt="" />
              <p>{props.Venue}</p>
            </div>
          </div>
          <p className="text-black text-[25px] ml-[25%] font-normal font-Lato mt-[2%] absolute">
            {courseData && `${courseData?.courseName} Examination`}
          </p>

          <div className="px-5 mt-[1.5%] absolute ml-[42%]">
            <IoIosCheckmarkCircleOutline className="w-[45px] h-[55px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
