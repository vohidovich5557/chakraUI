import React from "react";
import { useDeletBilling } from "../../../pages/billing/service/mutation/useDeletBilling";
import { toast } from "react-toastify";
import { queryclient } from "../../../config/queryclient";

export const BillingCard = ({ companyname, name, vatnumber, email, id }) => {
  const { mutate, isPending } = useDeletBilling();
  const deletItem = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("successfully deleted");
        queryclient.invalidateQueries({ queryKey: ["get-billing"] });
      },
    });
  };
  return (
    <>
      <div className="w-[855px] h-[159px] bg-gray-200 rounded-[12px] pt-[20px] pl-[27px] pr-[26px] pb-[25.5px]">
        <div className="flex items-center mb-[12px] justify-between">
          <h2 className="text-sm font-bold text-gray-500">{name}</h2>
          <div className="flex items-center gap-[21px]">
            <div>
              <button
                onClick={deletItem}
                className="text-sm outline-none font-bold text-red-600"
              >
                DELETE
              </button>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-700">EDIT</p>
            </div>
          </div>
        </div>
        <div className="w-[194px] flex flex-col text-gray-600 h-[54px]">
          <div className="flex items-center gap-[10px]">
            <p className="text-sm font-normal text-gray-400">Company Name:</p>
            <h2 className="text-sm font-bold text-gray-700">{companyname}</h2>
          </div>
          <div className="flex items-center gap-[10px]">
            <p className="text-sm font-normal text-gray-400">Email:</p>
            <h2 className="text-sm font-bold text-gray-700">{email}</h2>
          </div>
          <div className="flex items-center gap-[10px]">
            <p className="text-sm font-normal text-gray-400">Number:</p>
            <h2 className="text-sm font-bold text-gray-700">{vatnumber}</h2>
          </div>
          
        </div>
      </div>
    </>
  );
};
