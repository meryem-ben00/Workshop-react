import React from 'react';
import { NavLink } from "react-router-dom";
import gallery from "../images/settingsImages/gallery-add-1@2x.png";
import line_11_2_green from "../images/settingsImages/line-11-2@2x.png";
import line_11_1 from "../images/settingsImages/line-11-1@2x.png";
import line_10 from "../images/settingsImages/line-10-1@2x.png";
import vector from "../images/settingsImages/vector-1@2x.png";


const ActiveNavLink = NavLink;

function Settings() {

  return (
  <div id="index" className="bg-[#1e2e5c] flex flex-row justify-center w-full">
  <div id="div" className="bg-[#1e2e5c] border-none h-[960px] w-[1440px]">
    <p id="settings" className="text-white font-800 text-[30px] h-9 absolute top-[112px] left-[51px] whitespace-nowrap">
    Settings
    </p>
    <img
        className="h-[1px] absolute top-[227px] left-[266px] w-[776px]"
        id="line"
        alt="Line"
        src={line_10}
      />
    <img
      className="h-[1px] absolute top-[463px] left-[266px] w-[1087px]-2"
      id="line-2"
      alt="Line"
      src={line_11_1}
    />
    <div id="titles" className="absolute top-[191px] left-[266px] h-[36px] w-[400px]">
      <div id="title" className="absolute top-0 left-0 h-[36px] w-[186px]">
        <div id="frame-2" className="relative h-[36px]">
            <div id="account-setting-wrapper" className="absolute top-0 left-0 h-[27px] w-[186px]">
                <p id="account-setting" className="font-[700] text-[20px] absolute top-[-1px] left-[12px]">
                    <span id="text-wrapper-5" className="text-[#2e8544] font-manrope text-[700] leading-normal">Account&nbsp;&nbsp;Setting</span>
                </p>
            </div>
            <img 
                className="absolute top-[36px] left-0 h-[1px] w-[186px]" 
                id="line-3"
                alt="Line" 
                src={line_11_2_green}
            />
        </div>
      </div>
      <div id="frame-wrapper" className="absolute top-0 left-[198px] h-[36px] w-[115px]">
              <div id="frame-2" className="relative h-[36px]">
                <div id="password-wrapper"className="absolute top-0 left-0 h-[27px] w-[115px]">
                  <p id="span-wrapper" className="text-[#ffffff] font-manrope text-[20px] font-[500] h-normal top-[-1px] left-[12px] absolute">
                    <span id="text-wrapper-6" className="text-[#ffffff] font-manrope text-[20px] font-[500] h-normal">
                    <ActiveNavLink to="/settings_password">Password</ActiveNavLink></span>
                  </p>
                </div>
              </div>
      </div>
      <div id="div-wrapper" className="h-[36px] left-[325px] absolute t-0 width-[75px]">
        <div id="frame-2" className="relative h-[36px]">
          <div id="email-wrapper" className="h-[27px] left-0 absolute top-0 w-[75px]">
            <p id="span-wrapper" className="text-[#ffffff] font-manrope text-[20px] font-[500] h-normal top-[-1px] left-[12px] absolute">
              <span id="text-wrapper-6" className="text-[#ffffff] font-manrope text-[20px] font-[500] h-normal">
                <ActiveNavLink to="/settings_email">Email</ActiveNavLink>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="group-wrapper" className="bg-[#fafbfc] rounded-[18px] h-[132px] left-[266px] absolute top-[290px] w-[130px]">
        <div id="group-3" className="h-[83px] left-[18px] relative top-[25px] w-[94px]">
            <div id="group-4" className="h-[83px] relative w-[96px]">
                <label htmlFor="file-upload" className="cursor-pointer absolute top-0 left-0 w-full h-full">
                    <p id="upload-your-photo" className="text-[#585858] font-manrope text-[12px] font-[500] left-0 absolute text-center top-[50px] w-[94px]">
                        <span id="text-wrapper-7" className="text-[#585858] font-manrope text-[12px] font-[500]">Upload your photo</span>
                    </p>
                    <img
                        id="gallery-add"
                        className="h-[36px] left-[29px] absolute w-[36px]"
                        alt="Gallery add"
                        src={gallery}
                    />
                </label>
                <input 
                    type="file" 
                    id="file-upload" 
                    accept="image/*"
                    className="opacity-0 absolute inset-0 h-full w-full cursor-pointer"
                />
            </div>
        </div>
    </div>
    <p id="your-profile-picture" className="text-[#ffffff] font-manrope font-[500] text-[16px] left-[266px] absolute top-[256px]">
      <span id="text-wrapper-8" className="text-[#ffffff] font-manrope font-[500] text-[16px]">Your Profile&nbsp;&nbsp;Picture</span>
    </p>

    <div id="group-5" className="h-[81px] left-[267px] absolute top-[497px] w-[543px]">
      <label htmlFor="overlap-group" className="text-[#ffffff]">First Name</label>
      <input id="overlap-group" className="bg-#fafbfc text-[#4B5563] rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="text" placeholder="Please enter the full name" />
    </div>
    <div className="h-[81px] left-[267px] absolute top-[602px] w-[543px]" id="group-6">
    <label htmlFor="overlap-group" className="text-[#ffffff]">Username</label>
      <input id="overlap-group" className="bg-[#fafbfc] text-[#4B5563] rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="text" placeholder="Please enter your username" />
    </div>
    <div className="h-[81px] left-[267px] absolute top-[707px] w-[543px]" id="overlap-2">
      <div id="group-7" className="h-[81px] left-0 absolute top-0 w-[543px]">
      <label htmlFor="overlap-group" className="text-[#ffffff]">Occupation</label>
      <select className="appearance-none bg-[#fafbfc] text-[#4B5563] rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" id="overlap-group"  >
                <option value="+1"></option>
                <option value="+44"></option>
                <option value="+91"></option>
        
            </select>
      </div>
      <img
        className="h-[11px] left-[482px] absolute top-[52px] w-[21px]"
        id="vector"
        alt="Vector"
        src={vector}
      />
    </div>
    <div  id="input-fileds" className="h-[186px] left-[811px] absolute top-[497px] w-[543px]">
      <div className="h-[81px] left-0 absolute top-0 w-[543px]" id="group-7">
        <label htmlFor="overlap-group" className="text-[#ffffff]">Last Name</label>
        <input className="bg-[#fafbfc] text-[#4B5563] rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="text" placeholder="Please enter your last name" />
      </div>
      <div className="h-[81px] left-0 absolute top-[105px] w-[543px]" id="group-8">
      <label htmlFor="overlap-group" className="text-[#ffffff]">Phone number</label>
        <div className="bg-[#fafbfc] text-[#4B5563]  rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px]"  id="overlap-group-2">
            <select  className=" appearance-none p-3 flex-shrink-0 bg-gray-100 rounded-bl-[8px] rounded-tl-[8px] text-gray-600 cursor-pointer" id="dial-code">
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+91">+91</option>
                    <option value="+91">+212</option>
            </select>
            <input 
                type="tel" 
                className="flex-grow-1 p-2 px-3 text-[#4B5563] rounded-r-[8px] h-[95%] w-[84%]" 
                id="phone-number-input"
                placeholder="Please enter your phone number" 
            />
        </div>
        
      </div>
    </div>
    <p className="text-white text-xl font-medium left-0 absolute top-[-1px]" id="reset">
        <span className="text-wrapper-12">
            <input className="h-6 absolute w-13 left-[264px] top-[863px]" id="reset-wrapper" type="reset" value="Reset"></input>
        </span>
    </p>
    <button className="rounded-[8px] h-[49px] absolute w-[119px] left-[349px] top-[851px]" id="button">
      <div className="bg-[#2e8544] h-[49px] rounded-[8px]  w-[117px] relative " id="save-wrapper">
        <p className="text-[#ffffff] font-manrope text-[18px] font-[700] left-[37px] top-[11px] absolute" id="save">
          <span className="text-[#ffffff] font-manrope text-[18px] font-[700]" id="text-wrapper-11"><input type="submit" value="Save"></input></span>
        </p>
      </div>
    </button>
  </div>
</div>
);
}

export default Settings;
