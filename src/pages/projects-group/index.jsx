import React from "react";
import { useParams } from "react-router-dom";
import { GroupCard } from "../../components/create-cards/ group-card";
import { useGetNewAuthor } from "./service/query/useGetNewAuthor";

export const ProjectsGroup = () => {
  const params = useParams();
  const { data, isLoading } = useGetNewAuthor(params);
  return <GroupCard author={data} />;
};
