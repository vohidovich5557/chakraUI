import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const usePostTables = () => {
  return useMutation({
    mutationFn: (data) => request.post("/tables", data).then((res) => res.data),
  });
};
