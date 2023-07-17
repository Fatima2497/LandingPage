import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import { blog } from "@/helper/Blog";

export default function BlogPage() {
  return (
    <>
      <h4 className="text-center text-3xl font-bold  bg-[#F6F6FF]">Blogs</h4>
      <p className="text-center text-xs bg-[#F6F6FF]">
        Home <span>&gt;</span> Blog List
      </p>
      <section className="bg-white h-auto mt-8 p-8 flex flex-col">
        <h2 className="text-center text-4xl font-bold text-black">Blogs</h2>
        <div className="md:grid md:gap-3 md:grid-cols-3 flex flex-col mt-10 ms-7" >
        {blog.map((item, index) => {
          return (
            <div className="h-auto bg-white rounded shadow-lg mt-3" key={index} >
            <Image src={item.image} alt="12" width={330} height={300} />
            <div className="flex items-center justify-center ms-0 p-5 mt-3">
              <button className="w-30 h-30 rounded-full p-1 text-white bg-[#3C1B65]">
                Web Development
              </button>
              <p className="ms-4 text-[#3C1B65] text-xs">12 may 2023</p>
            </div>
            <div className="mx-0 my-0 p-2">
              <h5 className="font-bold"></h5>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod.
              </p>
            </div>
            <div className="p-4 flex items-center justify-evenly">
              <div className="ms-2 text-xs">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod.
                </p>
              </div>
            </div>
            <div className="ms-1 mb-4 flex justify-between items-center">
              <div className="ms-4">
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
          );
        })} 
        </div>
        
      </section>
    </>
  );
}
