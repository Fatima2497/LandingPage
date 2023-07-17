"use client";
import Image from "next/image";
import { BsFillShareFill, BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoArrowUndo } from "react-icons/io5";

export default function SingleBlogPage() {
  return (
    <>
      <h3 className="text-center text-3xl font-bold bg-[#F6F6FF]">Blog</h3>
      <p className="text-center text-xs bg-[#F6F6FF]">
        Home <span>&gt;</span> Blog Details
      </p>
      <section className="bg-white h-auto mt-2 p-8">
        <div className="container p-10 bg-white">
          <div className="md:grid md:grid-cols-2 gap-10 flex flex-col p-10 bg-white">
            <div className="w-90">
              <div className="flex flex-col items-start bg-white">
                <div className="h-50 w-full mb-4 roubded-lg">
                  <Image
                    src="/assets/images/comp.png"
                    alr="compan"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-xs text-[#FB1D87]">12 May 2023</span>
                  </p>
                  <p>
                    <span className="text-xs ms-10 text-[#FB1D87]">
                      Web Development
                    </span>
                  </p>
                </div>
                <div className="mt-18 h-auto w-full">
                  <h3 className="text-lg tracking-tighter fond-bold text-black">
                    Website – The quickest way to take your business online
                  </h3>
                  <p className=" text-xs text-justify">
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
                  <h3 className="text-lg tracking-tighter mt-2 fond-bold text-black">
                    So, what is a website?
                  </h3>
                  <p className="mt-2 text-xs text-justify">
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
                  <h3 className="text-xl tracking-tighter  fond-bold mt-3 text-black">
                    Essential Features of a Good Website
                  </h3>
                  <p className="mt-2 text-xs text-justify">
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
                </div>
                <div className=" w-full h-15 mt-3 p-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="bg-[#E5E1FA] ms-4 p-2 text-xs rounded-full">
                        Tech
                      </p>
                      <p className="bg-[#E5E1FA] ms-4 p-2 text-xs rounded-full">
                        Design
                      </p>
                      <p className="bg-[#E5E1FA] ms-4 p-2 text-xs rounded-full">
                        Web
                      </p>
                    </div>

                    <div className="bg-[#E5E1FA] p-2 rounded-full">
                      {" "}
                      <BsFillShareFill />{" "}
                    </div>
                  </div>
                  <div className="mt-3 bg-[#F1EFFC] p-2 rounded-md flex justify-start items-center">
                    <div className="mb-6">
                      <Image
                        src="/assets/images/man.png"
                        alt="man"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <h5 className="ms-3">Jmaes Wliams</h5>
                      <p className="text-xs font-thin ms-3">
                        When an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.It has
                        survived not only five centuries, but also{" "}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-start justify-center">
                      <BsArrowLeft className="w-2" />
                      <p className="text-xs text-[#000000] font-thin ">
                        previous
                      </p>
                    </div>
                    <div className="flex items-start justify-center">
                      <p className="text-xs text-[#000000] font-thin">
                        {" "}
                        Go to next
                      </p>{" "}
                      <BsArrowRight className="w-2" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 p-2 h-auto w-full flex flex-col items-start">
                  <h3 className="text-2xl fond-bold tracking-tighter text-black">
                    Comments
                  </h3>
                  <div className="w-full p-1">
                    <div className="flex items-center justify-center">
                      <div className="mb-6">
                        <Image
                          src="/assets/images/c1.png"
                          alt="man"
                          width={70}
                          height={70}
                        />
                      </div>

                      <div className="w-30 relative">
                        <h5 className="ms-1 text-xs font-bold">
                          Peter Cruiser
                          <span className="text-xs ms-32">19 May 2023</span>
                        </h5>
                        <IoArrowUndo className="absolute top-0 right-0 text-xs" />
                        <p className="text-xs ms-1 text-justify">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-10 ms-8">
                      <div className="mb-6">
                        <Image
                          src="/assets/images/c2.png"
                          alt="man"
                          width={70}
                          height={70}
                        />
                      </div>

                      <div className="w-30 relative">
                        <h5 className="ms-1 text-xs font-bold">
                          Peter Cruiser
                          <span className="text-xs ms-32">19 May 2023</span>
                        </h5>
                        <IoArrowUndo className="absolute top-0 right-0 text-xs" />
                        <p className="text-xs ms-1 text-justify">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                      <div className="mb-6">
                        <Image
                          src="/assets/images/c3.png"
                          alt="man"
                          width={70}
                          height={70}
                        />
                      </div>

                      <div className="w-30 relative">
                        <h5 className="ms-1 text-xs font-bold">
                          Peter Cruiser
                          <span className="text-xs ms-32">19 May 2023</span>
                        </h5>
                        <IoArrowUndo className="absolute top-0 right-0 text-xs" />
                        <p className="text-xs ms-1 text-justify">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center mt-10 ms-8">
                      <div className="mb-6">
                        <Image
                          src="/assets/images/c4.png"
                          alt="man"
                          width={70}
                          height={70}
                        />
                      </div>

                      <div className="w-30 relative">
                        <h5 className="ms-1 text-xs font-bold">
                          Peter Cruiser
                          <span className="text-xs ms-32">19 May 2023</span>
                        </h5>
                        <IoArrowUndo className="absolute top-0 right-0 text-xs" />
                        <p className="text-xs ms-1 text-justify">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry’s standard
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white mt-3 p-3 h-100 w-full ">
                  <h3 className="text-black text-2xl tracking-tighter fond-bold">
                    Leave a Comment
                  </h3>
                  <p className="text-xs">
                    Your email address will not be publishes.
                  </p>
                  <div className="w-full mt-3">
                    <form className="w-full max-w-lg mx-auto">
                      <div className="flex items-center justify-between">
                        <div className="mb-4 ">
                          <input
                            className="w-full px-1 text-xs py-1 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Name"
                          />
                        </div>

                        <div className="mb-4 ">
                          <input
                            className="w-full px-1 text-xs py-1 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full px-1 text-xs py-1 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Website"
                        />
                      </div>

                      <div className="mb-4">
                        <textarea
                          className="w-full h-32 px-3 text-xs py-2 leading-tight border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                          id="message"
                          name="message"
                          required
                          placeholder="Comment"
                        ></textarea>
                      </div>
                      <div className="flex justify-center w-full">
                        <button
                          className="px-4 text-xs py-2 w-full rounded-full text-white bg-gradient-to-r from-[#9F37F0] to-[#3C1B65] "
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white ">
              <div className="mb-4 h-auto bg-white shadow-xl p-4">
                <input
                  className="w-full px-2 text-xs py-2 leading-tight border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Type your search"
                />
              </div>
              <div className="mb-4 h-auto bg-white shadow-xl p-4">
                <h5 className="font-bold text-xl">Blog Category</h5>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">Web Design</p>
                  <hr />
                </div>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">UI UX Design</p>
                  <hr />
                </div>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">Graphic Design</p>
                  <hr />
                </div>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">Wordpress</p>
                  <hr />
                </div>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">Video Editing</p>
                  <hr />
                </div>
                <div className="mt-3 p-2">
                  <p className="font-bold text-xs mb-2">Wix</p>
                  <hr />
                </div>
              </div>
              <div className="mb-4 h-auto bg-white shadow-xl p-4">
                <h5 className="font-bold text-xl">Latest Blogs</h5>
                <div className="flex items-center justify-start mt-3">
                  <div>
                    <Image src='/assets/images/blogs1.png' alt='blog' width={50} height={50} />
                  </div>
                  <div className="ms-2">
                    <p className="text-xs text-[#777777]">May 9,2023</p>
                    <p className="text-xs text-black font-bold">How websites work properly</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-3">
                  <div>
                    <Image src='/assets/images/blogs2.png' alt='blog' width={50} height={50} />
                  </div>
                  <div className="ms-2">
                    <p className="text-xs text-[#777777]">May 9,2023</p>
                    <p className="text-xs text-black font-bold">How websites work properly</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-3">
                  <div>
                    <Image src='/assets/images/blogs3.png' alt='blog' width={50} height={50} />
                  </div>
                  <div className="ms-2">
                    <p className="text-xs text-[#777777]">May 9,2023</p>
                    <p className="text-xs text-black font-bold">How websites work properly</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-3">
                  <div>
                    <Image src='/assets/images/blogs4.png' alt='blog' width={50} height={50} />
                  </div>
                  <div className="ms-2">
                    <p className="text-xs text-[#777777]">May 9,2023</p>
                    <p className="text-xs text-black font-bold">How websites work properly</p>
                  </div>
                </div>
              </div>
              <div className="mb-4 h-auto bg-white shadow-xl p-4">
                <h5 className="font-bold text-xl">Popular Tags</h5>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Tech
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    UI
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Web
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Business
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    UX
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Creativity
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    App
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Modern Art
                  </div>
                  <div className="bg-[#E5E1FA] p-2 rounded text-center text-sm">
                    Future
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
