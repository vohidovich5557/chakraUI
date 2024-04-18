import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";

export const AuthorCard = ({ submit, project, initialValue }) => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <>
      <form action="" onSubmit={handleSubmit(submit)}>
        <div className="w-[1144px] h-[634px] pt-[40px] pl-[49px] pr-[49px] pb-[40px] rounded-[15px] bg-white">
          <div className="mb-[30px]">
            <Input
              variant="primary764"
              label="Name"
              {...register("name", { required: true })}
              defaultValue={initialValue?.name}
            />
          </div>
          <div className="flex items-center mb-[30px] justify-start gap-[40px]">
            <div>
              <Input
                variant="primary362"
                label="Email"
                type="email"
                defaultValue={initialValue?.email}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <Input
                variant="primary362"
                label="Function"
                defaultValue={initialValue?.function}
                {...register("function", { required: true })}
              />
            </div>
          </div>
          <div className="flex items-center mb-[40px] justify-start gap-[40px]">
            <div>
              <Input
                variant="primary362"
                label="Position"
                type="text"
                defaultValue={initialValue?.position}
                {...register("position", { required: true })}
              />
            </div>
            <div>
              <p className="text-md font-bold text- mb-[12px]">Status</p>
              <div className="flex items-center gap-[30px]">
                <div className="flex flex-row-reverse items-center gap-[20px]">
                  <p>Offline</p>
                  <input
                    type="radio"
                    value="offline"
                    name="offline"
                    {...register("offline")}
                    defaultValue={initialValue?.offline}
                  />
                </div>
                <div className="flex flex-row-reverse items-center gap-[20px]">
                  <p>Online</p>
                  <input
                    type="radio"
                    value="online"
                    name="online"
                    defaultValue={initialValue?.online}
                    {...register("online")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  gap-[90px]">
            <div>
              <p className="text-md font-bold text-gray-900 mb-[12px]">
                Select Project
              </p>
              <select
                {...register("option", { required: true })}
                name="option"
                id=""
                defaultValue={initialValue?.option}
                className="w-[200px]  rounded-[20px]  h-[40px] bg-grayer outline-none"
              >
                {project?.map((item) => (
                  <option value={`${item.id},${item.companies}`}>
                    {item.companies}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Input
                variant="primary362"
                label="Employed"
                defaultValue={initialValue?.employed}
                {...register("employed", { required: true })}
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
