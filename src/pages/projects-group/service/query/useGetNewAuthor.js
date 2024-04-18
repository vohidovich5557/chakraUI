import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetNewAuthor = (params) => {
  return useQuery({
    queryKey: ["get-tables", params],
    queryFn: () =>
      request
        .get("/tables", {
          params: {
            categoryId_like: params.id,
          },
        })
        .then((res) => res.data),
  });
};
