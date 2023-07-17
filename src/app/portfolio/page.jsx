import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { blog } from "@/helper/Blog";

export default function PortfolioPage() {
  return (
    <>
      <h4 className="text-center text-3xl font-bold   bg-[#F6F6FF]">
        Portfolio
      </h4>
      <p className="text-center text-xs  bg-[#F6F6FF]">
        Home <span>&gt;</span> Portfolio
      </p>
      <section className="bg-white h-auto mt-8 p-8">
        <h2 className="text-center text-4xl font-bold text-black">Portfolio</h2>
        <div className="flex items-center justify-center mt-10">
          <div className="bg-[#FB1D87] text-xs text-md p-3 ms-2 rounded-full rounded-bl-100">
            All
          </div>
          <div className="bg-[#FB1D87] text-xs text-md p-3 ms-2 rounded-full">
            Website
          </div>
          <div className="bg-[#FB1D87] text-xs text-md p-3 ms-2 rounded-full">
            Mobile App
          </div>
          <div className="bg-[#FB1D87] text-xs text-md p-3 ms-2 rounded-full">
            Graphic
          </div>
          <div className="bg-[#FB1D87] text-xs text-md p-3 ms-2 rounded-full">
            UI UX
          </div>
        </div>
        <div className="md:grid md:gap-4 md:grid-cols-3 md:place-content-center flex flex-col items-center">
          <div className="h-auto mt-7 rounded ">
            <Image
              className="w-full"
              src="/assets/images/54.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded ">
            <Image
              className="w-full"
              src="/assets/images/57.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded w">
            {" "}
            <Image
              className="w-full"
              src="/assets/images/56.png"
              alt="project"
              width={500}
              height={100}
            />
          </div>
          <div className="h-auto mt-7  rounded ">
            <Image
              className="w-full"
              src="/assets/images/58.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded ">
            {" "}
            <Image
              className="w-full"
              src="/assets/images/60.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded ">
            {" "}
            <Image
              className="w-full"
              src="/assets/images/61.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7  rounded ">
            <Image
              className="w-full"
              src="/assets/images/62.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded w-50 h-50 ">
            {" "}
            <Image
              className="w-full"
              src="/assets/images/64.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
          <div className="h-auto mt-7 rounded w-50 h-50 ">
            {" "}
            <Image
              className="w-full"
              src="/assets/images/65.png"
              alt="project"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="bg-[#e9a1c4] text-xs text-md p-1 text-center ms-2 w-7 h-7 rounded">
            &#x2190;
          </div>
          <div className="bg-[#e9a1c4] text-xs text-md p-1 text-center ms-2 w-7 h-7 rounded">
            1
          </div>
          <div className="bg-[#e9a1c4] text-xs text-md p-1 text-center ms-2 w-7 h-7 rounded">
            2
          </div>
          <div className="bg-[#e9a1c4] text-xs text-md p-1 text-center ms-2 w-7 h-7 rounded">
            3
          </div>
          <div className="bg-[#e9a1c4] text-xs text-md p-1 text-center ms-2 w-7 h-7 rounded">
            &#x2192;
          </div>
        </div>
      </section>
    </>
  );
}
