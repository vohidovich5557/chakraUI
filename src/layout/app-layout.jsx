import React from "react";
import logo from "../assets/logup-img/logo-black.svg";
import { Home } from "../assets/home-img/home";
import { Profile } from "../assets/home-img/profile";
import { Billing } from "../assets/home-img/billing";
import { Tables } from "../assets/home-img/tables";
import { SignUp } from "../assets/home-img/signup";
import { SignIn } from "../assets/home-img/singin";
import { Nullish } from "../assets/home-img/nullish";
import { useGetUsers } from "./service/query/useGetUsers";
import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  const { data, isLoading } = useGetUsers();
  return (
    <>
      <div className="container bg-primary flex  ">
        <div className="w-[246px] h-[1015px]  mt-[35px] ml-[15px]">
          <div className="w-[198px] ml-[24px] mr-[24px] mb-[27px] h-[23px]">
            <img src={logo} alt="img" />
          </div>
          <div className="w-[233px] h-[1px] bg-gray-300 ml-auto mr-auto mb-[22px]"></div>
          <Link to="/app">
            <div className="flex items-center mb-[24px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
              <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                <Home />
              </div>
              <h2 className="text-sm font-bold text-gray-400">Dashboard</h2>
            </div>
          </Link>
          <Link to="/app/tables">
            <div className="flex items-center mb-[24px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
              <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                <Tables />
              </div>
              <h2 className="text-sm font-bold text-gray-400">Tables</h2>
            </div>
          </Link>
          <Link to="/app/billing">
            <div className="flex items-center mb-[30px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
              <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                <Billing />
              </div>
              <h2 className="text-sm font-bold text-gray-400">Billing</h2>
            </div>
          </Link>
          <h2 className="text-sm font-bold text-gray-700 ml-[30px] mb-[30px]">
            ACCOUNT PAGES
          </h2>
          <Link to="/app/profile">
            {data?.length > 0 ? (
              <div className="flex items-center mb-[30px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
                <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                  <Profile />
                </div>
                <h2 className="text-sm font-bold text-gray-400">Profile</h2>
              </div>
            ) : (
              ""
            )}
          </Link>
          <Link to="/">
            <div className="flex items-center mb-[30px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
              <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                <SignIn />
              </div>
              <h2 className="text-sm font-bold text-gray-400">Sign In</h2>
            </div>
          </Link>
          <Link to="/logup">
            <div className="flex items-center mb-[69px] gap-[12px] ml-[29px] mr-[29px] hover:ml-auto hover:mr-auto hover:w-[219px] hover:h-[54px] hover:rounded-[15px] hover:shadow-lg hover:pl-[10px] hover:bg-white">
              <div className="w-[30px] h-[30px] rounded-[12px] bg-white shadow-lg shadow-gray-300 flex items-center justify-center">
                <SignUp />
              </div>
              <h2 className="text-sm font-bold text-gray-400">Sign Up</h2>
            </div>
          </Link>
          <div className="w-[218px] pt-[16px] ml-[17px] pl-[16px] pr-[16px] pb-[16px] bg-teal-300 rounded-[15px]">
            <div className="w-[35px] h-[35px] rounded-[16px] bg-white flex items-center justify-center mb-[21px]">
              <Nullish />
            </div>
            <h3 className="text-sm font-bold text-white">Need help?</h3>
            <p className="text-sm font-normal text-white mb-[8px]">
              Please check our docs
            </p>
            <button className="w-[186px] h-[35px] bg-white rounded-[12px] text-center text-gray-700 font-bold">
              DOCUMENTATION
            </button>
          </div>
        </div>
        <div className=" w-[1194px] pt-[31px] pl-[10px] bg-primary">
          <div></div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
