import React from "react";
import { useGetTables } from "./service/query/useGetTables";
import { useGetProjects } from "./service/query/useGetProjects";
import { AuthorCard } from "../../components/card/author-card";
import { ProjectCard } from "../../components/card/projects-card";
import { Link } from "react-router-dom";
import bgImg from "../../assets/tables-img/bg-img.svg";

export const Tables = () => {
  const { data, isLoading } = useGetTables();
  const { data: data2, isLoading: isLoading2 } = useGetProjects();
  console.log(data);
  console.log(data2);
  return (
    <>
      {data?.length > 0 ? (
        <div className="w-[1144px] mb-[24px] h-[530px] pt-[28px] pl-[18px] pb-[23px] pr-[22px] rounded-[15px] bg-white ">
          <h2 className="text-xl font-bold text-gray-700 mb-[23px]">
            Authors Table
          </h2>
          <div className="w-[1115px] pt-[18px] pb-[23px] pr-[22px] h-[388px] overflow-scroll">
            <div className="flex items-center justify-around mb-[12px]">
              <div className="w-[43px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">AUTHOR</h2>
              </div>
              <div className="w-[52px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">FUNCTION</h2>
              </div>
              <div className="w-[39px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">STATUS</h2>
              </div>
              <div className="w-[56px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">EMPLOYED</h2>
              </div>
            </div>
            <div className="flex flex-col">
              {data?.map((item) => (
                <AuthorCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <Link to="/app/tables/create">
            <button className="w-[120px] mt-[6px] h-[43px] bg-teal-400 text-center rounded-[6px] text-sm font-bold text-white">
              Create author
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-[1144px] mb-[24px] h-[488px] flex flex-col items-center  pt-[28px] pl-[18px] pb-[23px] pr-[22px] rounded-[15px] bg-white">
          <h2 className="text-xl font-bold text-gray-700 text-center mb-[64px]">
            You don`t have any tables
          </h2>
          <div className="w-[313px] h-[235px] mb-[66px]">
            <img
              src={bgImg}
              alt="img"
              className=" w-full h-auto object-cover"
            />
          </div>
          <Link to="/app/tables/create">
            <button className="w-[223px] h-[43px] bg-teal-400 text-center rounded-[6px] text-sm font-bold text-white">
              Create first Tables
            </button>
          </Link>
        </div>
      )}
      {data2?.length > 0 ? (
        <div className="w-[1144px] mb-[24px] h-[550px] pt-[28px] pl-[18px] pb-[23px] pr-[22px] rounded-[15px] bg-white ">
          <h2 className="text-xl font-bold text-gray-700 mb-[23px]">
            Projects
          </h2>
          <p className="text-md font-bold text-gray-500">
            {data2?.length} done{" "}
            <span className="text-sm font-normal text-gray-400">
              {" "}
              this month
            </span>
          </p>
          <div className="w-[1115px] pt-[18px] pb-[23px]  h-[388px] overflow-scroll">
            <div className="flex items-center justify-between pl-[22px] pr-[22px] w-[1000px] mb-[12px]">
              <div className="w-[43px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">COMPANIES</h2>
              </div>
              <div className="w-[52px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">BUDGET</h2>
              </div>
              <div className="w-[39px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">STATUS</h2>
              </div>
              <div className="w-[56px] h-[15px] flex items-center justify-center">
                <h2 className="text-sm font-bold text-gray-400">COMPLETION</h2>
              </div>
            </div>
            <div className=" flex flex-col">
              {data2?.map((item) => (
                <ProjectCard key={item.id} {...item} />
              ))}
            </div>
          </div>
          <Link to="/app/tables/projects">
            <button className="w-[120px] mt-[10px] h-[43px] bg-teal-400 text-center rounded-[6px] text-sm font-bold text-white">
              add projects
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-[1144px] mb-[24px] h-[488px] flex flex-col items-center  pt-[28px] pl-[18px] pb-[23px] pr-[22px] rounded-[15px] bg-white">
          <h2 className="text-xl font-bold text-gray-700 text-center mb-[64px]">
            You don`t have any Projects
          </h2>
          <div className="w-[313px] h-[235px] mb-[66px]">
            <img
              src={bgImg}
              alt="img"
              className=" w-full h-auto object-cover"
            />
          </div>
          <Link to="/app/tables/projects">
            <button className="w-[223px] h-[43px] bg-teal-400 text-center rounded-[6px] text-sm font-bold text-white">
              Create first Projects
            </button>
          </Link>
        </div>
      )}
    </>
  );
};
