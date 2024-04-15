import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostBilling = () => {
  return useMutation({
    mutationFn: (data) => request.post("/billing", data).then((res) => res.data),
  });
};
