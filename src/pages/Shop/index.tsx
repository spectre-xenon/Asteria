import { useFetch } from "@/hooks";
import { item } from "@/types";
import { useState, type FC, ChangeEvent, useContext } from "react";
import { Card } from "@/components";
import { cartContext } from "@/Root";

const Shop: FC = () => {
  const { cartDispatch } = useContext(cartContext);
  const { data, isLoading, error } = useFetch<item[]>(`/api/shop`);
  const [currCategory, setCurrCategory] = useState("none");

  if (isLoading) return <h1>Loadin...</h1>;
  if (error) return <h1>{`${error}`}</h1>;

  const categories = [
    ...new Set(data?.map((item) => item.category.toString())),
  ];

  const handleSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrCategory(e.target.value);
  };

  return (
    <div className="w-[99.35vw]">
      <div className="flex w-full flex-col items-center gap-4 p-4 md:flex-row md:items-stretch md:justify-between md:gap-0 md:px-10 md:py-8">
        <h1 className="text-2xl font-semibold tracking-widest md:text-4xl">
          Black-hole Forgery
        </h1>
        <select
          onChange={handleSelection}
          className="rounded-full border-b-2 bg-black px-4 py-2 tracking-[0.2rem] outline-none "
        >
          {currCategory === "none" ? (
            <option selected value="none">
              None
            </option>
          ) : (
            <option value="none">None</option>
          )}
          {categories?.map((category) =>
            currCategory === category ? (
              <option selected value={category}>
                {category}
              </option>
            ) : (
              <option value={category}>{category}</option>
            ),
          )}
        </select>
      </div>
      <main className=" auto-grid-min grid w-full auto-rows-auto gap-y-20 p-10 md:grid-cols-auto-fit-100 md:gap-x-36">
        {data?.map((item) => {
          const shouldShow = item.category.some(
            (category) => category === currCategory,
          );
          if (!shouldShow && currCategory !== "none") return;
          return (
            <Card
              id={item.id}
              name={item.name}
              price={item.price}
              categorys={item.category}
              imageSrc={item.full}
              handleClick={() => {
                cartDispatch({ type: "incrementAndUpdate", id: item.id });
              }}
            />
          );
        })}
      </main>
    </div>
  );
};

export { Shop };
