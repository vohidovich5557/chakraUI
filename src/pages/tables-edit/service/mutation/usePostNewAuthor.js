import { request } from "../../../../config/request";
import { useMutation } from "@tanstack/react-query";




export const usePostNewAuthor = (id) => {
    return useMutation({
        mutationFn: (data) => request.put(`/tables/${id}`, data).then((res) => res.data),
    })
}