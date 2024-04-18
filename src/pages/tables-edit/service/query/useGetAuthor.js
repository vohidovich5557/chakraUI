import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetAuthor = (id) => {
  return useQuery({
    queryKey: ["get-edit", id],
    queryFn: () => request.get(`/tables/${id}`).then((res) => res.data),
  });
};
