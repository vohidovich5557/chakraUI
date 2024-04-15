import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostData = () => {
  return useMutation({
    mutationFn: (data) => request.post("/users", data).then((res) => res.data),
  });
};
