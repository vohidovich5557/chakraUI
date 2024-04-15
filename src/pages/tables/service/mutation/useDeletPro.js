import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeletPro = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/projects/${id}`).then((res) => res.data),
  });
};
