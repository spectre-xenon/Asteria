import { useFetch } from "@/hooks";
import type { FC } from "react";

const Shop: FC = () => {
  const { data, isLoading, error } = useFetch(`/api/shop`);

  if (isLoading) return <h1>loading</h1>;
  if (error) return <h1>{`${error}`}</h1>;

  return <h1>{JSON.stringify(data)}</h1>;
};

export { Shop };
