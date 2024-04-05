import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/ourinitiative"
              className="text-base leading-6 font-bold text-[#7AAB00] hover:text-[#677938]"
            >
              Our Initiatives
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/aboutus"
              className="text-base leading-6 font-bold text-[#7AAB00] hover:text-[#677938]"
            >
              About Us
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/contactus"
              className="text-base leading-6 font-bold text-[#7AAB00] hover:text-[#677938]"
            >
              Contact Us
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="/apply"
              className="text-base leading-6 font-bold text-[#7AAB00] hover:text-[#677938]"
            >
              आवेदन करे
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-10 space-x-6 flex-wrap max-[520px]:gap-[15px]">
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Phone</span>
            <FaSquarePhone className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Facebook</span>
            <FaFacebookSquare className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Youtube</span>
            <FaYoutube className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Location</span>
            <FaLocationDot className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Whatsapp</span>
            <FaWhatsapp className="w-10 h-10" />
          </a>
          <a href="#" className="text-[#7AAB00] hover:text-[#677938]">
            <span className="sr-only">Telegram</span>
            <FaTelegram className="w-10 h-10" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-[#7AAB00]">
          © 2024 Herdsman Development Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
