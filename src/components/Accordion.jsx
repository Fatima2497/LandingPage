"use client"
import React from 'react'
import { useState } from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import {MdOutlineKeyboardArrowUp} from 'react-icons/md'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border-2 rounded mb-4 border-b-2 ">
      <button
        className="flex justify-between items-center w-full p-2 tracking-tighter border-b-2 font-semibold"
        onClick={toggleAccordion}
      >
        <span className='text-[#FB1D87] text-xs  tracking-tighter'>{title}</span>
        <span className='text-base'>
         {isOpen ? <MdOutlineKeyboardArrowUp className='text-[#FB1D87] text-base'/> : <AiOutlinePlus />}
        </span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} text-xs`}>
        <p className='tracking-tighter text-xs p-2'>{content}</p>
      </div>
    </div>
  );
};




export default Accordion