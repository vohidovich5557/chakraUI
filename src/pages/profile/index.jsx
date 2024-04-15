import React from "react";
import BgImg from "../../assets/profile-img/bg-img.svg";
import { Overview } from "../../assets/profile-img/overview";
import { Projects } from "../../assets/profile-img/projects";
import { useGetUsers } from "./service/query/useGetusers";
import { useDeletuser } from "./service/mutation/useDeletUser";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { toast } from "react-toastify";

export const Profile = () => {
  const navigate = useNavigate();
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const { data, isLoading } = useGetUsers();
  const { mutate, isPending } = useDeletuser();
  return (
    <>
      <div className="w-[1144px] flex flex-col h-auto">
        <div>
          <h2 className="text-4xl font-bold text-white absolute top-[100px] left-[750px]">PROFILE</h2>
          <img src={BgImg} alt="img" className="w-[1144px]" />
        </div>
        <div className="w-[1096px] px-[24px] mt-[-40px] rounded-[15px] mb-[24px] backdrop-blur-xl bg-white/30 flex items-center justify-between mx-[24px] h-[113px] pt-[16.5px] pb-[11.5px]">
          <div className="flex flex-col items-start">
            {data?.map((item) => (
              <>
                <h2 className="text-xl font-bold text-gray-700 mb-[5px]">
                  {item.name}
                </h2>
                <p className="text-sm font-normal text-gray-400">
                  {item.email}
                </p>
              </>
            ))}
          </div>
          <div className="flex items-center gap-[20px]">
            <div className="w-[134px] flex items-center px-[10px] gap-[10px] h-[35px] bg-white rounded-[12px]">
              <div>
                <Overview />
              </div>
              <p className="tex-md font-bold text-gray-700">OVERVIEW</p>
            </div>
            <Link to="/app/tables">
              <div className="w-[134px] flex items-center px-[10px] gap-[10px] h-[35px] bg-white rounded-[12px]">
                <div>
                  <Projects />
                </div>
                <p className="tex-md font-bold text-gray-700">Projects</p>
              </div>
            </Link>
            {data?.map((item) => (
              <div className="w-[134px] flex items-center justify-center px-[10px] gap-[10px] h-[35px] bg-white rounded-[12px]">
                <button
                  onClick={() =>
                    mutate(item.id, {
                      onSuccess: () => {
                        toast.success("user deleted");
                        navigate("/");
                      },
                    })
                  }
                  className="tex-md font-bold text-gray-700"
                >
                  Sign Out
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-[24px]">
          <div className="w-[517px] h-[377px] pt-[10px] pl-[21px] pb-[24px] bg-white rounded-[15px]">
            <h2 className="text-xl font-bold text-gray-700 mb-[17px]">
              Platform Settings
            </h2>
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold text-gray-500 mb-[20px]">
                ACCOUNT
              </h3>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  Email me when someone follows me
                </p>
              </div>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch defaultChecked onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  Email me when someone answers on my post
                </p>
              </div>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  Email me when someone mentions me
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold text-gray-500 mb-[20px]">
                APPLICATION
              </h3>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  New launches and projects
                </p>
              </div>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch defaultChecked onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  Monthly product updates
                </p>
              </div>
              <div className="flex items-center mb-[20px] gap-[10px]">
                <Switch onChange={onChange} />
                <p className="text-sm font-normal text-gray-400">
                  Subscribe to newsletter
                </p>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[377px] pt-[20px] pl-[21px] pb-[24px] bg-white rounded-[15px]">
            <h2 className="text-xl font-bold text-gray-700 mb-[16px]">
              Profile Information
            </h2>
            <div className="mb-[70px]">
              {data?.map((item) => (
                <p className="w-[460px] h-[52px] text-left mb-[20px] text-gray-400">
                  Hi, I’m <span>{item.name}</span>, Decisions: If you can’t
                  decide, the answer is no. If two equally difficult paths,
                  choose the one more painful in the short term (pain avoidance
                  is creating an illusion of equality).
                </p>
              ))}
            </div>
            <div className="w-[400px] h-[1px] mb-[30px] bg-gray-300 ml-auto mr-auto"></div>
            <div className="flex flex-col mb-[20px] items-start">
              <div className="flex items-center gap-[10px]">
                <h2 className="text-sm font-bold text-gray-500">Full Name:</h2>
                {data?.map((item) => (
                  <p className="text-sm font-normal text-gray-400">
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col mb-[20px] items-start">
              <div className="flex items-center gap-[10px]">
                <h2 className="text-sm font-bold text-gray-500">Mobile:</h2>
                <p className="text-sm font-normal text-gray-400">
                  +998933315557
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-[20px] items-start">
              <div className="flex items-center gap-[10px]">
                <h2 className="text-sm font-bold text-gray-500">Email:</h2>
                {data?.map((item) => (
                  <p className="text-sm font-normal text-gray-400">
                    {item.email}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col mb-[20px] items-start">
              <div className="flex items-center gap-[10px]">
                <h2 className="text-sm font-bold text-gray-500">Location:</h2>
                <p className="text-sm font-normal text-gray-400">Uzbekistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
