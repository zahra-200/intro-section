import React, { useContext } from "react";
import Todo from "./../../images/icon-todo.svg";
import Calendar from "./../../images/icon-calendar.svg";
import Reminder from "./../../images/icon-reminders.svg";
import Planning from "./../../images/icon-planning.svg";
import iconUp from "./../../images/icon-arrow-up.svg";
import iconDown from "./../../images/icon-arrow-down.svg";
import { AppContext } from "../../App";

function NavLinks() {
  const {
    setDropDownFeature,
    dropDownFeature,
    dropDownCompony,
    setDropDownCompony,
  } = useContext(AppContext);
  const handleFeatureClick = () => {
    setDropDownFeature(!dropDownFeature);
  };
  const handleComponyClick = () => {
    setDropDownCompony(!dropDownCompony);
  };
  return (
    <nav className=" pr-5 flex flex-col h-screen absolute bg-[var(--Almost-White)]  -right-8 -top-8  sm:-top-16 w-[80%] sm:w-1/2 lg:w-full lg:static lg:justify-between  lg:flex-row   lg:h-auto ">
      <div className="w-full flex items-center mb-5 mt-20 md:mt-24 lg:my-0 lg:w-[80%] ">
        <ul className="flex flex-col  px-5 lg:px-0 lg:flex-row gap-4 lg:gap-8 text-[var(--Medium-Gray)] font-medium">
          <li className="w-full text-left lg:w-40 lg:relative">
            <div
              className=" cursor-pointer hover:text-[var(--Almost-Black)] lg:text-right"
              onClick={handleFeatureClick}
            >
              Features
              <img
                src={dropDownFeature ? iconUp : iconDown}
                alt=""
                className="inline-block ml-2"
              />
            </div>
            {dropDownFeature ? (
              <ul className="font-normal lg:top-8 lg:right-0 lg:absolute lg:bg-white lg:shadow-2xl  px-6 py-3 lg:rounded-lg flex flex-col gap-2 ">
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  <img src={Todo} alt="" className="inline-block mr-2" /> Todo
                  List
                </li>
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  <img src={Calendar} alt="" className="inline-block mr-2" />
                  Calendar
                </li>
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  <img src={Reminder} alt="" className="inline-block mr-2" />
                  Reminders
                </li>
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  <img src={Planning} alt="" className="inline-block mr-2" />
                  Planning
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
          <li className="w-full text-left lg:w-32 lg:relative">
            <div
              className="cursor-pointer hover:text-[var(--Almost-Black)] lg:text-center"
              onClick={handleComponyClick}
            >
              Compony
              <img
                src={dropDownCompony ? iconUp : iconDown}
                alt=""
                className="inline-block ml-2"
              />
            </div>
            {dropDownCompony ? (
              <ul className="font-normal lg:absolute lg:top-8 lg:right-0 lg:bg-white lg:shadow-2xl px-6 py-3 lg:rounded-lg  flex flex-col gap-2">
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  History
                </li>
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  Our Team
                </li>
                <li className="cursor-pointer hover:text-[var(--Almost-Black)]">
                  Blog
                </li>
              </ul>
            ) : (
              ""
            )}
          </li>
          <li className="w-full text-left lg:w-14 lg:mr-3 cursor-pointer hover:text-[var(--Almost-Black)]">
            Careers
          </li>
          <li className="w-full text-left lg:w-12 cursor-pointer hover:text-[var(--Almost-Black)]">
            About
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-[20%] ">
        <ul className=" flex gap-3 items-center flex-col lg:flex-row lg:justify-end text-[var(--Medium-Gray)]">
          <li className="text-center w-1/2 sm:w-full md:w-1/2 lg:w-1/2  xl:w-1/3 2xl:w-1/4 cursor-pointer hover:text-[var(--Almost-Black)] px-2 py-1 text-sm font-medium">
            Login
          </li>
          <li className="text-center w-1/2 sm:w-full md:w-1/2 lg:w-1/2  xl:w-1/3 2xl:w-1/4 cursor-pointer hover:text-[var(--Almost-Black)] border border-[var(--Medium-Gray)] hover:border-[var(--Almost-Black)] rounded-xl text-sm font-medium px-2 py-2">
            Register
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavLinks;
