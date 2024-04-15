import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetTables = () => {
  return useQuery({
    queryKey: ["get-tables"],
    queryFn: () => request.get("/tables").then((res) => res.data),
  });
};
