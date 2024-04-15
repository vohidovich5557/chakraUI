import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostCard = () => {
  return useMutation({
    mutationFn: (data) => request.post("/cards", data).then((res) => res.data),
  });
};
