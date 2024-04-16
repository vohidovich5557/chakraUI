import React from "react";
import { Wallet } from "../../assets/home-img/wallet";
import { Users } from "../../assets/home-img/users";
import { Document } from "../../assets/home-img/document";
import { Internet } from "../../assets/home-img/internet";
import { Cart } from "../../assets/home-img/cart";
import BannerImg from "../../assets/home-img/banner.svg";
import { HomeProject } from "../../components/card/homeProject-card";
import { Click } from "../../assets/home-img/click";
import { Sales } from "../../assets/home-img/sales";
import { Graph } from "../../assets/home-img/graph";
import { Items } from "../../assets/home-img/items";
import { ChakraImg } from "../../assets/home-img/chakra-img";
import { CheckedIcon } from "../../assets/home-img/checked-icon";
import { HomeGroup } from "../../assets/home-img/home-group";
import { useGetProjects } from "../tables/service/query/useGetProjects";

export const Home = () => {
  const { data, isLoading } = useGetProjects();
  return (
    <>
      <div className="w-[1144px] h-auto pl-[31px] pr-[31px]">
        <div className="flex items-center mb-[23px] gap-[24px]">
          <div className="w-[300px] flex items-center justify-between pr-[21px] pt-[5px] pl-[21px] h-[80px] bg-white rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold text-gray-400 mb-[1px]">
                Today’s Money
              </p>
              <div className="flex items-center gap-[5px]">
                <p className="text-xl font-bold text-gray-700">$53,000</p>
                <p className="text-green-400 font-bold text-xl">+55%</p>
              </div>
            </div>
            <div className="w-[45px] h-[45px]">
              <Wallet />
            </div>
          </div>
          <div className="w-[300px] flex items-center justify-between pr-[21px] pt-[5px] pl-[21px] h-[80px] bg-white rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold text-gray-400 mb-[1px]">
                Today’s Users
              </p>
              <div className="flex items-center gap-[5px]">
                <p className="text-xl font-bold text-gray-700">2,300</p>
                <p className="text-green-400 font-bold text-xl">+5%</p>
              </div>
            </div>
            <div className="w-[45px] h-[45px]">
              <Internet />
            </div>
          </div>
          <div className="w-[300px] flex items-center justify-between pr-[21px] pt-[5px] pl-[21px] h-[80px] bg-white rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold text-gray-400 mb-[1px]">
                New Clients
              </p>
              <div className="flex items-center gap-[5px]">
                <p className="text-xl font-bold text-gray-700">+3,052</p>
                <p className="text-green-400 font-bold text-xl">-14%</p>
              </div>
            </div>
            <div className="w-[45px] h-[45px]">
              <Document />
            </div>
          </div>
          <div className="w-[300px] flex items-center justify-between pr-[21px] pt-[5px] pl-[21px] h-[80px] bg-white rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-sm font-bold text-gray-400 mb-[1px]">
                Total Sales
              </p>
              <div className="flex items-center gap-[5px]">
                <p className="text-xl font-bold text-gray-700">$173,000</p>
                <p className="text-green-400 font-bold text-xl">+8%</p>
              </div>
            </div>
            <div className="w-[45px] h-[45px]">
              <Cart />
            </div>
          </div>
        </div>
        <div className="flex items-center mb-[23px] gap-[24px]">
          <div className="w-[529px] h-[290px] flex  pt-[17px] pr-[21px] pl-[21px] gap-[40px] bg-white rounded-[15px]">
            <div className="flex flex-col items-start">
              <p className="text-sm mb-[3px] font-bold text-gray-400">
                Built by developers
              </p>
              <h2 className="text-xl mb-[6px] font-bold text-gray-700">
                Purity UI Dashboard
              </h2>
              <p className="text-sm font-normal w-[250px] text-start text-gray-300">
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </p>
            </div>
            <div className=" rounded-[30px]">
              <ChakraImg className="rounded-[20px]" />
            </div>
          </div>
          <div className="w-[529px] pl-[10px]  pb-[17.5px] pt-[15px] pr-[10px] h-[290px] bg-white rounded-[15px]">
            <div className=" rounded-[20px] overflow-hidden">
              <HomeGroup />
            </div>
          </div>
        </div>
        <div className="flex items-center mb-[24px] gap-[24px]">
          <div className="w-[652px] flex flex-col pt-[16px] px-[16px] h-[445px] bg-white rounded-[15px]">
            <div className="w-[620px] mb-[24px] h-[222px]">
              <Graph />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-gray-700 mb-[6px]">
                Active Users
              </h2>
              <p className="text-sm font-bold mb-[36px] text-green-400">
                (+23){" "}
                <span className="text-sm font-bold text-gray-400">
                  than last week
                </span>
              </p>
              <div className="flex items-center gap-[55px]">
                <div className="w-[101px] h-[65px] flex flex-col items-center">
                  <div className="flex mb-[9px] items-center gap-[10px]">
                    <div className="w-[25px] h-[25px]">
                      <Users />
                    </div>
                    <p className="text-sm font-bold text-gray-400 ">Users</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-700 mb-[8px]">
                    32,984
                  </h2>
                  <div className="w-full h-[4px] bg-gray-500">
                    <div></div>
                  </div>
                </div>
                <div className="w-[101px] h-[65px] flex flex-col items-center">
                  <div className="flex mb-[9px] items-center gap-[10px]">
                    <div className="w-[25px] h-[25px]">
                      <Users />
                    </div>
                    <p className="text-sm font-bold text-gray-400 ">Clicks</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-700 mb-[8px]">
                    2,42m
                  </h2>
                  <div className="w-full h-[4px] bg-gray-500">
                    <div></div>
                  </div>
                </div>
                <div className="w-[101px] h-[65px] flex flex-col items-center">
                  <div className="flex mb-[9px] items-center gap-[10px]">
                    <div className="w-[25px] h-[25px]">
                      <Sales />
                    </div>
                    <p className="text-sm font-bold text-gray-400 ">Sales</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-700 mb-[8px]">
                    2,400$
                  </h2>
                  <div className="w-full h-[4px] bg-gray-500">
                    <div></div>
                  </div>
                </div>
                <div className="w-[101px] h-[65px] flex flex-col items-center">
                  <div className="flex mb-[9px] items-center gap-[10px]">
                    <div className="w-[25px] h-[25px]">
                      <Items />
                    </div>
                    <p className="text-sm font-bold text-gray-400 ">Items</p>
                  </div>
                  <h2 className="text-xl font-bold text-gray-700 mb-[8px]">
                    320
                  </h2>
                  <div className="w-full h-[4px] bg-gray-500">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1057px] h-[519px] pr-[22px] pt-[28px] pl-[21px] bg-white rounded-[15px]">
          <h2 className="text-xl font-bold mb-[6px] text-gray-700">Projects</h2>
          <div className="flex mb-[28px] items-center gap-[5px]">
            <div className="w-[15px] h-[15px]">
              <CheckedIcon />
            </div>
            <p className="text-sm font-normal text-gray-400">
              <span className="text-sm font-bold text-gray-500">
                {data?.length}
              </span>{" "}
              done this month
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className=" flex items-center mb-[10px] justify-between">
              <div className="w-[338px] h-[16px]">
                <h2 className="text-sm font-normal text-gray-400">COMPANIES</h2>
              </div>
              <div className="w-[338px] h-[15px]">
                <h2 className="text-sm font-normal text-gray-400">BUDGET</h2>
              </div>
              <div className="w-[338px] h-[15px] ">
                <h2 className="text-sm font-normal text-gray-400">
                  COMPLETION
                </h2>
              </div>
            </div>
            <div className="w-[100%] h-[3px] mb-[20px] bg-gray-300"></div>
            <div className="flex flex-col gap-[30px] items-center">
              {data?.map((item) => (
                <HomeProject key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
