import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";



export const useGetProjects = () => {
    return useQuery({
        queryKey: ["get-projects"],
        queryFn: () => request.get("/projects").then((res) => res.data),
    })
}