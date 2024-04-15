import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeletTables = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/tables/${id}`).then((res) => res.data),
  });
};
