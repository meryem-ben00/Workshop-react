

import React from "react";
import { NavLink } from "react-router-dom";
import combined_shape_2x from "../images/patientsImages/combined-shape-1@2x.png";
import mask_copy_2x from "../images/patientsImages/mask-copy-1@2x.png";
import path_94_2x from "../images/patientsImages/path-94-1@2x.png";
import boy1 from "../images/patientsImages/boy-1@2x.png";
import girl1 from "../images/patientsImages/girl-16-1@2x.png";
import boy2 from "../images/patientsImages/boy-22-1@2x.png";
import girl2 from "../images/patientsImages/girl-12-1@2x.png";
import pagination_first from "../images/patientsImages/icon---pagination---first-1@2x.png";
import pagination_prev from "../images/patientsImages/icon---pagination---prev-1@2x.png";
import pagination_next from "../images/patientsImages/icon---pagination---next-1@2x.png";
import pagination_last from "../images/patientsImages/icon---pagination---last-1@2x.png";


const ActiveNavLink = NavLink;
function Patients() {
    return <div> 
    <div className="relative p-4 flex items-center justify-between"> 
      <div>
        <h1 className="absolute top-10 left-20 text-white text-xl text-center text-white font-medium text-lg leading-5 whitespace-nowrap mb-3.5 font-poppins">List of patients</h1>
        <h3 className="absolute mt-4 left-20 text-white font-poppins text-white font-medium text-sm leading-5">345 available patients</h3>
      </div>
      <NavLink to="/RegisterPatient">
        <div className="mt-4 py-2 px-5 mr-12 rounded">
          <button className="h-10 w-[177px] border-box rounded-lg bg-[#5f8d4e] flex items-center justify-center px-3">
              <div className="w-5 h-5 bg-center bg-no-repeat bg-cover mr-3">
                  <img className="w-[15px] h-[7px]" alt="Combined shape" src={combined_shape_2x} />
                  <img className="mt-1 w-[15px] h-[7px]" alt="Mask copy"
                        src={mask_copy_2x} />
              </div>
              <p className="text-white font-poppins font-semibold text-xs">
                  Register a patient
              </p>
          </button></div>
        </NavLink>
    </div>
    <div class="mt-2 ml-20 mr-20">
    <table class="w-full text-lg text-left">
      <thead class="text-xs bg-gray-200">       
           <tr>
                <th scope="col" class="px-6 py-3 text-[#b5b5c3] font-semibold rounded-l-md">
                    Name
                </th>
                <th scope="col" class="px-0 py-3 text-[#b5b5c3] font-semibold ">
                    ID
                </th>
                <th scope="col" class="px-0 py-3  text-[#b5b5c3] font-semibold ">
                    Email
                </th>
                <th scope="col" class="px-0 py-3  text-[#b5b5c3] font-semibold ">
                    Phone number
                </th>
                <th scope="col" class="px-6 py-3  text-[#b5b5c3] font-semibold ">
                    Date added
                </th>
                <th scope="col" class="px-6 py-3 text-[#b5b5c3] font-semibold rounded-r-md">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody className="space-y-4">
        <tr>
                <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap  text-white">
                <div className="flex items-center">
                  <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                      <img
                          className="w-[45px]"
                          alt="Boy"
                          src={boy1}
                      />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-poppins text-base leading-none">Brooklyn Simmons</div>
                    <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">Depression</div>
                  </div>
                </div>
                    </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                    87364523
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                    brooklyns@mail.com
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                (603) 555-0123
                </td>
                <td class="px-6 py-4">
                <div className="ml-0 w-[74px] h-[41px]">
                  <div className="text-white font-medium font-poppins text-base leading-none">21/12/2022</div>
                  <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">10:40 PM</div>
                </div>
                </td>
                <td class="relative pl-6 pr-0 py-1">
                    <div className="flex justify-between">

                    <button className= "w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                    <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                    Fair
                    </p>
                    </button>
                    
                    <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                      <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                              <img 
                                  className="ml-5 mt-3 h-[11px] w-[7px]"
                                  alt="Path" 
                                  src={path_94_2x} 
                              />
                    </div>
                  </div>
                </td>
        </tr>
        <tr>
            <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap  text-white">
            
            <div className="flex items-center">
              <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                  <img
                      className="w-[45px]"
                      alt="Boy"
                      src={girl1}
                  />
              </div>
              <div className="ml-3">
                <div className="text-white font-medium font-poppins text-base leading-none">Kris Watson</div>
                <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">ADHD</div>
              </div>
            </div>
                </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            93874563
            </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            kristinw@mail.com
            </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            (219) 555-0114
            </td>
            <td class="px-6 py-4">
            <div className="ml-0 w-[74px] h-[41px]">
              <div className="text-white font-medium font-poppins text-base leading-none">21/12/2022</div>
              <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">10:40 PM</div>
            </div>
            </td>
            <td class="relative pl-6 pr-0 py-1">
                <div className="flex justify-between">

                <button className= "w-[74px] h-[28px] bg-[#ffe2e5] rounded-[6px]">
                <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                Critical
                </p>
                </button>
                
                <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                  <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                          <img 
                              className="ml-5 mt-3 h-[11px] w-[7px]"
                              alt="Path" 
                              src={path_94_2x} 
                          />
                </div>
              </div>
            </td>
        </tr>
        <tr>
                <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                
                <div className="flex items-center">
                  <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                      <img
                          className="w-[45px]"
                          alt="Boy"
                          src={boy2}
                      />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-poppins text-base leading-none">Brooklyn Simmons</div>
                    <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">Depression</div>
                  </div>
                </div>
                    </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                23847569
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                jacbj@mail.com
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                (319) 555-0115
                </td>
                <td class="px-6 py-4">
                <div className="ml-0 w-[74px] h-[41px]">
                  <div className="text-white font-medium font-poppins text-base leading-none">21/12/2022</div>
                  <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">12:40 PM</div>
                </div>
                </td>
                <td class="relative pl-6 pr-0 py-1">
                    <div className="flex justify-between">

                    <button className= "w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                    <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                    Fair
                    </p>
                    </button>
                    
                    <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                      <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                              <img 
                                  className="ml-5 mt-3 h-[11px] w-[7px]"
                                  alt="Path" 
                                  src={path_94_2x} 
                              />
                    </div>
                  </div>
                </td>
        </tr>
        <tr>
                <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                
                <div className="flex items-center">
                  <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                      <img
                          className="w-[45px]"
                          alt="Boy"
                          src= {girl2}
                      />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-poppins text-base leading-none">Brooklyn Simmons</div>
                    <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">Depression</div>
                  </div>
                </div>
                    </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                39485632
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                codyf@mail.com
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                (229) 555-0109
                </td>
                <td class="px-6 py-4">
                <div className="ml-0 w-[74px] h-[41px]">
                  <div className="text-white font-medium font-poppins text-base leading-none">24/12/2022</div>
                  <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">03:00 PM</div>
                </div>
                </td>
                <td class="relative pl-6 pr-0 py-1">
                    <div className="flex justify-between">

                    <button className= "w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                    <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                    Fair
                    </p>
                    </button>
                    
                    <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                      <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                              <img 
                                  className="ml-5 mt-3 h-[11px] w-[7px]"
                                  alt="Path" 
                                  src={path_94_2x} 
                              />
                    </div>
                  </div>
                </td>
        </tr>
        <tr>
                <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                
                <div className="flex items-center">
                  <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                      <img
                          className="w-[45px]"
                          alt="Boy"
                          src= {boy1}
                      />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-poppins text-base leading-none">Brooklyn Simmons</div>
                    <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">Depression</div>
                  </div>
                </div>
                    </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                87364523
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                brooklyns@mail.com
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                (603) 555-0123
                </td>
                <td class="px-6 py-4">
                <div className="ml-0 w-[74px] h-[41px]">
                  <div className="text-white font-medium font-poppins text-base leading-none">21/12/2022</div>
                  <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">10:40 PM</div>
                </div>
                </td>
                <td class="relative pl-6 pr-0 py-1">
                    <div className="flex justify-between">

                    <button className= "w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                    <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                    Fair
                    </p>
                    </button>
                    
                    <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                      <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                              <img 
                                  className="ml-5 mt-3 h-[11px] w-[7px]"
                                  alt="Path" 
                                  src={path_94_2x} 
                              />
                    </div>
                  </div>
                </td>
        </tr>
        <tr>
            <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap  text-white">
            
            <div className="flex items-center">
              <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                  <img
                      className="w-[45px]"
                      alt="Boy"
                      src={girl1}
                  />
              </div>
              <div className="ml-3">
                <div className="text-white font-medium font-poppins text-base leading-none">Kris Watson</div>
                <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">ADHD</div>
              </div>
            </div>
                </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            93874563
            </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            kristinw@mail.com
            </td>
            <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
            (219) 555-0114
            </td>
            <td class="px-6 py-4">
            <div className="ml-0 w-[74px] h-[41px]">
              <div className="text-white font-medium font-poppins text-base leading-none">22/12/2022</div>
              <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">05:20 PM</div>
            </div>
            </td>
            <td class="relative pl-6 pr-0 py-1">
                <div className="flex justify-between">

                <button className= "w-[74px] h-[28px] bg-[#ffe2e5] rounded-[6px]">
                <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                Critical
                </p>
                </button>
                
                <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                  <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                          <img 
                              className="ml-5 mt-3 h-[11px] w-[7px]"
                              alt="Path" 
                              src={path_94_2x} 
                          />
                </div>
              </div>
            </td>
        </tr>
        <tr>
                <td scope="row" class="px-1 py-4 font-medium text-gray-900 whitespace-nowrap text-white">
                
                <div className="flex items-center">
                  <div className="pt-1 pl-0.5 pb-0 left-0 w-12 h-12 bg-[#f3f6f9] rounded-md">
                      <img
                          className="w-[45px]"
                          alt="Boy"
                          src={boy2}
                      />
                  </div>
                  <div className="ml-3">
                    <div className="text-white font-medium font-poppins text-base leading-none">Brooklyn Simmons</div>
                    <div className="text-[#b5b5c3] font-poppins font-medium text-sm leading-none mt-2">Depression</div>
                  </div>
                </div>
                    </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                23847569
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                jacbj@mail.com
                </td>
                <td class="px-6 py-4" className="text-white font-poppins font-medium text-base leading-none">
                (319) 555-0115
                </td>
                <td class="px-6 py-4">
                <div className="ml-0 w-[74px] h-[41px]">
                  <div className="text-white font-medium font-poppins text-base leading-none">21/12/2022</div>
                  <div className="text-[#b5b5c3] font-poppins font-normal text-sm leading-none pt-1">12:40 PM</div>
                </div>
                </td>
                <td class="relative pl-6 pr-0 py-1">
                    <div className="flex justify-between">

                    <button className= "w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                    <p className="left-[10px] top-[9px] text-center text-[#5f8d4e] font-poppins font-lg text-[13px] leading-none">
                    Fair
                    </p>
                    </button>
                    
                    <div className="bg-[#fafafa] rounded-[6px] h-9 w-9">
                      <div className="float-left bg-[#181c32] ml-4 mt-3.5 opacity-30 rounded-[1px] h-[7px] w-[2px] transform rotate-[90deg]" />
                              <img 
                                  className="ml-5 mt-3 h-[11px] w-[7px]"
                                  alt="Path" 
                                  src={path_94_2x} 
                              />
                    </div>
                  </div>
                </td>
        </tr>
        </tbody>

   </table> 
   </div>
   <div id="div4" className="p-10 flex justify-center space-x-2  text-black font-poppins text-[16.5px] leading-none">
                  <button className=" float-left flex justify-center items-center left-0 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination" 
                          src= {pagination_first} />
                  </button>
                  <button className=" float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination prev" 
                          src= {pagination_prev} />
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-[#2e8544] rounded-[10.15px] text-white">
                      1
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      2
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px] ">
                      3
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px] ">
                      ...
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px] ">
                      10
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination next" 
                          src= {pagination_next} />
                  </button>
                  <button className="float-left flex justify-center items-center ml-2 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination last" 
                          src= {pagination_last} />
                  </button>
                </div>
  

</div>;
}

export default Patients;