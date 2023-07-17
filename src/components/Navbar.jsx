"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-cover bg-center bg-[url(/assets/images/navbg.png)] px-4 md:px-4 md:h-[120px] h-[100px] flex justify-between items-center">
      <div className="w-full">
        <Image
          className="py-6 mx-4 capitalize cursor-pointer"
          src="/assets/images/logo.png"
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <ul className="md:flex hidden me-2">
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/">Home</Link>
        </li>
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/">About</Link>
        </li>
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/">Job</Link>
        </li>
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/service">Service</Link>
        </li>
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="mx-[10px] cursor-pointer active:text-[#FB1D87]">
          <Link href="/blog">Blog</Link>
        </li>
        <button className="bg-gradient-to-r  from-[#9F37F0] to-[#3C1B65] text-white text-xs rounded-full p-2">
          Contact Us
        </button>
      </ul>

      <div className="md:hidden">
        <button
          className="bg-[#9732D4] rounded-sm p-2 block"
          onClick={toggleMenu}
        >
          <AiOutlineMenu
            className={`text-base text-white ${
              isMenuOpen ? "hidden" : "block"
            }`}
          />
          <RxCross1
            className={`text-base text-white ${
              !isMenuOpen ? "hidden" : "block"
            }`}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden block">
          <ul className="flex flex-col mx-10">
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">home</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">about</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">industries</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">services</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">job</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">portfolio</Link>
            </li>
            <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
              <Link href="/">contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>

    // <nav className={`${style.hero} ${isMenuOpen ? 'lg:hidden' : ''} bg-[/assets/images/navbg.png]`}>
    //   <div className="flex items-center justify-between">
    //     <Image
    //       className="py-6 mx-4 capitalize cursor-pointer"
    //       src="/assets/images/logo.png"
    //       alt="logo"
    //       width={80}
    //       height={90}
    //     />
    //     <div className="hidden lg:flex items-center">
    //       <ul className="flex flex-row mx-10">
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/home">home</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">about</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/service">services</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">job</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/portfolio">portfolio</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/blog">blog</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">contact us</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="lg:hidden">
    //       <button
    //         className="me-7 block text-gray-500 active:text-gray-700 focus:text-gray-700 focus:outline-none"
    //         onClick={toggleMenu}
    //       >
    //         <svg
    //           className="h-6 w-6 fill-current"
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //         >
    //           <path
    //             className={`${isMenuOpen ? 'hidden' : 'block'}`}
    //             fillRule="evenodd"
    //             d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
    //           />
    //           <path
    //             className={`${isMenuOpen ? 'block' : 'hidden'}`}
    //             fillRule="evenodd"
    //             d="M6 18L18 6l-1.414-1.414L4 16.172V18h2zm11-6L6 7.828V6h2.828L17 12.172v2.828h-2z"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    //   {isMenuOpen && (
    //     <div className="lg:hidden">
    //       <ul className="flex flex-col mx-10">
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/home">home</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">about</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">industries</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">services</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">job</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">portfolio</Link>
    //         </li>
    //         <li className="mx-4 capitalize cursor-pointer  active:text-[#FB1D87] ">
    //           <Link href="/">contact us</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    // </nav>
  );
};

export default Navbar;
