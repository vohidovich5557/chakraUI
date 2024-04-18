import React from "react";
import { ProjectCreate } from "../../components/create-cards/project-create";
import { useNavigate, useParams } from "react-router-dom";
import { queryclient } from "../../config/queryclient";
import { usePostNewProject } from "./service/mutation/usePostNewProject";
import { useGetProject } from "./service/query/useGetProject";
import { toast } from "sonner";

export const ProjectEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutate, isPending } = usePostNewProject(id);
  const { data, isLoading } = useGetProject(id);
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("successfully edited");
        queryclient.invalidateQueries({ queryKey: ["get-project", id] });
        navigate("/app/tables");
      },
    });
  };
  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ProjectCreate submit={submit} initiaValue={data} />
  );
};
