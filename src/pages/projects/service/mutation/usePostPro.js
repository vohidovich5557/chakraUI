import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostPro = () => {
  return useMutation({
    mutationFn: (data) => request.post("/projects", data).then((res) => res.data),
  });
};
