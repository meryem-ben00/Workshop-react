import React from 'react';
import { NavLink } from "react-router-dom";
import line_11_2_green from "../images/settingsImages/line-11-2@2x.png";
import line_10 from "../images/settingsImages/line-10-1@2x.png";

const ActiveNavLink = NavLink;

function Settings_email() {
  return (
    <div className="index">
  <div className="div">

  <p id="settings" className="text-white font-800 text-[30px] h-9 absolute top-[112px] left-[51px] whitespace-nowrap">
    Settings
    </p>
    <img
        className="h-[1px] absolute top-[227px] left-[266px] w-[776px]"
        id="line"
        alt="Line"
        src={line_10}
      />
    
    <div id="titles" className="absolute top-[191px] left-[266px] h-[36px] w-[400px]">
      <div id="title" className="absolute top-0 left-0 h-[36px] w-[186px]">
        <div id="frame-2" className="relative h-[36px]">
            <div id="account-setting-wrapper" className="absolute top-0 left-0 h-[27px] w-[186px]">
                <p id="account-setting" className="font-[700] text-[20px] absolute top-[-1px] left-[12px]">
                    <span id="text-wrapper-5" className="text-[#ffffff] font-manrope text-[700]  leading-normal">
                    <ActiveNavLink to="/settings">Account&nbsp;&nbsp;Setting</ActiveNavLink></span>
                </p>
            </div>
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
            <p id="span-wrapper" className="text-[#2e8544] font-manrope text-[20px] font-[500] h-normal top-[-1px] left-[12px] absolute">
              <span id="text-wrapper-6" className="text-[#2e8544] font-manrope text-[20px] font-[500] h-normal">
                Email
              </span>
            </p><img 
                className="absolute top-[36px] left-0 h-[1px] w-[115px]" 
                id="line-3"
                alt="Line" 
                src={line_11_2_green} 
            />
          </div>
        </div>
        
      </div>
    </div>
    <div id="group-5" className="h-[81px] left-[267px] text-[#4B5563] absolute top-[297px] w-[543px]">
      <label htmlFor="overlap-group" className="text-[#ffffff]">Recent Email</label>
      <input id="overlap-group" className="bg-#fafbfc text-#4B5563 rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="password" placeholder="Please enter the Recent Email" />
    </div>
    <div id="group-5" className="h-[81px] left-[267px] text-[#4B5563] absolute top-[417px] w-[543px]">
      <label htmlFor="overlap-group" className="text-[#ffffff]">New Email</label>
      <input id="overlap-group" className="bg-#fafbfc text-#4B5563 rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="password" placeholder="Please enter the New Email" />
    </div>
    <div id="group-5" className="h-[81px] left-[267px] text-[#4B5563] absolute top-[537px] w-[543px]">
      <label htmlFor="overlap-group" className="text-[#ffffff]">Confirm Email</label>
      <input id="overlap-group" className="bg-#fafbfc text-#4B5563 rounded-[8px] h-[52px] left-0 absolute top-[29px] w-[519px] p-2 px-3" type="password" placeholder="Please Confirm the Email" />
    </div>
    <p className="text-white text-xl font-medium left-0 absolute top-[-1px]" id="reset">
        <span className="text-wrapper-12">
            <input className="h-6 absolute w-13 left-[264px] top-[697px]" id="reset-wrapper" type="reset" value="Reset"></input>
        </span>
    </p>
    <button className="rounded-[8px] h-[49px] absolute w-[119px] left-[349px] top-[681px]" id="button">
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

export default Settings_email;