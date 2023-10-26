import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function Patients() {
  return (
    <div className="">
      <AiOutlineArrowLeft className="absolute top-24 right-24 text-3xl text-white" />
      <div className="w-6/12 mx-auto my-[50px]">
        <div className="flex justify-between relative">
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold text-white">
              OP - Register a patient
            </h1>
          </div>
          <div className="mt-12 text-white">
            <h1>ID: #123</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Date"
              class="block mb-2 text-sm font-medium  text-gray-900 dark:text-white"
            >
              Date
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Age
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="relative justify-center items-center z-0 w-full mb-6 group">
            <label
              for="Gender"
              class="block mb-6 text-sm font-medium items-center justify-center text-gray-900 dark:text-white"
            >
              Gender
            </label>
            <div class="flex  items-center justify-center">
              <div class="flex items-center justify-center mr-4">
                <label
                  for="inline-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Male
                </label>
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="flex items-center mr-4">
                <label
                  for="inline-2-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Female
                </label>
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="flex items-center mr-4">
                <label
                  for="inline-3-radio"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Author
                </label>
                <input
                  id="inline-3-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  class="w-4 h-4 ml-2 text-blue-600 bg-[#D9D9D9] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Blood group
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="default-input"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            House Address
          </label>
          <input
            type="text"
            id="default-input"
            placeholder="name,house,city,...."
            class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date or Birth
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              for="Date"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Department
            </label>
            <input
              class="w-full bg-[#D9D9D9] text-gray-900 mt-2 p-3 rounded-3xl focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <button
              type="button"
              class="w-full mt-8 h-12 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Patients
