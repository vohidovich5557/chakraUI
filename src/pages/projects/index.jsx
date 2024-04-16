import React from "react";
import { Input } from "../../components/ui/input";
import { usePostPro } from "./service/mutation/usePostPro";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const Projects = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostPro();
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("successfully added");
        reset();
        navigate("/app/tables");
      },
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-[1144px] h-[634px] pt-[40px] pl-[49px] pr-[49px] pb-[40px] rounded-[15px] bg-white">
          <div className="mb-[30px]">
            <Input
              variant="primary764"
              label="COMPANIES"
              {...register("companies", { required: true })}
            />
          </div>
          <div className="flex items-center mb-[30px] justify-start gap-[40px]">
            <div>
              <Input
                variant="primary362"
                label="BUDGET"
                type="text"
                {...register("budget", { required: true })}
              />
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-md font-bold text-gray-700 mb-[12px]">
                Status
              </h2>
              <select
                name="status"
                className="w-[200px] h-[40px] outline-none bg-gray-200 py-[10px] px-[20px] rounded-[10px]"
                {...register("status", { required: true })}
              >
                <option value="working">Working</option>
                <option value="canceled">Canceled</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>
          <div className="flex items-center  gap-[90px]">
            <div className="flex flex-col items-start">
              <h2 className="text-md font-bold text-gray-700 mb-[12px]">
                Image
              </h2>
              <div className="w-[80px] flex items-center justify-center h-[80px] border-2 rounded-[10px]">
                <p className="text-xl font-bold text-gray-300 text-center">+</p>
              </div>
            </div>
            <div>
              <Input
                variant="primary228"
                label="COMPLETION"
                placeholder="enter percentage"
                {...register("completion", { required: true })}
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
