import React from "react";
import image1 from "../../images/DashboardImages/Image.png";
import image2 from "../../images/DashboardImages/Image2.png";
import image3 from "../../images/DashboardImages/Image3.png";
import image4 from "../../images/DashboardImages/Image4.png";
function Status() {
  return (
    <div className="flex justify-between gap-10 ">
      <div className="flex flex-col gap-3 bg-colorWhite w-1/4 p-5 rounded-lg">
        <span className="text-black">New Patients</span>
        <div className="flex justify-between">
          <span className="text-green-600">125</span>
          <div>
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="w-100 rounded h-2 bg-gray-200">
          <div className="bg-gradient-to-r from-fuchsia-700 to-sky-500/10 w-1/2 rounded h-2"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-colorWhite w-1/4 p-5 rounded-lg">
        <span className="text-black">Old Patients</span>
        <div className="flex justify-between">
          <span className="text-green-600">218</span>
          <div>
            <img src={image2} alt="" />
          </div>{" "}
        </div>
        <div className="w-100 rounded h-2 bg-gray-200">
          <div className="bg-gradient-to-r from-rose-400 to-red-300/10 w-1/2 rounded h-2"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-colorWhite w-1/4 p-5 rounded-lg">
        <span className="text-black">Today's Visitors</span>
        <div className="flex justify-between">
          <span className="text-green-600">25</span>
          <div>
            <img src={image3} alt="" />
          </div>
        </div>
        <div className="w-100 rounded h-2 bg-gray-200">
          <div className="bg-gradient-to-r from-lime-600 to-lime-400/10 w-1/2 rounded h-2"></div>
        </div>
      </div>
      <div className="flex flex-col gap-3 bg-colorWhite w-1/4 p-5 rounded-lg">
        <span className="text-black">Visitors</span>
        <div className="flex justify-between">
          <span className="text-green-600">2,479</span>
          <div>
            <img src={image4} alt="" />
          </div>
        </div>
        <div className="w-100 rounded h-2 bg-gray-200">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400/10 w-1/2 rounded h-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Status;
