import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logoImages/Group5.svg";
import logo2 from "../images/logoImages/Background.png";
import chat from "../images/logoImages/Group-chat.svg";
import logout from "../images/logoImages/bx_log-out.svg";
import styled, { css } from "styled-components";
const ActiveNavLink = styled(NavLink)`
  position: relative;

  ${(props) =>
    props.isActive &&
    css`
      &::before,
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 20px;
        background: transparent;
      }

      &::before {
        left: -20px;
        border-bottom-right-radius: 20px;
        box-shadow: 5px 5px 0 5px #1e2e5c;
      }

      &::after {
        right: -20px;
        border-bottom-left-radius: 20px;
        box-shadow: -5px 5px 0 5px #1e2e5c;
      }
    `}
`;
function Navbare() {
  const [activeTab, setActiveTab] = useState("doctor");
  const location = useLocation();
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="flex justify-between bg-greenNav text-white items-center ">
      <div className="flex items-center gap-5">
        <div className="p-5">
          <img className="cursor-pointer" src={logo} alt="" />
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <ActiveNavLink
                to="/"
                isActive={isActive("/")}
                className={`link ${
                  isActive("/")
                    ? "bg-background pt-2 pb-6 px-5 rounded-t-lg active"
                    : ""
                }`}
                onClick={hideDropdown}
              >
                Dashboard
              </ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink
                to="/users/"
                isActive={isActive("/users/")}
                className={`link ${
                  isActive("/users/")
                    ? "bg-background pt-2 pb-6 px-5 rounded-t-lg active"
                    : ""
                }`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Users
              </ActiveNavLink>
              {showDropdown && (
                <ul className="flex absolute bg-colorWhite gap-2 p-4 mt-5 rounded shadow ">
                  <li className=" rounded  bg-opacity-25">
                    <ActiveNavLink
                      to="/users/doctor"
                      className={`block px-4 py-2 text-black hover:bg-green-700 rounded hover:bg-opacity-25 ${
                        activeTab === "doctor"
                          ? "bg-green-700 rounded bg-opacity-25"
                          : ""
                      }`}
                      onClick={() => {
                        hideDropdown();
                        setActiveTab("doctor");
                      }}
                    >
                      Doctor
                    </ActiveNavLink>
                  </li>
                  <li>
                    {" "}
                    <ActiveNavLink
                      to="/users/administration"
                      className={`block px-4 py-2 text-black hover:bg-green-700 rounded hover:bg-opacity-25 ${
                        activeTab === "administration"
                          ? "bg-green-700 rounded bg-opacity-25"
                          : ""
                      }`}
                      onClick={() => {
                        hideDropdown();
                        setActiveTab("administration");
                      }}
                    >
                      Administration
                    </ActiveNavLink>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <ActiveNavLink
                to="/patients"
                isActive={isActive("/patients")}
                className={`link ${
                  isActive("/patients")
                    ? "bg-background pt-2 pb-6 px-5 rounded-t-lg active"
                    : ""
                }`}
                onClick={hideDropdown}
              >
                Patients
              </ActiveNavLink>
            </li>
            <li>
              <ActiveNavLink
                to="/test"
                isActive={isActive("/test")}
                className={`link ${
                  isActive("/test")
                    ? "bg-background pt-2 pb-6 px-5 rounded-t-lg active"
                    : ""
                }`}
                onClick={hideDropdown}
              >
                Test
              </ActiveNavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-5">
        <img className="cursor-pointer" src={chat} alt="" />
        <div className="flex gap-2">
          <div className="flex flex-col text-xs">
            <strong className="">Marvin Mckinney</strong>
            <span className="self-end">Admin</span>
          </div>
          <ActiveNavLink
                to="/settings"
                className={`settings ${
                  isActive("/settings")
                    ? ""
                    : ""
                }`}
                onClick={hideDropdown}
              >
              <img className="cursor-pointer" src={logo2} alt="" />
              </ActiveNavLink>
          
        </div>
        <img className="pr-5 cursor-pointer" src={logout} alt="" />
      </div>
    </div>
  );
}

export default Navbare;
