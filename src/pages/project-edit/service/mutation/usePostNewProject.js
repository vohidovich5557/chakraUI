import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostNewProject = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.put(`/projects/${id}`, data).then((res) => res.data),
  });
};
