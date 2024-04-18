import React from "react";
import { usePostPro } from "./service/mutation/usePostPro";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { ProjectCreate } from "../../components/create-cards/project-create";

export const Projects = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = usePostPro();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        toast.success("successfully added");
        navigate("/app/tables");
      },
    });
  };
  return <ProjectCreate submit={submit} />;
};
