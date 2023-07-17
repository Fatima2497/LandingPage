"use client"
import React from 'react'
import { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded p-1 mb-4">
      <button
        className="flex justify-between items-center w-full p-2 font-semibold"
        onClick={toggleAccordion}
      >
        <span className='text-[#FB1D87] text-xs border-b-2'>{title}</span>
        <span className={`border-b-2 transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
         +
        </span>
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} p-2`}>
        <p className=' text-xs'>{content}</p>
      </div>
    </div>
  );
};




export default Accordion