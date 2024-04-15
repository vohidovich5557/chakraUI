import React from "react";
import bgImg from "../../assets/login-img/bg-img.svg";
import { Input } from "./components/ui/input";
import { DashboardIcon } from "../../assets/login-img/dashboard-icon";
import { Profile } from "../../assets/login-img/profile";
import { Apple } from "../../assets/login-img/apple";
import { Facebbok } from "../../assets/login-img/facebook";
import { Google } from "../../assets/login-img/google";
import { SignUp } from "../../assets/login-img/sign-up";
import { useForm } from "react-hook-form";
import { SingIn } from "../../assets/login-img/sing-in";
import logo from "../../assets/login-img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { usePostData } from "./service/mutation/usePostData";
import { useGetData } from "./service/query/useGetData";
import { toast } from "react-toastify";
import { useGetUsers } from "../profile/service/query/useGetusers";

export const Login = () => {
  const navigate = useNavigate();
  const { data, isLoading: isLoading2 } = useGetUsers();
  const { mutate, isPending } = usePostData();
  const { data: userData, isLoading } = useGetData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const submit = (data) => {
    if (userData !== data) {
      mutate(data, {
        onSuccess: () => {
          toast.success("successfully created");
          navigate("/app");
        },
      });
    }
    if (userData == data) {
      toast.error("this user already existed");
    }
  };
  return (
    <>
      <div className="container px-[24px] pt-[24px]">
        <div className="w-[1392px] relative h-[520px]">
          <img
            src={bgImg}
            alt="img"
            className="w-[1392px] rounded-[20px] h-[520px] object-cover absolute -z-10"
          />
          <div className="flex items-center pt-[44px] mb-[61px] gap-[120px] pl-[100px] pr-[100px]">
            <div className="w-[198px] h-[23px]">
              <img
                src={logo}
                alt="img"
                className="w-[198px] h-[23px] object-cover"
              />
            </div>
            <div className="flex items-center gap-[32px]">
              <Link to="/app">
                <div className="flex items-center gap-[30px]">
                  <div className="w-[11px] h-[11px]">
                    <DashboardIcon />
                  </div>
                  <p className="text-sm font-bold text-white">DASHBOARD</p>
                </div>
              </Link>
              {data?.length > 0 ? (
                <Link to="/app/profile">
                  <div className="flex items-center gap-[30px]">
                    <Profile />
                    <p className="text-sm font-bold text-white">PROFILE</p>
                  </div>
                </Link>
              ) : (
                <p></p>
              )}
              <Link to="/">
                <div className="flex items-center gap-[30px]">
                  <SignUp />
                  <p className="text-white text-sm font-bold">SIGN UP</p>
                </div>
              </Link>
              <Link to="/logup">
                <div className="flex items-center gap-[30px]">
                  <SingIn />
                  <p className="text-white text-sm font-bold">SIGN IN</p>
                </div>
              </Link>
            </div>
            <div className="w-[150px] h-[35px] bg-white rounded-[34px] flex items-center justify-center">
              <button className="text-black-600 text-sm font-bold">
                Free Download
              </button>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-white text-center mb-[9px]">
            Welcome!
          </h2>
          <p className="w-[333px] h-[37px] text-center text-white ml-auto mr-auto mb-[66px]">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
          <div className="w-[452px] pt-[45px] pb-[45px] pl-[51px] pr-[51px] bg-white rounded-[15px] shadow-lg shadow-gray-400 ml-auto mr-auto">
            <h3 className="text-xl font-bold text-black-600 text-center mb-[22px]">
              Register with
            </h3>
            <div className="flex items-center justify-center mb-[20px] gap-[20px]">
              <div className="w-[75px] h-[75px] rounded-[15px] border flex items-center justify-center border-gray-200">
                <Facebbok />
              </div>
              <div className="w-[75px] h-[75px] rounded-[15px] border flex items-center justify-center border-gray-200">
                <Apple />
              </div>
              <div className="w-[75px] h-[75px] rounded-[15px] border flex items-center justify-center border-gray-200">
                <Google />
              </div>
            </div>
            <p className="text-sm font-bold text-gray-300 text-center">or</p>
            <form onSubmit={handleSubmit(submit)}>
              <div className="w-[350px] mb-[30px] h-[50px]">
                <Input
                  variant="primary"
                  type="text"
                  label="Name"
                  placeholder="Your full name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="w-[350px] mb-[30px] h-[50px]">
                <Input
                  variant="primary"
                  type="email"
                  label="Email"
                  placeholder="Your email address"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="w-[350px] mb-[30px] h-[50px]">
                <Input
                  variant="primary"
                  label="Password"
                  type="password"
                  placeholder="Your password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex items-center gap-[10px] mt-[34px] mb-[36px]">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] bg-white text-teal-300"
                />
                <p className="text-sm font-normal">Remember me </p>
              </div>
              <button className="w-[350px] h-[45px] text-center bg-teal-300 rounded-[12px] text-white font-bold mb-[22px]">
                SIGN UP
              </button>
              <div className="flex items-center justify-center gap-[4px]">
                <p className="font-normal text-sm text-gray-300">
                  Already have an account?
                </p>
                <Link to="/signin" className="text-teal-300 font-bold text-sm">
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
