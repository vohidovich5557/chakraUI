import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeletuser = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/users/${id}`).then((res) => res.data),
  });
};
