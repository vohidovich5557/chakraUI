import React from "react";
import logo from "../../assets/logup-img/logo-black.svg";
import { HomeBlack } from "../../assets/logup-img/home-black";
import { ProfileBlack } from "../../assets/logup-img/profile-black";
import { SignIn } from "../../assets/logup-img/signin-black";
import bgImg from "../../assets/logup-img/bg-img.svg";
import { useForm } from "react-hook-form";
import { SignUp } from "../../assets/logup-img/singup-black";
import { Input } from "../../pages/login/components/ui/input";
import { Link } from "react-router-dom";
import { useGetUsers } from "../profile/service/query/useGetusers";

export const LogUp = () => {
  const { data, isLoading } = useGetUsers();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="container relative">
        <div className="w-[990px] px-[24px] py-[17px] mt-[24px] gap-[113px] flex items-center rounded-[15px] shadow-gray-300 shadow-lg bg-white  ml-auto mr-auto">
          <div>
            <img src={logo} alt="img" className="w-[198px] h-[23px]" />
          </div>
          <div className="flex items-center gap-[30px]">
            <Link to="/app">
              <div className="flex items-center gap-[4px]">
                <HomeBlack />
                <p className="font-bold text-gray-700">DASHBOARD</p>
              </div>
            </Link>
            {data?.length > 0 ? (
              <Link to="/app/profile">
                <div className="flex items-center gap-[4px]">
                  <ProfileBlack />
                  <p className="font-bold text-gray-700">PROFILE</p>
                </div>
              </Link>
            ) : (
              <p></p>
            )}
            <Link to="/">
              <div className="flex items-center gap-[4px]">
                <SignUp />
                <p className="font-bold text-gray-700  whitespace-nowrap">
                  SIGN UP
                </p>
              </div>
            </Link>
            <Link to="/logup">
              <div className="flex items-center gap-[4px]">
                <SignIn />
                <p className="font-bold text-gray-700 whitespace-nowrap">
                  SIGN IN
                </p>
              </div>
            </Link>
          </div>
          <div className="w-[190px] h-[35px] rounded-[34px] bg-blue-950 flex items-center justify-center">
            <button className="text-white font-bold">Free Download</button>
          </div>
        </div>
        <img
          src={bgImg}
          alt="img"
          className=" absolute -z-10 top-0 right-0 mt-[-24px]"
        />
        <div className="w-[353px] h-[445px]  ml-[200px] mt-[180px]">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col items-start"
          >
            <h2 className="text-teal-300 font-bold text-4xl mb-[8px]">
              Welcome Back
            </h2>
            <p className="text-gray-400 font-bold text-sm mb-[36px]">
              Enter your email and password to sign in
            </p>
            <div className="w-[350px] h-[75px] mb-[30px]">
              <Input
                variant="primary"
                label="Email"
                type="email"
                placeholder="Your email address"
                {...register("email", { required: true })}
              />
            </div>
            <div className="w-[350px] h-[75px] mb-[26px]">
              <Input
                variant="primary"
                label="Password"
                type="password"
                placeholder="Your password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="flex items-center gap-[10px] mb-[36px]">
              <input type="checkbox" className="w-[20px] h-[20px]" />
              <p className="text-gray-700 font-normal">Remember me </p>
            </div>
            <button className="w-[350px] h-[45px] bg-teal-300 rounded-[12px] text-center text-white font-bold ml-auto mr-auto">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
