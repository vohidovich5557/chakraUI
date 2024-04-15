import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useDeletBilling = () => {
  return useMutation({
    mutationFn: (id) => request.delete(`/billing/${id}`).then((res) => res.data),
  });
};
