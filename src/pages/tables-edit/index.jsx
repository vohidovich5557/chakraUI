import React from "react";
import { useGetAuthor } from "./service/query/useGetAuthor";
import { AuthorCard } from "../../components/create-cards/author-create";
import { useGetProjects } from "../tables-create/service/query/useGetProjects";
import { useNavigate, useParams } from "react-router-dom";
import {queryclient } from "../../config/queryclient";
import { usePostNewAuthor } from "./service/mutation/usePostNewAuthor";
import { toast } from "sonner";

export const TablesEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate, isPending } = usePostNewAuthor(id);
  const { data, isLoading: isLoading2 } = useGetProjects();
  const { data: data2, isLoading } = useGetAuthor(id);
  console.log(data2);

  const submit = (data) => {
    const categoryId = data.option.split(",")[0];
    const categoryName = data.option.split(",")[1];
    const { project, ...all } = data;
    mutate(
      { ...all, categoryId, categoryName },
      {
        onSuccess: () => {
          toast.success("successfully edited");
          queryclient.invalidateQueries({ queryKey: ["get-edit", id] });
          navigate("/app/tables", { replace: true });
        },
      }
    );
  };

  return isLoading ? (
    <h2>Loading....</h2>
  ) : (
    <AuthorCard initialValue={data2} project={data} submit={submit} />
  );
};
