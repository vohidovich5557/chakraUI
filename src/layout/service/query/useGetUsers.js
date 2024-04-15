import { request } from "../../../config/request";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["get-users"],
    queryFn: () => request.get("/users").then((res) => res.data),
  });
};
