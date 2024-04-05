import React from "react";
import logo from "../../assets/headers/logo-2.png";
import { NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <div className="z-10 sticky top-0 left-0 w-full h-[60px] p-[5px] flex justify-between bg-gray-100">
      <div className="flex w-[30%] max-[800px]:w-[70%]">
        <img src={logo} alt="logo" className="w-[50px] h-[100%] ml-[40px]" />
        <div className="w-[5px] h-[100%] bg-yellow-400"></div>
        <div className="ml-[5px] flex flex-col justify-center items-center py-[4px]">
          <span className="text-green-500 font-bold text-[13px]">पशुसेवक</span>
          <span className="text-yellow-500 font-bold text-[13px]">
            प्रगति केन्द्र
          </span>
          <span className="text-[#a87644] text-[10px]">
            पशुपालक का सच्चा साथी
          </span>
        </div>
      </div>
      <div className="w-[60%] flex items-center justify-end mr-[40px] max-[800px]:hidden">
        <ul className="flex gap-[50px] justify-center items-center max-[940px]:gap-[30px] max-[837px]:gap-[20px]">
          <NavLink to="/">
            <li className="p-[5px] px-[10px] rounded-[10px] cursor-pointer font-[500] hover:bg-gray-300">
              Home
            </li>
          </NavLink>
          <NavLink to="/ourinitiative">
            <li className="p-[5px] px-[10px] rounded-[10px] cursor-pointer font-[500] hover:bg-gray-300">
              Our Initiatives
            </li>
          </NavLink>
          <NavLink to="/aboutus">
            <li className="p-[5px] px-[10px] rounded-[10px] cursor-pointer font-[500] hover:bg-gray-300">
              About Us
            </li>
          </NavLink>
          <NavLink to="/contactus">
            <li className="p-[5px] px-[10px] rounded-[10px] cursor-pointer font-[500] hover:bg-gray-300">
              Contact Us
            </li>
          </NavLink>
          <NavLink to="/apply">
            <li className="p-[5px] px-[10px] rounded-[10px] cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white font-[600]">
              आवेदन करे
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
