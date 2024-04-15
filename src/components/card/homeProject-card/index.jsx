import React from "react";


export const HomeProject = ({completion, budget, id, companies}) => {
  return <>
    <div className="w-[1014px] flex border-b-2 mb-[20px]  h-[43px] items-center justify-between">
      <div className="flex mb-[10px] items-center justify-between">
      <div className="w-[338px] pt-[10px] h-[43px]">
        <div className="flex items-center gap-[10px]">
          <h2 className="text-sm font-bold text-blue-700">{companies}</h2>
        </div>
      </div>
      <div className="w-[338px] pt-[10px] h-[43px] ">
        <h2 className="text-md font-bold text-gray-70">{budget}</h2>
      </div>
      <div className="w-[338px] pt-[10px] h-[43px]">
        <h2 className="text-md font-bold text-teal-400">{completion}</h2>
      </div>
      </div>
    </div>
  </>;
};
