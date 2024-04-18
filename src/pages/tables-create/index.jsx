import React from "react";
import { AuthorCard } from "../../components/create-cards/author-create";
import { useGetProjects } from "./service/query/useGetProjects";
import { usePostTables } from "./service/mutation/usePostTables";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const TablesCreate = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostTables();
  const { data, isLoading } = useGetProjects();
  const submit = (data) => {
    const categoryId = data.option.split(",")[0];
    const categoryName = data.option.split(",")[1];
    const { project, ...all } = data;
    mutate(
      { ...all, categoryId, categoryName },
      {
        onSuccess: () => {
          toast.success("successfully added");
          navigate("/app/tables", { replace: true });
        },
      }
    );
  };
  return <AuthorCard submit={submit} project={data} />;
};
