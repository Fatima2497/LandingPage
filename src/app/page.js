"use client";
import Image from "next/image";
import { data } from "@/helper/Data";
import { course } from "@/helper/Course";
import Accordion from "@/components/Accordion";
import {
  AiFillQuestionCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { useState } from "react";
import { Nunito_Sans } from "next/font/google";
import { workTitle } from "@/helper/Wrok";

const nunitosans = Nunito_Sans({ 
  weight: ['300','400','500','700'],
  subsets: ['latin'] 
})


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="min-w-full min-h-full grid justify-items-center">
        {/* hero section */}
        <section className="bg-[#F6F6FF] h-auto md:flex-row sm:flex-row md:justify-between flex flex-col w-full items-center p-8 ">
          <div>
            <h6 className="text-base font-medium text-[#3C1B65]">
              Creative Digital Agency
            </h6>
            <h3 className="text-3xl font-extrabold mt-3 text-[#3C1B65]">
              We Build Creative
            </h3>
            <h2 className="text-5xl font-extrabold mt-3 text-[#FB1D87] even:bg-[]">
              Website & Apps
            </h2>
            <p className="text-sm font-normal mt-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestias, rerum!
            </p>
            <button className="mt-3 bg-gradient-to-r from-[#9F37F0] to-[#3C1B65] p-2 rounded-full text-white">
              Learn more
            </button>
          </div>
          <div className="mt-5 mx-auto">
            <Image
              src="/assets/images/background.png"
              alt="background"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* service section */}
        <section className={`bg-[#FFFFFF] mt-3 h-auto flex flex-col w-full items-center p-8 ${nunitosans.className}`}>
          <h3 className="font-bold font-5xl capitalize">services</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            perferendis repellat mollitia culpa corrupti fuga.
          </p>
          <div className="flex flex-col items-center md:grid md:grid-cols-4 md:place-content-center mt-3">
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0] rounded-full p-3">
                    <Image
                      src="/assets/images/web.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    Web Development
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshapes.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0] rounded-full p-3">
                    <Image
                      src="/assets/images/app.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    App Development
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0] rounded-full p-3">
                    <Image
                      src="/assets/images/graphic.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    Graphic Designing
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0] rounded-full p-3">
                    <Image
                      src="/assets/images/ux.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    UI UX Design
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0]  rounded-full p-3">
                    <Image
                      src="/assets/images/game.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    Game Development
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0]  rounded-full p-3">
                    <Image
                      src="/assets/images/film.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    Video Editing
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0]  rounded-full p-3">
                    <Image
                      src="/assets/images/seo.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    SEO
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
            <div className="grid place-items-center  w-100 h-auto rounded overflow-hidden ">
              <div className="relative">
                <Image
                  src="/assets/images/serviceshape.png"
                  alt="serviceshape"
                  width={300}
                  height={400}
                />
                <div className="flex justify-center items-center absolute inset-0  mb-24 md:mb-26">
                  <div className="bg-[#FB1D87] even:bg-[#9F37F0]  rounded-full p-3">
                    <Image
                      src="/assets/images/social-media.png"
                      alt="service"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-7 md:mt-12">
                  <h6 className="text-base md:tracking-tighter  font-bold mt-10 whitespace-nowrap md:mt-4">
                    Digital Marketing
                  </h6>
                  <p className="text-xs text-[#000000] w-70 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                  <p className="text-center text-base font-semibold text-[#000000] mt-2 md:mt-0 md:mb-5">
                    Learn more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about */}
        <section className="bg-[#F6F6FF] h-auto flex flex-col md:grid md:grid-cols-2 w-full items-center p-8 ">
          <div className="mt-5 md:max-w-full">
            <Image
              src="/assets/images/about.png"
              alt="background"
              width={500}
              height={500}
            />
          </div>
          <div className="ms-8">
            <h6 className="text-base font-medium text-[#3C1B65]">
              <span className="h-5 w-5 bg-[#FB1D87] px-4"></span>About
            </h6>
            <h3 className="font-bold text-3xl text-[#3C1B65]">
              Empowering Innovation For a
              <span className="text-[#FB1D87]"> Connected Future</span>
            </h3>
            <p className="text-sm font-normal mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-sm font-normal mt-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <button className="mt-3 bg-gradient-to-r from-[#9F37F0] to-[#3C1B65] p-2 rounded-full text-white">
              Learn more
            </button>
          </div>
        </section>

        <section className="bg-[#FffFFF] h-auto flex flex-col md:grid md:grid-cols-4 w-full items-center p-8 ">
          <div className="p-10 relative w-50 mx-auto">
            <Image
              src="/assets/images/Ellipse 7.png"
              alt="eclips"
              width={70}
              height={70}
            />
            <h3 className="absolute top-14 md:top-12 mx-5 text-[#FB1D87] md:text-left font-bold text-2xl whitespace-nowrap md:whitespace-normal">
              {" "}
              Technologies <snap className="text-[#3C1B65]">We Use</snap>
            </h3>
            <p className="md:text-left text-center text-xs mb-6 md:mt-3 md:tracking-wide">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit.Sed non
              risus.Suspendisse lectus tortor, dignissim.
            </p>
          </div>
          {data.map((i, j) => {
            return (
              <Image
                src={i.image}
                key={j}
                alt="service"
                width={300}
                height={300}
              />
            );
          })}
        </section>

        {/* Portfolio */}
        <section className="bg-[#FffFFF] h-auto flex flex-col md:block w-full items-center ">
          <h3 className="font-bold font-7xl capitalize mt-10 text-[#3C1B65] text-center">
            {" "}
            Our Impressive <span className="text-[#FB1D87]"> Portfolio</span>
          </h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
          </p>
          <div className="mt-6 relative bg-white">
            <div className="flex flex-col items-center md:flex-row">
              <div className=" mx-7 rounded-xl hidden md:block">
                <Image
                  src="/assets/images/1.png"
                  alt="1"
                  width={500}
                  height={700}
                />
              </div>
              <div className="mt-5 mx-7 rounded-xl">
                <Image
                  src="/assets/images/2.png"
                  alt="1"
                  width={500}
                  height={700}
                />
                <h6 className="mt-3 text-center font-bold text-black">
                  Web Development
                </h6>
              </div>
              <div className="mt-5 mx-7 rounded-xl hidden md:block">
                <Image
                  src="/assets/images/3.png"
                  alt="1"
                  width={500}
                  height={700}
                />
              </div>
              <div className="mt-5 mx-7 rounded-xl hidden md:block">
                <Image
                  src="/assets/images/4.png"
                  alt="1"
                  width={500}
                  height={700}
                />
              </div>
            </div>
            <button className="absolute top-20 left-7 invisible md:visible rounded-full h-15 w-15 bg-gray-400 ms-6 p-5 font-bold">
              <Image
                src="/assets/images/left.png"
                width={10}
                height={10}
                alt="arrow"
              />
            </button>
            <button className="absolute top-20 right-10 invisible md:visible  rounded-full bg-[#FB1D87] ms-6 p-5">
              <Image
                src="/assets/images/right.png"
                width={15}
                height={10}
                alt="arrow"
              />
            </button>
          </div>
          <div className={`text-center mt-6 ${nunitosans.className}`}>
            <h3 className="font-bold text-2xl capitalize">
              Work <span className="text-[#FB1D87]">Process</span>
            </h3>
            <p>Here are the steps to complete your basic package project.</p>
            <div className="md:grid  md:grid-cols-3 md:place-items-center mt-4 ms-7 flex flex-col">
              {
                workTitle.map((i,j)=>{
                  return(
                    <div className="mt-5 text-white flex items-center justify-center" key={j}>
                <div className="relative">
                <Image 
                src='/assets/images/numcircle.png' alt='subtractshape' width={60} height={60} />
                <p className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{i.sno}</p>
                </div>
                <div className="relative">
                <Image src='/assets/images/Subtract.png' alt='subtractshape' width={300} height={300} />
                <h3 className="text-sm font-bold text-[#3C1B65] absolute top-[30%] left-[30%] -translate-x-[30%] -translate-y-[30%]">{i.title}</h3>
                <p className="text-xs absolute top-[50%] left-[40%] -translate-x-[30%] -translate-y-[40%] text-justify tracking-tighter text-black">
                    we will meet up by a call to discuss your project face to
                    face.
                  </p>
                </div>
              
              </div>
                  )
                })
              }
         
            </div>
          </div>
        </section>

          {/* cOURSES */}
        <section className="bg-[#F6F6FF] h-auto flex flex-col w-full items-center mt-10 p-8">
          <h3 className="text-center font-bold text-2xl tracking-tighter text-[#3C1B65]">
            Courses <span className="text-[#FB1D87]">We Offer</span>
          </h3>
          <p className="md:text-center text-center text-xs tracking-tighter">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
          </p>
          <div className="flex flex-col md:gap-2 md:grid md:grid-cols-3 mt-6 ms-7">
            {course.map((i, j) => {
              return (
                <div
                  className={`h-auto bg-white rounded shadow-md mt-4 w-56 ${nunitosans.className}`}
                  key={j}
                >
                  <Image
                    className="w-full"
                    src={i.image}
                    alt="12"
                    width={300}
                    height={300}
                  />
                  <div className="flex items-center justify-between  ms-0 p-2 mt-3">
                    <button className="rounded-full w-44 p-2 text-xs text-white whitespace-nowrap bg-gradient-to-r from-[#9732D4] to-[#3C1B65]">
                      {i.title}
                    </button>
                    <p className="text-[#9732D4] text-xs whitespace-nowrap ms-2">$ 130.00</p>
                  </div>
                  <div className="mx-0 my-0 p-2">
                    <h5 className="font-bold text-xs">{i.title}</h5>
                    <p className="text-xs tracking-tighter">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod.
                    </p>
                  </div>
                  <div className="p-2 flex items-center justify-between">
                    <div className="flex items-center justify-center">
                      <Image
                        src="/assets/images/pers1.png"
                        alt="12"
                        width={30}
                        height={30}
                      />
                      <div className="ms-2">
                      <p className="text-xs text-[#777777]">Instructor</p>
                      <h5 className="text-xs whitespace-nowrap font-bold tracking-tighter">James Willians</h5>
                    </div>
                      </div>
                    <div className="ms-1">
                      <p className="text-xs text-[#777777]">
                        <Image
                          className="inline"
                          src="/assets/images/star.png"
                          alt="star"
                          width={10}
                          height={10}
                        />
                        <Image
                          className="inline"
                          src="/assets/images/star.png"
                          alt="star"
                          width={10}
                          height={10}
                        />
                        <Image
                          className="inline"
                          src="/assets/images/star.png"
                          alt="star"
                          width={10}
                          height={10}
                        />
                        <Image
                          className="inline"
                          src="/assets/images/star.png"
                          alt="star"
                          width={10}
                          height={10}
                        />
                      </p>
                      <p className="text-xs text-[#777777]">4.7 Rating</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className={`bg-[#FffFFF] h-auto flex flex-col  w-full items-center p-8 ${nunitosans.className}`}>
          <h3 className="font-bold text-2xl tracking-tighter capitalize mt-10 text-[#3C1B65] text-center">
            Meet <span className="text-[#FB1D87]">Our Expert Team</span> Works
            For Your Business
          </h3>
          <p className="text-center tracking-tighter text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
          </p>
          <div className={`flex flex-col items-center md:grid md:grid-cols-4 md:place-content-center mt-3 ${nunitosans.className}`}>
            <div className="bg-white h-auto">
              <Image
                src="/assets/images/shan.png"
                alt="shan"
                width={300}
                height={300}
              />
              <h5 className="text-center text-sm font-bold tracking-tighter">Shanemadar Khan</h5>
              <p className="text-center text-xs tracking-tighter">Co-Founder</p>
            </div>
            <div className="bg-white h-auto">
              <Image
                src="/assets/images/huma.png"
                alt="huma"
                width={300}
                height={300}
              />
              <h5 className="text-center text-sm font-bold tracking-tighter">Zill E Huma</h5>
              <p className="text-center text-xs tracking-tighter">Technical lead developer</p>
            </div>
            <div className="bg-white h-auto">
              <Image
                src="/assets/images/khan.png"
                alt="khan"
                width={300}
                height={300}
              />
              <h5 className="text-center text-sm font-bold tracking-tighter">Sahim Khan</h5>
              <p className="text-center text-xs tracking-tighter">Digital Marketing Expert</p>
            </div>
            <div className="bg-white h-auto">
              <Image
                src="/assets/images/poonam.png"
                alt="poonam"
                width={300}
                height={300}
              />
              <h5 className="text-center text-sm font-bold tracking-tighter"> Poonam Kushwaha</h5>
              <p className="text-center text-xs tracking-tighter">Graphic Designer</p>
            </div>
          </div>
        </section>

        <section className="bg-[#FffFFF] h-auto flex flex-col md:flex-row md:justify-between  w-full items-center gap-4 p-6">
          <div className="flex flex-col md:block">
            <h3 className="font-bold text-2xl capitalize text-[#3C1B65] text-center md:whitespace-nowrap ">
              Frequently Asked{" "}
              <span className="text-[#FB1D87]"> Questions</span>
            </h3>
            <button className="rounded-full p-2 mt-8 bg-[#E5E1FA] w-full  text-center">
              {" "}
              General Questions
            </button>
            <button className="rounded-full p-2  text-white bg-[#9F37F0] w-full mt-2">
              Community
            </button>
            <button className="rounded-full p-2  bg-[#E5E1FA] w-full mt-2">
              Support
            </button>
          </div>
          <div className="mt-[50px]">
            <Image
              src="/assets/images/businesswoman.png"
              alt="shan"
              width={300}
              height={300}
            />
          </div>
          <div className="w-full">
            <div className="w-full shadow-md mt-6 rounded-full p-2 bg-white ">
              <button
                className="ms-2 flex justify-between items-center w-full text-xs text-center font-semibold"
                onClick={toggleAccordion}
              >
                is this Full Digital Agency{" "}
                <AiOutlinePlus className="me-4 text-[#9732D4] text-sm font-bold" />
              </button>
            </div>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } p-4 mt-2 bg-white rounded-[43px] text-white shadow-lg`}
            >
              <button
                className="ms-2 flex justify-between items-center w-full text-xs text-center  text-black font-semibold"
                onClick={toggleAccordion}
              >
                is this Full Digital Agency{" "}
                <AiOutlineMinus className="me-4 text-[#9732D4] text-sm font-bold" />
              </button>
              <p className=" text-base text-[#777777] mt-3 ms-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.sit amet, consectetu dolor sit
                ame,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
              </p>
            </div>
          </div>
        </section>

        {/* Blogs */}
        <section className="bg-[#FffFFF] h-auto flex flex-col w-full items-center p-2 ">
          <h3 className="font-bold tracking-tighter text-2xl capitalize mt-10 text-[#3C1B65] text-center md:whitespace-nowrap mb-4">
            Our Latest <span className="text-[#FB1D87]"> Blogs</span>
          </h3>
          <p className="text-xs tracking-tighter text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.sit amet, consectetu dolor sit ame</p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-2 items-center mt-4">
            <div className="h-auto bg-white rounded shadow-lg w-56">
              <Image
                className="w-full"
                src="/assets/images/rect1.png"
                alt="12"
                width={300}
                height={300}
              />
              <div className="flex items-center justify-center ms-0 p-2 mt-3">
                <button className="w-44 p-1 text-xs rounded-lg text-white whitespace-nowrap bg-[#9732D4]">
                  Web Development
                </button>
                <p className=" text-[#3C1B65] text-xs whitespace-nowrap">12 may 2023</p>
              </div>
              <div className="mt-2 p-2">
                <p className="text-xs font-bold">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className="text-xs mt-2 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                </p>
                <div className="mt-3 flex justify-between items-center">
                <div className="">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/msg.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 text-[#777777] text-xs">
                      2 Comments
                    </span>
                  </p>
                </div>
                <div className="ms-4">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/heart.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 me-1 text-[#777777] text-xs">
                      2.k Likes
                    </span>
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="h-auto bg-white rounded shadow-lg w-56">
              <Image
                className="w-full"
                src="/assets/images/rect2.png"
                alt="12"
                width={300}
                height={300}
              />
              <div className="flex items-center justify-center ms-0 p-2 mt-3">
                <button className="w-44 p-1 text-xs rounded-lg text-white whitespace-nowrap bg-[#9732D4]">
                  Web Development
                </button>
                <p className=" text-[#3C1B65] text-xs whitespace-nowrap">12 may 2023</p>
              </div>
              <div className="mt-2 p-2">
                <p className="text-xs font-bold">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className="text-xs mt-2 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                </p>
                <div className="mt-3 flex justify-between items-center">
                <div className="">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/msg.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 text-[#777777] text-xs">
                      2 Comments
                    </span>
                  </p>
                </div>
                <div className="ms-4">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/heart.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 me-1 text-[#777777] text-xs">
                      2.k Likes
                    </span>
                  </p>
                </div>
              </div>
              </div>
             
            </div>
            <div className="h-auto bg-white rounded shadow-lg w-56">
              <Image
                className="w-full"
                src="/assets/images/rect3.png"
                alt="12"
                width={300}
                height={300}
              />
              <div className="flex items-center justify-center ms-0 p-2 mt-3">
                <button className="w-44 p-1 text-xs rounded-lg text-white whitespace-nowrap bg-[#9732D4]">
                  Web Development
                </button>
                <p className=" text-[#3C1B65] text-xs whitespace-nowrap">12 may 2023</p>
              </div>
              <div className="mt-2 p-2">
                <p className="text-xs font-bold">
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className="text-xs mt-2 tracking-tighter">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                </p>
                <div className="mt-3 flex justify-between items-center">
                <div className="">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/msg.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 text-[#777777] text-xs">
                      2 Comments
                    </span>
                  </p>
                </div>
                <div className="ms-4">
                  <p className="text-xs">
                    <Image
                      className="inline"
                      src="/assets/images/heart.png"
                      alt="message"
                      width={12}
                      height={12}
                    />
                    <span className="ms-1 me-1 text-[#777777] text-xs">
                      2.k Likes
                    </span>
                  </p>
                </div>
              </div>
              </div>
             
            </div>
          </div>
        </section>

        {/* Collaboration */}
        <section className="bg-[#FffFFF] h-auto w-full mt-5 flex items-center justify-center p-8 bg-cover bg-center bg-[url(/assets/images/bg22.png)]">
          <div className="">
            <Image
              src="/assets/images/white.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col ms-5">
            <h3 className="text-white text-3xl font-bold text-center">
              Colaboration With
            </h3>
            <Image
              src="/assets/images/logo2.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </section>
      </div>
    </>
  );
}
