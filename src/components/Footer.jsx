import Image from "next/image";
import Link from "next/link";
import React from "react";
import {IoIosMail} from 'react-icons/io'
import {BiSolidPhoneCall,BiLogoLinkedin,BiLogoInstagramAlt,BiMessageRounded} from 'react-icons/bi'
import {FaFacebookF} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col bg-[#F6F6FF] p-10 md:items-center items-start">
      {/* Footer content */}
      <div className=" p-10 mt-7 md:grid w-full md:grid-cols-4 md:gap-4 flex flex-col md:items-center items-start">
        <div className=" ms-5 w-50 flex items-start">
          <p className="text-left text-sm tracking-tighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed non risus.Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.Cras elementum ultrices diam.</p>
        </div>
        <div className=" ms-5 p-4">
          <h5 className="text-[#3C1B65] text-left text-bold text-xl">Links</h5>
          <ul className="grid grid-cols-2 place-content-stretch justify-items-start">
            <li className="me-3 text-xs ">Home</li>
            <li className="me-3 text-xs ">Job</li>
            <li className="me-3 text-xs ">Services</li>
            <li className="me-3 text-xs ">About Us</li>
            <li className="me-3 text-xs ">Portfolio</li>
            <li className="me-3 text-xs ">Blog</li>
          </ul>
        </div>
        <div className=" ms-5 p-4">
        <h5 className="text-[#3C1B65] text-center text-bold text-xl">Contact Us</h5>
        <div className="flex justify-start items-center">
          <IoIosMail className="text-[#FB1D87] text-base" /> 
          <p className="text-xs ms-3"> Email@company.com</p>
        </div>
        <div className="flex justify-start items-center">
          <BiSolidPhoneCall className="text-[#FB1D87] text-base" /> 
          <p className="text-xs ms-3"> +9234 55666666</p>
        </div>
        </div>
        <div className=" ms-5 p-10 flex items-center justify-evenly gap-1">
          <div className="p-2 bg-[#FB1D87] rounded-full text-center text-white text-sm">
            <FaFacebookF className="text-xs"/>
          </div>
          <div className="p-2 bg-[#FB1D87] rounded-full text-center text-white text-sm">
            <BiLogoLinkedin className="text-xs" />
          </div>
          <div className="p-2 bg-[#FB1D87] rounded-full text-center text-white text-sm">
            <BiLogoInstagramAlt className="text-xs" />
          </div>
          <div className="p-2 bg-[#FB1D87] rounded-full text-center text-white text-sm">
            <BiMessageRounded className="text-xs" />
          </div>
        </div>
      </div>
      <div className="p-5 mt-7 w-full ">
        <hr />
        <div className="flex md:justify-between items-center justify-start mt-2">
          <p className="text-xs hidden md:visible">© 2023 ZySoftec, All rights reserved.</p>
          <p className="text-xs">Design & Developed By <span className="text-[#16349F]">ZySoftec</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{/*  */}