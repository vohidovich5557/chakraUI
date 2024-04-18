import React from "react";
import { AuthorCard } from "../../components/card/author-card";

export const GroupCard = ({ author }) => {
  return (
    <div className="w-[1144px] h-[530px] flex flex-col items-center pt-[20px] bg-white">
      {author?.length == 0 ? (
        <>
       <div>
         <h2 className="text-xl font-bold text-gray-700">There is no any authors relate to this projects</h2>
       </div>
        </>
      )
    :
   (
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
              {author?.map((item) => (
                <AuthorCard key={item.id} {...item} />
              ))}
            </div>
          </div>
   )
    }
    </div>
  );
};
