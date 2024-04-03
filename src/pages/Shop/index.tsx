import { NavBar } from "@/components";
import { useFetch } from "@/hooks";
import { item } from "@/types";
import type { FC } from "react";

const Shop: FC = () => {
  const { data, isLoading, error } = useFetch<item[]>(`/api/shop`);

  if (error) return <h1>{`${error}`}</h1>;

  return (
    <>
      <NavBar />
      {!isLoading && <h1>{JSON.stringify(data)}</h1>}
    </>
  );
};

export { Shop };
