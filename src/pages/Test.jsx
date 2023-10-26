import React from 'react'

function Test() {
  return (
    <div className="flex mx-auto my-[50px]">
      <div className="w-full">
        <div>
          <h1>Create Test</h1>
        </div>
        <div className="mx-auto my-[100px] ml-80 justify-center object-center items-center content-center">
          <div className="">
            <ul className="flex gap-5">
              <li>ADHD</li>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Bipolar Disorder</li>
            </ul>
          </div>
          <div class="w-[60%] h-full bg-[#DEDEDE] rounded-lg">
            <div class="">
              <h1>Test #1</h1>
              <label
                for="large-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="text"
                id="large-input"
                placeholder="Test......."
                className="block w-full p-4 placeholder:text-black text-gray-900 border border-gray-300 rounded-lg bg-white sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="text"
                id="default-input"
                placeholder="Test......."
                className="bg-white border placeholder:text-black border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                for="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              ></label>
              <input
                type="text"
                id="default-input"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Test
