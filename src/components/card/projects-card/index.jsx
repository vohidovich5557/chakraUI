import React from "react";
import { useDeletPro } from "../../../pages/tables/service/mutation/useDeletPro";
import { queryclient } from "../../../config/queryclient";
import { toast } from "react-toastify";

export const ProjectCard = ({ companies, budget, status, completion, id }) => {
  const { mutate, isPending } = useDeletPro();
  const deletItem = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("successfully deleted");
        queryclient.invalidateQueries({ queryKey: ["get-projects"] });
      },
    });
  };
  return (
    <>
      <div className="w-[1000px] h-auto">
        <div className="w-[1110px] h-[1px] bg-gray-400"></div>
        <div className="w-[1110px]  flex items-center ml-[5px] mb-[5px]  py-[20px]">
          <div className="flex  items-center mr-[70px] gap-[17px]">
            <h2 className="text-sm font-bold text-blue-700 w-[151px]">
              {companies}
            </h2>
          </div>
          <div className="mr-[180px]  w-[150px] text-center ">
            <p className="font-bold text-sm text-gray-700">{budget}</p>
          </div>
          <div className="mr-[202px]  w-[100px]  text-center">
            <p className="text-sm font-bold text-gray-700">{status}</p>
          </div>
          <div className="flex mr-[20px]  flex-col items-start">
            <p className="text-sm font-bold mb-[7px] text-teal-300">
              {completion}
            </p>
            <div className="w-[100px] h-[2px] bg-gray-300 flex flex-col items-start rounded-[4px]">
              <div className={`w-[${completion}] bg-teal-300 h-[5px]`}></div>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <button className="text-md font-bold text-gray-400">Edit</button>
            <button
              className="text-md font-bold text-red-400"
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