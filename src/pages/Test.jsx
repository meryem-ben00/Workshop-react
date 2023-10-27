import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { PiDotsNineBold, PiDotsSixVerticalBold } from 'react-icons/pi'
import { FaCheck } from 'react-icons/fa'
import { AiOutlinePlusCircle } from 'react-icons/ai'

function Test() {
  return (
    <div className="my-[50px]">
      <div className="flex mx-auto ">
        <div className="w-full">
          <h1 className="text-white text-3xl ml-11">Create Test</h1>

          <div className="mx-auto relative w-[50%]">
            <div className="">
              <ul className="flex gap-5 text-white border-b-4 border-white">
                <li>
                  <a
                    href="/"
                    className="border-b-[5px] text-green-700 border-green-700"
                  >
                    ADHD
                  </a>
                </li>
                <li>
                  <a href="/" className="">
                    Depression
                  </a>
                </li>
                <li>
                  <a href="/" className="">
                    Anxiety
                  </a>
                </li>
                <li>
                  <a href="/" className="">
                    Bipolar Disorder
                  </a>
                </li>
              </ul>
            </div>
            <div class=" h-[100%] bg-[#9198aa] rounded-3xl">
              <div className="m-9 pb-6 pt-6">
                <div className="mb-2 mt-3">
                  <div className="flex justify-between">
                    <div className="flex">
                      <PiDotsNineBold className="text-3xl text-[#1e2e5c]" />
                      <h1 className="text-2xl ml-4 text-white">Test #1</h1>
                    </div>

                    <RxCross1 className="text-3xl cursor-pointer text-[#1e2e5c]" />
                  </div>

                  <label
                    for="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    id="large-input"
                    placeholder="Test......."
                    className="block w-full p-4 placeholder:text-black text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="relative flex flex-wrap items-stretch mb-2">
                  <div className="pr-6 mt-1 ml-16 flex">
                    <PiDotsSixVerticalBold className=" mt-1 text-2xl font-black mr-2 text-[#1e2e5c]" />
                    <span className=" text-[#1e2e5c] text-2xl">A</span>
                  </div>

                  <input
                    type="text"
                    class="relative m-0 mr-[2px] block min-w-0 flex-auto rounded-l w-11 border border-solid bg-white border-neutral-300   px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary    dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                    placeholder="Test......."
                    aria-label="Recipient's username with two button addons"
                  />

                  <button
                    className="z-[2] inline-block rounded-none  px-2 pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <FaCheck className="text-green-700 text-2xl" />
                  </button>
                  <span className="h-10 w-[1px] bg-gray-700" />
                  <button
                    className="z-[2] inline-block  rounded-r-lg  px-2  pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <RxCross1 className="text-2xl cursor-pointer text-[#1e2e5c]" />
                  </button>
                </div>
                <div class="relative flex flex-wrap items-stretch">
                  <div className="pr-6 mt-1 ml-16 flex  ">
                    <PiDotsSixVerticalBold className=" mt-1 text-2xl font-black mr-2 text-[#1e2e5c]" />
                    <span className="text-[#1e2e5c] text-2xl">B</span>
                  </div>

                  <input
                    type="text"
                    class="relative m-0 mr-[2px] block w-[1px] min-w-0 flex-auto rounded-l border border-solid bg-white border-neutral-300   px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary    dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                    aria-label="Recipient's username with two button addons"
                  />

                  <button
                    className="z-[2] inline-block rounded-none  px-2  pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <FaCheck className="text-green-700 text-2xl" />
                  </button>
                  <span className="h-10 w-[1px] bg-gray-700" />
                  <div>
                    <button
                      className="z-[2] inline-block rounded-r-lg  px-2  pb-2 pt-2.5 text-xs bg-white"
                      type="button"
                      data-te-ripple-init
                    >
                      <RxCross1 className="text-2xl cursor-pointer text-[#1e2e5c]" />
                    </button>
                  </div>
                </div>
                <div className="text-white flex justify-end pt-2">
                  <h1>Add more</h1>
                  <AiOutlinePlusCircle className="text-2xl ml-1" />
                </div>
              </div>
            </div>
            <div class=" h-[100%] bg-[#9198aa] rounded-3xl">
              <div className="m-9 pb-6 pt-6">
                <div className="mb-2 mt-3">
                  <div className="flex justify-between">
                    <div className="flex">
                      <PiDotsNineBold className="text-3xl text-[#1e2e5c]" />
                      <h1 className="text-2xl ml-4 text-white">Test #1</h1>
                    </div>

                    <RxCross1 className="text-3xl cursor-pointer text-[#1e2e5c]" />
                  </div>

                  <label
                    for="large-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="text"
                    id="large-input"
                    placeholder="Test......."
                    className="block w-full p-4 placeholder:text-black text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div class="relative flex flex-wrap items-stretch mb-2">
                  <div className="pr-6 mt-1 ml-16 flex">
                    <PiDotsSixVerticalBold className=" mt-1 text-2xl font-black mr-2 text-[#1e2e5c]" />
                    <span className=" text-[#1e2e5c] text-2xl">A</span>
                  </div>

                  <input
                    type="text"
                    class="relative m-0 mr-[2px] block min-w-0 flex-auto rounded-l w-11 border border-solid bg-white border-neutral-300   px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary    dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                    placeholder="Test......."
                    aria-label="Recipient's username with two button addons"
                  />

                  <button
                    className="z-[2] inline-block rounded-none  px-2 rounded- pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <FaCheck className="text-green-700 text-2xl" />
                  </button>
                  <span className="h-10 w-[1px] bg-gray-700" />
                  <button
                    className="z-[2] inline-block rounded-r-lg  px-2  pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <RxCross1 className="text-2xl cursor-pointer text-[#1e2e5c]" />
                  </button>
                </div>
                <div class="relative flex flex-wrap items-stretch">
                  <div className="pr-6 mt-1 ml-16 flex  ">
                    <PiDotsSixVerticalBold className=" mt-1 text-2xl font-black mr-2 text-[#1e2e5c]" />
                    <span className="text-[#1e2e5c] text-2xl">B</span>
                  </div>

                  <input
                    type="text"
                    class="relative m-0 mr-[2px] block w-[1px] min-w-0 flex-auto rounded-l border border-solid bg-white border-neutral-300   px-3 py-[0.25rem] text-base font-normal leading-[1.6]  outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary    dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
                    aria-label="Recipient's username with two button addons"
                  />

                  <button
                    className="z-[2] inline-block rounded-none  px-2 rounded- pb-2 pt-2.5 text-xs bg-white"
                    type="button"
                    data-te-ripple-init
                  >
                    <FaCheck className="text-green-700 text-2xl" />
                  </button>
                  <span className="h-10 w-[1px] bg-gray-700" />
                  <div>
                    <button
                      className="z-[2] inline-block  px-2 rounded-r-lg  pb-2 pt-2.5 text-xs bg-white"
                      type="button"
                      data-te-ripple-init
                    >
                      <RxCross1 className="text-2xl cursor-pointer text-[#1e2e5c]" />
                    </button>
                  </div>
                </div>
                <div className="text-white flex justify-end pt-2">
                  <h1>Add more</h1>
                  <AiOutlinePlusCircle className="text-2xl ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-9 relative justify-center">
        <button className="text-white">Cancel</button>
        <button
          type="button"
          class="focus:outline-none text-white bg-[#2f8348] hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
        >
          Publish
        </button>
      </div>
    </div>
  )
}

export default Test
