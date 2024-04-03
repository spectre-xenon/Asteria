import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "@/hooks";
import type { FC } from "react";
import { item } from "@/types";

const Item: FC = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch<item>(`/api/shop/${id}`);

  if (error) return <Navigate to="/error" />;

  return isLoading && <img src={data?.full} alt={data?.name} />;
};

export { Item };
