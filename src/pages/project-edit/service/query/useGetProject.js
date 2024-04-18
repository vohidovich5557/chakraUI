import { request } from "../../../../config/request";
import { useQuery } from "@tanstack/react-query";




export const useGetProject = (id) => {
    return useQuery({
        queryKey: ["get-project", id],
        queryFn: () => request.get(`/projects/${id}`).then((res) => res.data),
    })
}