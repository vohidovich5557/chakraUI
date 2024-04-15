import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const usezGetBilling = () => {
  return useQuery({
    queryKey: ["get-billing"],
    queryFn: () => request.get("/billing").then((res) => res.data),
  });
};
