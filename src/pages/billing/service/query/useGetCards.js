import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetCards = () => {
  return useQuery({
    queryKey: ["get-cards"],
    queryFn: () => request.get("/cards").then((res) => res.data),
  });
};
