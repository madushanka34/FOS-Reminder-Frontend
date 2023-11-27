import React from "react";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" p-4 w-full space-x-5   pb-0">
      <div className="flex justify-between px-[60px]">
        <div className="flex">
          <img
            src="https://seeklogo.com/images/U/university-of-peradeniya-logo-FC0C851815-seeklogo.com.png"
            alt="uop Logo"
            className="w-10 h-10 mr-2 aling-left" // Adjust the width and height as needed
          />
          <div className="text-center text-black font-semibold relative">
            <i>FOS</i> <br /> R e m i n d e r
          </div>
        </div>
        <div className=" text-left">
          <ImLocation2 className="ml-[52px] w-8 h-8 text-black" />
          <br />
          <div>
            <p>Faculty of Science,</p>
            <p>University of Peradeniya,</p>
            <p>Peradeniya (20400),</p>
            <p>Sri Lanka.</p>
          </div>
        </div>
        <div>
          <FaPhoneAlt className="ml-16 w-7 h-7 text-black" />
          <br />
          <div>
            <p>
              <b>General:</b>
            </p>
            <p> +94 81 238 8693 / 9151 / 9152</p>
            <p> +94 81 239 4400 / 4401</p>
            <p>
              <b>Office:</b>
            </p>
            <p> +94 81 239 4404</p>
          </div>
        </div>
        <div>
          <MdEmail className="ml-[52px] w-8 h-8 text-black" />
          <br />
          <div>
            <p>deansci@pdn.ac.lk</p>
            <p>arsci@pdn.ac.lk</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-black text-center w-[100%] pt-5 text-xs">
          Copyright ⓒ {currentYear} All rights reserved-Faculty of science,UoP
        </p>
      </div>
    </footer>
  );
};

export default Footer;
