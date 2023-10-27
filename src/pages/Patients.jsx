

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
    return (
        <div className="bg-blue-900 flex flex-row justify-center w-full">
            <div className="bg-blue-900 border-none h-240 w-screen">
                <div id="div1" className="absolute left-24 top-28 w-[1241px] flex flex-row items-end justify-between">
                    <div className="flex flex-col items-start">
                        <p className="text-center text-white font-medium text-lg leading-5 whitespace-nowrap mb-3.5 font-poppins">
                            List of Patients
                        </p>
                        <p className="font-poppins text-white font-medium text-sm leading-5">
                            345 available Patients
                        </p>
                    </div>
                    <ActiveNavLink to="/RegisterPatient">
                    <button className="h-10 w-[177px] border-box rounded-lg bg-[#5f8d4e] flex items-center justify-center px-3">
                        <div className="w-5 h-5 bg-center bg-no-repeat bg-cover mr-3">
                            <img className="w-[15px] h-[7px]" alt="Combined shape" src={combined_shape_2x} />
                            <img className="mt-1 w-[15px] h-[7px]" alt="Mask copy"
                                 src={mask_copy_2x} />
                        </div>
                        <p className="text-white font-poppins font-semibold text-xs">
                            Register a patient
                        </p>
                    </button>
                    </ActiveNavLink>
                </div>
                
                  <div className="absolute w-[1240px] h-11 bg-[#fafafa] text-xs left-[100px] top-[186px] rounded-md leading-none">
                      <p className="absolute top-4 left-4 text-[#b5b5c3] font-semibold ">
                          Name
                      </p>
                      <p className="absolute top-4 left-[272px] text-[#b5b5c3] font-semibold ">
                          ID
                      </p>
                      <p className="absolute top-4 left-[414px] text-[#b5b5c3] font-semibold ">
                          Email
                      </p>
                      <p className="absolute top-4 left-[636px] text-[#b5b5c3] font-semibold ">
                          Phone number
                      </p>
                      <p className="absolute top-4 left-[852px] text-[#b5b5c3] font-semibold ">
                          Date added
                      </p>
                      <p className="absolute top-4 left-[1049px] text-[#b5b5c3] font-semibold ">
                          STATUS
                      </p>
                  </div>

                <div id="div3_R1" className="absolute h-[50px] left-[100px] top-[259px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]">
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                            <img 
                                className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                                alt="Path" 
                                src={path_94_2x} 
                            />
                        </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                  Fair
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                    <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                    21/12/2022
                    </p>
                    <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                        10:40 PM
                    </p>
                  </div>
                  
                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  87364523
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  brooklyns@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  (603) 555-0123
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src={boy1}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                          Brook Simmon
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          Depression
                      </p>
                  </div>
              </div>


                </div>

                <div id="div3_R2" className="absolute h-[50px] left-[100px] top-[339px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]" >
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#ffe2e5] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                    Critical
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  21/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  05:20 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  93874563
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  kristinw@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                  (219) 555-0114
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src= {girl1}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                        Kris Watson
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          ADHD
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div3_R3" className="absolute h-[50px] left-[100px] top-[419px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]">
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                    Fair
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  21/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  12:40 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    23847569
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    jacbj@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    (319) 555-0115
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src= {boy2}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                            Jacob Jones
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          Anxiety
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div3_R4" className="absolute h-[50px] left-[100px] top-[499px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]"
                         >
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                  Fair
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  24/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  03:00 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    39485632
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    codyf@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    (229) 555-0109
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src= {girl2}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                            Cody Fisher
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          Cardiologists
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div3_R5" className="absolute h-[50px] left-[100px] top-[579px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]"
                         >
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                  Fair
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  21/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  10:40 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    87364523
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    brooklyns@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    (603) 555-0123
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src={boy1}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[234px] text-white font-poppins font-medium text-base leading-none">
                            Brooklyn Simmons
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          Depression
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div3_R6" className="absolute h-[50px] left-[100px] top-[659px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]"
                         >
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#ffe2e5] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                  Critical
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  22/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  05:20 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    93874563
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    kristinw@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    (219) 555-0114
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src= {girl1}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                            Kris Watson
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                         ADHD
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div3_R7" className="absolute h-[50px] left-[100px] top-[739px] w-[1240px]">

                  <div className="absolute bg-[#fafafa] rounded-[6px] h-[32px] w-[32px] left-[1208px] top-[9px]">
                    <div className="bg-center bg-no-repeat bg-cover h-[20px] w-[20px] relative left-[6px] top-[6px]"
                         >
                        <div className="absolute bg-[#181c32] opacity-30 rounded-[1px] h-[7px] w-[2px] left-[6px] top-[6px] transform rotate-[90deg]" />
                        <img 
                            className="absolute left-[9px] top-[4px] h-[11px] w-[7px]"
                            alt="Path" 
                            src={path_94_2x} 
                        />
                    </div>
                  </div>

                  <button className="absolute left-[1036px] top-[12px] w-[76px] h-[26px] bg-transparent rounded-[6px] border-box">
                  <div className="relative w-[74px] h-[28px] bg-[#f3fff3] rounded-[6px]">
                  <p className="absolute left-[10px] top-[9px] w-[55px] text-center text-[#5f8d4e] font-poppins font-medium text-[11px] leading-none">
                  Fair
                  </p>
                  </div>
                  </button>

                  <div className="absolute left-[854px] top-[3px] w-[74px] h-[41px]">
                  <p className="absolute top-[-1px] text-white font-poppins font-medium text-base leading-none">
                  23/12/2022
                  </p>
                  <p className="absolute top-[23px] text-[#b5b5c3] font-poppins font-normal text-sm leading-none">
                  12:40 PM
                  </p>
                  </div>

                  <p className="absolute left-[272px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    23847569
                  </p>

                  <p className="absolute left-[414px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    jacbj@mail.com
                  </p>

                  <p className="absolute left-[636px] top-[13px] text-white font-poppins font-medium text-base leading-none">
                    (319) 555-0115
                  </p>

                  <div className="absolute top-0 left-0 w-[199px] h-[50px]">
                  <div className="absolute top-0 left-0 w-[50px] h-[50px] bg-[#f3f6f9] rounded-md">
                      <img
                          className="absolute top-[10px] left-[5px] w-[40px] h-[40px]"
                          alt="Boy"
                          src= {boy2}
                      />
                  </div>
                  <div className="absolute left-[65px] top-[4px] w-[134px] h-[41px]">
                      <p className="absolute top-[-1px] w-[134px] text-white font-poppins font-medium text-base leading-none">
                            Jacob Jones
                      </p>
                      <p className="mt-6 text-[#b5b5c3] font-poppins font-medium text-sm leading-none">
                          Anxiety
                      </p>
                  </div>
                  </div>


                </div>

                <div id="div4" className="absolute h-10 w-[416px] left-[512px] top-[864px]">
                  <button className="absolute flex justify-center items-center left-0 top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination" 
                          src= {pagination_first} />
                  </button>
                  <button className="absolute flex justify-center items-center left-[47px] top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination prev" 
                          src= {pagination_prev} />
                  </button>
                  <button className="absolute flex justify-center items-center left-[94px] top-0 w-10 h-10 bg-[#2e8544] rounded-[10.15px] text-white font-poppins text-[16.5px] leading-none">
                      1
                  </button>
                  <button className="absolute flex justify-center items-center left-[141px] top-0 w-10 h-10 bg-white rounded-[10.15px] text-black font-poppins text-[16.5px] leading-none">
                      2
                  </button>
                  <button className="absolute flex justify-center items-center left-[188px] top-0 w-10 h-10 bg-white rounded-[10.15px] text-black font-poppins text-[16.5px] leading-none">
                      3
                  </button>
                  <button className="absolute flex justify-center items-center left-[235px] top-0 w-10 h-10 bg-white rounded-[10.15px] text-black font-poppins text-[16.5px] leading-none">
                      ...
                  </button>
                  <button className="absolute flex justify-center items-center left-[282px] top-0 w-10 h-10 bg-white rounded-[10.15px] text-black font-poppins text-[16.5px] leading-none">
                      10
                  </button>
                  <button className="absolute flex justify-center items-center left-[328px] top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination next" 
                          src= {pagination_next} />
                  </button>
                  <button className="absolute flex justify-center items-center left-[375px] top-0 w-10 h-10 bg-white rounded-[10.15px]">
                      <img className="w-5 h-5" alt="Icon pagination last" 
                          src= {pagination_last} />
                  </button>
                </div>
            </div>
        </div>
    );
}

export default Patients;
