import { Navigate, useParams } from "react-router-dom";
import { useFetch } from "@/hooks";
import type { FC } from "react";

const Item: FC = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useFetch(`/api/shop/${id}`);

  if (isLoading) return <h1>loading</h1>;
  if (error) return <Navigate to="/error" />;

  return <h1>{JSON.stringify(data)}</h1>;
};

export { Item };
