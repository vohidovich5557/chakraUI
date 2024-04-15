import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { usePostBilling } from "./service/mutation/usePostBilling";
import { Input } from "../../components/ui/input";
import { toast } from "react-toastify";

export const BillingCreate = () => {
  const { mutate, isPending } = usePostBilling();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("successfully added");
        navigate("/app/billing");
      },
    });
  };
  console.log(!"test");
  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-[1144px] h-[634px] pt-[40px] pl-[49px] pr-[49px] pb-[40px] rounded-[15px] bg-white">
          <div className="mb-[30px]">
            <Input
              variant="primary764"
              label="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex items-center mb-[30px] justify-start gap-[40px]">
            <div>
              <Input
                variant="primary362"
                label="Company Name"
                type="text"
                {...register("companyname", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start">
              <Input
                variant="primary362"
                label="Email Address"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center  gap-[90px]">
            <div>
              <Input
                variant="primary228"
                label="VAT Number"
                {...register("vatnumber", { required: true })}
              />
            </div>
            <div>
              <Input
                variant="primary228"
                label="Money Transaction"
                {...register("moneytransition", { required: true })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-[117px] h-[50px] text-center bg-teal-300 rounded-[15px] text-white text-sm font-bold mt-[40px]"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};
