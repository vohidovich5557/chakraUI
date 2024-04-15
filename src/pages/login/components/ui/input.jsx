import clsx from "clsx";
import React from "react";

export const Input = React.forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      id,
      type,
      label,
      error,
      helperText,
      variant,
      clasname,
      defaultValue,
      ...resTprop
    },
    ref
  ) => {
    return (
      <div className="flex flex-col mb-[24px] items-start">
        {<label className="text-md font-normal ">{label}</label>}
        <input
          {...resTprop}
          className={clsx(
            "outline-none",
            {
              "w-[350px] h-[50px] bg-white border border-gray-300 rounded-[15px] px-[20px]":
                variant == "primary",
            },
            clasname
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
          defaultValue={defaultValue}
        />
        {helperText && (
          <p className=" text-red-600 mt-[20px] text-xs text-left">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);
