import React from "react";
import { Down } from "../../../assets/billing-img/down";
import { Up } from "../../../assets/billing-img/up";

export const TransitionCard = ({ companyname, moneytransition }) => {
  return (
    <>
      <div className="flex mt-[10px] mb-[20px] gap-[40px] items-center">
        <div className="flex items-center gap-[5px]">
          {moneytransition > 0 ? <Up /> : <Down />}
          <h3 className="text-sm font-bold text-gray-700">{companyname}</h3>
        </div>
        <div>
          <p className={`text-sm font-bold ${moneytransition > 0 ? "text-green-600" : "text-red-600" }`}>{moneytransition}$</p>
        </div>
      </div>
    </>
  );
};
