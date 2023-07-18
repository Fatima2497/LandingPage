import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";
import { accordionData } from "@/helper/accordianData";
import { Nunito_Sans } from "next/font/google";
import {LiaGreaterThanSolid} from 'react-icons/lia'

const nunitosans = Nunito_Sans({ 
  weight: ['300','400','500','700'],
  subsets: ['latin'] 
})


export default function ServicePage() {
  return (
    <>
      <h3 className="text-center text-3xl font-bold bg-[#F6F6FF]">Service</h3>
      <p className="text-center text-xs bg-[#F6F6FF]">
        Home <span><LiaGreaterThanSolid /></span> Service Details
      </p>
      <section className="bg-white h-auto mt-4 p-4">
        <div className="container p-10 bg-white">
          <div className="md:grid md:grid-cols-2 md:gap-2 flex flex-col  w-full p-10 bg-white">
            <div className="w-60">
              <div className={`flex items-center flex-col ${nunitosans.className}`}>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Web Development</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">App Development</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#3C1B65] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white">UI UX Design</p>
                    <p className="text-sm text-white"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-xs">Graphic Design</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-xs">Video Editing</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Digital Marketing</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">SEO</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className=" w-full h-auto p-2 mt-3 rounded-md bg-[#F6F6FF] ">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">Game Development</p>
                    <p className="text-sm"><LiaGreaterThanSolid /></p>
                  </div>
                </div>
                <div className="bg-[#3C1B65] text-white w-full h-80 mt-5 rounded-md p-8">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/images/hands.png"
                      alt="hands"
                      width={100}
                      height={100}
                    />
                    <p className="text-white mt-3 text-xl">Need Any Help?</p>
                    <p className="text-white mt-6 text-xs">+91 445677788</p>
                    <p className="text-white text-xs">emailcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white mt-4">
              <div className="flex flex-col items-center bg-white">
                <div className="h-50 w-full mb-4 roubded-lg">
                  <Image
                    src="/assets/images/comp.png"
                    alr="compan"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="mt-18 h-auto w-full">
                  <h3 className="text-sm tracking-tighter font-bold text-black">Service Overview</h3>
                  <p className=" text-xs tracking-tighter">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the ndustry standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make.
                  </p>
                  <p className="mt-2 text-xs tracking-tighter">
                    {" "}
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged Lorem ipsum
                    dolor sit amet consec tetur adipis icing elit
                  </p>
                  <h3  className="text-sm tracking-tighter font-bold mt-3 text-black">Service Center</h3>
                  <p className="text-xs tracking-tighter">
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit
                  </p>
                </div>
                <div className="bg-[#F6F6FF] w-full h-15 mt-3 p-2 relative">
                    <div className="bg-[#FB1D87] w-2 h-10 absolute top-2 left-0 rounded-sm"></div>
                    <p className="text-xs tracking-tighter ms-3">When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also </p>
                </div>
                <div className="mt-2 p-2 h-auto w-full flex flex-col items-start">
                  <h3 className="text-sm tracking-tighter font-bold text-black">Frequently Ask Questions</h3>
                  <p className=" text-xs tracking-tighter">
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also 
                  </p>
                </div>
                <div className="bg-white mt-3 h-100 w-full ">
                  <div className="w-full">
                    {
                      accordionData.map((i,j)=>{
                       return(
                        <Accordion title={i.title} content={i.content} key={j} />
                       )
                      })
                    }
                  </div>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
