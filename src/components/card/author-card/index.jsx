import React from "react";
import { useDeletTables } from "../../../pages/tables/service/mutation/useDeletTables";
import { toast } from "react-toastify";
import { queryclient } from "../../../config/queryclient";

export const AuthorCard = ({
  name,
  email,
  functions,
  position,
  online,
  offline,
  employed,
  id,
}) => {
  const { mutate, isPending } = useDeletTables();
  const deletItem = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("successfully deleted");
        queryclient.invalidateQueries({ queryKey: ["get-tables"] });
      },
    });
  };
  return (
    <>
      <div className="w-[1102px] h-auto">
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex items-center ml-[5px] mb-[10px] mt-[11px]">
          <div className="w-[45px] mr-[40px] h-[40px]  rounded-[10px]">
          </div>
          <div className="flex  w-[170px] mr-[116px] flex-col items-start">
            <h2 className="text-sm font-bold text-gray-700 mb-[4px]">{name}</h2>
            <p className="text-sm font-normal text-gray-500">{email}</p>
          </div>
          <div className="flex  w-[83px] mr-[180px] flex-col items-start">
            <h2 className="text-sm font-bold text-gray-700 mb-[4px]">
              {functions}
            </h2>
            <p className="text-sm font-normal text-gray-500">{position}</p>
          </div>
          <div className="flex  items-start w-[100px] mr-[162px] flex-col">
            <div
              className={`w-[65px]  h-[25px] rounded-[8px] ${
                online == "online" ? " bg-green-500" : "bg-gray-400"
              } text-center text-white font-bold`}
            >
              <p>{online ? online : offline}</p>
            </div>
          </div>
          <div className="flex  items-start mr-[20px]">
            <p className="text-sm font-bold text-gray-700">{employed}</p>
          </div>
          <div className="flex items-center gap-[20px]">
            <button className="text-sm font-bold text-gray-400">Edit</button>
            <button
              className="text-sm font-bold text-red-400"
              onClick={deletItem}
            >
              Delet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
