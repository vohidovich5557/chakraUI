import React from "react";
import { useForm } from "react-hook-form";
import { usePostTables } from "./service/mutation/usePostTables";
import { Input } from "../../components/ui/input";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, Form } from "antd";

export const TablesCreate = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostTables();
  const { register, handleSubmit, reset } = useForm();
  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("succesfully added");
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
              label="Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex items-center mb-[30px] justify-start gap-[40px]">
            <div>
              <Input
                variant="primary362"
                label="Email"
                type="email"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <Input
                variant="primary362"
                label="Function"
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
                  />
                </div>
                <div className="flex flex-row-reverse items-center gap-[20px]">
                  <p>Online</p>
                  <input
                    type="radio"
                    value="online"
                    name="online"
                    {...register("online")}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start  gap-[90px]">
            <Form.Item
              label="Image"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload action="/upload.do" listType="picture-card">
                <button
                  style={{
                    border: 0,
                    background: "none",
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
                </button>
              </Upload>
            </Form.Item>
            <div>
              <Input
                variant="primary362"
                label="Employed"
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
